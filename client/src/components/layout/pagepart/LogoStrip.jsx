import React, { useState } from 'react';
import LogoCard from '../cards/LogoCard';
import logo from '../../../assets/wurth.svg';

function LogoStrip() {
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
    <div className="logo-strip-container">
      {
        logos.map(item => (
          <LogoCard
            title={item.title}
            key={item.title}
            logo={item.logo}
          />
        ))
      }
    </div>
  );
}

export default LogoStrip;
