import React from "react";
import { useData } from "../context/DataContext";
import Pagination from "./Pagination";
import ProductCard from "./ProductCard";

const ProductsPanel = () => {
  const { currentProducts } = useData();

  return (
    <div className="flex flex-col lg:w-full">
    {/* <div className="flex flex-col lg:ml-12 lg:w-4/5">  HIDDEN TILL IS WORKING */} 
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:gap-12 lg:grid-cols-3">
        {currentProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default ProductsPanel;
