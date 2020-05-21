import React from 'react';

function LogoCard({ title, logo }) {
  return (
    <li className="uk-flex uk-flex-center uk-flex-middle">
      <div className="uk-width-1-1 uk-flex uk-flex-column uk-margin-small">
        <img src={logo} alt={title} title={title} />
      </div>
    </li>
  );
}

export default LogoCard;
