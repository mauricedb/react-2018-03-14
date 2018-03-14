import React, { Component } from 'react';
import './App.css';

import Cat from './components/Cat';
import Dog from './components/Dog';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">Welcome to React-Router</h1>
          <a href="#">Cats</a>
          &nbsp;
          <a href="#">Dogs</a>
        </header>
        <div>
          <Cat />
          <Dog />
        </div>
      </div>
    );
  }
}

export default App;
