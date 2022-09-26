import React, { useState } from "react";
import ShoppingCart from "./ShoppingCart";

const Header = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <header className="sticky top-0 px-7 bg-white lg:px-0 z-10 border-b-4">
      <nav className="flex justify-between items-center bg-white h-24 lg:h-28">
        <h1 className="font-bold text-lg lg:text-2xl">BEJAMAS_</h1>
        <button className="relative" onClick={() => setIsOpened(true)}>
          CART
          <div
            className="bg-black text-white font-bold absolute px-2 bottom-0 right-0"
            style={{ transform: "translate(50%, 50%)" }}
          >
            1
          </div>
        </button>
      </nav>
      {isOpened && <ShoppingCart setIsOpened={setIsOpened} />}
    </header>
  );
};

export default Header;
