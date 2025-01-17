import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo/Name */}
        <div className="text-2xl font-bold">
          Shopping Cart
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <a href="/" className="hover:bg-blue-500 px-4 py-2 rounded-md text-black hover:text-black">
            Home
          </a>
          <a href="/cart" className="hover:bg-blue-500 px-4 py-2 rounded-md text-black hover:text-black">
            Cart
          </a>
        </div>

        {/* Login and Signup Buttons */}
        <div className="flex space-x-4">
          <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md">
            Login
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-md">
            Signup
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
