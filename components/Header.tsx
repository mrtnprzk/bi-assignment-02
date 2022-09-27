import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import ShoppingCart from "./ShoppingCart";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Header = () => {
  const { isOpen, openCart, cartQuantity } = useShoppingCart();

  return (
    <header className="sticky top-0 px-7 bg-white lg:px-0 z-30 border-b-4">
      <nav className="flex justify-between items-center bg-white h-20 lg:h-24">
        <h1 className="font-bold text-lg lg:text-2xl">BEJAMAS_</h1>
        <button className="relative" onClick={openCart}>
          <ShoppingCartOutlinedIcon style={{fontSize: "2.5rem"}}/>
          {cartQuantity ? (
            <div
              className="bg-black text-white font-bold absolute px-2 bottom-0 right-0"
              style={{ transform: "translate(50%, 50%)" }}
            >
              {cartQuantity}
            </div>
          ) : null}
        </button>
      </nav>
      {isOpen && <ShoppingCart />}
    </header>
  );
};

export default Header;
