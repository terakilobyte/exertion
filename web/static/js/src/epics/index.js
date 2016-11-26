import { createEpicMiddleware } from 'redux-observable'
import counterEpics from './counterEpic'

const rootEpic = createEpicMiddleware(counterEpics)

export default rootEpic
