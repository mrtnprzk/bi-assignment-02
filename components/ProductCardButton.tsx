import React from 'react'
import { Product } from "../types";
import { useShoppingCart } from "../context/ShoppingCartContext";

interface Props {
  itemQuantity: number;
  product: Product;
}

const ProductCardButton = ({ itemQuantity, product }: Props) => {
    const { addToCart, removeFromCart } = useShoppingCart();

  return (
    <>
        {itemQuantity === 0 ? (
        <button
          onClick={() => addToCart(product.id)}
          className="absolute lg:hidden bg-black text-white w-full py-4 text-2xl bottom-0 group-hover:block"
        >
          ADD TO CART
        </button>
      ) : (
        <button
          onClick={() => removeFromCart(product.id)}
          className="absolute lg:hidden bg-black text-white w-full py-4 text-2xl bottom-0 group-hover:block"
        >
          REMOVE FROM CART
        </button>
      )}
    </>
  )
}

export default ProductCardButton