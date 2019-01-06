export default class ArmstrongNumbers {
  static isArmstrongNumber(num: number): boolean {
    const numDigits = num.toString().length;
    const digitArr = num
      .toString()
      .split('')
      .map(str => Number(str));
    const result = digitArr.reduce((result, digit) => {
      return result + digit ** numDigits;
    }, 0);

    return result === num;
  }
}
