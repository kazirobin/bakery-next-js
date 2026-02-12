"use client";

import { FaEdit, FaTrash, FaCartPlus } from 'react-icons/fa';
import { useCart } from "@/context/CartContext";
import toast from "react-hot-toast";

export default function ProductCard({ product, onEdit, onDelete }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart 🛒`);
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
            className="flex items-center gap-1 px-3 py-1.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors duration-200"
          >
            <FaCartPlus size={14} /> Add to Cart
          </button>
          
          {/* Only show Edit/Delete if onEdit and onDelete props are provided */}
          {onEdit && onDelete && (
            <div className="flex gap-2">
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