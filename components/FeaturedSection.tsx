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
            <button className="bg-black text-white py-2 px-10 text-2xl hidden lg:block">
              ADD TO CART
            </button>
          </div>
          <FeaturedImage src={product.image.src} alt={product.image.alt} />
          <button className="bg-black text-white w-full py-4 my-8 text-2xl block lg:hidden">
              ADD TO CART
            </button>
          <div className="flex flex-col justify-between text-xl lg:flex-row">
            <FeaturedAbout product={product} />
            <FeaturedDetails product={product} />
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturedSection;
