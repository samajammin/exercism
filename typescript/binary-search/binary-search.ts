export default class BinarySearch {
  public array: number[]

  constructor(arr: number[]) {
    if (this.isSorted(arr)) {
      this.array = arr
    }
  }

  private isSorted(arr: number[]): boolean {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        return false
      }
    }
    return true
  }

  private binarySearch(target: number, left: number, right: number): number {
    const midpoint = Math.floor((left + right) / 2)
    const value = this.array[midpoint]
    if (target === value) {
      return midpoint
    } else if (right - left === 1) {
      return -1
    }

    if (target > value) {
      return this.binarySearch(target, midpoint, right)
    } else {
      return this.binarySearch(target, 0, midpoint)
    }
  }

  public indexOf(searchTerm: number): number {
    if (this.array === undefined) {
      throw new Error('Invalid array.')
    }
    return this.binarySearch(searchTerm, 0, this.array.length - 1)
  }
}
