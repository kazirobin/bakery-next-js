"use client";

import Link from "next/link";
import { FaShoppingCart, FaUserLock } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { theme, tw } from '@/config/theme';

export default function Header() {
  const pathname = usePathname();
  
  // Check current path
  const isHomePage = pathname === '/';
  const isLoginPage = pathname === '/admin/login';
  const isCartPage = pathname === '/cart';
  const isAdminRoute = pathname?.startsWith('/admin');

  return (
    <nav className={`${tw.header()} px-8 py-5 shadow-2xl sticky top-0 z-50 border-b`}>
      <div className={theme.utilities.container}>
        <div className="flex justify-between items-center">
          {/* Logo - Matching footer style */}
          <Link 
            href="/" 
            className={`text-2xl font-serif font-bold ${theme.components.header.logo.hover} transition-colors duration-300`}
          >
            <span className={theme.components.header.logo.primary}>ABC</span>
            <span className={theme.components.header.logo.accent}>Bakery</span>
          </Link>

          {/* Dynamic Navigation Links */}
          <div className="flex gap-8 items-center">
            
            {/* Case 1: On Login Page - Show only Back to Home */}
            {isLoginPage && (
              <Link 
                href="/" 
                className={`font-medium ${theme.components.header.link.hover} transition-colors duration-200`}
              >
                ← Back to Home
              </Link>
            )}

            {/* Case 2: On Cart Page - Show Continue Shopping */}
            {isCartPage && (
              <Link 
                href="/" 
                className={`flex items-center gap-2 ${tw.cartButton()} px-5 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5`}
              >
                ← Continue Shopping
              </Link>
            )}

            {/* Case 3: On Home Page - Show Login and Cart */}
            {isHomePage && (
              <>
                <Link 
                  href="/admin/login" 
                  className={`flex items-center gap-2 font-medium ${theme.components.login.hover} transition-colors duration-200`}
                >
                  <FaUserLock size={16} className={theme.components.login.icon} />
                  Login
                </Link>
                
                <Link 
                  href="/cart" 
                  className={`flex items-center gap-2 ${tw.cartButton()} px-5 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5`}
                >
                  <FaShoppingCart size={16} />
                  Cart
                </Link>
              </>
            )}

            {/* Case 4: On Other User Pages - Show Cart only */}
            {!isHomePage && !isCartPage && !isLoginPage && !isAdminRoute && (
              <Link 
                href="/cart" 
                className={`flex items-center gap-2 ${tw.cartButton()} px-5 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5`}
              >
                <FaShoppingCart size={16} />
                Cart
              </Link>
            )}

            {/* Case 5: On Admin Pages (but not login) - Show minimal nav */}
            {isAdminRoute && !isLoginPage && (
              <Link 
                href="/" 
                className={`font-medium ${theme.components.header.link.hover} transition-colors duration-200`}
              >
                ← Exit Admin
              </Link>
            )}

          </div>
        </div>
      </div>
      
      {/* Decorative bottom stripe */}
      <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${theme.components.header.stripe}`}></div>
    </nav>
  );
}