import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { theme, tw } from '@/config/theme';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`${tw.footer()} border-t`}>
      <div className={theme.utilities.container}>
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            
            {/* Bakery Info Section */}
            <div className="space-y-4">
              <h3 className={`text-2xl font-serif font-bold ${theme.components.footer.title}`}>
                ABC<span className="text-amber-600">Bakery</span>
              </h3>
              <p className={`${theme.components.footer.text} text-sm leading-relaxed`}>
                Crafting delicious memories since 1995. We bake with love using traditional recipes and the finest ingredients.
              </p>
              {/* Social Links */}
              <div className="flex space-x-4 pt-2">
                {[
                  { Icon: FaFacebook, href: 'https://facebook.com' },
                  { Icon: FaInstagram, href: 'https://instagram.com' },
                  { Icon: FaTwitter, href: 'https://twitter.com' },
                  { Icon: FaPinterest, href: 'https://pinterest.com' },
                ].map(({ Icon, href }, index) => (
                  <a 
                    key={index}
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`${theme.components.footer.social.bg} p-2.5 rounded-full ${theme.components.footer.social.text} ${theme.components.footer.social.hover} transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1`}
                    aria-label={href.split('//')[1].split('.')[0]}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className={`text-lg font-semibold ${theme.components.footer.title} border-b-2 ${theme.components.footer.titleBorder} pb-2 inline-block`}>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {['Home', 'Menu', 'About Us', 'Contact', 'Careers'].map((item) => (
                  <li key={item}>
                    <Link 
                      href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                      className={`${theme.components.footer.link} hover:pl-2 transition-all duration-300 inline-block text-sm font-medium`}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opening Hours */}
            <div className="space-y-4">
              <h4 className={`text-lg font-semibold ${theme.components.footer.title} border-b-2 ${theme.components.footer.titleBorder} pb-2 inline-block`}>
                Opening Hours
              </h4>
              <ul className={`space-y-3 text-sm ${theme.components.footer.text}`}>
                <li className="flex justify-between">
                  <span className="font-medium">Monday - Friday:</span>
                  <span className={theme.components.footer.textDark}>7:00 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Saturday:</span>
                  <span className={theme.components.footer.textDark}>8:00 AM - 9:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Sunday:</span>
                  <span className={theme.components.footer.textDark}>9:00 AM - 6:00 PM</span>
                </li>
                <li className={`mt-4 ${theme.components.footer.highlight} p-2 rounded-lg text-center font-semibold`}>
                  🎉 Open on holidays!
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h4 className={`text-lg font-semibold ${theme.components.footer.title} border-b-2 ${theme.components.footer.titleBorder} pb-2 inline-block`}>
                Get in Touch
              </h4>
              <div className={`space-y-4 text-sm ${theme.components.footer.text}`}>
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className={`mt-1 flex-shrink-0 text-amber-600 text-lg`} />
                  <span className="font-medium">123 Bakery Street, ABC City, SC 12345</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className={`flex-shrink-0 text-amber-600 text-lg`} />
                  <span className={`font-medium ${theme.components.footer.textDark}`}>+880 1234-56789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className={`flex-shrink-0 text-amber-600 text-lg`} />
                  <span className={`font-medium ${theme.components.footer.textDark}`}>abc@bakery.com</span>
                </div>
              </div>
              
              {/* Newsletter Signup */}
              <div className="pt-4">
                <h5 className={`text-sm font-semibold ${theme.components.footer.title} mb-2`}>
                  Subscribe to our newsletter
                </h5>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className={`flex-grow px-4 py-2.5 text-sm rounded-l-lg border ${theme.components.input.border} ${theme.components.input.focus} ${theme.components.input.text} ${theme.components.input.placeholder}`}
                  />
                  <button className={`${theme.components.footer.button.primary} ${theme.components.footer.button.hover} ${theme.components.footer.button.text} px-5 py-2.5 rounded-r-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5`}>
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className={`border-t ${theme.components.footer.border} pt-8 mt-8`}>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className={`text-sm ${theme.components.footer.text} font-medium`}>
                © {currentYear} <span className={`font-bold ${theme.components.footer.title}`}>ABCBakery</span>. All rights reserved.
              </p>
              <div className="flex space-x-8 text-sm">
                {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
                  <Link 
                    key={item}
                    href={`/${item.toLowerCase().replace(' ', '-')}`} 
                    className={`${theme.components.footer.link} font-medium transition-colors`}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom stripe */}
      <div className={`h-1.5 bg-gradient-to-r ${theme.components.footer.stripe}`}></div>
    </footer>
  );
}