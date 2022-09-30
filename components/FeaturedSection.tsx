import React from "react";
import FeaturedAbout from "./FeaturedAbout";
import FeaturedDetails from "./FeaturedDetails";
import FeaturedImage from "./FeaturedImage";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { featuredProduct } from "../data/products";
import FeaturedButtonScreen from "./FeaturedButtonScreen";
import FeaturedButtonMobile from "./FeaturedButtonMobile";

const FeaturedSection = () => {
  const { getItemQuantity } = useShoppingCart();
  const itemQuantity = getItemQuantity(featuredProduct.id);

  return (
    <div className="py-8 px-4 lg:py-16 lg:px-0 border-b-4">
      <div className="flex justify-between items-center">
        <h3 className="text-4xl font-bold">{featuredProduct.name}</h3>
        <FeaturedButtonScreen itemQuantity={itemQuantity} featuredProduct={featuredProduct}/>
      </div>
      <FeaturedImage
        src={featuredProduct.image.src}
        alt={featuredProduct.image.alt}
      />
      <FeaturedButtonMobile itemQuantity={itemQuantity} featuredProduct={featuredProduct}/>
      <div className="flex flex-col justify-between text-xl lg:flex-row">
        <FeaturedAbout product={featuredProduct} />
        <FeaturedDetails product={featuredProduct} />
      </div>
    </div>
  );
};

export default FeaturedSection;
