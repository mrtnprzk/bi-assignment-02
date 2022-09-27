import React from "react";
import storeProducts from "../data/products.json";
import { Product } from "../types";
import ProductCard from "./ProductCard";

const ProductsPanel = () => {
  const products: Product[] = storeProducts.filter(
    (product) => !product.featured
  ) as Product[];

  return (
    <div className="grid gap-6 grid-cols-1 lg:gap-12 lg:grid-cols-3 lg:ml-12 lg:w-5/6">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductsPanel;
