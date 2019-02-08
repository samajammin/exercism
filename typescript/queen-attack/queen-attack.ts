const BOARD_SIZE = 8;
type Coordinates = [number, number];

export default class QueenAttack {
  white: Coordinates;
  black: Coordinates;

  constructor({ white, black }: { white: Coordinates; black: Coordinates }) {
    if (white[0] === black[0] && white[1] === black[1]) {
      throw 'Queens cannot share the same space';
    }
    this.white = white;
    this.black = black;
  }

  toString() {
    let board = Array(BOARD_SIZE).fill(null);
    board = board.map(_ => Array(BOARD_SIZE).fill('_'));

    board[this.white[0]][this.white[1]] = 'W';
    board[this.black[0]][this.black[1]] = 'B';

    return board.map(row => row.join(' ')).join('\n') + '\n';
  }

  canAttack() {
    const rowDiff: number = Math.abs(this.white[0] - this.black[0]);
    const colDiff: number = Math.abs(this.white[1] - this.black[1]);

    if (rowDiff === 0 || colDiff === 0 || rowDiff === colDiff) {
      return true;
    } else {
      return false;
    }
  }
}
