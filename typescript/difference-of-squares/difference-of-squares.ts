export default class Squares {
  squareOfSum: number;
  sumOfSquares: number;
  firstN: number[];
  difference: number;

  constructor(num: number) {
    this.firstN = this.createFirstN(num);
    this.squareOfSum = this.calcSquareOfSum();
    this.sumOfSquares = this.calcSumOfSquares();
    this.difference = this.squareOfSum - this.sumOfSquares;
  }

  createFirstN(num: number): number[] {
    const result: number[] = [];
    for (let i: number = 1; i <= num; i++) {
      result.push(i);
    }
    return result;
  }

  calcSquareOfSum(): number {
    return this.firstN.reduce((res, int) => (res += int), 0) ** 2;
  }

  calcSumOfSquares(): number {
    return this.firstN.reduce((res, int) => (res += int ** 2), 0);
  }
}
