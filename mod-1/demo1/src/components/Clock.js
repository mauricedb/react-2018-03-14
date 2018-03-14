import React, { Component } from 'react';
import ClockUI from './ClockUI';

class Clock extends Component {
  state = {
    now: new Date()
  };

  componentDidMount() {
    setInterval(() => this.setState({ now: new Date() }), 1000);
  }

  render() {
    const { now } = this.state;
    return <ClockUI time={now} />;
  }
}

export default Clock;
