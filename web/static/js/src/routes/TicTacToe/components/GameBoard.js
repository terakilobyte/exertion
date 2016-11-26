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
             tileClick={props.tileClick} />
  ))
  return (
    <div className='game-board'>
      {grid}
    </div>
  )
}

GameBoard.propTypes = {
  tileClick: React.PropTypes.func.isRequired
}

export default GameBoard
