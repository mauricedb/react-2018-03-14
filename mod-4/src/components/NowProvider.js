import React, { Component } from 'react';

class NowProvider extends Component {
  state = { now: new Date() };

  componentDidMount() {
    setInterval(() => this.setState({ now: new Date() }), 1000);
  }

  render() {
    const { now } = this.state;
    const { render } = this.props;

    return render(now);
  }
}

export default NowProvider;
