"use client";

import Link from "next/link";
import { FaShoppingCart, FaUserLock } from 'react-icons/fa';

export default function Header() {
  return (
    <nav className="bg-gray-900 text-white px-8 py-5 shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo with Subtle Hover */}
        <Link 
          href="/" 
          className="text-2xl font-semibold tracking-wide hover:text-amber-400 transition-colors duration-300"
        >
          ABC Bakery
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8 items-center">
          <Link 
            href="/" 
            className="relative font-medium hover:text-amber-400 transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all after:duration-300"
          >
            Home
          </Link>
          
          <Link 
            href="/admin/login" 
            className="flex items-center gap-2 font-medium hover:text-amber-400 transition-colors duration-200"
          >
            <FaUserLock size={16} />
            Login
          </Link>
          
          <Link 
            href="/cart" 
            className="flex items-center gap-2 bg-amber-600 hover:bg-amber-500 px-5 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <FaShoppingCart size={16} />
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}