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

const playerMove = (state) => ({ move: state.move, type: PLAYER_MOVE })
const computerMove = () => ({ type: COMPUTER_MOVE })
const init = ({playerSigil}) => ({ playerSigil, type: INIT })
const resetGame = () => ({ type: RESET_GAME })

export const actions = {

  playerMove,
  computerMove,
  init,
  resetGame
}

const motivators = [
  'May as well give up',
  'I use minimax bro',
  'Do you even lift?',
  'The best you can do is draw'
]

const tileBoard = [
  'topLeft', 'topMiddle', 'topRight',
  'centerLeft', 'centerMiddle', 'centerRight',
  'bottomLeft', 'bottomMiddle', 'bottomRight'
]

const getMotivationalMessage = () => {
  return motivators[Math.floor(Math.random() * 4)]
}

const initialState = {
  board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  depth: 0,
  playerTurn: true,
  winner: false,
  playerSigil: 'X',
  computerSigil: 'O',
  motivationalMessage: getMotivationalMessage()
}

export function reducer (state = initialState, action) {
  let newState
  switch (action.type) {
    case PLAYER_MOVE:
      let board = state.board.slice()
      let move = tileBoard.indexOf(action.move)
      board[move] = state.playerSigil
      newState = {...state, ...{board}}
      newState.playerTurn = !state.playerTurn
      newState.winner = mini.terminalState(board)
      return newState

    case COMPUTER_MOVE:
      if (state.playerTurn) {
        // keep the computer from giving no hope
        return state
      }
      mini.miniMax(state.board, state.depth, state.computerSigil)
      newState = {...{}, ...state}
      newState.depth = newState.depth + 1
      newState.board = mini.choice
      newState.playerTurn = !newState.playerTurn
      newState.winner = mini.terminalState(newState.board)
      newState.motivationalMessage = getMotivationalMessage()
      return newState

    case RESET_GAME:
      return initialState

    case INIT:
      newState = {...initialState}
      newState.playerSigil = action.playerSigil
      newState.computerSigil = action.playerSigil === 'X' ? 'O' : 'X'
      newState.playerTurn = newState.playerSigil === 'X'
      return newState

    default:
      return state
  }
}
