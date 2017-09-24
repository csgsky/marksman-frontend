import React, { Component } from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { 
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import * as actions from '../src/actions/counter'
import Photo from './containers/photo.jsx'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Marksman</h2>
          </div>
          <p className="App-intro">
            react、 redux、 react-router、 redux-action、 redux-observable、rxjs.
          </p>
          <button className="App-count">{this.props.count}</button>
          <br />
          <button className="App-add" onClick={this.props.add}>add</button>
          <br />
          <button className="App-reduce" onClick={this.props.reduce}>reduce</button>
          <br />
          <img className="Avatar"
            src={this.props.avatar}
            alt="allen"
          />
          <br />
          <li><Link to="/photo">跳到 photo</Link></li>
          <br />
          <Route path="/photo" component={Photo}/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({counter}) => counter

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
