import React, { Component } from 'react';

class Cat extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <h2>Cat {this.props.catname}</h2>
        <img src="/cat.jpg" alt="Cat" />
      </div>
    );
  }
}

class RoutedCat extends Component {
  render() {
    console.log(this.props);

    const { catname } = this.props.match.params;
    return <Cat catname={catname} />;
  }
}

export default RoutedCat;
