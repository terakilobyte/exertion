import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { browserHistory } from 'react-router'
import makeRootReducer from './reducers'
import { updateLocation } from './location'
const rootEpic = require('../epics/index').default

export default (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk, rootEpic]

  // ======================================================
  // Store Enhancers
  // ======================================================
  /* const enhancers = []
   * if (__DEV__) {
   *   const devToolsExtension = window.devToolsExtension
   *   if (typeof devToolsExtension === 'function') {
   *     enhancers.push(devToolsExtension())
   *   }
   * } */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
      makeRootReducer(),
    initialState,
      composeEnhancers(
          applyMiddleware(...middleware)
      )
  )
  store.asyncReducers = {}

  // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
  store.unsubscribeHistory = browserHistory.listen(updateLocation(store))

  return store
}
