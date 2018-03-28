import React, { Component } from 'react';
import MoviesContainer from './components/MoviesContainer';

class App extends Component {
  render() {
    console.log('App render')
    return (
      <div>
        <header>
          <div>
          <h1>Movies</h1>
          </div>
        </header>
        <MoviesContainer />
      </div>
    );
  }
}

export default App;
