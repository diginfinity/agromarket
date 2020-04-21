import React, { useState, Fragment } from 'react';
import TitleCard from '../layout/cards/TitleCard';
import MainCard from '../layout/cards/MainCard';
import RepresentContainer from '../layout/pagepart/RepresentContainer';
import OtherCard from '../layout/cards/OtherCard';
import lezaj from '../../assets/lezaj.svg';
import hilzna from '../../assets/hilzna.svg';
import spojnica from '../../assets/spojnica.svg';
import kuciste from '../../assets/kuciste.svg';
import remen from '../../assets/remen.svg';
import remen2 from '../../assets/remen2.svg';
import logo from '../../assets/logos/wurth.svg';
import Footer from '../layout/pagepart/Footer';
import FullSearchItem from '../layout/pagepart/FullSearchItem';
import LogoStrip from '../layout/pagepart/LogoStrip';

function Home() {
  const [mainItems, setMainItems] = useState([
    {
      title: "Lezajevi",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, architecto.",
      img: lezaj,
      isAccentuated: true,
      to: "/lezajevi",
      text: "Pogledajte sve  lezajeve"
    },
    {
      title: "Spojnice",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, architecto.",
      img: spojnica,
      isAccentuated: false,
      to: "/spojnice",
      text: "Pogledajte sve spojnice"
    },
    {
      title: "Kucista",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, architecto.",
      img: kuciste,
      isAccentuated: false,
      to: "/kucista",
      text: "Pogledajte sva kucista"
    },
    {
      title: "Remeni",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, architecto.",
      img: remen,
      isAccentuated: true,
      to: "/remeni",
      text: "Pogledajte sve remene"
    }
  ])

  const [other, setOther] = useState([
    {
      title: "Lezajevi",
      img: lezaj,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      to: "/lezajevi"
    },
    {
      title: "Hilzne",
      img: hilzna,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      to: "/hilzne"
    },
    {
      title: "Kucista",
      img: kuciste,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      to: "/kucista"
    },
    {
      title: "Kucista",
      img: kuciste,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      to: "/kucista"
    },
    {
      title: "Remeni",
      img: remen2,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      to: "/remeni"
    },
    {
      title: "Klinasti remeni",
      img: remen,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      to: "/klinasti-remeni"
    }
  ])

  return (
    <Fragment>
      <div className="uk-container uk-margin-top">
        <div className="uk-margin-large-top">
          <TitleCard title="Najpopularniji proizvodi" />
        </div>
        <div className="uk-margin-large-top uk-flex uk-flex-wrap">
          {mainItems.map(item => (
            <MainCard
              key={item.title}
              title={item.title}
              desc={item.desc}
              img={item.img}
              isAccentuated={item.isAccentuated}
              to={item.to}
              text={item.text}
            />
          ))}
        </div>
        <div className="uk-margin-large-top">
          <TitleCard title="Zastupamo" />
        </div>
        <RepresentContainer />
        <div className="uk-margin-large-top">
          <TitleCard title="Ostalo u ponudi" />
        </div>
        <div className="uk-margin-large-top uk-margin-large-bottom uk-flex uk-flex-wrap">
          {other.map(item => (
            <OtherCard
              key={item.title}
              title={item.title}
              img={item.img}
              desc={item.desc}
              to={item.to}
            />
          ))}
        </div>
      </div>
      <LogoStrip />
      <Footer />
    </Fragment>
  );
}

export default Home;
