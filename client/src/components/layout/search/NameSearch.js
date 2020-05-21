import React, { useState, useEffect, Fragment } from 'react';
import { useMediaQuery } from 'react-responsive';

function NameSearch() {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1225 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

  const [state, setState] = useState("")
  const [showSearchPhones, setShowSearchPhones] = useState(false)

  return (
    <div className="name-search-custom input-colour-border name-search-custom-padding" id="step1">
      {isTabletOrMobile && (
        <Fragment>
          <p
            className="pointer name-search-custom-margin-bottom text-primary upper smaller uk-text-center"
            onClick={() => setShowSearchPhones(!showSearchPhones)}
          >
            Pretrazite prema sifri ili pojmu:
          </p>
          {showSearchPhones && (
            <div className="name-search-form-boundary uk-margin-top">
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
        </Fragment>
      )}

      {isDesktopOrLaptop && (
        <Fragment>
          <p className="name-search-custom-margin-bottom text-primary upper smaller">
            Pretrazite prema sifri ili pojmu:
          </p>
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
        </Fragment>
      )}
    </div>
  );
}

export default NameSearch;
