import React from 'react';
import ProductCard from '../../components/Productcard';

// Import product images
import gucciDuffle from './Wishlist_assets/bag.png';
import cpuCooler from './WishList_assets/c.png';
import gamepad from './WishList_assets/GP.png';
import jacket from './WishList_assets/jk.png';
import laptop from './WishList_assets/Gl.png';
import monitor from './WishList_assets/tv.png';
import havitGamepad from './WishList_assets/GPP.png';
import keyboard from './WishList_assets/K.png';

const wishlistProducts = [
  {
    id: 1,
    image: gucciDuffle,
    name: "Gucci duffle bag",
    price: 1150,
    discountedPrice: 980,
    discount: 25,
    isNew: false,
    rating: 4,
    reviews: 55
  },
  {
    id: 2,
    image: cpuCooler,
    name: 'RGB liquid CPU Cooler',
    price: 1950,
    discountedPrice: null,
    discount: null,
    isNew: false,
    rating: 5,
    reviews: 75
  },
  {
    id: 3,
    image: gamepad,
    name: 'GP11 Shooter USB Gamepad',
    price: 550,
    discountedPrice: null,
    discount: null,
    isNew: false,
    rating: 4,
    reviews: 45
  },
  {
    id: 4,
    image: jacket,
    name: 'Quilted Satin Jacket',
    price: 750,
    discountedPrice: null,
    discount: null,
    isNew: true,
    rating: 4,
    reviews: 35
  }
];

const recommendedProducts = [
  {
    id: 5,
    image: laptop,
    name: 'ASUS FHD Gaming Laptop',
    price: 1160,
    discountedPrice: 960,
    rating: 5,
    reviews: 65,
    discount: 25,
    isNew: false
  },
  {
    id: 6,
    image: monitor,
    name: 'IPS LCD Gaming Monitor',
    price: 1160,
    discountedPrice: null,
    rating: 5,
    reviews: 65,
    discount: null,
    isNew: false
  },
  {
    id: 7,
    image: havitGamepad,
    name: 'HAVIT HV-G92 Gamepad',
    price: 560,
    discountedPrice: null,
    rating: 5,
    reviews: 65,
    discount: null,
    isNew: true
  },
  {
    id: 8,
    image: keyboard,
    name: 'AK-900 Wired Keyboard',
    price: 200,
    discountedPrice: null,
    rating: 5,
    reviews: 65,
    discount: null,
    isNew: false
  }
];

function WishlistPage() {
  const handleMoveAllToBag = () => {
    // Add functionality for moving all items to bag if needed
    console.log('Moving all items to bag');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 font-montserrat py-20">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Wishlist ({wishlistProducts.length})</h2>
        <button 
          className="bg-white text-black border border-black px-4 py-2 rounded hover:bg-gray-100"
          onClick={handleMoveAllToBag}
        >
          Move All To Bag
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {wishlistProducts.map((product,item) => (
          <ProductCard key={item.id} product={product} />
        ))}
      </div>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold flex items-center">
          <span className="bg-red-500 w-1 h-6 mr-2"></span>
          Just For You
        </h2>
        <button className="text-black underline">See All</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {recommendedProducts.map((item) => (
         <ProductCard 
            key={item.id} 
            product={item} 
            className="p-4"
        />
        ))}
      </div>
    </div>
  );
}

export default WishlistPage;