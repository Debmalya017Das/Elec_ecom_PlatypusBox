import React, { useState } from 'react';
import Kash from './Checkout_assets/Bkash.png'
import MC from './Checkout_assets/Mastercard.png'
import visa from './Checkout_assets/visa.png'
import N from './Checkout_assets/Nagad.png'
import Tv from './Checkout_assets/TV.png'
import game from './Checkout_assets/game.png'

const PaymentSection = () => {
  return (
    <div className="space-y-4 mt-6">
      <div className="flex justify-between items-center">
        <span className="font-medium">Total:</span>
        <span className="font-medium">$1750</span>
      </div>

      <div className="space-y-3">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="paymentMethod"
            value="bank"
            className="w-4 h-4"
          />
          <span>Bank</span>
          <div className="flex gap-1 ml-auto">
            <img src={Kash} alt="Klarna" className="h-5 object-contain" />
            <img src={visa} alt="Visa" className="h-5 object-contain" />
            <img src={MC} alt="Mastercard" className="h-5 object-contain" />
            <img src={N} alt="GPay" className="h-5 object-contain" />
          </div>
        </label>

        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="paymentMethod"
            value="cash"
            defaultChecked
            className="w-4 h-4"
          />
          <span>Cash on delivery</span>
        </label>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Coupon Code"
          className="flex-1 p-2 border border-gray-300 rounded"
        />
        <button className="px-6 py-2 bg-red-500 text-white rounded whitespace-nowrap">
          Apply Coupon
        </button>
      </div>

      <button 
        className="w-full bg-red-500 text-white py-3 rounded"
      >
        Place Order
      </button>
    </div>
  );
};

const BillingPage = () => {
  const sampleCart = [
    {
      title: "LCD Monitor",
      price: 650,
      image: Tv
    },
    {
      title: "rtl Gamepad",
      price: 1100,
      image: game
    }
  ];

  const [formData, setFormData] = useState({
    firstName: '',
    companyName: '',
    streetAddress: '',
    apartment: '',
    city: '',
    phone: '',
    email: '',
    saveInfo: false,
    paymentMethod: 'bank',
    couponCode: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const subtotal = sampleCart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row gap-12 max-w-6xl font-montserrat py-24">
      {/* Billing Details Section */}
      <div className="w-full md:w-3/5 pr-12">
        <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
        <form className="space-y-4">
          <div>
            <label className="text-sm text-gray-500 mb-1 block">First Name*</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-50 rounded border-none"
              required
            />
          </div>
          <div>
            <label className="text-sm text-gray-500 mb-1 block">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-50 rounded border-none"
            />
          </div>
          <div>
            <label className="text-sm text-gray-500 mb-1 block">Street Address*</label>
            <input
              type="text"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-50 rounded border-none"
              required
            />
          </div>
          <div>
            <label className="text-sm text-gray-500 mb-1 block">Apartment, floor, etc. (optional)</label>
            <input
              type="text"
              name="apartment"
              value={formData.apartment}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-50 rounded border-none"
            />
          </div>
          <div>
            <label className="text-sm text-gray-500 mb-1 block">Town/City*</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-50 rounded border-none"
              required
            />
          </div>
          <div>
            <label className="text-sm text-gray-500 mb-1 block">Phone Number*</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-50 rounded border-none"
              required
            />
          </div>
          <div>
            <label className="text-sm text-gray-500 mb-1 block">Email Address*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-50 rounded border-none"
              required
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="saveInfo"
              checked={formData.saveInfo}
              onChange={handleInputChange}
              className="w-4 h-4 text-red-500"
            />
            <label className="ml-2 text-sm">
              Save this information for faster check-out next time
            </label>
          </div>
        </form>
      </div>

      {/* Order Summary Section */}
      <div className="w-full md:w-2/5 py-12" >
        <div className="space-y-6">
          {sampleCart.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img src={item.image} alt={item.title} className="w-12 h-12 object-cover" />
                <span>{item.title}</span>
              </div>
              <span className="font-medium">${item.price}</span>
            </div>
          ))}

          <div className="space-y-2 pt-4 border-t">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal:</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Total:</span>
              <span>${subtotal}</span>
            </div>
          </div>

          <PaymentSection/>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;