import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import qr from "../pages/Homepage/home_assets/QR.jpg";
import play from "../pages/Homepage/home_assets/play.png";
import appstore from "../pages/Homepage/home_assets/appstore.png"
import fb from "../pages/Signup/Signup_assets/fb.png"
import l from "../pages/Signup/Signup_assets/l.png"
import ig from "../pages/Signup/Signup_assets/ig.png"
import tw from "../pages/Signup/Signup_assets/tw.png"

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8 font-montserrat">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Exclusive Section */}
        <div className="space-y-4">
          <h3 className="font-semibold text-xl">Exclusive</h3>
          <p>Subscribe</p>
          <p className="text-sm">Get 10% off your first order</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border border-white/30 rounded-l px-3 py-2 text-sm w-full focus:outline-none"
            />
            <button className="bg-white/10 border border-white/30 border-l-0 rounded-r px-2">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div className="space-y-4">
          <h3 className="font-semibold text-xl">Support</h3>
          <p className="text-sm">111 Bijoy sarani, Dhaka,</p>
          <p className="text-sm">DH 1515, Bangladesh.</p>
          <p className="text-sm">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div className="space-y-4">
          <h3 className="font-semibold text-xl">Account</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/account" className="hover:underline">My Account</Link></li>
            <li><Link to="/login" className="hover:underline">Login / Register</Link></li>
            <li><Link to="/cart" className="hover:underline">Cart</Link></li>
            <li><Link to="/wishlist" className="hover:underline">Wishlist</Link></li>
            <li><Link to="/shop" className="hover:underline">Shop</Link></li>
          </ul>
        </div>

        {/* Quick Link Section */}
        <div className="space-y-4">
          <h3 className="font-semibold text-xl">Quick Link</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:underline">Terms Of Use</Link></li>
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Download App Section */}
        <div className="space-y-4">
          <h3 className="font-semibold text-xl">Download App</h3>
          <p className="text-sm">Save $3 with App New User Only</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white p-1 rounded">
              <img src={qr} alt="QR Code" className="w-full" />
            </div>
            <div className="flex flex-col justify-between">
              <Link to="/android-app">
                <img src={play} alt="Google Play" className="rounded" />
              </Link>
              <Link to="/ios-app">
                <img src={appstore} alt="App Store" className="rounded" />
              </Link>
            </div>
          </div>
          <div className="flex space-x-4 mt-4">
            <Link to="/facebook" className="hover:text-gray-300">
              <span className="w-6 h-6 text-xl"><img src={fb} alt="" /></span>
            </Link>
            <Link to="/twitter" className="hover:text-gray-300">
              <span className="w-6 h-6 text-xl"><img src={tw} alt="" /></span>
            </Link>
            <Link to="/instagram" className="hover:text-gray-300">
              <span className="w-6 h-6 text-xl"><img src={ig} alt="" /></span>
            </Link>
            <Link to="/linkedin" className="hover:text-gray-300">
              <span className="w-6 h-6 text-xl"><img src={l} alt="" /></span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="mt-8 text-center text-sm text-gray-400">
        <p>© Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;