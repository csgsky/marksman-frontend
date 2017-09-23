import { combineEpics } from 'redux-observable'

import counterEpic from './counter'

export default combineEpics(
  counterEpic
)
