import * as types from '../actions/counter'

const initState = {
  count: 0,
  avatar: 'http://images2017.cnblogs.com/blog/1044137/201707/1044137-20170728113347665-276630558.png'
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

