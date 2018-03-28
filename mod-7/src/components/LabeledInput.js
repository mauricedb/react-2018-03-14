import React, { PureComponent } from 'react';

class LabeledInput extends PureComponent {
  onChange = e => {
    const { name, valueChanged } = this.props;
    const { value } = e.target;
    valueChanged({
      name,
      value
    });
  };
  render() {
    const { children, value, name, valueChanged, ...props } = this.props;

    return (
      <div>
        <label>
          {children}
          <input type="text" {...props} value={value} onChange={this.onChange} />
        </label>
      </div>
    );
  }
}

export default LabeledInput;
