import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";

function Navbar() {
  return (
    <div>
      <nav className="h-[110px] bg-black text-white flex justify-between items-center px-5">
        {/* Logo Section */}
        <div className="logo">
          <h1 className="text-2xl font-bold">Shop Bazar</h1>
        </div>
        
        {/* Links Section */}
        <ul className="flex gap-6 items-center">
          <li>
            <Link to="/" className="hover:text-gray-400">Home</Link>
          </li>
          <li className="flex items-center gap-2 ">
            <Link to="/cart" className="flex items-center gap-1 hover:text-gray-400">
              Cart <FaShoppingBag size={20} color="white" />
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-gray-400">About</Link>
          </li>
          <li>
            <Link to="/" className="hover:text-gray-400">Shop</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
