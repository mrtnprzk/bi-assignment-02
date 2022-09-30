import React from "react";
import { Product } from "../types";
import { useShoppingCart } from "../context/ShoppingCartContext";

interface Props {
  itemQuantity: number;
  featuredProduct: Product;
}

const FeaturedButtonMobile = ({ itemQuantity, featuredProduct }: Props) => {
  const { addToCart, removeFromCart } = useShoppingCart();

  return (
    <>
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
    </>
  );
};

export default FeaturedButtonMobile;
