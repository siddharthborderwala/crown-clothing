import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/HomePage.component';

const HatsPage = () => (
  <div>
    <h1>HATS</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
