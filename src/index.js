import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createEpicMiddleware } from 'redux-observable'

import rootEpic from '../src/epics/index'
import rootReducer from '../src/reducers/index'

import Game from './App'

const container = document.getElementById('root')

const epicMiddleware = createEpicMiddleware(rootEpic)

const store = createStore(
  rootReducer,
  composeWithDevTools(
    compose(
      applyMiddleware(epicMiddleware)
      )
  )
)

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  container
)

