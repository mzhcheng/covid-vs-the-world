import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Poster from './components/Poster';
import Overlay from './components/Overlay';

import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Poster />
        </Route>
        <Route path="/overlay">
          <Poster>
            <Overlay />
          </Poster>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
