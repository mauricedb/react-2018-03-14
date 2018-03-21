import React, { Component } from 'react';
import './App.css';
// import AppPresentation from './components/AppPresentation';
import { AppPresentation } from './components';

class AppContainer extends Component {
  state = { person: { firstName: 'Maurice' } };

  changeFirstName = firstName => {
    const person = { ...this.state.person, firstName };
    // const { person } = this.state;
    // person.firstName = firstName;
    this.setState({ person });
  };

  render() {
    const { person } = this.state;

    return <AppPresentation person={person} onChange={this.changeFirstName} />;
  }
}

export default AppContainer;
