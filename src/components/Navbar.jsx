import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SearchBar from './SearchBar';

const Navbar = ({ onSearch }) => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const [showCart, setShowCart] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">eCommerce App</h1>
        
        {/* Search Bar */}
        <SearchBar onSearch={onSearch} />

        <div className="flex items-center space-x-4">
          <button
            className="text-white hover:text-gray-300"
            onClick={() => setShowCart(!showCart)}
          >
            Cart Summary ({totalQuantity})
          </button>
        </div>
      </div>

      {/* Cart Summary Dropdown */}
      {showCart && (
        <div className="bg-white p-4 rounded shadow-lg mt-2 absolute right-4">
          <CartSummary />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
