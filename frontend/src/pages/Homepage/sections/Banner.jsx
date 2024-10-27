import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import iphone from "../home_assets/iphone.jpg";
import ios from "../home_assets/ios.png";

const categories = [
  { name: "Woman's Fashion", hasSubmenu: true },
  { name: "Men's Fashion", hasSubmenu: true },
  { name: "Electronics", hasSubmenu: false },
  { name: "Home & Lifestyle", hasSubmenu: false },
  { name: "Medicine", hasSubmenu: false },
  { name: "Sports & Outdoor", hasSubmenu: false },
  { name: "Baby's & Toys", hasSubmenu: false },
  { name: "Groceries & Pets", hasSubmenu: false },
  { name: "Health & Beauty", hasSubmenu: false },
];

const CategorySidebar = () => (
  <div className="hidden lg:block w-64 bg-white shadow-sm border border-r-black ">
    <ul className="divide-y">
      {categories.map((category, index) => (
        <li key={index} className="group">
          <Link
            to={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors"
          >
            <span className="text-sm text-black">{category.name}</span>
            {category.hasSubmenu && (
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
            )}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const PromoSlider = ({ currentSlide }) => (
  <div className="relative bg-black rounded-lg overflow-hidden h-[500px] md:h-[400px] lg:h-[400px]">
    <div className="absolute inset-10 grid grid-cols-1 md:grid-cols-2 items-center md:items-start p-3 lg:p-8">
      {/* Left Content */}
      <div className="space-y-4 md:space-y-4 lg:mt-4">
        <div className="flex items-center gap-2">
          <img src={ios} alt="Apple logo" className="w-6 h-6 md:w-10 md:h-10" />
          <span className="text-white text-sm md:text-base">iPhone 14 Series</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
          Up to 10%
          <br />
          off Voucher
        </h2>
        <Link
          to="/shop"
          className="inline-flex items-center text-white border-b border-white pb-1 hover:opacity-80 transition-opacity"
        >
          Shop Now
          <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      </div>

      {/* Right Content - Image */}
      <div className="md:block ">
        <img
          src={iphone}
          alt="iPhone 14"
          className="w-full max-w-[500px] object-contain mx-auto"
        />
      </div>
    </div>

    {/* Slider Dots */}
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
      {[0, 1, 2, 3, 4].map((index) => (
        <button
          key={index}
          className={`h-2.5 rounded-full transition-all ${
            currentSlide === index ? 'w-8 bg-white' : 'w-2.5 bg-white/50'
          }`}
        />
      ))}
    </div>
  </div>
);

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="max-w-7xl mx-auto p-4 font-montserrat">
      <div className="grid grid-cols-1 lg:grid-cols-[auto,1fr] gap-4">
        <CategorySidebar />
        <PromoSlider currentSlide={currentSlide} />
      </div>
    </div>
  );
};

export default Hero;