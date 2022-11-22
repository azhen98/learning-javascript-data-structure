export default class Stack {
  constructor() {
    this.count = 0
    this.items = {}
  }

  push(element) {
    this.items[this.count++] = element
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.count === 0
  }

  // 需要返回删除的元素
  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    const current = this.items[this.count - 1]
    delete this.items[--this.count]
    return current
  }

  peek() {
    return this.items[this.count - 1]
  }

  clear() {
    this.count = 0
    this.items = {}
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }

    let objString = ''
    for (const value of Object.values(this.items)) {
      objString  += `,${value}`
    }
    
    return objString.slice(1);

  }
}

const stack = new Stack()

stack.push(234)
stack.push(234)
stack.pop()


console.log(stack);