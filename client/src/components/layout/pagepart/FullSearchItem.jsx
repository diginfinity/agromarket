import React from 'react';
import NameSearch from '../search/NameSearch';
import DimensionSearch from '../search/DimensionSearch';
import FilterSearch from '../search/FilterSearch';

function FullSearchItem({ nameSearchRef, filterSearchRef, dimensionSearchRef }) {
  return (
    <div className="full-search-item-flex-search">
      <NameSearch nameSearchRef={nameSearchRef}/>
      <DimensionSearch dimensionSearchRef={dimensionSearchRef}/>
      <FilterSearch filterSearchRef={filterSearchRef}/>
    </div>
  );
}

export default FullSearchItem;
