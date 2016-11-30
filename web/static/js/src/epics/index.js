import { createEpicMiddleware } from 'redux-observable'
import counterEpics from './counterEpic'

const rootEpic = createEpicMiddleware(require('./counterEpic').default)
export default rootEpic
