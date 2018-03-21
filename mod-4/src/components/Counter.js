import React, { Component } from 'react';

import CounterPresentation from './CounterPresentation';

class Counter extends Component {
  state = { count: 0, x: 1 };
  increment = () => {
    console.log(this.state.count);
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 1 });
    this.setState(state => ({ count: state.count + 1 }), () => console.log(this.state));
    this.setState(state => ({ count: state.count + 1 }));
    
  };
  render() {
    const { count } = this.state;

    return <CounterPresentation count={count} increment={this.increment} />;
  }
}

export default Counter;
