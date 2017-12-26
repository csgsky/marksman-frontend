// import {createConstAndAction} from './utils'
export const ADD_NUMBER = 'ADD_NUMBER'
export const REDUCE_NUMBER = 'REDUCE_NUMBER'
export const BEFORE = 'BEFORE'
export const AFTER = 'AFTER'


export function add () {
  return {
    type: ADD_NUMBER
  }
}

export function before () {
  return {
    type: BEFORE
  }
}
export function after () {
  return {
    type: AFTER
  }
}

export function reduce () {
  return {
    type: REDUCE_NUMBER
  }
}
