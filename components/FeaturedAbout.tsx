import React from "react";
import { Product } from "../types";
import { capitalizeFirstLetter } from "../utilities/functions";

interface Props {
  product: Product;
}

const FeaturedAbout = ({ product }: Props) => {
  const { name, category, details } = product;
  
  return (
    <div className="lg:w-3/5">
      <h4 className="font-bold mb-7 lg:mb-2">About the {name}</h4>
      <h4 className="font-bold text-gray-500 mb-3 hidden lg:block">
        {capitalizeFirstLetter(category)}
      </h4>
      <p className="text-gray-500 text-lg mb-7 lg:mb-0">{details?.description}</p>
    </div>
  );
};

export default FeaturedAbout;
