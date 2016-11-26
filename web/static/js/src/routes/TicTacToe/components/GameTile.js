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

const columns = {
  0: 'Left',
  1: 'Middle',
  2: 'Right'
}

const classes = {
  'O': 'nought',
  'X': 'cross'
}

export class GameTile extends React.Component {

  constructor (props) {
    super(props)
    console.log('props', props)
    this.state = {
      tile: `${props.row}${columns[props.column]}`
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

  handleClick () {
    console.log(`clicked ${this.state.tile}`)
    const clickThis = () => {
      let tile = this.refs.input
      this.disable()
      tile.classList.add(classes[this.props.playerSigil])
      this.props.playerMove(clickThis.bind(this))
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
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  gameBoard: state.tictactoe.board,
  winner: state.tictactoe.winner,
  playerTurn: state.tictactoe.playerTurn,
  playerSigil: state.tictactoe.playerSigil,
  computerSigil: state.tictactoe.computerSigil
})

GameTile.propTypes = {
  row: React.PropTypes.string.isRequired,
  column: React.PropTypes.string.isRequired,
  playerMove: React.PropTypes.func.isRequired,
  gameBoard: React.PropTypes.array.isRequired,
  playerTurn: React.PropTypes.bool,
  tileClick: React.PropTypes.func,
  playerSigil: React.PropTypes.string,
  computerSigil: React.PropTypes.string
}

export default connect(mapStateToProps, actions)(GameTile)
