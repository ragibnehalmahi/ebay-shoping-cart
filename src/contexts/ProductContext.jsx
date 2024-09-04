import React, { createContext, useReducer, useContext } from 'react';

// Initial state
const initialState = {
  products: [],  // List of products
  cart: [],
  filteredProducts: [],
  minPrice: 0,
  maxPrice: 1000,
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload, filteredProducts: action.payload };
    case 'ADD_TO_CART':
      const existingProductIndex = state.cart.findIndex(item => item.id === action.payload.id);
      if (existingProductIndex > -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex].quantity += 1;
        return { ...state, cart: updatedCart };
      } else {
        return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
      }
    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
    case 'UPDATE_QUANTITY':
      const updatedCart = state.cart.map(item =>
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
      );
      return { ...state, cart: updatedCart };
    case 'SET_FILTER':
      return { ...state, minPrice: action.payload.minPrice, maxPrice: action.payload.maxPrice };
    case 'FILTER_PRODUCTS':
      const { minPrice, maxPrice } = state;
      const filtered = state.products.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
      return { ...state, filteredProducts: filtered };
    default:
      return state;
  }
};

// Create a context
export const ProductContext = createContext();

// Context provider component
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use the ProductContext
export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};
