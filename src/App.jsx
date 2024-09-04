import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Sidebar from './components/Sidebar';
import productsData from './data/products.json';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
    setFilteredProducts(productsData);
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleFilter = (minPrice, maxPrice) => {
    const filtered = products.filter(
      (product) =>
        (!minPrice || product.price >= parseFloat(minPrice)) &&
        (!maxPrice || product.price <= parseFloat(maxPrice))
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="App">
      <Navbar onSearch={handleSearch} />
      <div className="container mx-auto mt-4 flex">
        {/* Sidebar */}
        <Sidebar onFilter={handleFilter} />

        {/* Main Content */}
        <div className="w-4/5 ml-4">
          <ProductList products={filteredProducts} />
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default App;
