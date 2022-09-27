import React from "react";
import FilteringPanel from "./FilteringPanel";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  setIsMobileFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilteringPanelMobile = ({ setIsMobileFilter }: Props) => {
  return (
    <div className="bg-white fixed top-0 bottom-0 left-0 right-0 pb-40 overflow-auto z-50 lg:hidden">
      <div className="overflow-auto text-3xl space-y-6 p-8">
        <div className="flex justify-between">
          <h4 className="text-4xl font-bold">Filter</h4>
          <button onClick={() => setIsMobileFilter(false)}>
            <CloseIcon fontSize="large" />
          </button>
        </div>
        <FilteringPanel />
      </div>
      <div className="bg-white fixed bottom-0 left-0 right-0 flex justify-between text-2xl p-5 border-t-4 space-x-6">
        <button className="border-4 border-black py-2 w-full">CLEAR</button>
        <button className="bg-black text-white py-2 w-full">SAVE</button>
      </div>
    </div>
  );
};

export default FilteringPanelMobile;
