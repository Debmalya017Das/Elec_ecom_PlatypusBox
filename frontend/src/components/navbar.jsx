import { useState } from 'react';
import { Search, Heart, ShoppingCart, User, LogOut, Settings, UserCircle, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(2);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full font-montserrat relative z-50">
      {/* Top Banner */}
      <div className="w-full bg-black text-white py-3 px-2">
        <div className="max-w-7xl mx-auto text-center text-sm md:text-base">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <span className="font-semibold ml-2">ShopNow</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full bg-white pt-8 pb-2 px-2 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            Exclusive
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg-custom:flex items-center space-x-10">
            <Link to="/" className="hover:text-purple-600 hover:underline underline-offset-4 decoration-1">
              Home
            </Link>
            <Link to="/contact" className="hover:text-purple-600 hover:underline underline-offset-4 decoration-1">
              Contact
            </Link>
            <Link to="/about" className="hover:text-purple-600 hover:underline underline-offset-4 decoration-1">
              About
            </Link>
            <Link to="/signup" className="hover:text-purple-600 hover:underline underline-offset-4 decoration-1">
              Signup
            </Link>
          </div>

          {/* Desktop Right Section */}
          <div className="hidden lg-custom:flex items-center space-x-6">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-gray-100 pr-12 pl-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>

            {/* Wishlist */}
            <Link to="/wishlist"><button className="hover:text-purple-600 relative">
              <Heart className="w-6 h-6" />
            </button></Link>

            {/* Cart */}
             <Link to="/cart">
              <button className="hover:text-purple-600 relative">
             <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
             </Link>
           

            {/* User Profile Dropdown */}
            <div className="relative">
               <button
                className="hover:text-purple-600 focus:outline-none"
                onClick={toggleDropdown}
              >
                <User className="w-6 h-6" />
              </button>
             
              {/* Desktop Dropdown Menu */}
              {isDropdownOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={toggleDropdown} />
                  <div className="absolute right-0 mt-3 w-80 rounded-xl overflow-hidden z-50 border border-black">
                    <div className="backdrop-blur-xl bg-white/10 shadow-xl border border-white/50">
                      <div className="px-6 py-4 border-b border-white/10 bg-white/50">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                            <User className="w-6 h-6 text-purple-600" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-800">John Doe</p>
                            <p className="text-sm text-black">john@example.com</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white/30">
                        <Link
                          to="/account"
                          className="flex items-center px-6 py-3 text-md text-gray-700 hover:bg-white/50 transition-colors"
                        >
                          <UserCircle className="w-4 h-4 mr-3 text-black" />
                          Profile
                        </Link>
                        <Link
                          to="/settings"
                          className="flex items-center px-6 py-3 text-md text-gray-700 hover:bg-white/50 transition-colors"
                        >
                          <Settings className="w-4 h-4 mr-3 text-black" />
                          Settings
                        </Link>
                        <button
                          onClick={() => {/* Add logout logic */}}
                          className="w-full flex items-center px-6 py-3 text-md text-red-600 hover:bg-red-50/50 transition-colors"
                        >
                          <LogOut className="w-4 h-4 mr-3" />
                          Sign out
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg-custom:hidden p-2 hover:bg-gray-100 rounded-lg"
            onClick={toggleMobileMenu}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg-custom:hidden mt-4 bg-white border-t border-gray-200">
            {/* Search */}
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="w-full bg-gray-100 pr-12 pl-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="border-b border-gray-200">
              <Link 
                to="/" 
                className="block px-4 py-3 text-gray-800 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/contact" 
                className="block px-4 py-3 text-gray-800 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/about" 
                className="block px-4 py-3 text-gray-800 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/signup" 
                className="block px-4 py-3 text-gray-800 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>

            {/* Shopping Features */}
            <div className="border-b border-gray-200">
              <Link 
                to="/wishlist" 
                className="flex items-center px-4 py-3 text-gray-800 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Heart className="w-6 h-6 mr-3" />
                Wishlist
              </Link>
              <Link 
                to="/cart" 
                className="flex items-center px-4 py-3 text-gray-800 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="relative">
                  <ShoppingCart className="w-6 h-6 mr-3" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </div>
                Cart
              </Link>
            </div>

            {/* Profile Section */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <User className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-800">John Doe</p>
                  <p className="text-sm text-gray-600">john@example.com</p>
                </div>
              </div>
              <Link 
                to="/account"
                className="block py-2 text-gray-800 hover:text-purple-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Profile
              </Link>
              <Link 
                to="/settings"
                className="block py-2 text-gray-800 hover:text-purple-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Settings
              </Link>
              <button
                onClick={() => {
                  /* Add logout logic */
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left py-2 text-red-600 hover:text-red-700"
              >
                Sign out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;