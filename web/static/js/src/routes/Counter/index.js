import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'counter',
  getComponent (nextState, cb) {
    const Counter = require('./containers/CounterContainer').default
    const reducer = require('./reducer').default
    injectReducer(store, { key: 'sum', reducer })
    cb(null, Counter)
  }
})
