import React, { Component } from 'react';
import './App.css';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import moviesReducer from './reducers/moviesReducer';
// import { moviesLoaded } from './actions/moviesActions';
import Movies from './components/Movies';
// import movies from './movies.json';
import thunk from 'redux-thunk';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);
// const store = createStore(reducer, enhancer);

const store = createStore(combineReducers({ movies: moviesReducer }), enhancer);

// const moviesLoadedAction = moviesLoaded(movies);

// store.dispatch(moviesLoadedAction);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Movies />
        </div>
      </Provider>
    );
  }
}

export default App;
