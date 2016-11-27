import React from 'react'

import '../styles/TicTacToe.scss'

// ======================================================
// Board Constants
// ======================================================
const tileMap = {
  'topLeft': 0,
  'topMiddle': 1,
  'topRight': 2,
  'centerLeft': 3,
  'centerMiddle': 4,
  'centerRight': 5,
  'bottomLeft': 6,
  'bottomMiddle': 7,
  'bottomRight': 8
}

const classes = {
  'O': 'nought',
  'X': 'cross'
}

export class GameTile extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      tile: `${props.row}${props.column}`
    }
    this.handleClick = this.handleClick.bind(this)
    this.disable = this.disable.bind(this)
    this.handleWinner = this.handleWinner.bind(this)
  }

  componentWillReceiveProps (propObj) {
    if (propObj.board[tileMap[this.state.tile]] ===
      this.props.computerSigil) {
      this.handleComputer()
      if (propObj.winner) {
        if (propObj.winner.result !== 'draw') {
          let index = propObj.winner.winningTiles.indexOf(this.state.tile)
          if (index !== -1) {
            this.handleWinner(propObj.winner.winningDirection)
          }
        }
      } else {
        this.disable()
      }
    }
  }

  handleComputer () {
    const input = this.refs.input
    input.click()
    input.setAttribute('disabled', true)
    let tile = this.refs.tile
    tile.classList.remove('active')
    setTimeout(() => {
      tile.classList.add(classes[this.props.computerSigil])
    }, 200)
  }

  handleWinner (direction) {
    console.log(direction)
    const tile = this.refs.tile
    this.disable()
    setTimeout(() => {
      tile.classList.add(direction)
    })
  }

  disable () {
    let input = this.refs.input
    input.click()
    input.setAttribute('disabled', 'true')
    let tile = this.refs.tile
    tile.classList.remove('active')
  }

  handleClick () {
    function clickThis () {
      let tile = this.refs.tile
      let input = this.refs.input
      input.setAttribute('disabled', 'true')
      tile.classList.remove('active')
      setTimeout(() => {
        tile.classList.add(classes[this.props.playerSigil])
      })
      setTimeout(() => {
        this.props.playerMove({ move: this.state.tile })
      })
    }
    this.props.tileClick(clickThis.bind(this))
  }

  render () {
    return (
      <div className='game-tile active' ref='tile'>
        <input id={this.state.tile}
          onClick={this.handleClick}
          ref='input'
          type='checkbox' />
        <label htmlFor={this.state.tile} />
      </div>
    )
  }
}

GameTile.propTypes = {
  row: React.PropTypes.string.isRequired,
  column: React.PropTypes.string.isRequired,
  playerMove: React.PropTypes.func.isRequired,
  board: React.PropTypes.array.isRequired,
  tileClick: React.PropTypes.func.isRequired,
  playerTurn: React.PropTypes.bool,
  playerSigil: React.PropTypes.string,
  computerSigil: React.PropTypes.string,
  winner: React.PropTypes.any.isRequired
}

export default GameTile
