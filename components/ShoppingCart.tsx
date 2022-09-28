import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartCard from "./CartCard";
import CloseIcon from "@mui/icons-material/Close";

const ShoppingCart = () => {
  const { cartItems, cartQuantity, closeCart, clearCart } = useShoppingCart();

  return (
    <>
      <div
        onClick={closeCart}
        className="fixed top-0 bottom-0 left-0 right-0 hidden lg:block"
      ></div>
      <div className="bg-white flex flex-col w-auto p-2 border-4 fixed top-0 right-0 left-0 bottom-0 lg:p-6 lg:w-[28rem] lg:left-auto lg:bottom-auto lg:mt-24 lg:mr-20">
        <div className="text-right">
          <button onClick={closeCart}>
            <CloseIcon fontSize="large" />
          </button>
        </div>
        {cartQuantity !== 0 ? (
          <>
            <div className="flex flex-col lg:h-96 overflow-auto">
              {cartItems.map((item) => (
                <CartCard key={item.id} {...item} />
              ))}
            </div>
            <div className="border-b my-6"></div>
            <button
              className="text-2xl py-3 border-2 border-black"
              onClick={clearCart}
            >
              CLEAR
            </button>{" "}
          </>
        ) : (
          <div className="flex justify-center items-center text-2xl h-40 p-4">
            SHOPPING CART IS EMPTY
          </div>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
