export const productReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload),
        };
      case 'UPDATE_QUANTITY':
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          ),
        };
      case 'SET_MIN_PRICE':
        return { ...state, minPrice: action.payload };
      case 'SET_MAX_PRICE':
        return { ...state, maxPrice: action.payload };
      case 'FILTER_BY_PRICE':
        return {
          ...state,
          filteredProducts: state.products.filter(
            (product) =>
              product.price >= state.minPrice && product.price <= state.maxPrice
          ),
        };
      case 'SET_PRODUCTS':
        return { ...state, products: action.payload, filteredProducts: action.payload };
      default:
        return state;
    }
  };
  