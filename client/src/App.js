import React, { Fragment } from 'react';
import './styles/scss/index.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './components/layout/Nav';
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Fragment>
          <Nav additional />
          <Route exact path="/" component={Home} />
        </Fragment>
      </Switch>
    </Router>
  );
}

export default App;
