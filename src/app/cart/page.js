"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";
import { FaTrash, FaPlus, FaMinus, FaShoppingBag, FaArrowLeft } from 'react-icons/fa';

export default function CartPage() {
  const { cart, addToCart, removeFromCart, decreaseQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  const handleDelete = (id, name) => {
    removeFromCart(id);
    toast.success(`${name} removed from cart 🗑️`);
  };

  const handleIncrease = (item) => {
    addToCart(item);
    toast.success("Quantity increased");
  };

  const handleDecrease = (item) => {
    if (item.qty > 1) {
      decreaseQuantity(item.id);
      toast.success("Quantity decreased");
    } else {
      removeFromCart(item.id);
      toast.success(`${item.name} removed from cart 🗑️`);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
        <div className="text-center max-w-md">
          <div className="bg-white rounded-full p-6 w-24 h-24 mx-auto mb-6 shadow-lg flex items-center justify-center">
            <FaShoppingBag className="w-12 h-12 text-gray-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            <FaArrowLeft size={16} />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <FaShoppingBag className="text-indigo-600" />
              Shopping Cart
            </h1>
            <p className="text-gray-600 mt-1">
              {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>
          <Link 
            href="/" 
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow"
          >
            <FaArrowLeft size={14} />
            Continue Shopping
          </Link>
        </div>

        {/* Cart Items Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row p-4 gap-4">
                  {/* Product Image */}
                  <div className="sm:w-24 h-24 rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col sm:flex-row justify-between gap-4">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900 mb-1">
                        {item.name}
                      </h2>
                      <p className="text-sm text-gray-600 mb-2">
                        {item.ingredients}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-indigo-600">
                          ${item.price}
                        </span>
                        <span className="text-sm text-gray-500">each</span>
                      </div>
                    </div>

                    {/* Quantity Controls and Actions */}
                    <div className="flex flex-col items-end justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                        <button
                          onClick={() => handleDecrease(item)}
                          className="w-8 h-8 flex items-center justify-center bg-white rounded-md text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-200 shadow-sm"
                          aria-label="Decrease quantity"
                        >
                          <FaMinus size={12} />
                        </button>
                        <span className="w-8 text-center font-semibold text-gray-900">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => handleIncrease(item)}
                          className="w-8 h-8 flex items-center justify-center bg-white rounded-md text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-200 shadow-sm"
                          aria-label="Increase quantity"
                        >
                          <FaPlus size={12} />
                        </button>
                      </div>

                      {/* Item Total and Delete */}
                      <div className="flex items-center gap-4 mt-3">
                        <span className="font-bold text-gray-900">
                          ${(item.price * item.qty).toFixed(2)}
                        </span>
                        <button
                          onClick={() => handleDelete(item.id, item.name)}
                          className="flex items-center gap-1 px-3 py-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors duration-200"
                          aria-label="Remove item"
                        >
                          <FaTrash size={14} />
                          <span className="text-sm">Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                Order Summary
              </h2>

              {/* Summary Details */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({totalItems} items)</span>
                  <span className="font-medium">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-medium text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span className="font-medium">${(total * 0.1).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span className="text-indigo-600">
                      ${(total + total * 0.1).toFixed(2)}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Including 10% tax</p>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-6">
                <label htmlFor="promo" className="block text-sm font-medium text-gray-700 mb-2">
                  Promo Code
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    id="promo"
                    placeholder="Enter code"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                  />
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium">
                    Apply
                  </button>
                </div>
              </div>

              {/* Checkout Button */}
              <Link href="/checkout">
                <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
                  Proceed to Checkout
                </button>
              </Link>

              {/* Payment Methods */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center mb-3">
                  We accept
                </p>
                <div className="flex justify-center gap-3">
                  <span className="px-3 py-1 bg-gray-100 rounded-md text-sm font-medium text-gray-700">Visa</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-md text-sm font-medium text-gray-700">Mastercard</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-md text-sm font-medium text-gray-700">PayPal</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products or Recommendations (Optional) */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6">You might also like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow p-3 text-center">
                <div className="w-full h-24 bg-gray-100 rounded-lg mb-2"></div>
                <h4 className="font-medium text-sm">Sample Product</h4>
                <p className="text-indigo-600 font-bold text-sm">$9.99</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}