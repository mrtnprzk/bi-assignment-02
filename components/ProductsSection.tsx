import React, { useState } from "react";
import FilteringPanel from "./FilteringPanel";
import ProductsPanel from "./ProductsPanel";
import TuneIcon from "@mui/icons-material/Tune";
import FilteringPanelMobile from "./FilteringPanelMobile";
import SortByOptions from "./SortByOptions";

const ProductsSection = () => {
  const [isMobileFilter, setIsMobileFilter] = useState(false);

  return (
    <div className="px-4 py-8 lg:px-0 lg:py-0" id="product-section">
      <div className="flex justify-between items-center mb-5 lg:mb-0 lg:py-16">
        <div className="flex items-center text-lg font-bold lg:text-3xl">
          <span>Photography</span>
          <span className="text-3xl lg:text-4xl">&nbsp;/&nbsp;</span>
          <span className="text-gray-500 font-normal">Premium Photos</span>
        </div>
        <SortByOptions />
        <button className="lg:hidden" onClick={() => setIsMobileFilter(true)}>
          <TuneIcon fontSize="large" />
        </button>
      </div>
      <div className="flex">
        {isMobileFilter && (
          <FilteringPanelMobile setIsMobileFilter={setIsMobileFilter} />
        )}
        <div className="hidden text-xl lg:block lg:w-1/5 space-y-5">
          <FilteringPanel />
        </div>
        <ProductsPanel />
      </div>
    </div>
  );
};

export default ProductsSection;
