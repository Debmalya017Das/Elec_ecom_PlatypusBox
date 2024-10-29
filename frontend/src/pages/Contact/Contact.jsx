import React, { useState } from 'react';
import ph from "./Contact_assets/icons-phone.png"
import m from "./Contact_assets/icons-mail.png"
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 font-montserrat pt-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-12 text-gray-600">
        <span 
            className="hover:underline cursor-pointer" 
            onClick={() => navigate('/')}
        >
        Home
        </span>
        <span>/</span>
        <span>Contact</span>
      </div>
      <div className="flex flex-col md:flex-row gap-12 pt-12 pb-24">
        {/* Left Column */}
        <div className="md:w-1/3">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={ph}
                alt="Phone" 
                className="w-12 h-12 bg-red-500 p-2 rounded-full"
              />
              <h2 className="text-xl font-semibold">Call To Us</h2>
            </div>
            <p className="mb-2">We are available 24/7, 7 days a week.</p>
            <p>Phone: +880161112222</p>
          </div>

          <div className="border-t border-black pt-8">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={m}
                alt="Mail" 
                className="w-12 h-12 bg-red-500 p-2 rounded-full"
              />
              <h2 className="text-xl font-semibold">Write To US</h2>
            </div>
            <p className="mb-4">Fill out our form and we will contact you within 24 hours.</p>
            <p className="mb-2">Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="md:w-2/3">
          <div className="border border-slate-500 p-8 rounded">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  className="flex-1 p-3 bg-gray-100 rounded border border-black"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  required
                />
                <input
                  className="flex-1 p-3 bg-gray-100 rounded border border-black"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email *"
                  required
                />
                <input
                  className="flex-1 p-3 bg-gray-100 rounded border border-black"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone *"
                  required
                />
              </div>
              <textarea
                className="w-full p-3 bg-gray-100 rounded h-48 border border-black"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
              />
              <div className="flex justify-end">
                <button
                  className="bg-red-500 text-white px-8 py-3 rounded hover:bg-red-600 transition duration-300"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;