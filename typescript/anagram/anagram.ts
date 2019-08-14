export default class Anagram {
  private readonly anagram: string

  constructor(anagram: string) {
    this.anagram = anagram.toLowerCase()
  }

  private isAnagram(word: string): boolean {
    if (this.anagram === word) {
      return false
    }
    return [...this.anagram].sort().join('') === [...word].sort().join('')
  }

  public matches(...words: string[]): string[] {
    return words.filter((word) => this.isAnagram(word.toLowerCase()))
  }
}
