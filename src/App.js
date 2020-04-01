import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Poster from './components/Poster';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Poster />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
