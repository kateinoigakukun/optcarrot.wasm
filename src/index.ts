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

const canvas = document.getElementById("nes-video") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
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
    const rgba = new Uint8ClampedArray(bytes.buffer);
    const image = new ImageData(rgba, 256, 224);
    ctx.putImageData(image, 0, 0);
    fpsIndicator.innerText = fps.tick().toString();
  })
);
