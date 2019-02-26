export default class Isogram {
  public static isIsogram(input: string): boolean {
    const normalized: string = input.toLowerCase().replace(/-|\s/g, '');
    return new Set(normalized).size === normalized.length;
  }
}
