export default class PerfectNumbers {
  public static readonly PERFECT = 'perfect';
  public static readonly ABUNDANT = 'abundant';
  public static readonly DEFICIENT = 'deficient';

  public static getSumOfFactors(int: number): number {
    let sum = 0;
    const incrementor = int % 2 === 0 ? 1 : 2;
    for (let i = 1; i <= Math.floor(int / 2); i += incrementor) {
      if (int % i === 0) {
        sum += i;
      }
    }
    return sum;
  }

  public static classify(int: number): string {
    if (int < 1) {
      throw new Error('Classification is only possible for natural numbers.');
    }
    const sum = PerfectNumbers.getSumOfFactors(int);
    switch (true) {
      case sum === int:
        return PerfectNumbers.PERFECT;
      case sum > int:
        return PerfectNumbers.ABUNDANT;
      default:
        return PerfectNumbers.DEFICIENT;
    }
  }
}
