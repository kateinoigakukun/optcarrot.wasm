export class KeyEventBuffer {
  buffer: [number, boolean][];
  constructor(buffer: [number, boolean][]) {
    this.buffer = buffer;
  }

  consume(): [number, boolean] | null {
    if (this.buffer.length === 0) {
      return null;
    }
    return this.buffer.shift();
  }

  push(code: number, pressed: boolean) {
    this.buffer.push([code, pressed]);
  }
}
