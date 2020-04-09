import React from 'react';

function LogoCard({ title, logo }) {
  return (
    <div>
      <img src={logo} alt={title} title={title} />
    </div>
  );
}

export default LogoCard;
