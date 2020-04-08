import React, { Fragment } from 'react';
import './styles/css/index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './components/layout/Nav';
import Pocetna from './components/pages/Pocetna';

function App() {
  return (
    <Router>
      <Switch>
        <Fragment>
          <Nav />
          <Route exact path="/" component={Pocetna} />
        </Fragment>
      </Switch>
    </Router>
  );
}

export default App;
