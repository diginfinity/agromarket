import React, { useState, Fragment } from 'react';
import NameSearch from '../layout/search/NameSearch';
import DimensionSearch from '../layout/search/DimensionSearch';
import FilterSearch from '../layout/search/FilterSearch';
import TitleCard from '../layout/cards/TitleCard';
import MainCard from '../layout/cards/MainCard';
import RepresentCard from '../layout/cards/RepresentCard';
import OtherCard from '../layout/cards/OtherCard';
import LogoCard from '../layout/cards/LogoCard';
import img from '../../assets/lezaj.svg';
import logo from '../../assets/wurth.svg';
import Footer from '../layout/pagepart/Footer';

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

  const [logos, setLogos] = useState([
    {
      title: "Continental",
      logo
    },
    {
      title: "Corteco",
      logo
    },
    {
      title: "CX",
      logo
    },
    {
      title: "Fam",
      logo
    },
    {
      title: "FKL",
      logo
    },
    {
      title: "Loctite",
      logo
    },
    {
      title: "Optibelt",
      logo
    },
    {
      title: "Timken",
      logo
    },
    {
      title: "Wurth",
      logo
    }
  ])

  return (
    <Fragment>
      <div className="uk-container uk-margin-top">
        <div className="home-flex-search">
          <NameSearch />
          <DimensionSearch />
          <FilterSearch />
        </div>
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
        <div className="uk-margin-bottom home-flex-logo-items">
          {logos.map(item => (
            <LogoCard key={item.title} title={item.title} logo={item.logo} />
          ))}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Home;
