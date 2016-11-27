import 'rxjs/Observable'
import 'rxjs/add/operator/mapTo'
import 'rxjs/add/operator/delay'
import { combineEpics } from 'redux-observable'
import {ADD, SUB, ASYNCADD, ASYNCSUB} from '../actions'

const addEpic = action$ =>
  action$.ofType(ASYNCADD)
         .delay(1000)
         .mapTo({type: ADD})

const subEpic = action$ =>
  action$.ofType(ASYNCSUB)
         .delay(1000)
         .mapTo({type: SUB})

export default combineEpics(addEpic, subEpic)

