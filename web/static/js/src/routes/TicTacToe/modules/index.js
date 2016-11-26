import mini from './minimax'
const PLAYER_MOVE = 'PLAYER-MOVE'
const COMPUTER_MOVE = 'COMPUTER-MOVE'
const INIT = 'INIT'
const RESET_GAME = 'RESET_GAME'

export const constants = {
  PLAYER_MOVE,
  COMPUTER_MOVE,
  INIT,
  RESET_GAME
}

const playerMove = (state) => ({ state, type: PLAYER_MOVE })
const computerMove = () => ({ type: COMPUTER_MOVE })
const init = () => ({ type: INIT })
const resetGame = (state) => ({ state, type: RESET_GAME })

export const actions = {
  playerMove,
  computerMove,
  init,
  resetGame
}

const tileBoard = [
  'topLeft', 'topMiddle', 'topRight',
  'centerLeft', 'centerMiddle', 'centerRight',
  'bottomLeft', 'bottomMiddle', 'bottomRight'
]

const initialState = {
  board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  depth: 0,
  playerTurn: true,
  winner: false,
  playerSigil: 'X',
  computerSigil: 'O'
}

export const reducer = (state = initialState, action) => {
  let newState
  switch (action.type) {
    case PLAYER_MOVE:
      let board = state.board.slice()
      let move = tileBoard.indexOf(state.move)
      board[move] = state.playerSigil
      newState = {...state, ...{board}}
      newState.playerTurn = !state.playerTurn
      newState.winner = mini.terminalState(board)
      return newState

    case COMPUTER_MOVE:
      mini.miniMax(state.board, state.depth, state.computerSigil)
      newState = {...{}, ...state}
      newState.depth = newState.depth + 1
      newState.board = mini.choice
      newState.playerTurn = !newState.playerTurn
      newState.winner = mini.terminalState(newState.board)
      return newState

    case RESET_GAME:
      return initialState

    case INIT:
      newState = {...initialState, ...state}
      newState.playerTurn = newState.playerSigil === 'X'
      newState.computerSigil = newState.playerSigil === 'X' ? 'O' : 'X'
      return newState
  }
}
