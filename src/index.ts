import * as Comlink from "comlink";
import { OptcarrotWorkerPort } from "./optcarrot.worker";

const optcarrot = Comlink.wrap<OptcarrotWorkerPort>(
  // @ts-ignore
  new Worker(new URL("optcarrot.worker.ts", import.meta.url), {
    type: "module",
  })
);

class NESView {
    canvasContext: CanvasRenderingContext2D;
    scalingCanvas: HTMLCanvasElement;
    scalingContext: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement) {
        this.canvasContext = canvas.getContext("2d");
        this.scalingCanvas = document.createElement('canvas') as HTMLCanvasElement;
        this.scalingCanvas.width = canvas.width;
        this.scalingCanvas.height = canvas.height;
        this.scalingContext = this.scalingCanvas.getContext("2d");
        this.canvasContext.scale(2, 2);
    }

    draw(bytes: Uint8Array) {
        const rgba = new Uint8ClampedArray(bytes.buffer);
        const image = new ImageData(rgba, 256, 224);
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
        const buffer = this.context.createBuffer(1, input.length, this.context.sampleRate);
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
            console.warn("Audio buffer underrun :(");
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

const play = async () => {
    const nesView = new NESView(document.getElementById("nes-video") as HTMLCanvasElement);
    const nesAudio = new NESAudio();

    console.log("Initializing Optcarrot...");

    const fps = new FpsCounter();
    const fpsIndicator = document.getElementById("fps-indicator");
    const isAudioEnabledCheckbox = document.getElementById("audio-enabled") as HTMLInputElement;
    let audioEnabled = isAudioEnabledCheckbox.checked;

    isAudioEnabledCheckbox.onclick = () => {
        audioEnabled = isAudioEnabledCheckbox.checked;
    }

    optcarrot.init(
      // render
      Comlink.proxy((bytes) => {
        nesView.draw(bytes);
        fpsIndicator.innerText = fps.tick().toString();
      }),
      // playAudio
      Comlink.proxy((bytes) => {
        if (!audioEnabled) return;
        nesAudio.push(bytes);
      }),
    );
}

document.getElementById("play-button").addEventListener("click", play);
