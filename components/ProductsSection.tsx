
import React from "react";
import FilteringPanel from "./FilteringPanel";
import ProductsPanel from "./ProductsPanel";

const ProductsSection = () => {
  return (
    <div>
        <div className="flex justify-between items-center h-32">
            <h2 className=" text-[30px]">Photography / Premium Photos</h2>
            <p className=" text-[22px]">Sort By Price</p>
        </div>
        <div className="flex">
            <FilteringPanel/>
            <ProductsPanel/>
        </div>
    </div>
  );
};

export default ProductsSection;
