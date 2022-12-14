import { ReactNode, Dispatch, SetStateAction } from "react";

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

export interface DataContext {
  currentProducts: Product[];
  currentPage: number;
  pageNumbers: number[];
  sortByHandler: (order: string) => void;
  nextPage: () => void;
  prevPage: () => void;
  clickedNumberPage: (clickedNumber: number) => void;
}

export interface DataContextProps {
  children: ReactNode;
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
