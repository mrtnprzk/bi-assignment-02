import { createContext, useContext, useState } from "react";
import {
  CartItem,
  ShoppingCartContext,
  ShoppingCartContextProps,
} from "../types";

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartContextProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOpen, setisOpen] = useState(false);
  const cartQuantity = cartItems.length;

  const openCart = () => setisOpen(true);

  const closeCart = () => setisOpen(false);

  const addToCart = (id: number) => {
    setCartItems((currItems) => {
      return [...currItems, { id }];
    });
    setisOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };

  const clearCart = () => {
    setCartItems([]);
    setisOpen(false);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        isOpen,
        openCart,
        closeCart,
        addToCart,
        removeFromCart,
        clearCart,
        cartQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
