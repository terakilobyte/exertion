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
        playerTurn={props.playerTurn}
        computerMove={props.computerMove}
        board={props.board}
        playerMove={props.playerMove}
        playerSigil={props.playerSigil}
        computerSigil={props.computerSigil}
        winner={props.winner}
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
  row: React.PropTypes.string.isRequired,
  tileClick: React.PropTypes.func.isRequired,
  playerMove: React.PropTypes.func.isRequired,
  board: React.PropTypes.array.isRequired,
  playerTurn: React.PropTypes.bool,
  playerSigil: React.PropTypes.string,
  computerSigil: React.PropTypes.string,
  winner: React.PropTypes.any.isRequired
}

export default GameRow
