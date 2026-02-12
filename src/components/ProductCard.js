"use client";

import { FaEdit, FaTrash, FaCartPlus } from 'react-icons/fa';
import { useCart } from "@/context/CartContext";
import { useState } from 'react';

export default function ProductCard({ product, onEdit, onDelete }) {
  const { addToCart, isAdding } = useCart();
  const [isLocalAdding, setIsLocalAdding] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isLocalAdding || isAdding) return;
    
    setIsLocalAdding(true);
    addToCart(product);
    
    setTimeout(() => {
      setIsLocalAdding(false);
    }, 500);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <div className="relative h-48 w-full">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
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
          <button
            onClick={handleAddToCart}
            disabled={isLocalAdding || isAdding}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors duration-200 ${
              isLocalAdding || isAdding
                ? 'bg-green-100 text-green-400 cursor-not-allowed'
                : 'bg-green-50 text-green-600 hover:bg-green-100'
            }`}
          >
            <FaCartPlus size={14} className={isLocalAdding ? 'animate-bounce' : ''} />
            {isLocalAdding ? 'Adding...' : 'Add to Cart'}
          </button>
          
          {/* Only show Edit/Delete if onEdit and onDelete props are provided */}
          {onEdit && onDelete && (
            <div className="flex gap-2">
              <divton
                onClick={() => onEdit(product)}
                className="flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-200"
              >
                <FaEdit size={14} /> Edit
              </divton>
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