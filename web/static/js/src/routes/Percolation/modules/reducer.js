import Percolation from './percolation'

const TILE_CLICK = 'TILE_CLICK'
const SET_FULL = 'SET_FULL'
const SET_PERCOLATES = 'SET_PERCOLATES'
const INITIALIZE = 'INITIALIZE'

export const constants = {
  TILE_CLICK,
  SET_FULL,
  SET_PERCOLATES,
  INITIALIZE
}

const clickedTile = ({percolation, grid, tile}) => {
  percolation = percolation.open(tile.row, tile.col)
  return {
    type: TILE_CLICK,
    payload: {
      percolation,
      open: percolation.openSites,
      full: percolation.full,
      grid: grid.map(elem => {
        return elem.map(inner => {
          if (elem === tile.row - 1 && inner === tile.col - 1) {
            return 1
          }
          return 0
        })
      })
    }
  }
}

const initialize = ({size}) => {
  let percolation = new Percolation(size)
  let grid = Array.from(new Array(size)).map((row, rowIdx) => {
    return Array.from(new Array(size)).map((col, colIdx) => {
      return 0
    })
  })
  return {
    type: INITIALIZE,
    payload: {
      percolation,
      open: percolation.openSites,
      full: percolation.full,
      size,
      grid
    }
  }
}

const setFull = (payload) => ({
  type: SET_FULL,
  payload
})

const setPercolates = (payload) => ({
  type: SET_PERCOLATES,
  payload
})

export const actions = {
  clickedTile,
  setFull,
  setPercolates,
  initialize
}

let initialState = {
  size: 0,
  percolation: {},
  open: [],
  full: {},
  grid: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE:
      return {
        ...state,
        ...action.payload
      }
    case TILE_CLICK:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
