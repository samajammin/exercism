export default class Triangle {
  sortedSides: number[];

  constructor(...sides: number[]) {
    this.sortedSides = sides.sort((a, b) => a - b);
  }

  kind() {
    const [a, b, c] = this.sortedSides;

    if (a <= 0 || a + b <= c) {
      throw new Error('Invalid triangle');
    }
    if (a === c) {
      return 'equilateral';
    }
    if (a === b || b === c) {
      return 'isosceles';
    }
    return 'scalene';
  }
}
