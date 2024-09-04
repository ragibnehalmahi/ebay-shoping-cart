import React, { useState } from 'react';

const Sidebar = ({ onFilter }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleFilter = () => {
    onFilter(minPrice, maxPrice);
  };

  return (
    <div className="w-1/5 p-4 bg-gray-200 h-full">
      <h2 className="text-xl font-bold mb-4">Filter by Price</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Min Price:</label>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter minimum price"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Max Price:</label>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter maximum price"
        />
      </div>
      <button
        onClick={handleFilter}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Filter
      </button>
    </div>
  );
};

export default Sidebar;
