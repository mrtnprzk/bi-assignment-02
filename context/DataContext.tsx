import { createContext, useContext, useState } from "react";
import storeProducts from "../data/products.json";
import { Product, DataContext, DataContextProps } from "../types";

const DataContext = createContext({} as DataContext);

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }: DataContextProps) => {
  //Data
  const featuredProduct = storeProducts.find(
    (product) => product.featured
  ) as Product;

  const allProducts = storeProducts.filter(
    (product) => !product.featured
  ) as Product[];

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const pageNumbers = [];
  for (
    let index = 1;
    index <= Math.ceil(allProducts.length / productsPerPage);
    index++
  ) {
    pageNumbers.push(index);
  }

  const nextPage = () => {
    setCurrentPage((currPage) => currPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((currPage) => currPage - 1);
  };

  const clickedNumberPage = (clickedNumber: number) => {
    setCurrentPage(clickedNumber);
  };

  return (
    <DataContext.Provider
      value={{
        featuredProduct,
        currentProducts,
        currentPage,
        pageNumbers,
        nextPage,
        prevPage,
        clickedNumberPage,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
