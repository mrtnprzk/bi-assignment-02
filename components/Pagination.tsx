import React from "react";
import { useData } from "../context/DataContext";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Pagination = () => {
  const { currentPage, pageNumbers, prevPage, nextPage, clickedNumberPage } =
    useData();
  return (
    <div className="flex items-center mt-10 mb-10 space-x-5 mx-auto lg:mt-28">
      <button
        onClick={prevPage}
        className={`${currentPage === 1 && "text-gray-300"}`}
        disabled={currentPage === 1 && true}
      >
        <ArrowBackIosIcon fontSize="medium" />
      </button>
      <ul className="flex items-center text-3xl text-gray-500 space-x-4">
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => clickedNumberPage(number)}
            className={`cursor-pointer ${
              number === currentPage && "text-black font-bold"
            }`}
          >
            {number}
          </li>
        ))}
      </ul>
      <button
        onClick={nextPage}
        className={`${currentPage === 4 && "text-gray-300"}`}
        disabled={currentPage === 4 && true}
      >
        <ArrowForwardIosIcon fontSize="medium" />
      </button>
    </div>
  );
};

export default Pagination;
