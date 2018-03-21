import React, { PureComponent } from 'react';

class Greeter extends PureComponent {
  render() {
    console.count('Greeter');
    const { name } = this.props;

    return <div>Hello: {name}</div>;
  }
}

// const Greeter = ({ name }) => {
//   console.count('Greeter');
//   return <div>Hello: {name}</div>;
// };
export default Greeter;
