import React, { Component } from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Rx from 'rxjs'
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

  constructor(props) {
    super(props)
    this.state = {
      result: 0,
      testArr: [1, 2, 3, 4, 4, 5, 6, 7]
    }
  }
  componentDidMount() {
    let input = this.refs.titleInput
    Rx.Observable
      .fromEvent(input, 'keypress')
      .filter(e => e.keyCode === 13)
      .map(() => input.value)
      .filter(v => v.length > 0)
      .subscribe((value) => {
        console.log(value)
      })

    // Rx.Observable
    //   .from(this.state.testArr)
    //   .distinct()
    //   .scan((origin, next) => origin + next, 0)
    //   .subscribe(it => {
    //     console.log(it)
    //     this.setState({result: it})
    //   }
    // )
  }


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
          <button className="App-count">{this.state.result}</button>
          <br />
          <input type="text" ref="titleInput"/>
          <br /><br /><br />
          <button className="App-add">{this.props.count}</button>
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
          <li><Link to="/">首页</Link></li>
          <li><Link to="/photo">photo</Link></li>
          <li><Link to="/about">about us</Link></li>
          <br />
          <Route path="/" component={Home}/>
          <Route path="/photo" component={Photo}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <div>
    <h2>首页</h2>
  </div>
)

const About = () => (
  <div>
    <h2>关于</h2>
  </div>
)

const mapStateToProps = ({counter}) => counter

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
