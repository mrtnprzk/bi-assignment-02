import React from "react";
import Image from "next/image";
import { Product } from "../types";
import { useShoppingCart } from "../context/ShoppingCartContext";
import ProductCardButton from "./ProductCardButton";

interface Props {
  product: Product;
}

const ProductCardImage = ({ product }: Props) => {
  const { addToCart, removeFromCart, getItemQuantity } = useShoppingCart();
  const itemQuantity = getItemQuantity(product.id);

  return (
    <div className="relative flex flex-col mb-2 group">
      <Image
        key={product.name}
        src={product.image.src}
        alt={product.image.alt}
        width={480}
        height={670}
        className="object-cover"
      />
      {product.bestseller && (
        <span className="absolute bg-white text-xl top-0 py-1.5 px-8">
          Best Seller
        </span>
      )}
      <ProductCardButton itemQuantity={itemQuantity} product={product}/>
    </div>
  );
};

export default ProductCardImage;
