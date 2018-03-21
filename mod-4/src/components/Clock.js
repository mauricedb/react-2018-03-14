import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withTime from './withTime';
import Greeter from './Greeter';

// class Clock extends Component {
//   state = { now: new Date() };

//   componentDidMount() {
//     setInterval(() => this.setState({ now:  new Date() }), 1000);

//   }

//   render() {
//     const { now } = this.state;

//     return <div>De tijd is: {now.toLocaleTimeString()}</div>;
//   }
// }

class Clock extends Component {
  static propTypes = {
    now: PropTypes.instanceOf(Date).isRequired
  };

  static defaultProps = {
    now: new Date(2000, 1, 1)
  };

  fn = () => {};
  render() {
    const { label, now } = this.props;

    return (
      <div>
        {label} {now && now.toLocaleTimeString()}
        <Greeter fn={this.fn} />
      </div>
    );
  }
}

// export default withTime(Clock);
export default Clock;
