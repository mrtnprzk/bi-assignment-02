import { createContext, useContext, useState } from "react";
import { allProducts } from "../data/products";
import { DataContext, DataContextProps } from "../types";

const DataContext = createContext({} as DataContext);

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }: DataContextProps) => {
  const [order, setOrder] = useState("ASC"); //Sort by ASC/DESC
  const [currentPage, setCurrentPage] = useState(1); //Pagination
  const productsPerPage = 6;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const pageNumbers = [];

  for (
    let index = 1;
    index <= Math.ceil(allProducts.length / productsPerPage);
    index++
  ) {
    pageNumbers.push(index);
  }

  //FUNCTIONS
  const sortByHandler = (order: string) => {
    if (order === "DESC") {
      setOrder("DESC");
    } else {
      setOrder("ASC");
    }
    setCurrentPage(1);
  };

  const nextPage = () => {
    setCurrentPage((currPage) => currPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((currPage) => currPage - 1);
  };

  const clickedNumberPage = (clickedNumber: number) => {
    setCurrentPage(clickedNumber);
  };

  //Current Products
  const currentProducts = allProducts
    .sort((a, b) => {
      return order === "ASC" ? a.price - b.price : b.price - a.price;
    })
    .slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <DataContext.Provider
      value={{
        currentProducts,
        currentPage,
        pageNumbers,
        sortByHandler,
        nextPage,
        prevPage,
        clickedNumberPage,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
