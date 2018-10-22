export default class Triangle {
  sides: number[];

  constructor(...sides: number[]) {
    this.sides = sides;
  }

  kind(): string {
    if (this.sides.length !== 3) {
      throw new Error('Invalid number of sides');
    }

    let sideCounter = new Map<number, number>();

    this.sides.forEach((side, idx) => {
      const sideCount: number = sideCounter.get(side) || 0;
      sideCounter.set(side, sideCount + 1);

      const otherSides: number[] = this.sides.slice();
      otherSides.splice(idx, 1);

      if (side <= 0 || side >= otherSides[0] + otherSides[1]) {
        throw new Error('Invalid length of sides');
      }
    });

    for (let key of sideCounter.keys()) {
      if (sideCounter.get(key) === 3) {
        return 'equilateral';
      }
      if (sideCounter.get(key) === 2) {
        return 'isosceles';
      }
    }
    return 'scalene';
  }
}
