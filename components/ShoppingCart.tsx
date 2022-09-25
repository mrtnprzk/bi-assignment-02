import React from "react";

interface Props {
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShoppingCart = ({ setIsOpened }: Props) => {
  return (
    <div className="bg-red-200 w-40 h-80 border-4 fixed top-0 right-0 mt-28 mr-20">
      ShoppingCart
      <button onClick={() => setIsOpened(false)}>X</button>
    </div>
  );
};

export default ShoppingCart;
