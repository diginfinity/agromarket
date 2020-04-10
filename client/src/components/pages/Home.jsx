import React, { useState, Fragment } from 'react';
import TitleCard from '../layout/cards/TitleCard';
import MainCard from '../layout/cards/MainCard';
import RepresentCard from '../layout/cards/RepresentCard';
import OtherCard from '../layout/cards/OtherCard';
import img from '../../assets/lezaj.svg';
import logo from '../../assets/wurth.svg';
import Footer from '../layout/pagepart/Footer';
import FullSearchItem from '../layout/pagepart/FullSearchItem';
import LogoStrip from '../layout/pagepart/LogoStrip';

function Home() {
  const [mainItems, setMainItems] = useState([
    {
      title: "Lezajevi",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, architecto.",
      img,
      isAccentuated: true
    },
    {
      title: "Spojnice",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, architecto.",
      img,
      isAccentuated: false
    },
    {
      title: "Kucista",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, architecto.",
      img,
      isAccentuated: false
    },
    {
      title: "Remeni",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, architecto.",
      img,
      isAccentuated: false
    }
  ])

  const [represent, setRepresent] = useState([
    {
      name: "Fag",
      img
    },
    {
      name: "Loctite",
      img
    },
    {
      name: "Schaeffer Group",
      img
    },
    {
      name: "Corteco",
      img
    },
    {
      name: "CX",
      img
    },
    {
      name: "Fam Krusevac",
      img
    },
    {
      name: "Ostali brendovi",
      img
    }
  ])

  const [other, setOther] = useState([
    {
      title: "Lezajevi",
      img,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      to: "/lezajevi"
    },
    {
      title: "Hilzne",
      img,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      to: "/hilzne"
    },
    {
      title: "Kucista",
      img,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      to: "/kucista"
    },
    {
      title: "Kucista",
      img,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      to: "/kucista"
    },
    {
      title: "Remeni",
      img,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      to: "/remeni"
    },
    {
      title: "Klinasti remeni",
      img,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      to: "/klinasti-remeni"
    }
  ])

  return (
    <Fragment>
      <div className="uk-container uk-margin-top">
        <FullSearchItem />
        <div className="uk-margin-large-top">
          <TitleCard title="Najpopularniji proizvodi" />
        </div>
        <div className="uk-margin-large-top home-flex-main-items">
          {mainItems.map(item => (
            <MainCard
              key={item.title}
              title={item.title}
              desc={item.desc}
              img={item.img}
              isAccentuated={item.isAccentuated}
            />
          ))}
        </div>
        <div className="uk-margin-large-top">
          <TitleCard title="Zastupamo" />
        </div>
        <div className="uk-margin-large-top home-flex-represent-items">
          {represent.map(item => (
            <RepresentCard
              key={item.name}
              name={item.name}
              img={item.img}
            />
          ))}
        </div>
        <div className="uk-margin-large-top">
          <TitleCard title="Ostalo u ponudi" />
        </div>
        <div className="uk-margin-large-top uk-margin-large-bottom home-flex-other-items">
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
