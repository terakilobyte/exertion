import Percolation from './percolation'

const TILE_CLICK = 'TILE_CLICK'
const INITIALIZE = 'INITIALIZE'
const RESET = 'RESET'

export const constants = {
  TILE_CLICK,
  INITIALIZE,
  RESET
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

const reset = () => ({
  type: RESET
})

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

export const actions = {
  clickedTile,
  initialize,
  reset
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
    case RESET:
      return initialState

    default:
      return state
  }
}
