export default class CustomSet {
  private set: number[]

  constructor(numbers: number[] = []) {
    this.set = numbers
  }

  // calculates if set is empty
  public empty(): boolean {
    return this.set.length === 0
  }

  // calculates if set contains an element
  public contains(num: number): boolean {
    for (const element of this.set) {
      if (element === num) {
        return true
      }
    }
    return false
  }

  // adds an element to the set
  public add(num: number): CustomSet {
    if (!this.contains(num)) {
      this.set.push(num)
    }
    return this
  }

  // calculates if all elements of this set are contained in that set
  public subset(that: CustomSet): boolean {
    for (const element of this.set) {
      if (!that.contains(element)) {
        return false
      }
    }
    return true
  }

  // calculates if all elements of this set are not contained in that set
  public disjoint(that: CustomSet): boolean {
    for (const element of this.set) {
      if (that.contains(element)) {
        return false
      }
    }
    return true
  }

  // calculates if sets have all the same elements
  public eql(that: CustomSet): boolean {
    if (this.set.length !== that.set.length) {
      return false
    }
    return this.subset(that)
  }

  // return a set of all shared elements
  public intersection(that: CustomSet): CustomSet {
    const newSet = new CustomSet()
    for (const element of this.set) {
      if (that.contains(element)) {
        newSet.add(element)
      }
    }
    return newSet
  }

  // return a set of elements only in this set
  public difference(that: CustomSet): CustomSet {
    const newSet = new CustomSet()
    for (const element of this.set) {
      if (!that.contains(element)) {
        newSet.add(element)
      }
    }
    return newSet
  }

  // return a set of all elements in either set
  public union(that: CustomSet): CustomSet {
    const newSet = new CustomSet()
    for (const element of this.set) {
      newSet.add(element)
    }
    for (const element of that.set) {
      newSet.add(element)
    }
    return newSet
  }
}
