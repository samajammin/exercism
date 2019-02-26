class Isogram {
  public static isIsogram(input: string): boolean {
    const normalized: string = input.replace(/-|\s/g, '');

    for (const char of normalized) {
      const re = new RegExp(char, 'ig');
      const match = normalized.match(re);
      if (!match || match.length > 1) {
        return false;
      }
    }
    return true;
  }
}

export default Isogram;
