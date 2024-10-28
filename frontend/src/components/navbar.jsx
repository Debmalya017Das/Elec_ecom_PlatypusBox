import  { useState } from 'react';
import { Search, Heart, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(2);

  return (
    <div className="w-full font-montserrat">
      <div className="w-full bg-black text-white py-3 px-2 ">
        <div className="max-w-7xl mx-auto text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
          <span className="font-semibold ml-2">ShopNow</span>          
        </div>
      </div>

      <div className="w-full bg-white pb-4 pt-10 px-2 shadow-sm border border-slate-400">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Logo part */}
          <div className="text-2xl font-bold">   
            Exclusive
          </div>
            {/* Links  */}
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className="hover:text-purple-600 hover:underline underline-offset-4 decoration-1 font-montserrat "> Home</Link>
            <Link to="/" className="hover:text-purple-600 hover:underline underline-offset-4 decoration-1 font-montserrat"> Contact </Link>
            <Link to="/" className="hover:text-purple-600 hover:underline underline-offset-4 decoration-1 font-montserrat"> About </Link>
            <Link to="/Signup" className="hover:text-purple-600 hover:underline underline-offset-4 decoration-1 font-montserrat"> Signup</Link>
          </div>

          {/* Others  */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center">
              <input
                type="text"
                placeholder="What are you looking for ? "
                className="bg-slate-300 pr-12 pl-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="w-4 h-4 -ml-8 text-gray-500" />
             </div>

            <div className="flex items-right space-x-6">
              <button className="hover:text-purple-600">
                <Heart className="w-6 h-6" />
              </button>
              <button className="hover:text-purple-600 relative">
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button className="hover:text-purple-600">
                <User className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;