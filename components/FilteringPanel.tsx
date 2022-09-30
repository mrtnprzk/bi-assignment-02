import React from "react";

const FilteringPanel = () => {
  const categories = [
    { label: "People", value: "people" },
    { label: "Premium", value: "premium" },
    { label: "Pets", value: "pets" },
    { label: "Food", value: "food" },
    { label: "Landmarks", value: "landmarks" },
    { label: "Cities", value: "cities" },
    { label: "Nature", value: "nature" },
  ];

  const priceRange = [
    { label: "Lower than $20" },
    { label: "$20 - $100" },
    { label: "$100 - $200" },
    { label: "More than $200" },
  ];

  const selectOnlyThis = (id: any) => {
    var myCheckbox = document.getElementsByName("price-range");
    Array.prototype.forEach.call(myCheckbox, (el) => {
      el.checked = false;
    });
    id.checked = true;
  };

  return (
    <>
      <h3 className="font-bold">Category</h3>
      {categories.map((category, i) => (
        <div key={i} className="flex items-center space-x-4">
          <input
            className="border-black text-black focus:ring-0 w-8 h-8 lg:w-4 lg:h-4"
            type="checkbox"
            name={category.value}
            value={category.value}
          />
          <label htmlFor={category.value}>{category.label}</label>
        </div>
      ))}

      <div className="border-t-2"></div>

      <h3 className="font-bold">Price Range</h3>
      {priceRange.map((range, i) => (
        <div key={i} className="flex items-center space-x-4">
          <input
            className="border-black text-black focus:ring-0 w-8 h-8 lg:w-4 lg:h-4"
            type="checkbox"
            name="price-range"
            value={range.label}
            onClick={(e) => selectOnlyThis(e.target)}
          />
          <label htmlFor={range.label}>{range.label}</label>
        </div>
      ))}
    </>
  );
};

export default FilteringPanel;
