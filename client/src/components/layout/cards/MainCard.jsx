import React from 'react';
import { Link } from 'react-router-dom';

function MainCard({ img, title, desc, isAccentuated, to, text }) {
  return (
    <div className={isAccentuated ? "main-card-container main-card-container-accent" : "main-card-container"}>
      {img && (
        <div className="main-card-image">
          <img src={img} uk-img />
        </div>
      )}
      <div className="main-card-content">
        <h3 className="uk-text-bold">{title}</h3>
        <p>{desc}</p>
        <Link
          to={to}
          className="main-card-danger-link"
        >
          {text}
        </Link>
      </div>
    </div>
  );
}

export default MainCard;
