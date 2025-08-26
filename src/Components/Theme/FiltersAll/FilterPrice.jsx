import React, { useState } from 'react';

const FilterPrice = () => {
  const [isOpen, setIsOpen] = useState(true); // Default-e khola thakbe
  const handleToggle = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const [price, setPrice] = useState([0, 5475]);

  return (
    <div className="p-2 bg-white rounded-lg shadow-md">
      {/* Header + Toggle */}
      <div
        className="flex gap-8 justify-between items-center mb-4 cursor-pointer"
        onClick={handleToggle}
      >
        <h3 className="font-semibold text-sm">Price Range</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 text-gray-400 transform transition-transform ${
            isOpen ? 'rotate-180' : ''
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

      {/* Content (Only show if isOpen === true) */}
      {isOpen && (
        <>
          <div className="relative mb-6">
            <input
              type="range"
              min="0"
              max="5475"
              value={price[1]}
              onChange={(e) => setPrice([price[0], Number(e.target.value)])}
              className="h-1 bg-pink-200 rounded-lg appearance-none cursor-pointer range-slider top-0 w-full"
            />
          </div>
          <div className="flex justify-between mt-2">
            <div className="px-4 py-2 border rounded-lg text-sm text-gray-600 font-medium">
              $ {price[0]}
            </div>
            <div className="px-4 py-2 border rounded-lg text-sm text-gray-600 font-medium">
              $ {price[1]}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FilterPrice;
