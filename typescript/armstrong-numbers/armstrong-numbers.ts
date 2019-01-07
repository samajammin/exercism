export default class ArmstrongNumbers {
  static isArmstrongNumber(num: number): boolean {
    const digitArr = num
      .toString()
      .split('')
      .map(str => Number(str));
    const result = digitArr.reduce((result, digit) => {
      return result + digit ** digitArr.length;
    }, 0);

    return result === num;
  }
}
