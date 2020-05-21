import React, { useState } from 'react';
import LogoCard from '../cards/LogoCard';
import CX from '../../../assets/logos/CX.svg';
import fag from '../../../assets/logos/fag.svg';
import fam from '../../../assets/logos/fam.svg';
import fkl from '../../../assets/logos/fkl.svg';
import loctite from '../../../assets/logos/loctite.svg';
import ntn from '../../../assets/logos/ntn.svg';
import optibelt from '../../../assets/logos/optibelt.svg';
import timken from '../../../assets/logos/timken.svg';
import wd40 from '../../../assets/logos/wd40.svg';
import wurth from '../../../assets/logos/wurth.svg';
import cut from '../../../assets/logos/cut.svg';

function LogoStrip() {
  const [logos, setLogos] = useState([
    {
      title: "CX",
      logo: CX
    },
    {
      title: "Fam",
      logo: fam
    },
    {
      title: "FKL",
      logo: fkl
    },
    {
      title: "Loctite",
      logo: loctite
    },
    {
      title: "Optibelt",
      logo: optibelt
    },
    {
      title: "Timken",
      logo: timken
    },
    {
      title: "Wurth",
      logo: wurth
    },
    {
      title: "WD-40",
      logo: wd40
    },
    {
      title: "NTN",
      logo: ntn
    },
    {
      title: "FAG",
      logo: fag
    },
    {
      title: "?",
      logo: cut
    }
  ])

  return (
    <div uk-slider="autoplay: true; autoplay-interval: 3000" className="uk-position-relative uk-visible-toggle" tabIndex="-1">
      <ul className="uk-slider-items uk-child-width-1-3 uk-child-width-1-6@m">
        {
          logos.map(item => (
            <LogoCard
              title={item.title}
              key={item.title}
              logo={item.logo}
            />
          ))
        }
      </ul>
    </div>
  );
}

export default LogoStrip;
