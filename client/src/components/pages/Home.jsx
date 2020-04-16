import React, { useState, Fragment } from 'react';
import TitleCard from '../layout/cards/TitleCard';
import MainCard from '../layout/cards/MainCard';
import RepresentContainer from '../layout/pagepart/RepresentContainer';
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
      isAccentuated: true,
      to: "/lezajevi",
      text: "Pogledajte sve  lezajeve"
    },
    {
      title: "Spojnice",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, architecto.",
      img,
      isAccentuated: false,
      to: "/spojnice",
      text: "Pogledajte sve spojnice"
    },
    {
      title: "Kucista",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, architecto.",
      img,
      isAccentuated: false,
      to: "/kucista",
      text: "Pogledajte sva kucista"
    },
    {
      title: "Remeni",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, architecto.",
      img,
      isAccentuated: true,
      to: "/remeni",
      text: "Pogledajte sve remene"
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
