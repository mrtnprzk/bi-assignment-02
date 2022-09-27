import { ReactNode } from "react";

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  currency: string;
  image: {
    src: string;
    alt: string;
  };
  bestseller: boolean;
  featured: boolean;
  details: null | {
    dimmentions: {
      width: number;
      height: number;
    };
    size: number;
    description: string;
    recommendations: [
      {
        src: string;
        alt: string;
      },
      {
        src: string;
        alt: string;
      },
      {
        src: string;
        alt: string;
      }
    ];
  };
}

export interface CartItem {
  id: number;
  quantity: number;
}

export interface ShoppingCartContextProps {
  children: ReactNode;
}

export interface ShoppingCartContext {
  cartItems: CartItem[];
  openCart: () => void;
  isOpen: boolean;
  closeCart: () => void;
  addToCart: (id: number) => void;
  getItemQuantity: (id: number) => number;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  cartQuantity: number;
}
