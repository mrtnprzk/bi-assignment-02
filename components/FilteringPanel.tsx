import React from "react";

const FilteringPanel = () => {
  return (
    <div className="hidden lg:block lg:w-1/6">
      <div>
        <h3>Category</h3>
        <div className="flex my-4 space-x-4">
          <input type="checkbox" name="people" value="" />
          <label htmlFor="people">People</label>
        </div>
        <div className="flex my-4 space-x-4">
          <input type="checkbox" name="people" value="" />
          <label htmlFor="people">Premium</label>
        </div>
        <div className="flex my-4 space-x-4">
          <input type="checkbox" name="people" value="" />
          <label htmlFor="people">Pets</label>
        </div>
        <div className="flex my-4 space-x-4">
          <input type="checkbox" name="people" value="" />
          <label htmlFor="people">Food</label>
        </div>
        <div className="flex my-4 space-x-4">
          <input type="checkbox" name="people" value="" />
          <label htmlFor="people">Landmarks</label>
        </div>
        <div className="flex my-4 space-x-4">
          <input type="checkbox" name="people" value="" />
          <label htmlFor="people">Cities</label>
        </div>
        <div className="flex my-4 space-x-4">
          <input type="checkbox" name="people" value="" />
          <label htmlFor="people">Nature</label>
        </div>
      </div>
      <div className="border-t-2">
        <h3>Price Range</h3>
        <div className="flex my-4 space-x-4">
          <input type="checkbox" name="people" value="" />
          <label htmlFor="people">Lower than $20</label>
        </div>
        <div className="flex my-4 space-x-4">
          <input type="checkbox" name="people" value="" />
          <label htmlFor="people">$20 - $100</label>
        </div>
        <div className="flex my-4 space-x-4">
          <input type="checkbox" name="people" value="" />
          <label htmlFor="people">$100 - $200</label>
        </div>
        <div className="flex my-4 space-x-4">
          <input type="checkbox" name="people" value="" />
          <label htmlFor="people">More than $200</label>
        </div>
      </div>
    </div>
  );
};

export default FilteringPanel;
