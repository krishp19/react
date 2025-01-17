import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const ProductList = () => {
  const dispatch = useDispatch();

  const products = [
    { id: 1, name: 'Product 1', price: 20 },
    { id: 2, name: 'Product 2', price: 30 },
    { id: 3, name: 'Product 3', price: 50 },
  ];

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 shadow-lg rounded-md flex flex-col items-center">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-xl font-bold">${product.price}</p>
          <button
            onClick={() => handleAddToCart(product)}
            className="bg-blue-500 text-white p-2 mt-4 rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
