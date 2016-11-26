import React from 'react'
import { connect } from 'react-redux'
import { actions } from '../modules'

// ======================================================
// Board Constants
// ======================================================
const tileMap = {
  'topLeft': 0,
  'topMiddle': 1,
  'topRight': 2,
  'centerLeft': 4,
  'centerMiddle': 5,
  'centerRight': 6,
  'bottomLeft': 7,
  'bottomMiddle': 8,
  'bottomRight': 9
}

const rows = {
  0: 'top',
  1: 'center',
  2: 'bottom'
}

const columns = {
  0: 'Left',
  1: 'Middle',
  2: 'Right'
}

const classes = {
  'O': 'nought',
  'X': 'cross'
}

class GameTile extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      tile: `${props.row}${columns[props.columns]}`
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillReceiveProps (propObj) {
    if (propObj.gameBoard[tileMap[this.state.tile]] ===
      this.props.computerSigil) {
      this.handleComputer()
    }

    if (propObj.winner) {
      if (propObj.winner.result !== 'draw') {
        let index = propObj.winner.winningTiles.indexOf(this.state.tile)
        if (index !== -1) {
          this.handleWinner(propObj.winner.winningDirection)
        }
      } else {
        this.disable()
      }
    }
  }

  handleComputer () {
    this.disable()
    let tile = this.refs.tile
    setTimeout(() => {
      tile.classList.add(classes[this.props.computerSigil])
    }, 200)
  }

  disable () {
    let input = this.refs.input
    input.click()
    input.setAttribute('disabled', 'true')
    let tile = this.refs.tile
    tile.classList.remove('active')
  }
}
