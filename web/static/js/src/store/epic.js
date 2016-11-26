import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

const rootEpic = combineEpics

export const makeRootEpic= (epics) =>
  createEpicMiddleware(new BehaviorSubject(combineEpics(...epics))

    // todo finish this
    /* export const injectReducer = (store, { key, reducer }) => (//later)*/


    /* export default makeRootEpic*/
