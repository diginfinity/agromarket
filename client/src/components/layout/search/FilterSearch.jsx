import React, { useState, useEffect } from 'react';

function FilterSearch({ bodyWidth }) {
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

  useEffect(() => {
    if (bodyWidth > 599) {
      setShowSearchPhones(true)
    } else {
      setShowSearchPhones(false)
    }
  }, [document.body.clientWidth])

  return (
    <div className="filter-search-custom input-colour-border filter-search-custom-padding uk-margin-left uk-text-center" id="step3">
      {bodyWidth <= 599 && (
        <p
          className="pointer filter-search-custom-margin-bottom text-primary upper smaller"
          onClick={() => setShowSearchPhones(!showSearchPhones)}
        >
          Filter:
        </p>
      )}
      {bodyWidth > 599 && (
        <p className="filter-search-custom-margin-bottom text-primary upper smaller">
          Filter:
        </p>
      )}
      {showSearchPhones && (
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
      )}
    </div>
  );
}

export default FilterSearch;
