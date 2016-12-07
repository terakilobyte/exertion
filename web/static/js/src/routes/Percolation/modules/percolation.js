import QuickUnion from './quickUnion'

function Percolation (size) {
  var quickUnionSize = size * size + 2
  this.gridLength = size
  this.isOpen = []
  this.percolation = new QuickUnion(quickUnionSize)
  this.full = new QuickUnion(quickUnionSize)
  var virtualTop = 0
  var virtualBottom = size * size + 1
  this.isOpen[virtualTop] = true
  this.isOpen[virtualTop] = true

  for (let i = 1; i <= size; i++) {
    let j = 1
    let topSite = this.siteIndex(j, i)
    this.percolation.union(virtualTop, topSite)
    this.full.union(virtualTop, topSite)
    let bottomSite = this.siteIndex(size, i)
    this.percolation.union(bottomSite, virtualBottom)
  }
}
Percolation.prototype.siteIndex = function (row, col) {
  if (this.checkBounds(row, col)) {
    return (row - 1) * this.gridLength + col
  }
}

Percolation.prototype.checkBounds = function (row, col) {
  if (row <= this.gridLength && row >= 1) {
    if (col > this.gridLength || col < 1) {
      return new Error('column out of bounds')
    }
    return new Error('row out of bounds')
  }
  return true
}

Percolation.prototype.open = function (row, col) {
  let site = this.siteIndex(row, col)
  if (!this.isOpen[site]) {
    this.isOpen[site] = true
    // check left
    if (col > 1 && this.isOpen(row, col - 1)) {
      let left = this.siteIndex(row, col - 1)
      this.percolation.union(site, left)
      this.full.union(site, left)
    }

    // check right
    if (col < this.gridLength && this.isOpen(row, col + 1)) {
      let right = this.siteIndex(row, col + 1)
      this.percolation.union(site, right)
      this.full.union(site, right)
    }

    // check up
    if (row > 1 && this.isOpen(row - 1, col)) {
      let above = this.siteIndex(row - 1, col)
      this.percolation.union(site, above)
      this.full.union(site, above)
    }

    // check below
    if (row < this.gridLength && this.isOpen(row + 1, col)) {
      let below = this.siteIndex(row + 1, col)
      this.percolation.union(site, below)
      this.full.union(site, below)
    }
  }
}

Percolation.prototype.isOpen = function (row, col) {
  let site = this.siteIndex(row, col)
  return this.isOpen[site]
}

Percolation.prototype.isFull = function (row, col) {
  let site = this.siteIndex(row, col)
  return this.full.connected(this.virtualTop, site) && this.isOpen[site]
}

Percolation.prototype.percolates = function () {
  return this.gridLength > 1
       ? this.percolation.connected(this.virtualTop, this.virtualBottom)
       : this.isOpen[this.siteIndex(1, 1)]
}

module.exports = Percolation
