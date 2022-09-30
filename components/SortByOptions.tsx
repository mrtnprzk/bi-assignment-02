import React from "react";
import SwapVertOutlinedIcon from "@mui/icons-material/SwapVertOutlined";
import { useData } from "../context/DataContext";

const SortByOptions = () => {
  const { sortByHandler } = useData();

  return (
    <div className="hidden lg:block text-xl text-gray-500">
      <span>
        <SwapVertOutlinedIcon />
        Sort By
      </span>
      <select
        onChange={(e) => sortByHandler(e.target.value)}
        className="text-black border-none text-xl w-fit focus:ring-0"
      >
        <option value="ASC">Price: Low to High</option>
        <option value="DESC">Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortByOptions;
