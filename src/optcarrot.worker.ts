import * as Comlink from "comlink";
import { WASI } from "@wasmer/wasi";
import { WasmFs } from "@wasmer/wasmfs";
import { RubyVM } from "ruby-wasm-wasi";
import * as path from "path-browserify";

export type OptcarrotWorkerPort = {
  init(render: (image: Uint8Array) => void): void;
};

class App {
  wasmFs: WasmFs;
  wasi: WASI;
  remoteRender: (image: Uint8Array) => void;

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

  async init(render: (image: Uint8Array) => void) {
    this.remoteRender = render;

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

    vm.eval(`
      require_relative "/optcarrot/lib/optcarrot.rb"
      args = [
          "--video=canvas",
          "--audio=none",
          "--input=none",
          "/optcarrot/examples/Lan_Master.nes",
      ]
      Optcarrot::NES.new(args).run
    `);

    console.log("end of optcarrot");
  }

  tick() {
    console.log("tick");
    this.remoteRender(this.videoImageBytes());
  }

  videoImageBytes(): Uint8Array {
    return this.wasmFs.fs.readFileSync(
      "/OPTCARROT_TMP/video.data"
    ) as Uint8Array;
  }
}
const app = new App();
// @ts-ignore
globalThis.Optcarrot = app;

Comlink.expose({
  init(render: (image: Uint8Array) => void): void {
      app.init(render);
  },
});
