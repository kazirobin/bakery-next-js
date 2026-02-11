import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-green-500 text-white p-4 flex justify-between">
      <h1 className="font-bold text-lg">ABC Bakery</h1>

      <nav className="space-x-4">
        <Link href="/">Products</Link>
        <Link href="/cart">View Cart</Link>
      </nav>
    </header>
  );
}
