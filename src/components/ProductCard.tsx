
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  stock: number;
  description: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    onAddToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card block h-full">
      <div className="h-48 bg-gray-100 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg text-gray-800 line-clamp-2">{product.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{product.category}</p>
          </div>
          <span className="font-bold text-ask-blue">₩{product.price.toLocaleString()}</span>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className={`text-sm ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
          </span>
          <button
            onClick={handleAddToCart}
            className="flex items-center space-x-1 bg-ask-blue text-white px-3 py-1.5 rounded-full text-sm hover:bg-ask-blue/90 transition-colors"
            disabled={product.stock <= 0}
          >
            <ShoppingCart size={16} />
            <span>Add</span>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
