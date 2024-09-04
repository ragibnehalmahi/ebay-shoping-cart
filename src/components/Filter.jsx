import React, { useState } from 'react';
import { useProductContext } from '../contexts/ProductContext';

const Filter = () => {
  const { dispatch } = useProductContext();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const applyFilter = () => {
    dispatch({ type: 'SET_FILTER', payload: { minPrice, maxPrice } });
    dispatch({ type: 'FILTER_PRODUCTS' });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Filter Products</h2>
      <div className="flex space-x-4">
        <input
          type="range"
          min="0"
          max="1000"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="w-full"
        />
        <input
          type="range"
          min="0"
          max="1000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="w-full"
        />
      </div>
      <button onClick={applyFilter} className="bg-blue-500 text-white px-4 py-2 mt-2">Apply Filter</button>
    </div>
  );
};

export default Filter;

