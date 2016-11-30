import { injectReducer } from '../../store/reducers'
import Counter from './containers/CounterContainer'

export default (store) => ({
  path: 'counter',
  component: Counter
  /* getComponent (nextState, cb) {
   *   const Counter = require('./containers/CounterContainer').default
   *   const reducer = require('./modules').default
   *   injectReducer(store, { key: 'counter', reducer })
   *   const WSActions = require('./modules/ws').default
   *   store.dispatch(WSActions.socketConnect())
   *   store.dispatch(WSActions.channelJoin('counter'))
   *   cb(null, Counter)
   * }*/
})
