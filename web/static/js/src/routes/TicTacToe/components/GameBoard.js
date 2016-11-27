import React from 'react'
import '../styles/TicTacToe.scss'
import GameRow from './GameRow'

const GameBoard = (props) => {
  // ======================================================
  // Grid
  // ======================================================
  const grid = Object.keys([0, 1, 2]).map(rowKey => (
    <GameRow key={rowKey}
      row={rowKey}
      playerTurn={props.playerTurn}
      computerMove={props.computerMove}
      board={props.board}
      playerMove={props.playerMove}
      playerSigil={props.playerSigil}
      computerSigil={props.computerSigil}
      winner={props.winner}
      tileClick={props.tileClick} />
  ))
  return (
    <div className='game-board'>
      {grid}
    </div>
  )
}

GameBoard.propTypes = {
  tileClick: React.PropTypes.func.isRequired,
  playerMove: React.PropTypes.func.isRequired,
  board: React.PropTypes.array.isRequired,
  playerTurn: React.PropTypes.bool,
  playerSigil: React.PropTypes.string,
  computerSigil: React.PropTypes.string,
  winner: React.PropTypes.any.isRequired

}

export default GameBoard
