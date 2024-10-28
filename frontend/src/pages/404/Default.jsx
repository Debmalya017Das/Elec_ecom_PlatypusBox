import React from 'react'
import { useNavigate, Link } from 'react-router-dom';

const Default = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-right px-12 min-h-screen bg-white font-montserrat">
            <div className="flex space-x-1 text-black  mt-8">
                <span 
                    className="hover:underline cursor-pointer" 
                    onClick={() => navigate('/')}
                >
                    Home
                </span>
                <span>/</span>
                <span>404 Error</span>
            </div>
            <div className="flex flex-col items-center mt-32">
                <h1 className="text-[56px] font-bold text-black mb-6">404 Not Found</h1>
                <p className="text-black mb-8">Your visited page not found. You may go home page.</p>

                <button 
                    onClick={() => navigate('/')} 
                    className="px-8 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                >
                    Back to home page
                </button>
            </div>
        </div>
    );
};

export default Default;