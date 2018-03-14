import React, { Component } from 'react';

class ClockUI extends Component {
  render() {
    const { time } = this.props;
    return <div>De tijd is: {time.toLocaleTimeString()}</div>;
  }
}

export default ClockUI;
