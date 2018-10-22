class SimpleCipher {
  key: string;
  readonly alphabet: string = 'abcdefghijklmnopqrstuvwxyz';

  constructor(key?: string) {
    this.key = key === undefined ? this.genKey() : this.validateKey(key);
  }

  private genKey() {
    let key: string = '';
    for (let i = 0; i < 101; i++) {
      const int: number = Math.floor(Math.random() * 26);
      key += this.intToChar(int);
    }
    return key;
  }

  private validateKey(key: string) {
    if (!key) {
      throw 'Bad key';
    }
    for (let char of key) {
      if (this.alphabet.indexOf(char) === -1) {
        throw 'Bad key';
      }
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
    let result: string = '';
    for (let i = 0; i < str.length; i++) {
      let charInt: number = this.charToInt(str[i]);
      const keyIndex: number = i < this.key.length ? i : i % this.key.length;
      const keyCharInt: number = this.charToInt(this.key[keyIndex]);
      if (isEncode) {
        charInt += keyCharInt;
      } else {
        charInt -= keyCharInt;
      }
      result += this.intToChar(charInt);
    }
    return result;
  }

  encode(message: string): string {
    return this.convert(message, true);
  }

  decode(cipher: string): string {
    return this.convert(cipher, false);
  }
}

export default SimpleCipher;
