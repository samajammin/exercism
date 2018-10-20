class ReverseString {
  static reverse(str: string): string {
    let reversed: string = '';
    for (let char of str) {
      reversed = char + reversed;
    }
    return reversed;
  }
}

export default ReverseString;
