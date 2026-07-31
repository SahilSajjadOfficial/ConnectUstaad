import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-900/30 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10 space-y-6">
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600 tracking-tighter">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white">Page not found</h2>
        <p className="text-slate-400 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <div className="pt-4">
          <Link 
            to="/home" 
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white transition-all duration-300 bg-indigo-600 rounded-xl shadow-lg shadow-indigo-500/30 hover:bg-indigo-500 hover:shadow-indigo-500/50 hover:-translate-y-0.5"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
