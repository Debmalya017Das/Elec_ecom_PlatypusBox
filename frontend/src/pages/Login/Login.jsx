import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import phonecart from './Login_assets/phonecart.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', email, password);
  };

  return (
    <div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm-grid-cols-1  flex items-center justify-center">
        <img
          src={phonecart}
          alt="Shopping illustration"
          className="w-full h-auto"
        />
        <div className="container mx-auto px-4 flex justify-center items-center h-screen">
          <div className="max-w-md w-full">
            <h2 className="text-3xl font-bold mb-4 font-montserrat">Login to Exclusive</h2>
            <p className="font-montserrat text-gray-600 mb-6">Enter your details below</p>
            
            <form onSubmit={handleLogin}>
              <input
                className="border-0 border-b border-gray-300 p-2 w-full mb-6 focus:outline-none focus:border-gray-400 font-montserrat"
                type="email"
                placeholder="Email or Phone Number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="border-0 border-b border-gray-300 p-2 w-full mb-6 focus:outline-none focus:border-gray-400 font-montserrat"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              
              <div className="grid grid-cols-2 gap-4 items-center mb-6">
                <button
                  type="submit"
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded font-montserrat text-sm transition-colors"
                >
                  Log In
                </button>
                <Link 
                  to="/forgot-password" 
                  className="text-red-500 hover:text-red-600 text-sm font-montserrat text-right transition-colors"
                >
                  Forget Password?
                </Link>
              </div>
            </form>
            
            <p className="font-montserrat text-gray-600 text-sm">
              Don't have an account?{' '}
              <Link to="/signup" className="text-red-500 hover:text-red-600 transition-colors">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;