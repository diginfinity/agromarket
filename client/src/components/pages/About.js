import React, { Fragment, useState } from 'react';
import FullSearchItem from '../layout/pagepart/FullSearchItem';
import TitleCard from '../layout/cards/TitleCard';
import svg from '../../assets/logos/wurth.svg';
import TextCard from '../layout/cards/TextCard';
import MainCard from '../layout/cards/MainCard';
import img from '../../assets/lezaj.svg';
import LogoStrip from '../layout/pagepart/LogoStrip';
import Footer from '../layout/pagepart/Footer';

function About() {
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

  return (
    <Fragment>
      <div className="uk-container uk-margin-top">
        <div className="uk-margin-top">
          <TitleCard title="O nama" />
        </div>
        <div className="uk-margin-large-top uk-flex">
          <div className="uk-width-3-4">
            <p>
              Agromarket je osnovan 1993. godine kao kompanija za trgovinu rezervnih delova, a od 1997. godine smo jedan od najvećih ovlašćenih uvoznika i distributera FAG i INA ležajeva za tržište Srbije.
            </p>
            <p>
              Osnovna svrha našeg poslovanja jeste podrška velikom broju vodećih kompanija u Srbiji kao dobavljač za potrebe industrije, poljoprivrede, auto i kamionskog programa. Prepoznati smo po kvalitetu usluge ali i po svetski poznatim brendovima koje zastupamo i čiji smo ovlašćeni distributeri:
            </p>
          </div>
          <div className="uk-flex uk-flex-column uk-flex-wrap uk-flex-between">
            <div className="uk-width-1-1 uk-flex uk-flex-center padding-tiny">
              <img src={svg} alt="Logo" />
            </div>
            <div className="about-logo-row-2">
              <img src={svg} alt="Logo" className="uk-display-inline-block padding-tiny" />
              <img src={svg} alt="Logo" className="uk-display-inline-block padding-tiny" />
            </div>
          </div>
        </div>
        <div className="uk-flex about-text-cards">
          <TextCard
            title="Nasa misija"
            text="Superiornim kvalitetom brendova koje zastupamo, odgovornim poslovanjem, znanjem i pouzdanošću, činimo vaš najznačajniji oslonac"
          />
          <TextCard
            title="Nasa vizija"
            text="Posvećeni smo tome da u svakom trentuku svojim partnerima ponudimo najkvalitetnije rešenje."
          />
        </div>
        <div className="uk-margin-large-top">
          <TitleCard title="Najpopularniji proizvodi" />
        </div>
        <div className="uk-margin-top uk-margin-bottom uk-flex uk-flex-wrap">
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
        </div>
      </div>
      <LogoStrip />
      <Footer />
    </Fragment>
  );
}

export default About;
