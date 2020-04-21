import React, { useState } from 'react';
import RepresentCard from '../cards/RepresentCard';
import fag from '../../../assets/fag.svg';
import loctite from '../../../assets/loctite.svg';
import schaeffer from '../../../assets/schaeffer.svg';
import corteco from '../../../assets/corteco.svg';
import fam from '../../../assets/fam.svg';
import CX from '../../../assets/remen.svg';
import { useMediaQuery } from 'react-responsive';

function RepresentContainer() {
  const [represent, setRepresent] = useState([
    {
      name: "Fag",
      img: fag,
      place: 1,
    },
    {
      name: "Loctite",
      img: loctite,
      place: 2,
    },
    {
      name: "Schaeffer Group",
      img: schaeffer,
      place: 3,
    },
    {
      name: "Corteco",
      img: corteco,
      place: 4,
    },
    {
      name: "CX",
      img: CX,
      place: 5,
    },
    {
      name: "Fam Krusevac",
      img: fam,
      place: 6,
    },
    {
      name: "Ostali brendovi",
      img: corteco,
      place: 7,
    }
  ])

  const isTablet = useMediaQuery({ minWidth: 600, maxWidth: 1224 });
  const isMobile = useMediaQuery({ maxWidth: 599 })
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1225 });

  return isDesktopOrLaptop ? (
    <div className="uk-margin-large-top home-flex-represent-items">
      {represent.map(item => (
        <RepresentCard
          key={item}
          name={item.name}
          img={item.img}
        />
      ))}
    </div>
    ) : isTablet ? (
      <div className="uk-margin-large-top home-flex-represent-items">
        {represent.map(item => (
          <RepresentCard
            key={item}
            name={item.name}
            img={item.img}
          />
        ))}
      </div>
    ) : isMobile ? (
      <div uk-slider="autoplay: false" className="uk-position-relative uk-visible-toggle" tabIndex="-1">
        <ul className="uk-slider-items uk-child-width-1-2">
          {represent.map(item => (
            <RepresentCard
              key={item.name}
              name={item.name}
              img={item.img}
            />
          ))}
        </ul>
        <a
          className="uk-position-center-left uk-position-small"
          // onClick={(e) => e.preventDefault()}
          href="#"
          uk-slidenav-previous
          uk-slider-item="previous"
        >
          <i className="fas fa-arrow-left"/>
        </a>
        <a
          className="uk-position-center-right uk-position-small"
          // onClick={(e) => e.preventDefault()}
          href="#"
          uk-slidenav-next
          uk-slider-item="next"
        >
          <i className="fas fa-arrow-right"/>
        </a>
      </div>
  ) : null
}

// <span
//   className="uk-position-center-left"
//   uk-slidenav-previous
//   uk-slider-item="previous"
// >
//   <i className="fas fa-arrow-left"/>
// </span>
// <span
//   className="uk-position-center-right"
//   uk-slidenav-next
//   uk-slider-item="next"
// >
//   <i className="fas fa-arrow-right"/>
// </span>

export default RepresentContainer;
