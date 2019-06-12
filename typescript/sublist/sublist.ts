enum ListComparisons {
  Equal = 'equal',
  Sublist = 'sublist',
  Superlist = 'superlist',
  Unequal = 'unequal'
}

export default class List {
  private readonly _values: number[]

  constructor(...args: number[]) {
    this._values = args
  }

  public compare(that: List): string {
    let [longList, shortList] = [this._values, that._values]
    const isShorter = longList.length < shortList.length
    if (isShorter) {
      [longList, shortList] = [shortList, longList]
    }

    // empty lists are equal
    if (longList.length === 0) {
      return ListComparisons.Equal
    }
    // or empty lists are sublists
    if (shortList[0] === undefined) {
      return isShorter ? ListComparisons.Sublist : ListComparisons.Superlist
    }

    for (let i = 0; i < longList.length; i++) {
      if (longList[i] === shortList[0]) {
        for (let j = 1; j < shortList.length; j++) {
          if (longList[i + j] !== shortList[j]) {
            break
          }
          if (j === shortList.length - 1 && j === longList.length - 1) {
            return ListComparisons.Equal
          }
          if (j === shortList.length - 1) {
            return isShorter
              ? ListComparisons.Sublist
              : ListComparisons.Superlist
          }
        }
      }
    }
    return ListComparisons.Unequal
  }
}
