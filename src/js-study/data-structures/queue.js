import ObjectExtend from "../object-extend"
export default class Queue extends ObjectExtend{
  constructor() {
    super()
    this.count = 0
    this.lowerCount = 0
    this.items = {}
  }

  enqueue(element) {
    this.items[this.count++] = element
  }

  dequeue() {
    if(this.isEmpty()) {
      return undefined
    }
    const target = this.items[this.lowerCount]
    delete this.items[this.lowerCount++]
    this.count--
    return target
  }

  isEmpty() {
    return this.count === 0
  }

  peek() {
    return this.items[this.lowerCount]
  }

  size() {
    return this.count
  }

}