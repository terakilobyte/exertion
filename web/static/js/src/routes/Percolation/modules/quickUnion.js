function QuickUnion (size) {
  this.count = size
  this.parent = new Array(size)
  this.size = new Array(size)

  for (let i = 0; i < size; i++) {
    parent[i] = i
    size[i] = i
  }
}

QuickUnion.prototype.find = function (elem) {
  if (this.validate(elem)) {
    while (elem !== this.parent[elem]) {
      elem = parent[elem]
    }
    return elem
  }
}

QuickUnion.prototype.validate = function (elem) {
  let i = this.parent.length
  if (elem < 0 || elem >= i) {
    return new Error('invalid input')
  }
  return true
}

QuickUnion.prototype.connected = function (elemA, elemB) {
  return this.find(elemA) === this.find(elemB)
}

QuickUnion.prototype.union = function (elemA, elemB) {
  let rootA = this.find(elemA)
  let rootB = this.find(elemB)
  if (rootA === rootB) {
    return
  }

  if (this.size[rootA] < this.size[rootB]) {
    this.parent[rootA] = rootB
    this.size[rootB] += this.size[rootA]
  } else {
    this.parent[rootB] = rootA
    this.size[rootA] += this.size[rootB]
  }
  this.count--
}

module.exports = QuickUnion
