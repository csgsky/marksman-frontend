import { combineEpics } from 'redux-observable'
import { Observable } from 'rxjs/Rx'
import * as actions from '../actions/counter'


function counterEpic (action$) {
  return action$.ofType(actions.ADD_NUMBER)
            .mergeMap((action) =>
              Observable.zip(
                Observable.of(2),
                Observable.of(2),
                (token, page) => ({token, page})
              ).flatMap(
                (it) => {
                  if (it.token && it.net === '1') {
                    return Observable.of(3)
                  }
                  return Observable.from(2)
                }
              ).map((it) => {
                return actions.add()
              }
            ).catch((error) => {
              console.log(error)
            })
       )
}
export default combineEpics(counterEpic)
