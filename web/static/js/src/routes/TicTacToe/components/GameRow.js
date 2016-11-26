import React from 'react'

import GameTile from './GameTile'

export const GameRow = (props) => {
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

  const tiles = Object.keys(rows).map((key, idx) => {
    return (
      <GameTile column={columns[key]}
        key={key}
        row={rows[props.row]}
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
  tileClick: React.PropTypes.func.isRequired,
  row: React.PropTypes.string.isRequired
}

export default GameRow
