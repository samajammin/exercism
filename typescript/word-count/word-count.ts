export default class Words {
  public count(phrase: string): Map<string, number> {
    const words = phrase
      .trim()
      .split(/\s+/)
      .map(word => word.toLowerCase());
    let counts = new Map<string, number>();
    words.forEach(word => {
      const wordCount = counts.get(word) || 0;
      counts.set(word, wordCount + 1);
    });
    return counts;
  }
}
