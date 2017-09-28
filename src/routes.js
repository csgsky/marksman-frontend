import React from 'react'
import {Route} from 'react-router';

import App from './App.jsx'
import Photo from './containers/photo.jsx'

export default function getRoutes() {
  return (
    <Route path="/" component={App}>
      <Route path="photo" component={Photo} />
    </Route>
  )
}
