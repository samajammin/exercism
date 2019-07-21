export default class BinarySearchTree {
  public readonly data: number
  public left: BinarySearchTree
  public right: BinarySearchTree

  constructor(nodeData: number) {
    this.data = nodeData
  }

  public insert(nodeData: number): void {
    if (nodeData > this.data) {
      if (this.right) {
        this.right.insert(nodeData)
      } else {
        this.right = new BinarySearchTree(nodeData)
      }
    } else {
      if (this.left) {
        this.left.insert(nodeData)
      } else {
        this.left = new BinarySearchTree(nodeData)
      }
    }
  }

  public each(callback: (nodeData: number) => number): void {
    if (this.left) {
      this.left.each(callback)
    }

    callback(this.data)

    if (this.right) {
      this.right.each(callback)
    }
  }
}
