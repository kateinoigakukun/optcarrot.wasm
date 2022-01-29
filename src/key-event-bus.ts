import { RingBuffer } from "ringbuf.js";

export class KeyEventProducer {
  buffer: RingBuffer;
  constructor(buffer: RingBuffer) {
    this.buffer = buffer;
  }

  push(code: number, pressed: boolean) {
    this.buffer.push(new Uint8Array([code, pressed ? 1 : 0]), undefined);
  }
}

export class KeyEventConsumer {
  buffer: RingBuffer;
  constructor(buffer: RingBuffer) {
    this.buffer = buffer;
  }

  consume(): [number, boolean] | null {
    const bytes = new Uint8Array(2);
    const read = this.buffer.pop(bytes, 2);
    if (read === 0) return null;
    return [bytes[0], bytes[1] === 1];
  }
}
