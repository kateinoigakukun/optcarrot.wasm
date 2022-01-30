import * as Comlink from "comlink";
import { WASI } from "@wasmer/wasi";
import { WasmFs } from "@wasmer/wasmfs";
import { RubyVM } from "ruby-wasm-wasi";
import * as path from "path-browserify";
import { KeyEventBuffer } from "./key-event-bus";

export type ProgressInput =
  | {
      kind: "progress";
      value: number;
    }
  | {
      kind: "message";
      value: string;
    }
  | {
      kind: "error";
      message: string;
    }
  | {
      kind: "done";
    };

export type Options = {
  opt: boolean;
  headless: boolean;
  rom: string;
};

export interface OptcarrotWorkerPort {
  init(
    options: Options,
    render: (image: Uint8Array) => void,
    playAudio: (audio: Int16Array) => void,
    progress: (input: ProgressInput) => void,
  ): void;
  pushKeyEvent(code: number, pressed: boolean): void;
}

const OPTCARROT_HEADLESS_DRIVER = `
module Optcarrot
  # Audio output driver for Web Audio API
  class WebAudioAudio < Audio
    def tick(output)
      JS::eval("globalThis.Optcarrot.tickAudio()")
    end
  end
  # Video output driver for Web Canvas
  class CanvasVideo < Video
    def tick(screen)
      JS::eval("globalThis.Optcarrot.tickVideo()")
    end
  end
  BrowserInput = Input
end
`;

const OPTCARROT_WEB_DRIVER = `
module Optcarrot
  # Audio output driver for Web Audio API
  class WebAudioAudio < Audio
    def tick(output)
      bin = output.pack(@pack_format)
      File.binwrite(File.join("/OPTCARROT_TMP/audio.data"), bin)
      JS::eval("globalThis.Optcarrot.tickAudio()")
    rescue => e
      JS::eval("console.warn('#{ e.inspect }')")
    end
  end
  # Video output driver for Web Canvas
  class CanvasVideo < Video
    def init
      super
      @palette = @palette_rgb.map do |r, g, b|
        0xff000000 | (b << 16) | (g << 8) | r
      end
    end

    def dispose
    end

    def tick(screen)
      bin = screen.pack("L*")
      File.binwrite(File.join("/OPTCARROT_TMP", File.basename(@conf.video_output, ".EXT") + ".data"), bin)
      JS::eval("globalThis.Optcarrot.tickVideo()")
      super
    rescue => e
      JS::eval("console.warn('#{ e.inspect }')")
    end
  end
  # Input driver for browser input
  class BrowserInput < Input
    def init
    end

    def dispose
    end

    def tick(frame, pads)
      event = JS::eval("return globalThis.Optcarrot.fetchKeyEvent()").inspect
      return if event == ""
      code, pressed = event.split(",")
      code = code.to_i
      if pressed == "true"
        pads.keydown(0, code)
      else
        pads.keyup(0, code)
      end
    end
  end
end
`;

export class Optcarrot implements OptcarrotWorkerPort {
  wasmFs: WasmFs;
  wasi: WASI;
  vm: RubyVM;
  keyEventConsumer: KeyEventBuffer;

  tickVideo: () => void;
  tickAudio: () => void;
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
    this.keyEventConsumer = new KeyEventBuffer([]);
  }

  computeOptions(options: Options): string[] {
    const optionsArray = [];
    const ROMS = {
      "Lan_Master.nes": "/optcarrot/examples/Lan_Master.nes",
    };
    if (options.opt) {
      optionsArray.push("--opt");
    }
    if (ROMS[options.rom]) {
      optionsArray.push(ROMS[options.rom]);
    } else {
      throw new Error(`Unknown ROM: ${options.rom}`);
    }
    return optionsArray;
  }

  async init(
    options: Options,
    render: (image: Uint8Array) => void,
    playAudio: (audio: Int16Array) => void,
    progress: (input: ProgressInput) => void,
  ) {
    this.remoteRender = render;
    this.remotePlayAudio = playAudio;

    // Fetch and instantiate WebAssembly binary
    progress({ kind: "message", value: "Downloading..." });
    progress({ kind: "progress", value: 0 });
    const response = await fetch("./optcarrot.wasm");
    const buffer = await response.arrayBuffer();
    progress({ kind: "progress", value: 0.2 });
    progress({ kind: "message", value: "Instantiating Optcarrot..." });

    const imports = {
      wasi_snapshot_preview1: this.wasi.wasiImport,
    };
    const vm = new RubyVM();
    vm.addToImports(imports);

    // Instantiate the WebAssembly module
    const { instance } = await WebAssembly.instantiate(buffer, imports);
    await vm.setInstance(instance);
    progress({ kind: "progress", value: 0.3 });

    // Initialize WASI application
    this.wasi.setMemory(instance.exports.memory as WebAssembly.Memory);
    (instance.exports._initialize as any)();

    // Initialize Ruby VM
    vm.initialize();
    progress({ kind: "progress", value: 0.6 });

    console.time("init-optcarrot");
    console.log("Options:", options);
    vm.eval(`
      require "js"
      JS::eval("console.time('require-optcarrot')")
      require_relative "/optcarrot/lib/optcarrot.rb"
      JS::eval("console.timeEnd('require-optcarrot')")
    `);
    progress({ kind: "progress", value: 0.8 });

    this.tickVideo = options.headless
      ? () => {
          this.remoteRender(new Uint8Array());
        }
      : () => {
          const bytes = this.videoBytes();
          this.remoteRender(Comlink.transfer(bytes, [bytes.buffer]));
        };

    this.tickAudio = options.headless
      ? () => {
          this.remotePlayAudio(new Int16Array());
        }
      : () => {
          const bytes = this.audioBytes();
          this.remotePlayAudio(Comlink.transfer(bytes, [bytes.buffer]));
        };

    vm.eval(`
      ${options.headless ? OPTCARROT_HEADLESS_DRIVER : OPTCARROT_WEB_DRIVER}

      # Monkey patch the Optcarrot to use web drivers
      Optcarrot::Driver.define_singleton_method(:load) do |conf|
        video = Optcarrot::CanvasVideo.new(conf)
        audio = Optcarrot::WebAudioAudio.new(conf)
        input = Optcarrot::BrowserInput.new(conf, video)
        [video, audio, input]
      end

      args = [
          ${this.computeOptions(options)
            .map((option) => `"${option}"`)
            .join(", ")},
          "--audio-sample-rate=11050",
      ]
      JS::eval("console.time('Optcarrot::NES.new')")
      $nes = Optcarrot::NES.new(args)
      JS::eval("console.timeEnd('Optcarrot::NES.new')")
    `);
    progress({ kind: "progress", value: 1 });
    progress({ kind: "done" });
    vm.eval(`$nes.reset`);
    this.vm = vm;
    this.run();
  }

  run() {
    setTimeout(this.run.bind(this), 0);
    this.vm.eval(`$nes.step`);
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

  pushKeyEvent(code: number, pressed: boolean): void {
    this.keyEventConsumer.push(code, pressed);
  }

  fetchKeyEvent(): string {
    const event = this.keyEventConsumer.consume();
    if (!event) return "";
    return event.join(",");
  }
}

const optcarrot = new Optcarrot();
// @ts-ignore
globalThis.Optcarrot = optcarrot;

Comlink.expose({
  init(
    options: Options,
    render: (image: Uint8Array) => void,
    playAudio: (audio: Int16Array) => void,
    progress: (input: ProgressInput) => void,
  ): void {
    try {
      optcarrot
        .init(options, render, playAudio, progress)
        .catch((e) => {
          progress({
            kind: "error",
            message: "Failed to initialize Optcarrot: " + e.message,
          });
        });
    } catch (e) {
      progress({
        kind: "error",
        message: "Failed to initialize Optcarrot: " + e.message,
      });
    }
  },
  pushKeyEvent(code: number, pressed: boolean): void {
    optcarrot.pushKeyEvent(code, pressed);
  }
});
