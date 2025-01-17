// components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../features/cart/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  
  // Select cart items from the Redux store
  const cartItems = useSelector((state) => state.cart.items);
  
  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item)); // Dispatch the action to remove the item from the cart
  };

  const handleClearCart = () => {
    dispatch(clearCart()); // Dispatch the action to clear the cart
  };

  const handlePay = () => {
    alert(`Total paid: $${totalPrice}`); // Placeholder for the Pay button logic
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>

      {/* Display Cart Items */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center p-2 border-b mb-2">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>${item.price}</p>
              </div>
              <button
                onClick={() => handleRemoveFromCart(item)}
                className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Display Total Price */}
      <div className="flex justify-between items-center mt-4">
        <h3 className="text-xl font-semibold">Total Price:</h3>
        <p className="text-xl font-bold">${totalPrice}</p>
      </div>

      {/* Buttons for Clear Cart and Pay */}
      {cartItems.length > 0 && (
        <div className="mt-4 flex space-x-4">
          <button
            onClick={handleClearCart}
            className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 w-32"
          >
            Clear Cart
          </button>

          <button
            onClick={handlePay}
            className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 w-32"
          >
            Pay
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
