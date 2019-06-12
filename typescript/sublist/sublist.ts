enum ListComparisons {
  Equal = 'equal',
  Sublist = 'sublist',
  Superlist = 'superlist',
  Unequal = 'unequal'
}

export default class List {
  private readonly _list: number[]

  constructor(...args: number[]) {
    this._list = args
  }

  public compare(list: List): string {
    let superlist = this._list
    let sublist = list._list
    const isShorter = this._list.length < list._list.length
    if (isShorter) {
      superlist = list._list
      sublist = this._list
    }

    // empty lists are equal
    if (superlist.length === 0) {
      return ListComparisons.Equal
    }
    // or empty lists are sublists
    if (sublist[0] === undefined) {
      return isShorter ? ListComparisons.Sublist : ListComparisons.Superlist
    }

    for (let i = 0; i < superlist.length; i++) {
      if (superlist[i] === sublist[0]) {
        for (let j = 1; j < sublist.length; j++) {
          if (superlist[i + j] !== sublist[j]) {
            break
          }
          if (j === sublist.length - 1 && j === superlist.length - 1) {
            return ListComparisons.Equal
          }
          if (j === sublist.length - 1) {
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
