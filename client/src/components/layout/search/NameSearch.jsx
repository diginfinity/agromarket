import React, { useState, useEffect } from 'react';

function NameSearch({ bodyWidth }) {
  const [state, setState] = useState("")
  const [showSearchPhones, setShowSearchPhones] = useState(false)

  useEffect(() => {
    if (bodyWidth > 599) {
      setShowSearchPhones(true)
    } else {
      setShowSearchPhones(false)
    }
  }, [document.body.clientWidth])

  return (
    <div className="name-search-custom input-colour-border name-search-custom-padding uk-margin-left" id="step1">
      {bodyWidth <= 599 && (
        <p
          className="pointer name-search-custom-margin-bottom text-primary upper smaller uk-text-center"
          onClick={() => setShowSearchPhones(!showSearchPhones)}
        >
          Pretrazite prema sifri ili pojmu:
        </p>
      )}
      {bodyWidth > 599 && (
        <p className="name-search-custom-margin-bottom text-primary upper smaller">
          Pretrazite prema sifri ili pojmu:
        </p>
      )}
      {showSearchPhones && (
        <div className="name-search-form-boundary">
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="uk-input name-search"
          />
          {
            state.length <= 0 ? <i className="fas fa-search"></i> :
              <i className="fas fa-times" onClick={() => setState("")}></i>
          }
        </div>
      )}
    </div>
  );
}

export default NameSearch;
