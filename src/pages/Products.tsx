
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  getAllProducts, 
  searchProducts, 
  getProductsByCategory, 
  getCategories 
} from '@/services/productService';
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/components/ProductCard';

const Products = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('All Products');
  const { addToCart, state } = useCart();
  
  const searchQuery = searchParams.get('search');
  const categoryFilter = searchParams.get('category');
  
  useEffect(() => {
    setLoading(true);
    
    let filteredProducts: Product[] = [];
    
    if (searchQuery) {
      filteredProducts = searchProducts(searchQuery);
      setTitle(`Search Results: "${searchQuery}"`);
    } else if (categoryFilter) {
      filteredProducts = getProductsByCategory(categoryFilter);
      setTitle(`${categoryFilter} Products`);
    } else {
      filteredProducts = getAllProducts();
      setTitle('All Products');
    }
    
    setProducts(filteredProducts);
    setLoading(false);
  }, [searchQuery, categoryFilter]);
  
  const categories = getCategories();
  
  const handleCategoryClick = (categoryName: string) => {
    // This will be handled by the Link in the category button
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header cartItemCount={state.items.reduce((sum, item) => sum + item.quantity, 0)} />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">{title}</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar with categories */}
          <aside className="w-full md:w-64 shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-24">
              <h2 className="font-semibold text-lg mb-4 pb-2 border-b">Categories</h2>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="/products" 
                    className={`block px-3 py-2 rounded ${!categoryFilter ? 'bg-ask-blue text-white' : 'hover:bg-gray-100'}`}
                  >
                    All Products
                  </a>
                </li>
                {categories.map((category) => (
                  <li key={category.name}>
                    <a 
                      href={`/products?category=${encodeURIComponent(category.name.toLowerCase())}`}
                      className={`block px-3 py-2 rounded ${categoryFilter === category.name.toLowerCase() ? 'bg-ask-blue text-white' : 'hover:bg-gray-100'}`}
                    >
                      {category.name} ({category.count})
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          
          {/* Main content */}
          <div className="flex-1">
            {loading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-ask-blue"></div>
              </div>
            ) : products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={addToCart}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-gray-600">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
