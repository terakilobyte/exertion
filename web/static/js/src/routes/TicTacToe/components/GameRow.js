import React from 'react'

import GameTile from './GameTile'

export const GameRow = (props) => {
  const rows = {
    0: 'top',
    1: 'center',
    2: 'bottom'
  }

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

GameRow.propTypes = {
  tileClick: React.PropTypes.func.isRequired
}

export default GameRow
