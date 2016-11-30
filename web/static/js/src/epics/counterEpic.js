import 'rxjs/Observable'
import 'rxjs/add/operator/mapTo'
import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/do'
import { combineEpics } from 'redux-observable'
import {ADD, SUB, ASYNCADD, ASYNCSUB} from '../actions'

const addEpic = action$ => {
  console.log(action$)
  return aaddEpic(action$)
}

const aaddEpic = action$ =>
  action$.ofType(ASYNCADD)
         .do(x => console.log('epic called with ', x))
         .delay(1000)
         .mapTo({type: ADD})

const subEpic = action$ =>
  action$.ofType(ASYNCSUB)
         .delay(1000)
         .mapTo({type: SUB})

export default combineEpics(addEpic, subEpic)

