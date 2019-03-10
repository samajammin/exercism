export default class CircularBuffer<T> {
  buffer: T[];
  length: number;

  constructor(length: number) {
    this.buffer = new Array<T>();
    this.length = length;
  }

  isFull(): boolean {
    return this.buffer.length === this.length;
  }

  read(): T {
    const firstAdded = this.buffer.shift();
    if (firstAdded === undefined) {
      throw BufferEmptyError;
    }
    return firstAdded;
  }

  write(item: T): void {
    if (this.isFull()) {
      throw BufferOverflowError;
    }
    this.buffer.push(item);
  }

  forceWrite(item: T): void {
    if (this.isFull()) {
      this.buffer.shift();
    }
    this.buffer.push(item);
  }

  clear(): void {
    this.buffer.length = 0;
  }
}

export const BufferOverflowError = 'Buffer overflowed';
export const BufferEmptyError = 'Buffer is empty';
