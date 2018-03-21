import React, { Component } from 'react';

export default TheChildComponent =>
  class extends Component {
    state = { now: new Date() };

    componentDidMount() {
      setInterval(() => this.setState({ now: new Date() }), 1000);
    }

    render() {
      const { now } = this.state;
      return <TheChildComponent {...this.props} now={now} />;
    }
  };
