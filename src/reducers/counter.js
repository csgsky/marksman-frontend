import * as types from '../actions/counter'

const initState = {
  count: 0
}

export default function counter (state = initState, action = {}) {
  switch (action.type) {
    case types.ADD_NUMBER:
      return {
        ...state,
        count: state.count + 1
      }
    case types.REDUCE_NUMBER:
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state;
  }
}

