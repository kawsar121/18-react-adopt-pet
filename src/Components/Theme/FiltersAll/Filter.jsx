
import FilterPrice from './FilterPrice';
import FilterBrand from './FilterBrand';

const Filter = () => {
  return (
    <div className=" flex-shrink-0 bg-white p-4 rounded-lg shadow-md hidden lg:block">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Filter By</h2>
      <FilterPrice/>
      <FilterBrand />
    </div>
  );
};

export default Filter;