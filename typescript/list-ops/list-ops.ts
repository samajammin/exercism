export default class List<T> {
  public values: T[];
  private _length: number;

  constructor(list?: T[]) {
    const newList = list || [];
    let length = 0;
    for (const _ of newList) {
      length++;
    }
    this.values = newList;
    this._length = length;
  }

  public length(): number {
    return this._length;
  }

  public push(value: T): List<T> {
    this._length++;
    this.values[this._length] = value;
    return this;
  }

  public unshift(value: T): List<T> {
    this.values = [value, ...this.values];
    this._length++;
    return this;
  }

  public append(list: List<T>): List<T> {
    for (const value of list.values) {
      this.values.push(value);
    }
    return this;
  }

  public concat(list: List<any>): List<any> {
    const listCopy = this;
    for (const item of list.values) {
      if (item.values) {
        listCopy.values.push(...item.values);
      } else {
        listCopy.values.push(item);
      }
    }
    return listCopy;
  }

  public filter(func: Function): List<{}> {
    const filteredList = new List();
    for (const value of this.values) {
      if (func(value) === true) {
        filteredList.values.push(value);
      }
    }
    return filteredList;
  }

  public map(func: Function): List<{}> {
    const mappedList = new List();
    for (const value of this.values) {
      mappedList.values.push(func(value));
    }
    return mappedList;
  }

  public reverse(): List<{}> {
    const reversed = new List();
    for (const value of this.values) {
      reversed.values.unshift(value);
    }
    return reversed;
  }

  public foldl(func: (acc: T, el: T) => T, initialVal: T): T {
    let acc = initialVal;
    for (const value of this.values) {
      acc = func(acc, value);
    }
    return acc;
  }

  public foldr(func: (acc: T, el: T) => T, initialVal: T): T {
    let acc = initialVal;
    for (let i = this.values.length - 1; i >= 0; i--) {
      acc = func(acc, this.values[i]);
    }
    return acc;
  }
}
