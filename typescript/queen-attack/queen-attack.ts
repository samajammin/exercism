export default class QueenAttack {
  white: [number, number];
  black: [number, number];
  whiteRow: number;
  whiteCol: number;
  blackRow: number;
  blackCol: number;

  constructor({
    white,
    black
  }: {
    white: [number, number];
    black: [number, number];
  }) {
    if (white[0] === black[0] && white[1] === black[1]) {
      throw 'Queens cannot share the same space';
    }
    this.white = white;
    this.black = black;
    this.whiteRow = white[0];
    this.whiteCol = white[1];
    this.blackRow = black[0];
    this.blackCol = black[1];
  }

  toString() {
    const board = Array(8).fill('_ _ _ _ _ _ _ _');
    // TODO couldn't dynamically loop object props :(
    // "Element implicitly has an 'any' type because type 'QueenAttack' has no index signature."
    // How to declare that 'white' & 'black' are strings? Or how to loop & access each?
    let row: string[] = board[this.whiteRow].split(' ');
    row.splice(this.whiteCol, 1, 'W');
    board.splice(this.whiteRow, 1, row.join(' '));

    row = board[this.blackRow].split(' ');
    row.splice(this.blackRow, 1, 'B');
    board.splice(this.blackCol, 1, row.join(' '));

    return board.join('\n') + '\n';
  }

  canAttack() {
    // if queens share row, return true
    if (this.whiteRow === this.blackRow) {
      return true;
    }
    // if queens share column, return true
    if (this.whiteCol === this.blackCol) {
      return true;
    }
    // if diagonal, return true
    const rowDiff: number = Math.abs(this.whiteRow - this.blackRow);
    const colDiff: number = Math.abs(this.whiteCol - this.blackCol);
    if (rowDiff === colDiff) {
      return true;
    }
    return false;
  }
}
