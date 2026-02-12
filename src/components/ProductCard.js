"use client";

import { FaEdit, FaTrash, FaCartPlus, FaCheck } from 'react-icons/fa';
import { useCart } from "@/context/CartContext";
import { useState, useEffect } from 'react';

export default function ProductCard({ product, onEdit, onDelete }) {
  const { cart, addToCart, isAdding } = useCart();
  const [isLocalAdding, setIsLocalAdding] = useState(false);
  
  // Check if product is already in cart
  const isInCart = cart.some(item => item.id === product.id);
  const cartItem = cart.find(item => item.id === product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isLocalAdding || isAdding || isInCart) return;
    
    setIsLocalAdding(true);
    addToCart(product);
    
    setTimeout(() => {
      setIsLocalAdding(false);
    }, 500);
  };

  // Determine if this is admin view (has onEdit and onDelete props)
  const isAdminView = onEdit && onDelete;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <div className="relative h-48 w-full">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {isInCart && !isAdminView && (
          <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
            {cartItem?.qty} in cart
          </span>
        )}
      </div>
      
      {/* Product Details */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
          <span className="text-lg font-bold text-indigo-600">${product.price}</span>
        </div>
        
        <p className="text-sm text-gray-600 mb-3">
          <span className="font-medium">Ingredients:</span> {product.ingredients}
        </p>
        
        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
          {/* Only show Add to Cart button in user view (when onEdit and onDelete are NOT provided) */}
          {!isAdminView && (
            <button
              onClick={handleAddToCart}
              disabled={isLocalAdding || isAdding || isInCart}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-all duration-200 ${
                isInCart
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : isLocalAdding || isAdding
                  ? 'bg-green-100 text-green-400 cursor-not-allowed'
                  : 'bg-green-50 text-green-600 hover:bg-green-100 hover:scale-105'
              }`}
            >
              {isInCart ? (
                <>
                  <FaCheck size={14} />
                  In Cart ({cartItem?.qty})
                </>
              ) : isLocalAdding ? (
                <>
                  <div className="w-4 h-4 border-2 border-green-600 border-t-transparent rounded-full animate-spin" />
                  Adding...
                </>
              ) : (
                <>
                  <FaCartPlus size={14} />
                  Add to Cart
                </>
              )}
            </button>
          )}
          
          {/* Show Edit/Delete only in admin view */}
          {isAdminView && (
            <div className="flex gap-2 ml-auto">
              <button
                onClick={() => onEdit(product)}
                className="flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-200"
              >
                <FaEdit size={14} /> Edit
              </button>
              <button
                onClick={() => onDelete(product.id)}
                className="flex items-center gap-1 px-3 py-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors duration-200"
              >
                <FaTrash size={14} /> Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}