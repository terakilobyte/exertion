import QuickUnion from './quickUnion'

function Percolation (size) {
  var quickUnionSize = size * size + 2
  this.gridLength = size
  this.openSites = []
  this.percolation = new QuickUnion(quickUnionSize)
  this.full = new QuickUnion(quickUnionSize)
  this.virtualTop = 0
  this.virtualBottom = size * size + 1
  this.openSites[this.virtualTop] = true
  this.openSites[this.virtualBottom] = true

  for (let col = 1; col <= size; col++) {
    let topRow = 1
    let topSite = this.siteIndex(topRow, col)
    this.percolation.union(this.virtualTop, topSite)
    this.full.union(this.virtualTop, topSite)
    let bottomSite = this.siteIndex(size, col)
    this.percolation.union(this.virtualBottom, bottomSite)
  }
}
Percolation.prototype.siteIndex = function (row, col) {
  if (this.checkBounds(row, col)) {
    return (row - 1) * this.gridLength + col
  } else {
    return new Error('you messed up Nate')
  }
}

Percolation.prototype.checkBounds = function (row, col) {
  if (row > this.gridLength && row < 1) {
    if (col > this.gridLength || col < 1) {
      return new Error('column out of bounds')
    }
    return new Error('row out of bounds')
  }
  return true
}

Percolation.prototype.open = function (row, col) {
  let site = this.siteIndex(row, col)
  if (!this.openSites[site]) {
    this.openSites[site] = true
    // check left
    if (col > 1 && this.isOpen(row, col - 1)) {
      let left = this.siteIndex(row, col - 1)
      this.percolation.union(left, site)
      this.full.union(left, site)
    }

    // check right
    if (col < this.gridLength && this.isOpen(row, col + 1)) {
      let right = this.siteIndex(row, col + 1)
      this.percolation.union(right, site)
      this.full.union(right, site)
    }

    // check up
    if (row > 1 && this.isOpen(row - 1, col)) {
      let above = this.siteIndex(row - 1, col)
      this.percolation.union(above, site)
      this.full.union(above, site)
    }

    // check below
    if (row < this.gridLength && this.isOpen(row + 1, col)) {
      let below = this.siteIndex(row + 1, col)
      this.percolation.union(below, site)
      this.full.union(below, site)
    }
  }
  return this
}

Percolation.prototype.isOpen = function (row, col) {
  let site = this.siteIndex(row, col)
  return this.openSites[site]
}

Percolation.prototype.isFull = function (row, col) {
  let site = this.siteIndex(row, col)
  return this.full.connected(this.virtualTop, site) && this.openSites[site]
}

Percolation.prototype.percolates = function () {
  return this.gridLength > 1
       ? this.percolation.connected(this.virtualTop, this.virtualBottom)
       : this.openSites[this.siteIndex(1, 1)]
}

module.exports = Percolation
