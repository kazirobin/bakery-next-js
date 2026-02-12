"use client";

import Link from "next/link";

export default function Header() {


  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold">
        Sweet Bakery
      </Link>

      {/* Links */}
      <div className="flex gap-6 items-center">
        <Link href="/">Home</Link>
        <Link href="/admin/login">Login</Link>
        <Link href="/cart">Cart</Link>

       
      </div>
    </nav>
  );
}