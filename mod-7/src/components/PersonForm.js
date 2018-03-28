import React, { Component } from 'react';
import LabeledInput from './LabeledInput';

class PersonForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isValid: false,
    errors: []
  };
  submitPerson = e => {
    e.preventDefault();

    console.log(e);
    // const person = {
    //   firstName: yh.firstName.value,
    //   lastName: e.target.elements.lastName.value
    // };

    const person = this.state;

    alert(JSON.stringify(person));
  };

  valueChanged = e => {
    const newState = { [e.name]: e.value };
    this.setState(newState, () => {
      const { firstName, lastName } = this.state;
      const errors = [];

      if (!firstName || !lastName) {
        if (!firstName){
          errors.push("Voornaam is verplicht!")
        }
        if (!lastName){
          errors.push("Achternaam is verplicht!")
        }
        this.setState({ isValid: false, errors });
      } else {
        this.setState({ isValid: true, errors });
      }
    });
  };

  render() {
    const { firstName, lastName, isValid, errors } = this.state;

    return (
      <form onSubmit={this.submitPerson}>
        <h2>Person</h2>

        <ul>{errors.map(er => <li key={er}>{er}</li>)}</ul>
        <div>
          <LabeledInput
            value={firstName}
            name="firstName"
            valueChanged={this.valueChanged}
          >
            Voornaam:
          </LabeledInput>
          <LabeledInput
            value={lastName}
            name="lastName"
            valueChanged={this.valueChanged}
          >
            Achternaam
          </LabeledInput>
        </div>
        <div>
          <button disabled={!isValid}>Bewaar</button>
        </div>
      </form>
    );
  }
}

export default PersonForm;
