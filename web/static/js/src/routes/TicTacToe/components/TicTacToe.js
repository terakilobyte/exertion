import React from 'react'
import '../styles/TicTacToe.scss'
import GameBoard from '../components/GameBoard'
import throttle from 'lodash.throttle'

class TicTacToe extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      gameKey: Date.now()
    }
    this.handleReset = this.handleReset.bind(this)
    this.firstReset = this.firstReset.bind(this)
    this.handleUserClickThrottled = throttle(this.handleUserClick.bind(this), 5000)
    this.throttledComputerMove = throttle(this.computerMove.bind(this), 5000)
  }

  componentWillReceiveProps (propObj) {
    if (!propObj.winner) {
      if (!propObj.playerTurn) {
        setTimeout(() => {
          this.throttledComputerMove()
          this.handleUserClickThrottled.cancel()
        }, 200)
      }
    }
    // nothing else, the player can't win
  }

  componentWillUnmount () {
    this.props.resetGame()
  }

  computerMove () {
    this.props.computerMove()
  }

  handleUserClick (tileClick) {
    if (!this.props.winner) {
      tileClick()
      this.throttledComputerMove.cancel()
    }
  }

  firstReset () {
    this.props.resetGame()
    this.setState({playerSigil: ''})
  }

  handleReset () {
    this.handleUserClickThrottled.cancel()
    this.throttledComputerMove.cancel()
    this.props.resetGame()
    this.props.init({playerSigil: arguments[0]})
    this.setState({gameKey: Date.now(), playerSigil: arguments[0]})
    if (arguments[0] === 'O') {
      setTimeout(() => {
        this.throttledComputerMove()
      }, 200)
    }
  }

  render () {
    let notifier

    if (this.props.winner.result) {
      const message = this.props.winner.result === 'draw'
                    ? 'IT\'S A ' + this.props.winner.result.toUpperCase()
                    : this.props.winner.result.toUpperCase().split(/-/).join(' ')
      notifier = (
        <div className='text-center'>
          <h1 className='text-center'>{message}</h1>
          <span className='reset'
            onClick={this.firstReset}>
            Reset
          </span>
        </div>
      )
    }

    if (!this.state.playerSigil) {
      return (
        <div className='text-center'>
          <h1 className='text-center'>Make your choice...</h1>
          <span className='reset'
            onClick={this.handleReset.bind(this, 'X')}>
            Play as X
          </span>
          <span>&nbsp;&nbsp;</span>
          <span className='reset'
            onClick={this.handleReset.bind(this, 'O')}>
            Play as O
          </span>
        </div>
      )
    } else {
      return (
        <div key={this.state.gameKey}>
          <h3 className='text-center'>{this.props.motivationalMessage}</h3>
          <GameBoard className='game-board'
            key={this.state.gameKey}
            playerTurn={this.props.playerTurn}
            computerMove={this.props.computerMove}
            board={this.props.board}
            playerMove={this.props.playerMove}
            playerSigil={this.props.playerSigil}
            computerSigil={this.props.computerSigil}
            winner={this.props.winner}
            tileClick={this.handleUserClickThrottled} />
          {notifier}
        </div>
      )
    }
  }
}

TicTacToe.propTypes = {
  playerTurn: React.PropTypes.bool,
  computerMove: React.PropTypes.func.isRequired,
  winner: React.PropTypes.any.isRequired,
  resetGame: React.PropTypes.func.isRequired,
  playerMove: React.PropTypes.func.isRequired,
  playerSigil: React.PropTypes.string,
  init: React.PropTypes.func.isRequired,
  board: React.PropTypes.array.isRequired,
  computerSigil: React.PropTypes.string.isRequired,
  motivationalMessage: React.PropTypes.string.isRequired
}

export default TicTacToe
