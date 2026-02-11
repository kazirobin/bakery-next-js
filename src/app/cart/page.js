"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import toast from "react-hot-toast";

export default function CartPage() {
  const { cart, addToCart } = useCart();
  console.log(cart)

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (cart.length === 0) {
    return <p className="text-center">Your cart is empty 🛒</p>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Cart Details</h1>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border p-4 rounded"
          >
            <div>
              <h2 className="font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-600">
                ${item.price} × {item.qty}
              </p>
            </div>

            <button
              onClick={() => {
                addToCart(item);
                toast.success("Quantity increased");
              }}
              className="bg-green-500 text-white px-3 py-1 rounded"
            >
              + Add
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <h2 className="text-xl font-bold">Total: ${total}</h2>

        <Link href="/checkout">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}
