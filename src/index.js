import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import {Router, browserHistory, applyRouterMiddleware} from 'react-router';
import { Provider } from 'react-redux'
import {syncHistoryWithStore} from 'react-router-redux'
// import {useScroll} from 'react-router-scroll';
import { composeWithDevTools } from 'redux-devtools-extension'
import { createEpicMiddleware } from 'redux-observable'

import rootEpic from '../src/epics/index'
import rootReducer from '../src/reducers/index'
import getRoutes from './routes'

import Game from './App.jsx'

const container = document.getElementById('root')

// const history = syncHistoryWithStore(browserHistory, store, {
//   selectLocationState(state) {
//     return state.get('routing').toJS();
//   }
// });

// const routerConfig = {
//   history,
//   routes: getRoutes(store),
//   render: applyRouterMiddleware(useScroll())
// };

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

