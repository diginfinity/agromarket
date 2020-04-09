import React from 'react';

function RepresentCard({ name, img }) {
  return (
    <div className="represent-card-container uk-margin-small">
      {img && <img src={img} uk-img />}
      <p>{name}</p>
    </div>
  );
}

export default RepresentCard;
