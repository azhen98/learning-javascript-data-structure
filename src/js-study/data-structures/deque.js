import ObjectExtend from "../object-extend"
export default class Deque extends ObjectExtend {
  constructor() {
    super()
    this.count = 0
    this.lowerCount = 0
    this.items = {}
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count - this.lowerCount;
  }

  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element)
    } else if (this.lowerCount > 0) {
      // removeFront 操作中会使 lowerCount 相加, 当lowerCount 为0时, 执行removeFront后, 当lowerCount = 1, 所以要向前推进
      this.items[--this.lowerCount] = element
    } else {
      // 在前面插入需要把所有的元素往后移动
      for (let index = this.count; index > 0; index--) {
        this.items[index] = this.items[index - 1]
      }
      this.count++
      this.lowerCount = 0
      this.items[0] = element
    }
  }

  addBack(element) {
    this.items[this.count++] = element
  }

  // 1 2 3 4 5 6
  //   2 3 4 5 6
  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const element = this.items[this.lowerCount]
    delete this.items[this.lowerCount++]
    return element
  }


  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    const element = this.items[this.count - 1]
    delete this.items[this.count--]
    return element
  }

  peekFront() {
    return this.items[this.lowerCount]
  }

  peekBack() {
    return this.items[this.count - 1]
  }


}