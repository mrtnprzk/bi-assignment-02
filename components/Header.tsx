import React, { useState } from "react";
import ShoppingCart from "./ShoppingCart";

const Header = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <header className="bg-white fixed top-0 left-0 right-0 px-7 lg:px-0 lg:mx-20 z-10 border-b-4">
      <nav className="flex justify-between items-center h-24 lg:h-28">
        <h1 className="font-bold text-lg lg:text-2xl">BEJAMAS_</h1>
        <button onClick={() => setIsOpened(true)}>CART</button>
      </nav>
      {isOpened && <ShoppingCart setIsOpened={setIsOpened} />}
    </header>
  );
};

export default Header;
