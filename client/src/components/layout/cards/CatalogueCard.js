import React from 'react';

function CatalogueCard({ img, name }) {
  return (
    <div style={{ margin: "1rem 1.5rem" }}>
      <img src={img} alt={name} />
    </div>
  );
}

export default CatalogueCard;
