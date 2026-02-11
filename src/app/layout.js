"use client"
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main className="p-6">{children}</main>
          <Footer />
        </CartProvider>

        {/* Hot Toast */}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
