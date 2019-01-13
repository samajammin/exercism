export default class FlattenArray {
  static flatten(arr: any[]): number[] {
    let result: number[] = [];
    arr.forEach(item => {
      if (Array.isArray(item)) {
        result = result.concat(this.flatten(item));
      } else if (typeof item === 'number') {
        result = result.concat(item);
      }
    });
    return result;
  }
}
