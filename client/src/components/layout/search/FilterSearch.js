import React, { useState, useEffect, Fragment } from 'react';
import { useMediaQuery } from 'react-responsive';

function FilterSearch() {
  const [showSearchPhones, setShowSearchPhones] = useState(false)
  const [products, setProducts] = useState([
    "Lezajevi",
    "Spojnice",
    "Masti",
    "Kucista",
    "Remeni",
    "Hilzne",
    "Klinasti remeni"
  ])

  const [manufacturer, setManufacturer] = useState([
    "Schaeffler",
    "FAM",
    "Loctite",
    "CX"
  ])

  const [filterSelection, setFilterSelection] = useState("")

  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1225 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

  return (
    <div className="filter-search-custom input-colour-border filter-search-custom-padding uk-margin-left uk-text-center" id="step3">
      {isTabletOrMobile && (
        <Fragment>
          <p
            className="pointer filter-search-custom-margin-bottom text-primary upper smaller"
            onClick={() => setShowSearchPhones(!showSearchPhones)}
          >
            Filter:
          </p>
          {showSearchPhones && (
            <select
              name="filterSelection"
              id="filterSelection"
              className="uk-select uk-margin-top"
              value={filterSelection}
              onChange={(e) => setFilterSelection(e.target.value)}
            >
              <option disabled className="filter-search-category-name">Proizvodi:</option>
              {products.map(prod => <option className="uk-text-bold" value={prod} key={prod}>{prod}</option>)}
              <option disabled className="filter-search-category-name">Proizvodjac:</option>
              {manufacturer.map(man => <option className="uk-text-bold" value={man} key={man}>{man}</option>)}
            </select>
          )}
        </Fragment>
      )}
      {isDesktopOrLaptop && (
        <Fragment>
          <p className="filter-search-custom-margin-bottom text-primary upper smaller">
            Filter:
          </p>
          <select
            name="filterSelection"
            id="filterSelection"
            className="uk-select"
            value={filterSelection}
            onChange={(e) => setFilterSelection(e.target.value)}
          >
            <option disabled className="filter-search-category-name">Proizvodi:</option>
            {products.map(prod => <option className="uk-text-bold" value={prod} key={prod}>{prod}</option>)}
            <option disabled className="filter-search-category-name">Proizvodjac:</option>
            {manufacturer.map(man => <option className="uk-text-bold" value={man} key={man}>{man}</option>)}
          </select>
        </Fragment>
      )}
    </div>
  );
}

export default FilterSearch;
