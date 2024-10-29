import React from 'react';
import CSI from './About_assets/csi.png';
import DSI from './About_assets/dsi.png';
import EW from './About_assets/ew.png';
import GI from './About_assets/gi.png';
import Main from './About_assets/Main.jpg';
import { Twitter, Instagram, Linkedin } from 'lucide-react';
import TC from './About_assets/tc.png';
import WS from './About_assets/ws.png';
import S2 from './About_assets/s2.png';
import S3 from './About_assets/s3.png';
import S4 from './About_assets/s4.png';
import S5 from './About_assets/s5.png';

const CategoryCard = ({ imgSrc, label, desc, isSelected, onClick }) => (
  <div
    onClick={onClick}
    className={`p-6 rounded-lg cursor-pointer transition-all duration-300 flex flex-col items-center justify-center gap-3 min-w-[160px] border-2 shadow-sm 
      ${isSelected ? 'bg-red-500 text-white border-red-500' : 'bg-white border-gray-200 hover:bg-red-500 hover:text-white hover:border-red-500'}`}
  >
    <img
      src={imgSrc}
      alt={label}
      className="w-20 h-20 object-cover rounded-full"
    />
    <span className="text-2xl font-bold">{label}</span>
    <span className="text-base font-semibold">{desc}</span>
  </div>
);

const About = () => {
  const stats = [
    { value: '10.5k', label: 'Sellers active on site', icon: S2 },
    { value: '33k', label: 'Monthly product sales', icon: S3 },
    { value: '45.5k', label: 'Customer interactions', icon: S4 },
    { value: '25k', label: 'Average sales per year', icon: S5 }
  ];

  const teamMembers = [
    { name: 'Terry Smith', role: 'Product Manager', icon: TC },
    { name: 'Emma Watson', role: 'Marketing Director', icon: EW },
    { name: 'Will Smith', role: 'Sales Director', icon: WS }
  ];

  const features = [
    {
      icon: DSI,
      title: 'FREE AND FAST DELIVERY',
      description: 'Free delivery for all orders over $140'
    },
    {
      icon: CSI,
      title: '24/7 CUSTOMER SERVICE',
      description: 'Friendly 24/7 customer support'
    },
    {
      icon: GI,
      title: 'MONEY BACK GUARANTEE',
      description: 'We return money within 30 days'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 pt-12 pb-12 font-montserrat">
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <h1 className="text-4xl font-bold mb-4">Our Story</h1>
          <p className="text-gray-600 mb-4">
            Founded in 2015, we've grown into a leading e-commerce platform connecting sellers with buyers worldwide. Our mission is to provide exceptional shopping experiences through innovative technology and customer-focused service.
          </p>
          <p className="text-gray-600">
            We now feature over a million products from trusted sellers, serving customers across the globe with a focus on quality and reliability.
          </p>
        </div>
        <div className="bg-pink-300 rounded-lg h-full w-full">
          <img 
            src={Main} 
            alt="Shopping experience" 
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {stats.map((category, index) => (
          <CategoryCard
            key={index}
            imgSrc={category.icon}
            label={category.value}
            desc={category.label}
            isSelected={false}
            onClick={() => console.log(`Selected category: ${category.label}`)}
          />
        ))}
      </div>

      {/* Team Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-24">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col ">
            <div className="w-6/7 h-4/5 aspect-square bg-gray-100 rounded-lg mb-4">
              <img
                src={member.icon}
                alt={member.name}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <h3 className="font-medium text-lg mb-1 ">{member.name}</h3>
            <p className="text-gray-600 text-sm mb-3">{member.role}</p>
            <div className="flex gap-4">
              <Twitter className="w-5 h-5 text-gray-600 hover:text-red-500 cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-600 hover:text-red-500 cursor-pointer" />
              <Linkedin className="w-5 h-5 text-gray-600 hover:text-red-500 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <img 
                src={feature.icon} 
                alt={feature.title}
                className="w-8 h-8" 
              />
            </div>
            <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;