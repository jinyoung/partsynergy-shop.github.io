
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '@/services/productService';
import { Product } from '@/components/ProductCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, ChevronLeft } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart, state } = useCart();
  
  useEffect(() => {
    if (id) {
      const productId = parseInt(id, 10);
      const foundProduct = getProductById(productId);
      
      if (foundProduct) {
        setProduct(foundProduct);
      }
      
      setLoading(false);
    }
  }, [id]);
  
  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
    }
  };
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };
  
  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header cartItemCount={state.items.reduce((sum, item) => sum + item.quantity, 0)} />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-ask-blue"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header cartItemCount={state.items.reduce((sum, item) => sum + item.quantity, 0)} />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
            <Link to="/products" className="btn-primary inline-flex items-center">
              <ChevronLeft size={16} className="mr-1" />
              Back to Products
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header cartItemCount={state.items.reduce((sum, item) => sum + item.quantity, 0)} />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link 
            to={`/products${product.category ? `?category=${encodeURIComponent(product.category.toLowerCase())}` : ''}`}
            className="inline-flex items-center text-ask-blue hover:underline"
          >
            <ChevronLeft size={16} className="mr-1" />
            Back to {product.category || 'Products'}
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-contain"
                style={{ maxHeight: '400px' }}
              />
            </div>
            
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
              <p className="text-gray-500 mb-4">{product.category}</p>
              
              <div className="text-2xl font-bold text-ask-blue mb-6">
                ₩{product.price.toLocaleString()}
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-gray-700">{product.description}</p>
              </div>
              
              <div className="mb-6">
                <div className={`inline-block px-3 py-1 rounded-full text-sm ${
                  product.stock > 10 
                    ? 'bg-green-100 text-green-800' 
                    : product.stock > 0 
                      ? 'bg-yellow-100 text-yellow-800' 
                      : 'bg-red-100 text-red-800'
                }`}>
                  {product.stock > 10 
                    ? `In Stock (${product.stock})` 
                    : product.stock > 0 
                      ? `Low Stock (${product.stock} left)` 
                      : 'Out of Stock'}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="quantity" className="block font-medium mb-2">
                  Quantity
                </label>
                <div className="flex items-center">
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    max={product.stock}
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-20 border border-gray-300 rounded py-2 px-3 mr-4"
                    disabled={product.stock <= 0}
                  />
                  <button
                    onClick={handleAddToCart}
                    disabled={product.stock <= 0}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg ${
                      product.stock > 0 
                        ? 'bg-ask-blue text-white hover:bg-ask-blue/90' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    } transition-colors`}
                  >
                    <ShoppingCart size={20} />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
