import React, { useState, Fragment } from 'react';
import TitleCard from '../layout/cards/TitleCard';
import Footer from '../layout/pagepart/Footer';
import FullSearchItem from '../layout/pagepart/FullSearchItem';
import LogoStrip from '../layout/pagepart/LogoStrip';
import CatalogueCard from '../layout/cards/CatalogueCard';
import fkl from '../../assets/catalogues/fkl.svg';
import agropoint from '../../assets/catalogues/agropoint.svg';
import loctite from '../../assets/catalogues/loctite.svg';
import corteco from '../../assets/catalogues/corteco.svg';
import fag from '../../assets/catalogues/fag.svg';

function Catalogues() {
  const [catalogues, setCatalogues] = useState([
    {
      name: "FAG",
      img: fag
    },
    {
      name: "FKL Kardanska vratila",
      img: fkl
    },
    {
      name: "Loctite",
      img: loctite
    },
    {
      name: "FKL radkapne",
      img: agropoint
    },
    {
      name: "Corteco",
      img: corteco
    }
  ])

  return (
    <Fragment>
      <div className="uk-container uk-margin-top">
        <div className="uk-margin-top">
          <TitleCard title="Katalozi" />
        </div>
        <div className="uk-margin-top uk-flex uk-flex-wrap">
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
