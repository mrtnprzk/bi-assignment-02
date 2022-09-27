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
    <div className="flex justify-between mt-6">
      <div className="mt-2">
        <p className="text-xl font-bold">{item.name}</p>
        <p className="text-3xl text-gray-500">{formatCurrency(item.price)}</p>
      </div>
      <Image src={item.image.src} alt={item.image.alt} width={149} height={90} className="object-cover"/>
    </div>
  );
};

export default CartCard;
