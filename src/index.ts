import * as Comlink from "comlink";
import { KeyEventProducer } from "./key-event-bus";
import { OptcarrotWorkerPort } from "./optcarrot.worker";
import { RingBuffer } from "ringbuf.js";

if ("serviceWorker" in navigator) {
  // Register service worker
  // @ts-ignore
  navigator.serviceWorker.register(new URL("./sw.js", import.meta.url)).then(
    function (registration) {
      console.log("COOP/COEP Service Worker registered", registration.scope);
      // If the registration is active, but it's not controlling the page
      if (registration.active && !navigator.serviceWorker.controller) {
        window.location.reload();
      }
    },
    function (err) {
      console.log("COOP/COEP Service Worker failed to register", err);
    }
  );
} else {
  console.warn("Cannot register a service worker");
}

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

const deriveOptions = (url: URL) => {
  const ROMS = {
    "Lan_Master.nes": "/optcarrot/examples/Lan_Master.nes",
  };
  const enableOptRaw = url.searchParams.get("opt");
  const enableOpt = enableOptRaw === null ? true : enableOptRaw === "true";
  const romRaw = url.searchParams.get("rom");
  const romKey = romRaw === null ? "Lan_Master.nes" : romRaw;
  const options = [];

  if (enableOpt) {
    options.push("--opt");
  }
  if (ROMS[romKey]) {
    options.push(ROMS[romKey]);
  } else {
    throw new Error(`Unknown ROM: ${romKey}`);
  }
  return options;
};

const optcarrot = Comlink.wrap<OptcarrotWorkerPort>(
  // @ts-ignore
  new Worker(new URL("optcarrot.worker.ts", import.meta.url), {
    type: "module",
  })
);

const play = async (url: URL) => {
  const progress = new LoadProgress(
    document.getElementById("loading-progress") as HTMLProgressElement,
    document.getElementById("loading-message")
  );
  const nesView = new NESView(
    document.getElementById("nes-video") as HTMLCanvasElement
  );
  const keyEventBuffer = RingBuffer.getStorageForCapacity(1024, Uint8Array);
  const keyEventProducer = new KeyEventProducer(
    new RingBuffer(keyEventBuffer, Uint8Array)
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
      keyEventProducer.push(code, true);
    }
  });

  document.addEventListener("keyup", (event) => {
    const code = padCodeFromCode(event.code);
    if (code !== null) {
      keyEventProducer.push(code, false);
    }
  });

  optcarrot.init(
    deriveOptions(url),
    // render
    Comlink.proxy((bytes) => {
      nesView.draw(bytes);
      fpsIndicator.innerText = fps.tick().toString();
    }),
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
    }),
    keyEventProducer.buffer.buf
  );
};

if (typeof SharedArrayBuffer !== "undefined") {
  play(new URL(window.location.href));
}
