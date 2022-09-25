import React from "react";
import { Product } from "../types";

interface Props {
  product: Product;
}

const FeaturedAbout = ({ product }: Props) => {
  const { name, category, details } = product;

  const capitalizeFirstLetter = (value: string) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  return (
    <div className="w-3/5">
      <h4 className="font-bold mb-2">About the {name}</h4>
      <h4 className="font-bold text-gray-500 mb-3">
        {capitalizeFirstLetter(category)}
      </h4>
      <p className="text-gray-500 text-lg">{details?.description}</p>
    </div>
  );
};

export default FeaturedAbout;
