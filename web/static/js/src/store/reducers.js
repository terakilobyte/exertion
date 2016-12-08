import { combineReducers } from 'redux'
import locationReducer from './location'
import {sum as counter} from '../routes/Counter/modules'
import {reducer as percolation} from '../routes/Percolation/modules/reducer'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    counter,
    percolation,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
