export default class ObjectExtend {
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
      objString += `,${value}`
    }

    return objString.slice(1);

  }
}