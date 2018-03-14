import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Demo from './components/Demo';
import Hello from './components/Hello';
import Clock from './components/Clock';

const theName = 'Piet';

class App extends Component {
  state = {
    count: 0
  };

  onClick = e => {
    // alert('Hi')
    // console.log(e)
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { count } = this.state;
    const { time, ...rest } = this.props;
    const data = [1, 2, 3, 4, 5, 6];
    return (
      <div className="the-app">
        <Clock />
        <button onClick={this.onClick}>Click me {count}</button>
        <div>Het is {time}</div>
        Dit is een div
        <ul>
          <li>Een list item</li>
        </ul>
        <Hello name={theName} />
        {data.map((i, index) => <Demo key={index} i={i} />)}
      </div>
    );
  }
}

export default App;
