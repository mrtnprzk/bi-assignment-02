import { createContext, useContext } from "react";
import { Product } from "../types";
import storeProducts from "../data/products.json";
import { DataContext, DataContextProps } from "../types";

const DataContext = createContext({} as DataContext);

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }: DataContextProps) => {
  const featuredProduct = storeProducts.find(
    (product) => product.featured
  ) as Product;

  const products = storeProducts.filter(
    (product) => !product.featured
  ) as Product[];

  return (
    <DataContext.Provider
      value={{
        featuredProduct,
        products,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
