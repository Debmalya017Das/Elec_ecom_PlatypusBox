import React, { useState } from 'react';
import { Heart, ShoppingCart, TruckIcon, RefreshCw } from 'lucide-react';
import ProductCard from '../../components/Productcard';
import front from './Desc_assets/front.png'
import main from './Desc_assets/main.png'
import side from './Desc_assets/side.png'
import dbl from './Desc_assets/dbl.png'
import slt from './Desc_assets/slt.png'
import rect from './Desc_assets/rect.png'
import CPU from './Desc_assets/CPU.png'
import TV from './Desc_assets/TV.png'
import KB from './Desc_assets/KB.png'
import GI from './Desc_assets/GI.png'

const ProdDesc = () => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('white');

  const productImages = [
  front,
  side,
  dbl,
  slt
];
  
const ProductGridView = ({ images }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {images.map((imageUrl, i) => (
        <div key={i} className="bg-gray-100 rounded-lg p-2">
          <img
            src={imageUrl}
            alt={`Product view ${i + 1}`}
            className="w-full object-contain"
          />
        </div>
      ))}
    </div>
  );
};
  const relatedProducts = [
    {
      id: 1,
      name: 'HAVIT HV-G92 Gamepad',
      price: 192.0,
      salePrice: 150.0,
      rating: 4.5,
      reviews: 88,
      image: GI
    },
    {
      id: 2,
      name: 'AK-900 Wired Keyboard',
      price: 960.0,
      salePrice: 850.0,
      rating: 4.0,
      reviews: 75,
      image: KB
    },
    {
      id: 3,
      name: 'IPS LCD Gaming Monitor',
      price: 370.0,
      salePrice: 400.0,
      rating: 4.8,
      reviews: 99,
      image: TV
    },
    {
      id: 4,
      name: 'RGB Liquid CPU Cooler',
      price: 160.0,
      salePrice: 170.0,
      rating: 4.2,
      reviews: 65,
      image: CPU
    }
  ];


  return (
    <div className="max-w-7xl mx-auto p-8 font-montserrat">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="bg-gray-100 rounded-lg p-8">
            <img
              src={main}
              alt="Havic HV G-92 Gamepad"
              className="w-full object-contain"
            />
          </div>
         <ProductGridView images={productImages} />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Havic HV G-92 Gamepad</h1>
            <div className="flex items-center mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-yellow-400">★</span>
              ))}
              <span className="ml-2 text-gray-600">(150 Reviews)</span>
            </div>
            <p className="text-2xl font-bold mt-4">$192.00</p>
            <p className="mt-4 text-gray-600">
              PlayStation 5 Controller Skin High-quality vinyl with air release
              channels for easy bubble free install & mess free removal
            </p>
          </div>

          {/* Color Selection */}
          <div>
            <p className="font-semibold mb-2">Colours:</p>
            <div className="flex gap-2">
              {['white', 'black'].map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-6 h-6 rounded-full border-2 ${
                    selectedColor === color ? 'border-blue-500' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <p className="font-semibold mb-2">Size:</p>
            <div className="flex gap-2">
              {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === size
                      ? 'bg-red-500 text-white'
                      : 'border-gray-300'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex gap-4">
            <div className="flex items-center border rounded">
              <button
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                className="px-4 py-2 border-r"
              >
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 border-l"
              >
                +
              </button>
            </div>
            <button className="flex-1 bg-red-500 text-white py-2 px-4 rounded">
              Buy Now
            </button>
            <button className="p-2 border rounded">
              <Heart className="w-6 h-6" />
            </button>
          </div>

          {/* Delivery Info */}
          <div className="space-y-4 border-t pt-4">
            <div className="flex items-center gap-2">
              <TruckIcon className="w-6 h-6" />
              <div>
                <p className="font-semibold">Free Delivery</p>
                <p className="text-sm text-gray-600">Enter your postal code for delivery availability</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <RefreshCw className="w-6 h-6" />
              <div>
                <p className="font-semibold">Return Delivery</p>
                <p className="text-sm text-gray-600">Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
 
      <div className="mt-16">
        <div className="flex items-center">
             <img src={rect} alt="" className='h-10 w-5'/>
             <span className="text-red-500 font-bold text-xl px-3 py-8 ">Related Items </span>
        </div>
       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    {relatedProducts.map((product) => (
        <ProductCard 
            key={product.id} 
            product={product} 
            className="p-4"
        />
    ))}
</div>

      </div>
    </div>
  );
};

export default ProdDesc;