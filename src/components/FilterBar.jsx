import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

const FilterBar = () => {
  const { state, dispatch } = useContext(ProductContext);

  const handleMinPriceChange = (e) => {
    dispatch({ type: 'SET_MIN_PRICE', payload: Number(e.target.value) });
  };

  const handleMaxPriceChange = (e) => {
    dispatch({ type: 'SET_MAX_PRICE', payload: Number(e.target.value) });
  };

  const handleFilter = () => {
    dispatch({ type: 'FILTER_BY_PRICE' });
  };

  return (
    <div className="p-4 border-b">
      <div className="flex space-x-4">
        <div>
          <label className="block text-sm">Min Price</label>
          <input
            type="range"
            min="0"
            max="1000"
            value={state.minPrice}
            onChange={handleMinPriceChange}
            className="w-full"
          />
          <p>{state.minPrice}</p>
        </div>
        <div>
          <label className="block text-sm">Max Price</label>
          <input
            type="range"
            min="0"
            max="1000"
            value={state.maxPrice}
            onChange={handleMaxPriceChange}
            className="w-full"
          />
          <p>{state.maxPrice}</p>
        </div>
      </div>
      <button
        onClick={handleFilter}
        className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
      >
        Filter
      </button>
    </div>
  );
};

export default FilterBar;
