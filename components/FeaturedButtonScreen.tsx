import React from "react";
import { Product } from "../types";
import { useShoppingCart } from "../context/ShoppingCartContext";

interface Props {
  itemQuantity: number;
  featuredProduct: Product;
}

const FeaturedButtonScreen = ({ itemQuantity, featuredProduct }: Props) => {
  const { addToCart, removeFromCart } = useShoppingCart();

  return (
    <>
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
    </>
  );
};

export default FeaturedButtonScreen;
