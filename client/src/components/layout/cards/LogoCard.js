import React from 'react';

function LogoCard({ title, logo }) {
  return (
    <div className="uk-display-inline-block logo-card-container">
      <img src={logo} alt={title} title={title} />
    </div>
  );
}

export default LogoCard;
