import React from 'react';
import { Heart, Eye } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="relative group bg-gray-50 rounded-lg py-4 transition-all duration-300 hover:shadow-lg flex flex-col h-full">

      {product.isNew && (
        <span className="absolute top-2 left-2 z-10 bg-green-400 text-white text-xs px-2 py-1 rounded">
          NEW
        </span>
      )}
      
      <div className="relative w-full pt-[100%] mb-4">
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <img 
            src={product.image} 
            alt={product.name}
            className="max-w-full max-h-full object-contain"
          />
        </div>

        <div className="absolute top-2 right-2 flex flex-col gap-2 z-10">
          <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
            <Heart className="w-4 h-4" />
          </button>
          <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
            <Eye className="w-4 h-4" />
          </button>
        </div>

        <div className="absolute inset-x-0 bottom-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <button className="w-full bg-black text-white py-1 rounded">
              Add To Cart
            </button>                 
        </div>
      </div>

      <div className="space-y-2 px-2">
        <h3 className="font-medium text-gray-800">{product.name}</h3>
        <div className="flex items-center gap-2">
          <span className="text-red-500">${product.price}</span>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-sm ${
                  i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                }`}
              >
                ★
              </span>
            ))}
            <span className="text-gray-400 text-sm ml-1">({product.reviews})</span>
          </div>
        </div>
        {product.colors && (
          <div className="flex gap-1">
            {product.colors.map((color, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;