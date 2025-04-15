
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroBanner: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="relative bg-hero-pattern bg-cover bg-center py-24 md:py-32 mb-12">
      <div className="absolute inset-0 bg-ask-blue/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-md">
            This site is underconstruction!
          </h1>
          <p className="text-xl text-white mb-8 drop-shadow-md">
            Your trusted partner for quality electronic components and manufacturing
          </p>
          
          <p className="text-white mb-8 drop-shadow-md">
            에이비씨세일즈코리아의 연결 홈페이지 입니다.  
          </p>
          
          <p className="text-white/80 mb-6">
              ABC Sales Korea - E-mail _glen@abcsales.co.kr.
          </p>       
          
          <p className="text-white/80 mb-6">
              ABC Sales Korea - Blog : https://blog.naver.com/abcsales
          </p>    
          
          <p className="text-white/80 mb-6">
              ABC-Taiwan Electronics : https://www.atec-group-market.com
          </p>    
          

          <form onSubmit={handleSearch} className="max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for electronic components..."
                className="w-full py-3 px-6 rounded-full text-lg border-2 border-white/30 bg-white/90 shadow-lg focus:outline-none focus:ring-2 focus:ring-ask-blue/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-ask-blue text-white p-2 rounded-full hover:bg-ask-blue/90 transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
