
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  name: string;
  image: string;
  count: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, image, count }) => {
  return (
    <Link
      to={`/products?category=${encodeURIComponent(name.toLowerCase())}`}
      className="block bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="h-36 overflow-hidden">
        <img
          src={image}
          alt={`${name} category`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-center text-gray-800">{name}</h3>
        <p className="text-sm text-center text-gray-500">{count} products</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
