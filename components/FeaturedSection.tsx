import React from "react";
import storeProducts from "../data/products.json";
import FeaturedAbout from "./FeaturedAbout";
import FeaturedDetails from "./FeaturedDetails";
import FeaturedImage from "./FeaturedImage";

const FeaturedSection = () => {
  const featuredProduct = storeProducts.filter((product) => product.featured);

  return (
    <>
      {featuredProduct.map((product, index) => (
        <div key={index} className="py-8 px-4 lg:py-16 lg:px-0 border-b-4">
          <div className="flex justify-between items-center">
            <h3 className="text-4xl font-bold">{product.name}</h3>
            <button className="bg-black text-white py-2 px-10 text-[21px] hidden lg:block">
              ADD TO CART
            </button>
          </div>
          <FeaturedImage src={product.image.src} alt={product.image.alt} />
          <button className="bg-black text-white py-2 px-10 text-[21px] block lg:hidden">
              ADD TO CART
            </button>
          <div className="flex justify-between text-xl">
            <FeaturedAbout product={product} />
            <FeaturedDetails product={product} />
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturedSection;
