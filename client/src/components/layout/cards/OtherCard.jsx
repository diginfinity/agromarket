import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

function OtherCard({ title, img, desc, to }) {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1225 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

  return isDesktopOrLaptop ? (
    <div className="other-card-container">
      <div className="other-card-img-content-bundle">
        {img && (
          <div className="other-card-image">
            <img src={img} />
          </div>
        )}
        <div className="other-card-content">
          <h3 className="uk-text-bold">{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
        <div className="uk-text-right">
          <Link to={"/asortiman" + to} className="other-card-link">Pregledaj</Link>
        </div>
    </div>
  ) : isTabletOrMobile ? (
    <div className="other-card-container">
      <div className="other-card-img-content-bundle">
        {img && (
          <div className="other-card-image">
            <img src={img} />
          </div>
        )}
        <div className="other-card-content">
          <h3 className="uk-text-bold">{title}</h3>
        </div>
      </div>
    </div>
  ) : null
}

export default OtherCard;