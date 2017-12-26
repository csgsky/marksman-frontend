import React, { Component } from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Observable, Scheduler, Subject} from 'rxjs/Rx'
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
      value: ''
    }
  }
  
  componentDidMount() {
    // this.btnObservable = Observable
    //     .fromEvent(this.refs.btnClick, 'click')
    //     .pluck('target', "tagName")
    //     .subscribe(it => {
    //       this.btnObservable.unsubscribe()
    //       console.log(it)
    //     })

    // expand 1, 2, 4, 8, 16, 32, ......
    //   Observable
    //       .fromEvent(btnClick, 'click')
    //       .mapTo(1)
    //       .expand(x => Observable.of(2 * x).delay(1000))
    //       .take(10).subscribe(x => console.log(x));

    // mergeMap
    // Observable
    //   .of('a', 'b', 'c')
    //     .mergeMap(x =>
    //       Observable.of('').map(i => x+i))
    //     .subscribe(x => console.log(x));

    // concatMapTo
    // var clicks = Observable.fromEvent(btnClick, 'click');
    // var result = clicks.concatMapTo(Observable.interval(1000).take(4));
    // result.subscribe(x => console.log(x));

    // subject
    // const source = Observable
    //     .create((observer) => {
    //       observer.next(1);
    //       observer.next(2);
    //       observer.next(3);
    //       })
    // const subject = new Subject();
    // const multicasted = source.multicast(subject)
    // multicasted.subscribe((v) => {
    //   console.log("A => " + v)
    // });
    // multicasted.subscribe((v) => {
    //   console.log("B => " + v)
    // });
    // multicasted.connect();

    // 调度
    //   var arr = [];
    //   for (var i=0; i<1000; i++) {
    //     arr.push(i);
    //   }
    //   var timeStart = Date.now();
    //   console.log('start Time:  ', timeStart)
    //   Observable.from(arr, Scheduler.queue).subscribe(
    //       function onNext(i) {
    //         // console.log(i)
    //       },
    //       function onCompleted() {
    //         const nowTime =  Date.now()
    //         // console.log('now Time:   ' + nowTime);
    //         console.log('Total time: ' + (nowTime - timeStart) + 'ms');
    //       });

    // 点击事件
    // Observable
    //   .fromEvent(this.refs.btnClick, 'click')
    //   .debounceTime(1000)
    //   .subscribe(() => {
    //     console.log('click')
    //   })

    // 修改需求，需要跟网络搜索引擎保持相同的交互
    // 在用户输入的过程中，每隔 1 秒去网络请求，同时搜索的关键字大于 8 位。
    // const  hahah =Observable
    //     .fromEvent(this.refs.titleInput, 'keyup')
    //     .map(() => this.refs.titleInput.value)
    //     .debounceTime(1000)
    //     .filter(v => v.length > 8)
    //     .subscribe((value) => {
    //       this.setState({value})
    //     })

    // 按下回车键实现搜索
    // 并保证输入的大于8位
    // 然后去搜索
    // Observable
    //   .fromEvent(this.refs.titleInput, 'keypress')
    //   .filter(e => e.keyCode === 13)
    //   .map(() => this.refs.titleInput.value)
    //   .filter(v => v.length > 8)
    //   .subscribe((value) => {
    //     console.log(value)
    //     $Ajax()........
    //   })
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
          <br />
          <br />
          <p>{this.state.value}</p>
          <input type="text" ref="titleInput"/>

          <br/>
          <button className="App-add" ref="btnClick">点击事件</button>
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
