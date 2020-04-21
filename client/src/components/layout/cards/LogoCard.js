import React from 'react';

function LogoCard({ title, logo }) {
  return (
    <div className="logo-card-container">
      <img src={logo} alt={title} title={title} />
    </div>
  );
}

export default LogoCard;
