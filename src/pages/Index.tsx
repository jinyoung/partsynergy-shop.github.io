
import React from 'react';
import HeroBanner from '@/components/HeroBanner';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getFeaturedProducts, getCategories } from '@/services/productService';
import { useCart } from '@/contexts/CartContext';

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  const categories = getCategories();
  const { addToCart, state } = useCart();

  return (
    <div className="flex flex-col min-h-screen bg-main-bg bg-cover bg-fixed bg-center">
      <Header cartItemCount={state.items.reduce((sum, item) => sum + item.quantity, 0)} />
      
      <main className="flex-grow">
        <HeroBanner />
        
        <section className="container mx-auto px-4 py-12">
          <div className="bg-white/90 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Browse Categories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <CategoryCard
                  key={category.name}
                  name={category.name}
                  image={category.image}
                  count={category.count}
                />
              ))}
            </div>
          </div>
        </section>
        
        <section className="container mx-auto px-4 py-12 mb-12">
          <div className="bg-white/90 rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Featured Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          </div>
        </section>
        
        <section className="container mx-auto px-4 py-12 mb-12">
          <div className="bg-ask-blue/10 bg-white/90 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-ask-blue mb-4">Why Choose ASK?</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              ABC Sales Korea is your trusted partner for high-quality electronic components 
              and manufacturing parts. We provide the best products at competitive prices.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality Assurance</h3>
                <p className="text-gray-600">
                  All our products undergo rigorous testing to ensure they meet the highest quality standards.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Fast Shipping</h3>
                <p className="text-gray-600">
                  We offer quick and reliable shipping options to get your parts to you as soon as possible.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Technical Support</h3>
                <p className="text-gray-600">
                  Our team of experts is always ready to assist you with technical inquiries and product selection.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
