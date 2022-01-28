import * as Comlink from "comlink";
import { OptcarrotWorkerPort } from "./optcarrot.worker";

const Optcarrot = {
  tick() {
    console.log("tick");
  },
};

// @ts-ignore
globalThis.Optcarrot = Optcarrot;

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

const nesView = new NESView(document.getElementById("nes-video") as HTMLCanvasElement);

console.log("Initializing Optcarrot...");

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

const fps = new FpsCounter();
const fpsIndicator = document.getElementById("fps-indicator");

optcarrot.init(
  Comlink.proxy((bytes) => {
    nesView.draw(bytes);
    fpsIndicator.innerText = fps.tick().toString();
  })
);
