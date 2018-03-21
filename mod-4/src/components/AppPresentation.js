import React, { Component, PureComponent } from 'react';
import Greeter from './Greeter';
import Clock from './Clock';
import AnalogClock from './AnalogClock';
import NowProvider from './NowProvider';
import Counter from './Counter';

class AppPresentation extends PureComponent {
  onChange = e => {
    const { onChange } = this.props;
    onChange(e.target.value);
  };

  render() {
    const { person: { firstName } } = this.props;

    return (
      <div>
        <Counter />
        <NowProvider
          render={now => (
            <div>
              <Clock label="De tijd is:" now={now} />
              <AnalogClock time={now} />
            </div>
          )}
        />

        <div>
          <input value={firstName} onChange={this.onChange} />
        </div>
        {firstName ? <Greeter name={firstName} /> : <div>Noppes</div>}

        {/* {firstName && Greeter({ name: firstName })} */}
      </div>
    );
  }
}

export default AppPresentation;
