import React from 'react';
import { useSelector } from 'react-redux';

const CartSummary = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <div className="p-4 bg-white rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-700">No items in the cart.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-2">
              <div>
                {item.name} x {item.quantity}
              </div>
              <div>${item.price * item.quantity}</div>
            </div>
          ))}
          <div className="text-right font-bold mt-4">Total: ${totalPrice}</div>
        </div>
      )}
    </div>
  );
};

export default CartSummary;
