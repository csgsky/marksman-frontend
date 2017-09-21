import React, { Component } from 'react';
import Rx from 'rxjs'
import axios from 'axios'
import logo from './logo.svg';

import './App.css';

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      header: 'header'
    }
  }
  getHeader = () => {
    Rx.Observable
      .of('welcome to marksman')
      .delay(3000)
      .subscribe(
        (it) => {
          this.setState({
            header: it
          })
        })
  }

  render() {
    this.getHeader()
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.header}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload we.
        </p>
      </div>
    );
  }
}

export default App;
