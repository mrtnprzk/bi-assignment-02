import React from "react";
import { Product } from "../types";
import { capitalizeFirstLetter, formatCurrency } from "../utilities/functions";
import ProductCardImage from "./ProductCardImage";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="flex flex-col">
      <ProductCardImage product={product} />
      <span className="text-2xl font-bold text-gray-500">
        {capitalizeFirstLetter(product.category)}
      </span>
      <span className="text-4xl font-bold mb-1">{product.name}</span>
      <span className="text-3xl text-gray-500">
        {formatCurrency(product.price)}
      </span>
    </div>
  );
};

export default ProductCard;
