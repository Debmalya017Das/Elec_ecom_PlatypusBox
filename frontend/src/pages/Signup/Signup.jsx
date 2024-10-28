import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SUI from './Signup_assets/SUI.jpg'
import G from './Signup_assets/G.png';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log('Signup attempted with:', { name, email, password });
  };

  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 sm-grid-cols-1 flex items-center justify-center">
      <img 
        src={SUI}
        alt="Shopping illustration" 
        className="w-full h-auto"
      />
      <div className="container mx-auto px-4 flex justify-center items-center h-screen">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold mb-4 font-montserrat">Create an account</h2>
          <p className="font-bold font-montserrat pb-4">Enter your details below</p>
          
          <form onSubmit={handleSignUp}>
            <input
              className="border-0 border-b border-gray-300 p-2 w-full mb-6 focus:outline-none focus:border-gray-400 font-montserrat " 
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="border-0 border-b border-gray-300 p-2 w-full mb-6 focus:outline-none focus:border-gray-400 font-montserrat"
              type="email"
              placeholder="Email"
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
            
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white p-2 w-full rounded font-montserrat transition-colors"
            >
              Create Account
            </button>
          </form>
          
          <button
            className="flex items-center justify-center gap-4 w-full bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 px-4 border border-gray-300 rounded-lg shadow-sm transition-colors mt-4"
          >
            <img 
            src={G} 
            alt="Google logo" 
            className="w-6 h-6"
            />
            <span className="font-montserrat text-base">Sign up with Google</span>
          </button>
          
          <p className="font-montserrat text-gray-600 text-sm text-center mt-8">
            Already have an account?{' '}
            <Link to="/Login" className="text-red-500 hover:text-red-600 transition-colors">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;