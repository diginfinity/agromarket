import React from 'react';
import { useMediaQuery } from 'react-responsive';

function RepresentCard({ name, img }) {
  const isTablet = useMediaQuery({ minWidth: 601, maxWidth: 1224 });
  const isMobile = useMediaQuery({ maxWidth: 600 })
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1225 });

  return isDesktopOrLaptop ? (
    <div className="uk-width-1-4 uk-flex uk-flex-column represent-card-container uk-margin-small">
      <div className="uk-flex uk-flex-center">
        {img && <img src={img} uk-img />}
      </div>
      <p className="uk-panel uk-margin-auto-top">{name}</p>
    </div>
  ) : isTablet ? (
    <div className="uk-width-1-4 uk-flex uk-flex-column represent-card-container uk-margin-small">
      <div className="uk-flex uk-flex-center">
        {img && <img src={img} uk-img />}
      </div>
      <p className="uk-panel uk-margin-auto-top">{name}</p>
    </div>
  ) : isMobile ? (
    <li className="uk-flex uk-flex-center uk-flex-middle">
      <div className="uk-width-1-4 uk-flex uk-flex-column represent-card-container uk-margin-small">
        {img && <img src={img} uk-img />}
        <p className="uk-panel uk-margin-auto-top uk-text-small">{name}</p>
      </div>
    </li>
  ) : null;
}

export default RepresentCard;
