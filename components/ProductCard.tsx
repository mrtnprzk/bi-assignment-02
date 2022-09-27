import Image from "next/image";
import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Product } from "../types";
import { formatCurrency } from "../utilities/functions";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { addToCart, removeFromCart, getItemQuantity } = useShoppingCart();
  const itemQuantity = getItemQuantity(product.id);

  return (
    <div className="flex flex-col border">
      <Image
        key={product.name}
        src={product.image.src}
        alt={product.image.alt}
        width={380}
        height={570}
        className="object-cover"
      />
      {itemQuantity === 0 ? (
        <button
          onClick={() => addToCart(product.id)}
          className="bg-black text-white w-full py-4 text-2xl"
        >
          ADD TO CART
        </button>
      ) : (
        <button
          onClick={() => removeFromCart(product.id)}
          className="bg-black text-white w-full py-4 text-2xl"
        >
          REMOVE FROM CART
        </button>
      )}
      <span>{product.category}</span>
      <span>{product.name}</span>
      <span>{formatCurrency(product.price)}</span>
    </div>
  );
};

export default ProductCard;
