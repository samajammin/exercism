export default class CustomSet {
  private values: number[]

  constructor(elements: number[] = []) {
    this.values = elements
  }

  // calculates if set is empty
  public empty(): boolean {
    return this.values.length === 0
  }

  // calculates if set contains a value
  public contains(num: number): boolean {
    for (const element of this.values) {
      if (element === num) {
        return true
      }
    }
    return false
  }

  // adds an element to the set
  public add(num: number): CustomSet {
    if (!this.contains(num)) {
      this.values.push(num)
    }
    return this
  }

  // calculates if all elements of this set are contained in that set
  public subset(that: CustomSet): boolean {
    return this.values.every((value) => that.contains(value))
  }

  // calculates if all elements of this set are not contained in that set
  public disjoint(that: CustomSet): boolean {
    return this.values.every((value) => !that.contains(value))
  }

  // calculates if sets have all the same elements
  public eql(that: CustomSet): boolean {
    if (this.values.length !== that.values.length) {
      return false
    }
    return this.subset(that)
  }

  // return a set of all shared elements
  public intersection(that: CustomSet): CustomSet {
    const values = this.values.filter((value) => that.contains(value))
    return new CustomSet(values)
  }

  // return a set of elements only in this set
  public difference(that: CustomSet): CustomSet {
    const values = this.values.filter((value) => !that.contains(value))
    return new CustomSet(values)
  }

  // return a set of all elements in either set
  public union(that: CustomSet): CustomSet {
    const newSet = new CustomSet()
    for (const element of this.values) {
      newSet.add(element)
    }
    for (const element of that.values) {
      newSet.add(element)
    }
    return newSet
  }
}
