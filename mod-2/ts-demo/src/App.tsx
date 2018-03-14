import * as React from 'react';
import './App.css';

const logo = require('./logo.svg');

interface AppState {
  counter: number| null;
}

interface AppProps {
  firstName: string;
}

class App extends React.Component<AppProps, AppState> {
  render() {
    const { firstName } = this.props;
    this.setState({ counter: null });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {firstName}
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
