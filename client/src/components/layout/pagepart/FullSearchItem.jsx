import React from 'react';
import NameSearch from '../search/NameSearch';
import DimensionSearch from '../search/DimensionSearch';
import FilterSearch from '../search/FilterSearch';

function FullSearchItem() {
  return (
    <div className="full-search-item-flex-search">
      <NameSearch />
      <DimensionSearch />
      <FilterSearch />
    </div>
  );
}

export default FullSearchItem;
