import React, { Fragment, useState } from 'react';
import FullSearchItem from '../layout/pagepart/FullSearchItem';
import ContactForm from '../layout/pagepart/ContactForm';
import TitleCard from '../layout/cards/TitleCard';
import ContactCard from '../layout/cards/ContactCard';
import LogoStrip from '../layout/pagepart/LogoStrip';
import Footer from '../layout/pagepart/Footer';

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

  return (
    <Fragment>
      <div className="uk-container uk-margin-top">
        <FullSearchItem />
        <div className="uk-text-right uk-margin-top">
          <button className="uk-button uk-border-rounded uk-text-bold bg-primary white">
            Pomoc
          </button>
        </div>
        <div className="contact-phone-address">
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
        <div className="contact-information">
          <div className="uk-margin-top contact-people">
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
          <div className="contact-form">
            <ContactForm />
          </div>
        </div>
      </div>
      <LogoStrip />
      <Footer />
    </Fragment>
  );
}

export default Contact;
