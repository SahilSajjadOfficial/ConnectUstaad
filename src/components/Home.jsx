import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

const Home = () => {
  return (
    <div className='bg-black h-screen flex flex-col'>
      <header className='flex items-center justify-between p-4'>
        <Link to="/home">
            <img src={logo} alt="connect ustaad" className='h-16 rounded-full' />
        </Link>

        <div className='text-white flex gap-6 items-center'>
            <Link to="/home" className="hover:text-blue-400 transition">Home</Link>
            <Link to="/about" className="hover:text-blue-400 transition">About</Link>
            <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
            
            <Link to="/Login" className="bg-blue-600 px-4 py-1.5 rounded hover:bg-blue-500 text-white transition">
                Login
            </Link>
        </div>
      </header>

      <main className='flex-grow flex flex-col items-center justify-center text-center px-4'>
        <h1 className='text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4'>
          Expert Ustaads, <br />
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600'>
            At Your Doorstep
          </span>
        </h1>
        
        <p className='text-gray-400 text-lg md:text-xl max-w-2xl mb-8'>
          Connect with trusted, top-rated professionals for all your home repair, maintenance, and learning needs with just a few clicks.
        </p>

        <div className='flex gap-4'>
          <Link to="/services" className="bg-blue-600 px-8 py-3 rounded-full text-white font-semibold hover:bg-blue-500 transition shadow-lg shadow-blue-500/30">
            Book an Ustaad
          </Link>
          <Link to="/about" className="px-8 py-3 rounded-full text-white font-semibold border border-gray-600 hover:border-gray-300 hover:bg-white/5 transition">
            Learn More
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Home;