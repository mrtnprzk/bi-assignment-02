import React from "react";
import FilteringPanel from "./FilteringPanel";
import ProductsPanel from "./ProductsPanel";
import TuneIcon from '@mui/icons-material/Tune';
import SwapVertOutlinedIcon from '@mui/icons-material/SwapVertOutlined';

const ProductsSection = () => {
  return (
    <div className="px-4 py-8 lg:px-0 lg:py-0">
      <div className="flex justify-between items-center mb-5 lg:mb-0 lg:py-16">
        <div className="flex items-center text-lg font-bold lg:text-3xl">
          <span>Photography</span> 
          <span className="text-3xl lg:text-4xl">&nbsp;/&nbsp;</span> 
          <span className="text-gray-500 font-normal">Premium Photos</span>
        </div>
        <p className="hidden lg:block text-xl text-gray-500"><SwapVertOutlinedIcon/>Sort By &nbsp; Price</p>
        <button className="lg:hidden"><TuneIcon fontSize="large"/></button>
      </div>
      <div className="flex">
        <FilteringPanel />
        <ProductsPanel />
      </div>
    </div>
  );
};

export default ProductsSection;
