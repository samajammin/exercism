export default class Words {
  public count(phrase: string): Map<string, number> {
    const words = phrase
      .trim()
      .split(/\s+/)
      // .filter(word => word)
      .map(word => word.toLowerCase());
    let counts = new Map<string, number>();
    words.forEach(word => {
      const wordCount = counts.get(word);
      if (wordCount) {
        counts.set(word, wordCount + 1);
      } else {
        counts.set(word, 1);
      }
    });
    return counts;
  }
}
