import React from "react";
import storeProducts from "../data/products.json";
import FeaturedAbout from "./FeaturedAbout";
import FeaturedDetails from "./FeaturedDetails";
import FeaturedImage from "./FeaturedImage";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Product } from "../types";

const FeaturedSection = () => {
  const { addToCart, removeFromCart, getItemQuantity } = useShoppingCart();

  const featuredProduct: Product = storeProducts.find(
    (product) => product.featured
  ) as Product;

  const itemQuantity = getItemQuantity(featuredProduct.id);

  return (
    <div className="py-8 px-4 lg:py-16 lg:px-0 border-b-4">
      <div className="flex justify-between items-center">
        <h3 className="text-4xl font-bold">{featuredProduct.name}</h3>
        {itemQuantity === 0 ? (
          <button
            onClick={() => addToCart(featuredProduct.id)}
            className="bg-black text-white py-2 px-10 text-2xl hidden lg:block"
          >
            ADD TO CART
          </button>
        ) : (
          <button
            onClick={() => removeFromCart(featuredProduct.id)}
            className="bg-black text-white py-2 px-10 text-2xl hidden lg:block"
          >
            REMOVE FROM CART
          </button>
        )}
      </div>
      <FeaturedImage
        src={featuredProduct.image.src}
        alt={featuredProduct.image.alt}
      />
      {itemQuantity === 0 ? (
        <button
          onClick={() => addToCart(featuredProduct.id)}
          className="bg-black text-white w-full py-4 my-8 text-2xl block lg:hidden"
        >
          ADD TO CART
        </button>
      ) : (
        <button
          onClick={() => removeFromCart(featuredProduct.id)}
          className="bg-black text-white w-full py-4 my-8 text-2xl block lg:hidden"
        >
          REMOVE FROM CART
        </button>
      )}
      <div className="flex flex-col justify-between text-xl lg:flex-row">
        <FeaturedAbout product={featuredProduct} />
        <FeaturedDetails product={featuredProduct} />
      </div>
    </div>
  );
};

export default FeaturedSection;
