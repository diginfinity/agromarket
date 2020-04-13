import React, { useState } from 'react';

function FilterSearch() {
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

  return (
    <div className="filter-search-custom input-colour-border filter-search-custom-padding uk-margin-left" id="step3">
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
    </div>
  );
}

export default FilterSearch;
