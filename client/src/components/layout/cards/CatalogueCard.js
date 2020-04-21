import React from 'react';

function CatalogueCard({ img, name }) {
  return (
    <div className="catalogue-card-container">
      <img src={img} alt={name} />
    </div>
  );
}

export default CatalogueCard;
