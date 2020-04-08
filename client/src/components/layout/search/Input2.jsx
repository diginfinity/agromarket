import React, { useState } from 'react';

function Input2() {
  const [diameterIn, setDiameterIn] = useState(null)
  const [diameterOut, setDiameterOut] = useState(null)
  const [width, setWidth] = useState(null)
  const [accuracy, setAccuracy] = useState(null)

  const search = () => console.log("Searching");

  return (
    <div className="input2-custom input-colour-border input2-custom-padding">
      <p className="input2-custom-margin-bottom text-primary upper smaller">Pretrazite po dimenzijama:</p>
      <div>
        <div className="form-group">
          <label htmlFor="diameterIn">Unutrasnji precnik:</label>
          <div className="input2-form-boundary input2-border">
            <input
              type="number"
              value={diameterIn}
              onChange={(e) => setDiameterIn(e.target.value)}
              className="uk-input input2-search-input"
            /><span className="input2-mm">mm</span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="diameterOut">Spoljasnji precnik:</label>
          <div className="input2-form-boundary input2-border">
            <input
              type="number"
              value={diameterOut}
              onChange={(e) => setDiameterOut(e.target.value)}
              className="uk-input input2-search-input"
            /><span className="input2-mm">mm</span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="width">Sirina:</label>
          <div className="input2-form-boundary input2-border">
            <input
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              className="uk-input input2-search-input"
            /><span className="input2-mm">mm</span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="accuracy">Preciznost:</label>
          <div className="input2-form-boundary input2-border">
            <input
              type="number"
              value={accuracy}
              min={1}
              max={10}
              step={1}
              onChange={(e) => setAccuracy(e.target.value)}
              className="uk-input"
            />
          </div>
        </div>
        <div className="input2-search-button input2-border">
          <i className="fas fa-search input2-centered-button" onClick={() => search()}></i>
        </div>
        <div className="input2-small-text">* 10 najvecu preciznost</div>
      </div>
    </div>
  );
}

export default Input2;
