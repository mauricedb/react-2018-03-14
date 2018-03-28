import React, { Component } from 'react';
import LabeledInput from './LabeledInput';

class PersonForm extends Component {
  submitPerson = e => {
    e.preventDefault();

    console.log(e)
    const person = {
      firstName: e.target.elements.firstName.value,
      lastName: e.target.elements.lastName.value
    };

    alert(JSON.stringify(person));
  };
  render() {
    return (
      <form onSubmit={this.submitPerson}>
        <h2>Person</h2>
        <div>
          <LabeledInput defaultValue="Maurice" name="firstName">Voornaam:</LabeledInput>
          <LabeledInput defaultValue="de Beijer" name="lastName">Achternaam</LabeledInput>
        </div>
        <div>
          <button>Bewaar</button>
        </div>
      </form>
    );
  }
}

export default PersonForm;
