import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function OtherCard({ title, img, desc, to }) {
  return (
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
          <Link to={to} className="other-card-link">Pregledaj</Link>
        </div>
    </div>
  );
}

export default OtherCard;