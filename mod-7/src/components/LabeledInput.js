import React, { Component } from 'react';

class LabeledInput extends Component {
  render() {
    const { children, defaultValue, name } = this.props;

    return (
      <div>
        <label>
          {children}
          <input
            type="text"
            name={name}
            defaultValue={defaultValue}
          />
        </label>
      </div>
    );
  }
}

export default LabeledInput;
