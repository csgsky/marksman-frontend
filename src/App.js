import React, { Component } from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../src/actions/counter'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          react、 redux、 react-router、 redux-action、 redux-observable.
        </p>
        <button className="App-count">{this.props.count}</button>
        <br />
        <button className="App-add" onClick={this.props.add}>add</button>
        <br />
        <button className="App-reduce" onClick={this.props.reduce}>reduce</button>
      </div>
    );
  }
}

const mapStateToProps = ({counter}) => counter

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
