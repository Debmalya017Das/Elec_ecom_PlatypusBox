import ProductCard from "../../../components/Productcard";
import rect from '../home_assets/rect.png';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import kb from '../home_assets/kb.png'
import tv from '../home_assets/tv.png'
import gamepad from '../home_assets/gamepad.png'
import chair from '../home_assets/chair.png'
// import tv from '../home_assets/tv.png'

const TimeUnit = ({ label, value }) => (
  <div className="flex flex-col items-center">
    <span className="text-3xl font-bold">{value}</span>
    <span className="text-sm text-gray-500">{label}</span>
  </div>
);

const FlashSale = () => {
  const [currentTime, setCurrentTime] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56
  });

  // Product data remains the same
  const products = [
    {
      id: 1,
      name: 'HAVIT HV-G92 Gamepad',
      price: 120,
      rating: 4.5,
      reviews: 88,
      image: gamepad,
    //   isNew: true,
        Sale: true,
      colors: ['#FF0000', '#000000', '#FFFFFF']
    },
    // ... rest of the products
      {
      id: 2,
      name: 'AK-900 Wired Keyboard',
      price: 960,
      rating: 4.7,
      reviews: 75,
      image: kb,
        Sale: true,
      colors: ['#000000', '#FFFFFF']
    },
    {
      id: 3,
      name: 'IPS LCD Gaming Monitor',
      price: 370,
      rating: 4.8,
      reviews: 99,
      image: tv,
       Sale: true,
    },
    {
      id: 4,
      name: 'S-Series Comfort Chair',
      price: 375,
      rating: 4.9,
      reviews: 99,
      image: chair,
        Sale: true,
      colors: ['#808080', '#000000', '#FFFFFF']
    },
    {
      id: 5,
      name: 'S-Series Comfort Chair 2',
      price: 375,
      rating: 4.9,
      reviews: 99,
      image: chair,
        Sale: true,
      colors: ['#808080', '#000000']
    }
  ];

  const [visibleProducts, setVisibleProducts] = useState(4);
  const [startIndex, setStartIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  // Timer countdown effect remains the same
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setStartIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex(prev => Math.min(products.length - visibleProducts, prev + 1));
  };

const handleViewAll = () => {
    // Toggle between showing all products and showing limited products
    setVisibleProducts(prevVisible => 
      prevVisible === 4 ? products.length : 4
    );
    setStartIndex(0); // Reset start index when toggling
  };

  const formatNumber = (num) => num.toString().padStart(2, '0');

  const isShowingAll = visibleProducts > 4;
  return (
    <div className="w-full max-w-7xl mx-auto px-4 font-montserrat py-12">
      {/* Header Section */}
      <div className="flex flex-col gap-4 mb-8">
        {/* Today's Label */}
        <div className="flex items-center">
          <img src={rect} alt="" className="h-10 w-5"/>
          <span className="text-red-500 text-xl font-semibold px-3">Today's</span>
        </div>

        {/* Flash Sales and Timer Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <h2 className="text-3xl font-semibold">Flash Sales</h2>
          
          {/* Timer Section */}
          <div className="flex items-right gap-4 order-3 lg:order-2">
            <div className="hidden lg:flex items-center gap-4">
              <TimeUnit label="Days" value={formatNumber(currentTime.days)} />
              <span className="text-2xl font-bold text-red-500">:</span>
              <TimeUnit label="Hours" value={formatNumber(currentTime.hours)} />
              <span className="text-2xl font-bold text-red-500">:</span>
              <TimeUnit label="Minutes" value={formatNumber(currentTime.minutes)} />
              <span className="text-2xl font-bold text-red-500">:</span>
              <TimeUnit label="Seconds" value={formatNumber(currentTime.seconds)} />
            </div>

            {/* Mobile Timer */}
            <div className="flex lg:hidden items-center gap-2 text-sm">
              <span>{formatNumber(currentTime.days)}</span>
              <span>:</span>
              <span>{formatNumber(currentTime.hours)}</span>
              <span>:</span>
              <span>{formatNumber(currentTime.minutes)}</span>
              <span>:</span>
              <span>{formatNumber(currentTime.seconds)}</span>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-2 order-2 lg:order-3">
            <button 
              onClick={handlePrevious}
              className="p-2 border rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={startIndex === 0}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={handleNext}
              className="p-2 border rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={startIndex >= products.length - visibleProducts}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.slice(startIndex, startIndex + visibleProducts).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <button 
          onClick={handleViewAll}
          className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
        >
          {isShowingAll ? 'Show Less' : 'View All Products'}
        </button>
      </div>
    </div>
  );
};

export default FlashSale;