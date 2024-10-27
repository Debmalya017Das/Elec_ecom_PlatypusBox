import React from 'react'
import service from '../home_assets/Services.png';
import service1 from '../home_assets/Services-1.png';
import service2 from '../home_assets/Services-2.png';
import gucci from '../home_assets/gucci.png';
import ps5 from '../home_assets/ps5.png';
import women from '../home_assets/women.jpg';
import speak from '../home_assets/speaker.png';
import rect from '../home_assets/rect.png';
const features = [
  {
    image: service,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over 500"
  },
  {
    image: service1,
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support"
  },
  {
    image: service2,
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days"
  }
];
function Featured() {
  return (
  <>
   <div className="w-full max-w-7xl mx-auto p-4 font-montserrat py-12">
        {/* Featured Label */}
        <div className="mb-4">
          <div className="inline-flex flex-col">
            <div className='flex items-center'>
                <img src={rect} alt="" className='h-10 w-5'/>
                <span className="text-red-500 font-bold text-xl px-3 py-1 ">
                Featured
                </span>
            </div>           
            <span className="text-3xl my-8">New Arrival</span>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* PS5 Section */}
          <div className="relative h-[600px] bg-black">
            <img 
              src={ps5}
              alt="PlayStation 5"
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-2xl text-white font-semibold mb-2">PlayStation 5</h3>
              <p className="text-gray-200 mb-4">Black and White version of the PS5 coming out on sale.</p>
              <button className="text-white font-bold hover:text-gray-200  hover:underline underline-offset-4 decoration-1">Shop Now</button>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="relative h-[330px] bg-black">
              <img 
                src={women}
                alt="Women's Collections"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl text-white font-semibold mb-2">Women's Collections</h3>
                <p className="text-gray-200 text-sm mb-2">Featured woman collections that </p>
                <p className="text-gray-200 text-sm mb-2">give you another vibe.</p>
                <button className="text-white font-bold  hover:text-gray-200  hover:underline underline-offset-4 decoration-1">Shop Now</button>
              </div>
            </div>

            {/* Bottom Row Grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* Speakers */}
              <div className="relative h-[248px] bg-black">
                <img 
                  src={speak}
                  alt="Speakers"
                  className="w-full h-full object-contain p-4"
                />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Speakers</h3>
                  <p className="text-gray-200 text-sm mb-2">Amazon wireless speakers</p>
                  <button className="text-white font-bold  hover:text-gray-200  hover:underline underline-offset-4 decoration-1">Shop Now</button> 
                </div>
              </div>

              {/* Perfume */}
              <div className="relative h-[250px] bg-black">
                <img 
                  src={gucci}
                  alt="Gucci Perfume"
                  className="w-full h-full object-contain p-4"
                />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Perfume</h3>
                  <p className="text-gray-200 text-sm mb-2">GUCCI INTENSE OUD EDP</p>
                  <button className="text-white font-bold  hover:text-gray-200  hover:underline underline-offset-4 decoration-1">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        <div className="flex justify-center lg:space-x-24 pt-10 pb-24">
          {features.map((feature, index) => (
            <div key={index} className="text-center w-64 font-montserrat">
              <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <img src={feature.image} alt="img" />
              </div>
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
    </div>
  </>
   
  )
}

export default Featured