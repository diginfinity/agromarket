import React, { Fragment, useState } from 'react';
import FullSearchItem from '../layout/pagepart/FullSearchItem';
import ContactForm from '../layout/pagepart/ContactForm';
import TitleCard from '../layout/cards/TitleCard';
import ContactCard from '../layout/cards/ContactCard';
import LogoStrip from '../layout/pagepart/LogoStrip';
import Footer from '../layout/pagepart/Footer';
import img from '../../assets/lezaj.svg';
import MainCard from '../layout/cards/MainCard';
import { useMediaQuery } from 'react-responsive';

function Contact() {

  const [person, setPerson] = useState([
    {
      name: "Zoran Radenkovic",
      title: "Komercijalni referent",
      email: "zoran.radakovic@agromarket021.com",
      phone: "+381 63 509 103"
    },
    {
      name: "Biljana Veselinovic",
      title: "Komercijalni referent",
      email: "biljana.veselinovic@agromarket021.com",
      phone: "+381 62 677 715"
    },
    {
      name: "Dimitrije Linjacki",
      title: "Referent prodaje i tehnicka podrska",
      email: "dimitrije.linjacki@agromarket021.com",
      phone: "+381 63 589 042"
    },
    {
      name: "Zoltan Fodor",
      title: "Komercijalni referent",
      email: "zoltan.fodor@agromarket021.com",
      phone: "+381 63 509 048"
    },
    {
      name: "Sandra Zdravkovic",
      title: "Finansije i administracija",
      email: "sandra.zdravkovic@agromarket021.com",
      phone: "+381 69 174 4502"
    }
  ])

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
      <div className="uk-container uk-padding-large uk-padding-remove-horizontal">
        <div className="uk-grid">
          <div className="uk-width-1-1@s uk-width-2-3@l">
            <div className="uk-padding-small">
              <p className="uk-text-bold black">
                <i className="fas fa-home"></i>&nbsp;&nbsp;
                Novosadski put 74, Veternik
              </p>
              <p className="uk-text-bold black">
                <i className="fas fa-phone"></i>&nbsp;&nbsp;
                <span className="uk-margin-right">021/823-424,</span>
                <span className="uk-margin-right">021/823-425,</span>
                <span className="uk-margin-right">021/822-459</span>
              </p>
              <hr className="hr-black"/>
            </div>
            <div className="uk-grid uk-margin-remove">
              {person.map(p => (
                <ContactCard
                  key={p.phone}
                  name={p.name}
                  title={p.title}
                  email={p.email}
                  phone={p.phone}
                />
              ))}
            </div>
          </div>
          <div className="uk-flex uk-flex-row uk-flex-wrap uk-width-1-1@s uk-width-1-3@l">
            <ContactForm />
          </div>
        </div>

        <div className="uk-margin-top">
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
      </div>
      <LogoStrip />
      <Footer />
    </Fragment>
  );
}

export default Contact;