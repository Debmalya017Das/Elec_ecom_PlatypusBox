import React, { useState, useEffect } from 'react';
import shelf from "../home_assets/shelf.png";
import gb from "../home_assets/gb.png";
import pc from "../home_assets/pc.png";
import rect from '../home_assets/rect.png';
import rtx from "../home_assets/rtx.png"
import ProductCard from '../../../components/Productcard';
import sterio from '../home_assets/sterio.png'
function Bestselling() {
    const products = [
    {
      name: "Bag",
      price: 360,
      rating: 4,
      reviews: 95,
      image: gb,
      isNew: false
    },
    {
      name: "North Coat",
      price: 700,
      rating: 4,
      reviews: 325,
      image: pc,
      isNew: false
    },
    {
      name: "Graphics card",
      price: 960,
      rating: 5,
      reviews: 65,
      image: rtx,
      isNew: true,
      colors: ['#FF0000', '#FF6B6B']
    },
      {
      name: "Shelf",
      price: 960,
      rating: 5,
      reviews: 65,
      image: shelf,
      isNew: false,
      colors: ['#FF0000', '#FF6B6B']
    },
  ];

  const CountdownCircle = ({ value, label }) => (
  <div className="flex flex-col items-center justify-center bg-white rounded-full w-20 h-20 text-black">
    <span className="text-xl font-bold">{value}</span>
    <span className="text-xs">{label}</span>
  </div>
);
 const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    days: 5,
    minutes: 59,
    seconds: 35
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newSeconds = prev.seconds - 1;
        if (newSeconds >= 0) return { ...prev, seconds: newSeconds };
        
        const newMinutes = prev.minutes - 1;
        if (newMinutes >= 0) return { ...prev, minutes: newMinutes, seconds: 59 };
        
        const newHours = prev.hours - 1;
        if (newHours >= 0) return { ...prev, hours: newHours, minutes: 59, seconds: 59 };
        
        const newDays = prev.days - 1;
        if (newDays >= 0) return { ...prev, days: newDays, hours: 23, minutes: 59, seconds: 59 };
        
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

 
  return (
   <div className="w-full max-w-7xl mx-auto p-4  py-12 font-montserrat">
      <div className="flex justify-between items-center mb-8">
        <div className="space-y-4">
          <div className="flex items-center">
             <img src={rect} alt="" className='h-10 w-5'/>
             <span className="text-red-500 font-bold text-xl px-3 py-8 ">This Month </span>
          </div>
          <span  className="text-3xl">Best Selling Products</span >
        </div>
        <button className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          View All
        </button>
        </div>
         <div className="container mx-auto p-6">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
            <ProductCard key={index} product={product} />
            ))}
        </div>
    </div>


<div className="relative w-full justify-center bg-black rounded-lg overflow-hidden mt-16">        
  <div className="relative z-10 flex flex-col md:flex-row items-center lg:px-24 md:px-12 ">
    <div className="w-full md:w-1/2 space-y-6 text-center md:text-left ">
      <span className="inline-block text-green-400 font-semibold">Categories</span>
      
      <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
        Enhance Your<br />Music Experience
      </h2>
      
      <div className="flex flex-wrap justify-center md:justify-start gap-4">
        <CountdownCircle value={timeLeft.days} label="Days" />
        <CountdownCircle value={timeLeft.hours} label="Hours" />
        <CountdownCircle value={timeLeft.minutes} label="Minutes" />
        <CountdownCircle value={timeLeft.seconds} label="Seconds" />
      </div>
      
      <button className="w-full  md:w-auto bg-green-400 text-black px-8 py-3 rounded-md hover:bg-green-500 transition-colors font-semibold">
        Buy Now!
      </button>
    </div>
    
    <div className="w-full md:w-1/2 mt-8 md:mt-0">
      <img 
        src={sterio}
        alt="JBL Speaker"
        className="w-full h-auto md:scale-125 transform transition-transform duration-300 hover:scale-130"
      />
    </div>
  </div>
</div>

      </div>


  )
}

export default Bestselling