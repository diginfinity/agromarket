import React from 'react';

function MainCard({ img, title, desc, isAccentuated }) {
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
      </div>
    </div>
  );
}

export default MainCard;
