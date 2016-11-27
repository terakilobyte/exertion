import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'tictactoe',
  getComponent (nextState, cb) {
    const TicTacToe = require('./containers/TicTacToe').default
    const reducer = require('./modules').reducer
    injectReducer(store, { key: 'tictactoe', reducer })
    cb(null, TicTacToe)
  }
})
