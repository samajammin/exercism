export default class BracketPush {
  readonly input: string;

  constructor(input: string) {
    this.input = input;
  }

  isPaired(): boolean {
    const stack: string[] = [];
    const bracketPairs: { [key: string]: string } = {
      '}': '{',
      ']': '[',
      ')': '('
    };
    for (const char of this.input) {
      if (/[{[(]/.test(char)) {
        stack.push(char);
      }
      if (bracketPairs[char] === stack[stack.length - 1]) {
        stack.pop();
      } else if (bracketPairs[char]) {
        return false;
      }
    }

    return stack.length === 0;
  }
}
