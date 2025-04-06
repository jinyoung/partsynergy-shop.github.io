
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ask-blue text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ASK</h3>
            <p className="text-white/80">
              ABC Sales Korea - Your trusted partner for electronic components and manufacturing.
            </p>      
            <p className="text-white/80">
              ABC Sales Korea - E-mail _glen@abcsales.co.kr.
            </p>       
            <p className="text-white/80">
              ABC Sales Korea - Blog : https://blog.naver.com/abcsales
            </p>       
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/80 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=microcontrollers" className="text-white/80 hover:text-white transition-colors">
                  Microcontrollers
                </Link>
              </li>
              <li>
                <Link to="/products?category=sensors" className="text-white/80 hover:text-white transition-colors">
                  Sensors
                </Link>
              </li>
              <li>
                <Link to="/products?category=displays" className="text-white/80 hover:text-white transition-colors">
                  Displays
                </Link>
              </li>
              <li>
                <Link to="/products?category=connectors" className="text-white/80 hover:text-white transition-colors">
                  Connectors
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
            <address className="not-italic text-white/80">
              <p>123 Electronics Street</p>
              <p>Seoul, South Korea</p>
              <p className="mt-2">Email: info@abcsaleskorea.com</p>
              <p>Phone: +82-2-123-4567</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} ABC Sales Korea. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
