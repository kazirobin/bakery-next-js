// app/order-confirmation/page.tsx
import Link from 'next/link'
import { IoCheckmarkCircle } from 'react-icons/io5'
import { HiOutlineShoppingBag } from 'react-icons/hi'

export default function OrderConfirmationPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="flex justify-center mb-4">
          <IoCheckmarkCircle className="w-20 h-20 text-green-500" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Order Confirmed!
        </h1>
        
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been placed successfully.
        </p>
        
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-600">
            Order #: <span className="font-medium text-gray-900">ORD-{Math.floor(Math.random() * 10000)}</span>
          </p>
          <p className="text-sm text-gray-500 mt-1">
            We&apos;ve sent a confirmation email to your inbox.
          </p>
        </div>
        
        <div className="space-y-3">
          <span 
            href="/orders"
            className="flex items-center justify-center gap-2 w-full bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <HiOutlineShoppingBag className="w-5 h-5" />
            View Orders
          </span>
          
          <span 
            href="/"
            className="block w-full bg-white text-gray-700 px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Continue Shopping
          </span>
        </div>
      </div>
    </div>
  )
}