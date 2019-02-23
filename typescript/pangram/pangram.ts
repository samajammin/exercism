export default class Pangram {
  readonly phrase: string;

  constructor(phrase: string) {
    this.phrase = phrase.toLowerCase();
  }

  isPangram() {
    const charSet = new Set();
    const charArr: string[] = this.phrase.match(/[a-z]/g) || [];
    charArr.forEach(char => {
      charSet.add(char);
    });
    return charSet.size === 26;
  }
}
