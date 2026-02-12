import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-amber-50 to-orange-50 border-t border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Bakery Info Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-amber-800">
              ABC<span className="text-amber-600">Bakery</span>
            </h3>
            <p className="text-amber-700 text-sm leading-relaxed">
              Crafting delicious memories since 1995. We bake with love using traditional recipes and the finest ingredients.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full text-amber-600 hover:text-amber-800 hover:bg-amber-100 transition-all duration-300 shadow-sm"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full text-amber-600 hover:text-amber-800 hover:bg-amber-100 transition-all duration-300 shadow-sm"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full text-amber-600 hover:text-amber-800 hover:bg-amber-100 transition-all duration-300 shadow-sm"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a 
                href="https://pinterest.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full text-amber-600 hover:text-amber-800 hover:bg-amber-100 transition-all duration-300 shadow-sm"
                aria-label="Pinterest"
              >
                <FaPinterest size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-800 border-b-2 border-amber-300 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Home', 'Menu', 'About Us', 'Contact', 'Careers'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-amber-700 hover:text-amber-900 hover:pl-2 transition-all duration-300 inline-block text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-800 border-b-2 border-amber-300 pb-2 inline-block">
              Opening Hours
            </h4>
            <ul className="space-y-2 text-sm text-amber-700">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span className="font-medium">7:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span className="font-medium">8:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="font-medium">9:00 AM - 6:00 PM</span>
              </li>
              <li className="mt-4 text-amber-900 font-medium">
                🎉 Open on holidays!
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-800 border-b-2 border-amber-300 pb-2 inline-block">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm text-amber-700">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-amber-600" />
                <span>123 Bakery Street, ABC City, SC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="flex-shrink-0 text-amber-600" />
                <span className="font-medium">+880 1234-56789</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="flex-shrink-0 text-amber-600" />
                <span className="font-medium">abc@bakery.com</span>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="pt-4">
              <h5 className="text-sm font-semibold text-amber-800 mb-2">
                Subscribe to our newsletter
              </h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-grow px-3 py-2 text-sm rounded-l-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-r-lg text-sm font-medium transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-amber-700">
              © {currentYear} ABCBakery. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-amber-700 hover:text-amber-900 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-amber-700 hover:text-amber-900 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-amber-700 hover:text-amber-900 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom stripe */}
      <div className="h-1 bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300"></div>
    </footer>
  );
}