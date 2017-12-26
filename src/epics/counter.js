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
                  return Observable.concat(
                      Observable.of(actions.after()),
                      Observable.of(actions.after())
                  )
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
