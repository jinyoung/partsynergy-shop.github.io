
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  cartItemCount?: number;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-ask-blue text-3xl font-bold">ASK</span>
            <span className="text-ask-blue text-lg ml-2">ABC Sales Korea</span>
          </Link>

          {!isMobile && (
            <div className="flex-1 max-w-xl mx-8">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search for electronic components..."
                  className="search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-ask-blue"
                  aria-label="Search"
                >
                  <Search size={20} />
                </button>
              </form>
            </div>
          )}

          <div className="flex items-center">
            {!isMobile && (
              <nav className="mr-6">
                <ul className="flex space-x-6">
                  <li>
                    <Link
                      to="/products"
                      className="text-gray-700 hover:text-ask-blue transition-colors"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="text-gray-700 hover:text-ask-blue transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="text-gray-700 hover:text-ask-blue transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            )}

            <Link
              to="/cart"
              className="flex items-center px-3 py-2 bg-ask-blue/10 rounded-full text-ask-blue hover:bg-ask-blue/20 transition-colors"
            >
              <ShoppingCart size={20} />
              {cartItemCount > 0 && (
                <span className="ml-1 font-semibold">{cartItemCount}</span>
              )}
            </Link>

            {isMobile && (
              <button
                onClick={toggleMenu}
                className="ml-4 text-gray-700"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>
        </div>

        {isMobile && isMenuOpen && (
          <div className="mt-4 pb-4 animate-fade-in">
            <form onSubmit={handleSearch} className="relative mb-4">
              <input
                type="text"
                placeholder="Search for electronic components..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-ask-blue"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            </form>
            <nav>
              <ul className="flex flex-col space-y-3">
                <li>
                  <Link
                    to="/products"
                    className="text-gray-700 hover:text-ask-blue transition-colors block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-700 hover:text-ask-blue transition-colors block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-700 hover:text-ask-blue transition-colors block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
