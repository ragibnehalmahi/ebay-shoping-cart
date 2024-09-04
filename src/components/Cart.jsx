import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../features/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-700">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-2">
              <div>
                {item.name} x {item.quantity}
              </div>
              <div>${item.price * item.quantity}</div>
              <div className="flex items-center">
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 mr-2"
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <button
                  onClick={() => dispatch(increaseQuantity(item.id))}
                  className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="bg-red-500 text-white px-2 py-1 ml-2 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="text-right font-bold mt-4">Total: ${totalPrice}</div>
        </div>
      )}
    </div>
  );
};

export default Cart;
