import React, { useState } from 'react';

function DimensionSearch() {
  const [diameterIn, setDiameterIn] = useState(null)
  const [diameterOut, setDiameterOut] = useState(null)
  const [width, setWidth] = useState(null)
  const [accuracy, setAccuracy] = useState(null)

  const search = () => console.log("Searching");

  return (
    <div className="dimension-custom input-colour-border dimension-custom-padding uk-margin-left">
      <p className="dimension-custom-margin-bottom text-primary upper smaller">Pretrazite po dimenzijama:</p>
      <div>
        <div className="form-group">
          <label htmlFor="diameterIn">Unutrasnji precnik:</label>
          <div className="dimension-form-boundary dimension-border">
            <input
              type="number"
              value={diameterIn}
              onChange={(e) => setDiameterIn(parseInt(e.target.value))}
              className="uk-input dimension-search-input dimension-remove-arrows"
            /><span className="dimension-mm">mm</span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="diameterOut">Spoljasnji precnik:</label>
          <div className="dimension-form-boundary dimension-border">
            <input
              type="number"
              value={diameterOut}
              onChange={(e) => setDiameterOut(parseInt(e.target.value))}
              className="uk-input dimension-search-input dimension-remove-arrows"
            /><span className="dimension-mm">mm</span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="width">Sirina:</label>
          <div className="dimension-form-boundary dimension-border">
            <input
              type="number"
              value={width}
              onChange={(e) => setWidth(parseInt(e.target.value))}
              className="uk-input dimension-search-input dimension-remove-arrows"
            /><span className="dimension-mm">mm</span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="accuracy">Preciznost:</label>
          <div className="dimension-form-boundary dimension-border">
            <input
              type="number"
              value={accuracy}
              min={1}
              max={10}
              step={1}
              onChange={(e) => setAccuracy(parseInt(e.target.value))}
              className="uk-input dimension-remove-arrows"
            />
          </div>
        </div>
        <div className="dimension-search-button dimension-border">
          <i className="fas fa-search dimension-centered-button" onClick={() => search()}></i>
        </div>
        <div className="dimension-small-text">* 10 najvecu preciznost</div>
      </div>
    </div>
  );
}

export default DimensionSearch;
