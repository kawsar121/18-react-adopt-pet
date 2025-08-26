import React, { useState } from "react";

const brands = [
  { name: "Billi", count: 11 },
  { name: "Bioline", count: 56 },
  { name: "BonaCibo", count: 6 },
  { name: "Bonnie", count: 6 },
  { name: "Cats Up", count: 2 },
  { name: "Catsure", count: 8 },
  { name: "Chic & Charm", count: 1 },
  { name: "Dogge", count: 4 },
  { name: "Tanniel", count: 4 },
  { name: "Cobeney", count: 4 },
  { name: "Lorgat", count: 4 },
];

const FilterBrand = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md mt-4">
      {/* Header + Toggle */}
      <div
        className="flex justify-between items-center mb-4 cursor-pointer"
        onClick={handleToggle}
      >
        <h3 className="font-semibold text-lg">Brand</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 text-gray-400 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 
            1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Collapsible Content */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-2">
          {brands.map((brand) => (
            <div key={brand.name} className="flex items-center">
              <input
                type="checkbox"
                id={brand.name}
                className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
              />
              <label
                htmlFor={brand.name}
                className="ml-2 whitespace-nowrap text-gray-700"
              >
                {brand.name} ({brand.count})
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBrand;
