"use client";

import { useCart } from "@/context/CartContext";
import toast from "react-hot-toast";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart 🛒`);
  };

  return (
    <div className="border p-4 rounded shadow">
      <h2 className="font-bold">{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p className="text-sm">{product.ingredients}</p>

      <button
        onClick={handleAddToCart}
        className="bg-green-500 text-white px-3 py-1 mt-2 rounded cursor-pointer"
      >
        Add to Cart
      </button>
    </div>
  );
}
