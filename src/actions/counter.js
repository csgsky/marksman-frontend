// import {createConstAndAction} from './utils'
export const ADD_NUMBER = 'ADD_NUMBER'
export const REDUCE_NUMBER = 'REDUCE_NUMBER'

export function add () {
  return {
    type: ADD_NUMBER
  }
}

export function reduce () {
  return {
    type: REDUCE_NUMBER
  }
}
