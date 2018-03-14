import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route, Switch, Redirect, Link as MyLink } from 'react-router-dom';

import Cat from './components/Cat';
import Dog from './components/Dog';
import NotFound from './components/NotFound';

const admin = false;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <h1 className="App-title">Welcome to React-Router</h1>
            <MyLink to="/cat">Cats</MyLink>
            &nbsp;
            <MyLink to="/dog">Dogs</MyLink>
            &nbsp;
            {admin && <MyLink to="/fish">Fish</MyLink>}
          </header>
          <div>
            <Switch>
              <Redirect path="/" exact to="/cat" />
              <Route path="/cat" exact component={Cat} />
              <Route path="/dog" exact component={Dog} />
              <Route path="/cat/:catname" component={Cat} />
              {/* <Route path="/cat/:catname" render={() => <Cat />} /> */}
              <Route path="/cat" component={Dog} />
              <Redirect path="/dog/:param" to="/fish" />

              <Route component={NotFound} />
              {/* <Redirect to="/cat" /> */}
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
