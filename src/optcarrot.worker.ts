import * as Comlink from "comlink";
import { WASI } from "@wasmer/wasi";
import { WasmFs } from "@wasmer/wasmfs";
import { RubyVM } from "ruby-wasm-wasi";
import * as path from "path-browserify";
import { KeyEventConsumer } from "./key-event-bus";
import { RingBuffer } from "ringbuf.js";

export interface OptcarrotWorkerPort {
  init(
    options: string[],
    render: (image: Uint8Array) => void,
    playAudio: (audio: Int16Array) => void,
    keyEventBuffer: SharedArrayBuffer
  ): void;
}

class App implements OptcarrotWorkerPort {
  wasmFs: WasmFs;
  wasi: WASI;
  keyEventConsumer: KeyEventConsumer;

  remoteRender: (image: Uint8Array) => void;
  remotePlayAudio: (audio: Int16Array) => void;

  constructor() {
    this.wasmFs = new WasmFs();
    this.wasmFs.fs.mkdirSync("/OPTCARROT_TMP", 0o777);
    const args = ["ruby.wasm", "-e_=0"];
    this.wasi = new WASI({
      bindings: {
        ...WASI.defaultBindings,
        fs: this.wasmFs.fs,
        path,
      },
      args,
      preopenDirectories: {
        "/OPTCARROT_TMP": "/OPTCARROT_TMP",
      },
    });
    const originalWriteSync = this.wasmFs.fs.writeSync.bind(this.wasmFs.fs);
    // @ts-ignore
    this.wasmFs.fs.writeSync = (fd, buffer, offset, length, position) => {
      const text = new TextDecoder("utf-8").decode(buffer);
      const handlers = {
        1: (line) => console.log(line),
        2: (line) => console.warn(line),
      };
      if (handlers[fd]) handlers[fd](text);
      return originalWriteSync(fd, buffer, offset, length, position);
    };
  }

  async init(
    options: string[],
    render: (image: Uint8Array) => void,
    playAudio: (audio: Int16Array) => void,
    keyEventBuffer: SharedArrayBuffer
  ) {
    this.remoteRender = render;
    this.remotePlayAudio = playAudio;
    this.keyEventConsumer = new KeyEventConsumer(
      new RingBuffer(keyEventBuffer, Uint8Array)
    );

    // Fetch and instantiate WebAssembly binary
    const response = await fetch("./optcarrot.wasm");
    const buffer = await response.arrayBuffer();

    const imports = {
      wasi_snapshot_preview1: this.wasi.wasiImport,
    };
    const vm = new RubyVM();
    vm.addToImports(imports);

    // Instantiate the WebAssembly module
    const { instance } = await WebAssembly.instantiate(buffer, imports);
    await vm.setInstance(instance);

    // Initialize WASI application
    this.wasi.setMemory(instance.exports.memory as WebAssembly.Memory);
    (instance.exports._initialize as any)();

    // Initialize Ruby VM
    vm.initialize();

    console.time("init-optcarrot");
    console.log("Options:", options);
    vm.eval(`
      require "js"
      JS::eval("console.time('require-optcarrot')")
      require_relative "/optcarrot/lib/optcarrot.rb"
      JS::eval("console.timeEnd('require-optcarrot')")
      args = [
          ${options.map((option) => `"${option}"`).join(", ")},
          "--video=canvas",
          "--audio=webaudio",
          "--input=browser",
          "--audio-sample-rate=11050",
      ]
      JS::eval("console.time('Optcarrot::NES.new')")
      nes = Optcarrot::NES.new(args)
      JS::eval("console.timeEnd('Optcarrot::NES.new')")
      nes.run
    `);
  }

  tickVideo() {
    const bytes = this.videoBytes();
    this.remoteRender(Comlink.transfer(bytes, [bytes.buffer]));
  }

  tickAudio() {
    const bytes = this.audioBytes();
    this.remotePlayAudio(Comlink.transfer(bytes, [bytes.buffer]));
  }

  videoBytes(): Uint8Array {
    return this.wasmFs.fs.readFileSync(
      "/OPTCARROT_TMP/video.data"
    ) as Uint8Array;
  }

  audioBytes(): Int16Array {
    const bytes = this.wasmFs.fs.readFileSync(
      "/OPTCARROT_TMP/audio.data"
    ) as Uint8Array;
    return new Int16Array(bytes.buffer);
  }

  fetchKeyEvent(): string {
    const event = this.keyEventConsumer.consume();
    if (!event) return "";
    return event.join(",");
  }
}
const app = new App();
// @ts-ignore
globalThis.Optcarrot = app;

Comlink.expose({
  init(
    options: string[],
    render: (image: Uint8Array) => void,
    playAudio: (audio: Int16Array) => void,
    keyEventBuffer: SharedArrayBuffer
  ): void {
    app.init(options, render, playAudio, keyEventBuffer);
  },
});
