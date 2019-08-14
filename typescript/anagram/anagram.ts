type charCount = { [char: string]: number }

export default class Anagram {
  private readonly anagram: string
  private readonly charCounts: charCount

  constructor(anagram: string) {
    this.anagram = anagram.toLowerCase()
    this.charCounts = this.getCharCounts(this.anagram)
  }

  private getCharCounts(word: string): charCount {
    const charCounts: charCount = {}
    for (const char of word) {
      if (charCounts[char]) {
        charCounts[char] += 1
      } else {
        charCounts[char] = 1
      }
    }
    return charCounts
  }

  private isAnagram(word: string): boolean {
    if (this.anagram.length !== word.length) {
      return false
    }
    if (this.anagram === word) {
      return false
    }
    const wordCharCounts = this.getCharCounts(word)
    for (const char in wordCharCounts) {
      if (wordCharCounts[char] !== this.charCounts[char]) {
        return false
      }
    }
    return true
  }

  public matches(...words: string[]): string[] {
    return words.filter((word) => this.isAnagram(word.toLowerCase()))
  }
}
