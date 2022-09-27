import Image from "next/image";
import React from "react";
import storeProducts from "../data/products.json";
import { formatCurrency } from "../utilities/functions";

interface Props {
  id: number;
}

const CartCard = ({ id }: Props) => {
  const item = storeProducts.find((item) => item.id === id);
  if (item == null) return null;

  return (
    <div>
      <div>
        <p>{item.name}</p>
        <p>{formatCurrency(item.price)}</p>
      </div>
      <Image src={item.image.src} alt={item.image.alt} width={50} height={50} />
    </div>
  );
};

export default CartCard;
