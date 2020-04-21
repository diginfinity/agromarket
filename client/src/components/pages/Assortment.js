import React, { Fragment, useState } from 'react';
import FullSearchItem from '../layout/pagepart/FullSearchItem';
import TitleCard from '../layout/cards/TitleCard';
import OtherCard from '../layout/cards/OtherCard';
import RepresentCard from '../layout/cards/RepresentCard';
import img from '../../assets/lezaj.svg';
import LogoStrip from '../layout/pagepart/LogoStrip';
import Footer from '../layout/pagepart/Footer';

function Assortment() {
  const [items, setItems] = useState([
    {
      title: "Lezajevi",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, architecto.",
      img,
      to: "/lezajevi"
    },
    {
      title: "Hilzne",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, architecto.",
      img,
      to: "/hilzne"
    },
    {
      title: "Kucista",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, architecto.",
      img,
      to: "/kucista"
    },
    {
      title: "Kucista",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, architecto.",
      img,
      to: "/kucista"
    },
    {
      title: "Remeni",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, architecto.",
      img,
      to: "/remeni"
    },
    {
      title: "Klinasti remeni",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, architecto.",
      img,
      to: "/klinasti-rememni"
    },
    {
      title: "Lezajevi",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, architecto.",
      img,
      to: "/lezajevi"
    },
    {
      title: "Hilzne",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, architecto.",
      img,
      to: "/hilzne"
    },
    {
      title: "Kucista",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, architecto.",
      img,
      to: "/kucista"
    },
    {
      title: "Kucista",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, architecto.",
      img,
      to: "/kucista"
    },
    {
      title: "Remeni",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, architecto.",
      img,
      to: "/remeni"
    },
    {
      title: "Klinasti remeni",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, architecto.",
      img,
      to: "/klinasti-rememni"
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

  return (
    <Fragment>
      <div className="uk-container uk-margin-top">
        <div className="uk-margin-top">
          <TitleCard title="Asortiman" />
        </div>
        <div className="uk-margin-large-top uk-margin-large-bottom uk-flex uk-flex-wrap">
          {
            items.map(item => (
              <OtherCard
                key={item.title}
                title={item.title}
                img={item.img}
                desc={item.desc}
                to={item.to}
                />
            ))
          }
        </div>
        <div className="uk-margin-large-top">
          <TitleCard title="Zastupamo" />
        </div>
        <div className="uk-margin-top uk-flex uk-flex-wrap">
          {represent.map(item => (
            <RepresentCard
              key={item.name}
              name={item.name}
              img={item.img}
            />
          ))}
        </div>
      </div>
      <LogoStrip />
      <Footer />
    </Fragment>
  );
}

export default Assortment;
