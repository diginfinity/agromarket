import React, { useState, Fragment } from 'react';
import TitleCard from '../layout/cards/TitleCard';
import Footer from '../layout/pagepart/Footer';
import FullSearchItem from '../layout/pagepart/FullSearchItem';
import LogoStrip from '../layout/pagepart/LogoStrip';
import CatalogueCard from '../layout/cards/CatalogueCard';
import img from '../../assets/catalogue.svg';

function Catalogues() {
  const [catalogues, setCatalogues] = useState([
    {
      name: "FAG",
      img
    },
    {
      name: "FKL Kardanska vratila",
      img
    },
    {
      name: "Loctite",
      img
    },
    {
      name: "FKL radkapne",
      img
    },
    {
      name: "Corteco",
      img
    }
  ])

  return (
    <Fragment>
      <div className="uk-container uk-margin-top">
        <div className="uk-margin-large-top">
          <TitleCard title="Katalozi" />
        </div>
        <div className="uk-margin-top catalogues-flex-items">
          {catalogues.map(cat => (
            <CatalogueCard
              key={cat.name}
              name={cat.name}
              img={cat.img}
            />
          ))}
        </div>
      </div>
      <LogoStrip />
      <Footer />
    </Fragment>
  );
}

export default Catalogues;
