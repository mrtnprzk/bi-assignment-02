import React from "react";
import SwapVertOutlinedIcon from "@mui/icons-material/SwapVertOutlined";

const SortByOptions = () => {
  return (
    <div className="hidden lg:block text-xl text-gray-500">
      <span>
        <SwapVertOutlinedIcon />
        Sort By
      </span>
      <select className="text-black border-none text-xl w-fit">
        <option selected>Name</option>
        <option >Price</option>
      </select>
    </div>
  );
};

export default SortByOptions;
