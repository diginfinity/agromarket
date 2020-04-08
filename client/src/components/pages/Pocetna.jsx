import React from 'react';
import Input1 from '../layout/search/Input1';
import Input2 from '../layout/search/Input2';

function Pocetna() {
  return (
    <div className="uk-container">
      <h1>Pocetna</h1>
      <div className="pocetna-flex-search">
        <Input1 />
        <Input2 />
      </div>
    </div>
  );
}

export default Pocetna;
