import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CP from "../home_assets/CP.png";
import comp from "../home_assets/comp.png";
import game from "../home_assets/game.png";
import Head from "../home_assets/Head.png";
import SW from "../home_assets/Sw.png";
import cam from "../home_assets/cam.png";
import rect from '../home_assets/rect.png';

const CategoryCard = ({ imgSrc, label, isSelected, onClick }) => (
  <div
    onClick={onClick}
    className={`p-8 rounded-lg cursor-pointer transition-all duration-300 flex flex-col items-center justify-center gap-4 min-w-[160px] border-2 ${
      isSelected ? 'bg-red-500 text-white border-red-500' : 'bg-white border-gray-200'
    }`}
  >
    <img
      src={imgSrc}
      alt={label}
      className="w-12 h-12"
    />
    <span className="text-sm font-medium">{label}</span>
  </div>
);

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    { imgSrc:CP , label: 'Phones' },
    { imgSrc:comp, label: 'Computers' },
    { imgSrc:SW,  label: 'SmartWatch' },
    { imgSrc: cam, label: 'Camera' },
    { imgSrc:Head, label: 'HeadPhones' },
    { imgSrc:game , label: 'Gaming' }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-4 font-montserrat py-12">
      <div className="mb-6">
        <div className="inline-flex flex-col">
        <div className="flex items-center">
        <img src={rect} alt="" className='h-10 w-5'/>
          <span className="text-red-500 text-xl font-bold  px-3">Categories</span>
        </div>
        </div>
        <div className="flex items-center justify-between mt-2">
          <h2 className="text-3xl ">Browse By Category</h2>
          <div className="flex gap-2">
            <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <ChevronLeft size={20} className="text-gray-700" />
            </button>
            <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <ChevronRight size={20} className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 ">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            imgSrc={category.imgSrc}
            label={category.label}
            isSelected={selectedCategory === category.label}
            onClick={() => setSelectedCategory(category.label)}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;