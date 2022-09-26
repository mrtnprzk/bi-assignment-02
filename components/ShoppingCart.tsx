import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartCard from "./CartCard";

const ShoppingCart = () => {
  const { cartItems, closeCart, clearCart } = useShoppingCart();

  return (
    <>
      <div
        onClick={closeCart}
        className="fixed top-0 bottom-0 left-0 right-0"
      ></div>
      <div className="bg-red-200 w-40 h-80 border-4 fixed top-0 right-0 mt-28 mr-20">
        ShoppingCart
        <button onClick={closeCart}>X</button>
        <div className="flex flex-col">
          {cartItems.map((item) => (
            <CartCard key={item.id} {...item} />
          ))}
        </div>
        <button onClick={clearCart}>Clear</button>
      </div>
    </>
  );
};

export default ShoppingCart;
