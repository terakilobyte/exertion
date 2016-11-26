import React from 'react'
import GameTile from './GameTile'

const GameBoard = (props) => {

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
 }

  // ======================================================
  // GameRow
  // ======================================================

  const GameRow = () => {
    const tiles = Object.keys(rows).map((key, idx) => {
      return (
        <GameTile column={key}
          key={key}
          row={rows[key]}
          tileClick={props.tileClick} />
      )
    })

    return (
      <div className='game-row'>
        {tiles}
      </div>
    )
  }

  const gameColumns = Object.keys(columns).map(elem => {
    return (
      <GameRow key={elem}
        row={elem}
        tileClick={props.tileClick} />
    )
  })

  return (
    <div className='game-board'>
      {gameColumns}
    </div>
  )
}

GameBoard.propTypes = {
  tileClick: React.PropTypes.func.isRequired
}

export default GameBoard
