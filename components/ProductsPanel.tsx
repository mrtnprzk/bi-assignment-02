import React from "react";
import { useData } from "../context/DataContext";
import ProductCard from "./ProductCard";

const ProductsPanel = () => {
  const { products } = useData();

  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:gap-12 lg:grid-cols-3 lg:ml-12 lg:w-4/5">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductsPanel;
