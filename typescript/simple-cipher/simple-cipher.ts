class SimpleCipher {
  readonly key: string;
  readonly alphabet: string = 'abcdefghijklmnopqrstuvwxyz';

  constructor(key?: string) {
    this.key = key === undefined ? this.genKey() : this.validateKey(key);
  }

  private genKey() {
    return Array.from(Array(100))
      .map(() => Math.floor(Math.random() * 26))
      .map(i => this.intToChar(i))
      .join('');
  }

  private validateKey(key: string) {
    const isValid = /^[a-z]+$/.test(key);
    if (!isValid) {
      throw 'Bad key';
    }
    return key;
  }

  private charToInt(char: string): number {
    return this.alphabet.indexOf(char);
  }

  private intToChar(int: number): string {
    let index: number = int % 26;
    if (index < 0) {
      index += 26;
    }
    return this.alphabet.charAt(index);
  }

  private convert(str: string, isEncode: boolean): string {
    return str
      .split('')
      .map((char, idx) => {
        let charInt: number = this.charToInt(char);
        const keyIdx: number =
          idx < this.key.length ? idx : idx % this.key.length;
        const keyCharInt: number = this.charToInt(this.key[keyIdx]);
        if (isEncode) {
          charInt += keyCharInt;
        } else {
          charInt -= keyCharInt;
        }
        return this.intToChar(charInt);
      })
      .join('');
  }

  encode(message: string): string {
    return this.convert(message, true);
  }

  decode(cipher: string): string {
    return this.convert(cipher, false);
  }
}

export default SimpleCipher;
