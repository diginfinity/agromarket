import React, { Fragment } from 'react';
import './styles/index.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './components/layout/Nav';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Assortment from './components/pages/Assortment';
import Catalogues from './components/pages/Catalogues';
import Product from './components/pages/Product';
import Contact from './components/pages/Contact';
import HelpCard from './components/layout/cards/HelpCard';
import DimensionSearch from './components/layout/search/DimensionSearch';
import CatalogueCardSingle from './components/pages/CatalogueCardSingle';

function App() {
  return (
    <Router>
      <Switch>
        <Fragment>
          <Nav additional />
          <Route exact path="/" component={Home} />
          <Route exact path="/o-nama" component={About} />
          <Route exact path="/asortiman" component={Assortment} />
          <Route exact path="/asortiman/:name" component={Product} />
          <Route exact path="/katalozi" component={Catalogues} />
          <Route exact path="/kontakt" component={Contact} />
          <Route exact path="/help" component={HelpCard} />
          <Route exact path="/dim" component={DimensionSearch} />
          <Route exact path="/katalog/:name" component={CatalogueCardSingle} />
        </Fragment>
      </Switch>
    </Router>
  );
}

export default App;
