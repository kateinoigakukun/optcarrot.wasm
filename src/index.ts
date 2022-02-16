import * as Comlink from "comlink";
import { Optcarrot, OptcarrotWorkerPort, Options } from "./optcarrot.worker";
import { UAParser } from "ua-parser-js"

class NESView {
  canvasContext: CanvasRenderingContext2D;
  scalingCanvas: HTMLCanvasElement;
  scalingContext: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    this.canvasContext = canvas.getContext("2d");
    this.scalingCanvas = document.createElement("canvas") as HTMLCanvasElement;
    this.scalingCanvas.width = canvas.width;
    this.scalingCanvas.height = canvas.height;
    this.scalingContext = this.scalingCanvas.getContext("2d");
    this.canvasContext.scale(2, 2);
  }

  draw(bytes: Uint8Array) {
    const rgba = new Uint8ClampedArray(bytes.buffer);
    const image = new ImageData(rgba, 256, 240);
    this.scalingContext.putImageData(image, 0, 0);
    this.canvasContext.drawImage(this.scalingCanvas, 0, 0);
  }
}

class NESAudio {
  context: AudioContext;
  scheduledTime: number;

  constructor() {
    this.context = new AudioContext({ sampleRate: 11050 });
    this.scheduledTime = 0;
  }

  push(input: Int16Array) {
    const buffer = this.context.createBuffer(
      1,
      input.length,
      this.context.sampleRate
    );
    const bufferSrc = this.context.createBufferSource();
    const bufferData = buffer.getChannelData(0);
    const currentTime = this.context.currentTime;
    for (let i = 0; i < input.length; i++) {
      bufferData[i] = input[i] / (2 << 15);
    }
    bufferSrc.buffer = buffer;
    bufferSrc.connect(this.context.destination);
    if (currentTime < this.scheduledTime) {
      bufferSrc.start(this.scheduledTime);
      this.scheduledTime += buffer.duration;
    } else {
      console.warn(
        "Audio buffer underrun :(",
        this.scheduledTime - currentTime
      );
      bufferSrc.start(currentTime);
      this.scheduledTime = currentTime + buffer.duration;
    }
  }
}

class FpsCounter {
  times: number[];
  constructor() {
    this.times = [];
  }
  tick(): number {
    const now = performance.now();
    while (this.times.length > 0 && this.times[0] <= now - 1000) {
      this.times.shift();
    }
    this.times.push(now);
    return this.times.length;
  }
}

class LoadProgress {
  progress: HTMLProgressElement;
  message: HTMLElement;
  constructor(progress: HTMLProgressElement, message: HTMLElement) {
    this.progress = progress;
    this.progress.max = 1;
    this.message = message;
  }

  log(message: string) {
    this.message.innerText = message;
  }

  error(message: string) {
    this.message.innerText = message;
    this.progress.hidden = true;
  }

  setProgress(value: number) {
    this.progress.value = value;
  }

  hide() {
    this.progress.hidden = true;
    this.message.hidden = true;
  }
}

const padCodeFromCode = (code: string) => {
  switch (code) {
    case "KeyZ":
      return 0x0; // A
    case "KeyX":
      return 0x1; // B
    case "Enter":
      return 0x2; // select
    case "Space":
      return 0x3; // start
    case "ArrowUp":
      return 0x04;
    case "ArrowDown":
      return 0x05;
    case "ArrowLeft":
      return 0x06;
    case "ArrowRight":
      return 0x07;
    default:
      return null;
  }
};

const deriveOptions: (url: URL) => Options = (url) => {
  const enableOptRaw = url.searchParams.get("opt");
  const headlessRaw = url.searchParams.get("headless");
  const romRaw = url.searchParams.get("rom");
  return {
    opt: enableOptRaw === null ? true : enableOptRaw === "true",
    headless: headlessRaw === null ? false : headlessRaw === "true",
    rom: romRaw === null ? "Lan_Master.nes" : romRaw,
  };
};

const play = async (
  optcarrot: OptcarrotWorkerPort,
  url: URL,
  progress: LoadProgress
) => {
  const nesView = new NESView(
    document.getElementById("nes-video") as HTMLCanvasElement
  );
  let nesAudio = null;

  progress.log("Initializing Optcarrot...");

  const fps = new FpsCounter();
  const fpsIndicator = document.getElementById("fps-indicator");
  const isAudioEnabledCheckbox = document.getElementById(
    "audio-enabled"
  ) as HTMLInputElement;
  let audioEnabled = isAudioEnabledCheckbox.checked;

  isAudioEnabledCheckbox.onclick = () => {
    audioEnabled = isAudioEnabledCheckbox.checked;
  };
  document.addEventListener("keydown", (event) => {
    const code = padCodeFromCode(event.code);
    if (code !== null) {
      event.preventDefault();
      optcarrot.pushKeyEvent(code, true);
    }
  });

  document.addEventListener("keyup", (event) => {
    const code = padCodeFromCode(event.code);
    if (code !== null) {
      optcarrot.pushKeyEvent(code, false);
    }
  });

  const options = deriveOptions(url);
  const render: (bytes: Uint8Array) => void = options.headless
    ? (_) => {
        fpsIndicator.innerText = fps.tick().toString();
      }
    : (bytes) => {
        nesView.draw(bytes);
        fpsIndicator.innerText = fps.tick().toString();
      };

  optcarrot.init(
    options,
    // render
    Comlink.proxy(render),
    // playAudio
    Comlink.proxy((bytes) => {
      if (!audioEnabled) return;
      if (nesAudio === null) {
        nesAudio = new NESAudio();
      }
      nesAudio.push(bytes);
    }),
    Comlink.proxy((input) => {
      switch (input.kind) {
        case "error": {
          progress.error(input.message);
          break;
        }
        case "message": {
          progress.log(input.value);
          break;
        }
        case "done": {
          progress.hide();
          break;
        }
        case "progress": {
          progress.setProgress(input.value);
          break;
        }
      }
    })
  );
};

const progress = new LoadProgress(
  document.getElementById("loading-progress") as HTMLProgressElement,
  document.getElementById("loading-message")
);

const optcarrot = (() => {
  const ua = UAParser(navigator.userAgent);
  if (ua.os.name === "iOS") {
    progress.error("Optcarrot is not supported on iOS due to WebKit stack size limitation.");
    return;
  }
  if (ua.browser.name === "Safari") {
    const optcarrot = new Optcarrot();
    return optcarrot; 
  }
  return Comlink.wrap<OptcarrotWorkerPort>(
    // @ts-ignore
    new Worker(new URL("optcarrot.worker.ts", import.meta.url), {
      type: "module",
    })
  );
})();
globalThis.Optcarrot = optcarrot;
play(optcarrot, new URL(window.location.href), progress);
