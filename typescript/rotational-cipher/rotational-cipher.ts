export default class RotationalCipher {
  static readonly alphabet: string = 'abcdefghijklmnopqrstuvwxyz';

  static rotate(message: string, key: number) {
    return message
      .split('')
      .map(char => {
        let isUpperCase;
        let newCharIndex;

        if (/[A-Z]/.test(char)) {
          isUpperCase = true;
          newCharIndex = this.alphabet.indexOf(char.toLowerCase());
        } else if (/[a-z]/.test(char)) {
          newCharIndex = this.alphabet.indexOf(char);
        } else {
          return char;
        }

        newCharIndex = (newCharIndex + key) % 26;

        return isUpperCase
          ? this.alphabet[newCharIndex].toUpperCase()
          : this.alphabet[newCharIndex];
      })
      .join('');
  }
}
