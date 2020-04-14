import React, { useEffect, useState } from 'react';
import NameSearch from '../search/NameSearch';
import DimensionSearch from '../search/DimensionSearch';
import FilterSearch from '../search/FilterSearch';

function FullSearchItem({ nameSearchRef, filterSearchRef, dimensionSearchRef }) {
  const [bodyWidth, setBodyWidth] = useState(window.innerWidth - 5)
  useEffect(() => window.onresize = () => setBodyWidth(window.innerWidth - 5), [window.innerWidth])

  return (
    <div className="full-search-item-flex-search">
      <NameSearch nameSearchRef={nameSearchRef} bodyWidth={bodyWidth} />
      <DimensionSearch dimensionSearchRef={dimensionSearchRef} bodyWidth={bodyWidth} />
      <FilterSearch filterSearchRef={filterSearchRef} bodyWidth={bodyWidth} />
    </div>
  );
}

export default FullSearchItem;
