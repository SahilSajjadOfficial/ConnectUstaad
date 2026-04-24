import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

const About = () => {
  return (
    <div className='bg-black h-screen text-white'>
      <header className='flex items-center justify-between p-4 border-b border-gray-800'>
        <Link to="/home">
            <img src={logo} alt="connect ustaad" className='h-16 rounded-full' />
        </Link>

        <div className='flex gap-6 items-center'>
            <Link to="/home" className="hover:text-blue-400 transition">Home</Link>
            <Link to="/about" className="text-blue-400 font-bold">About</Link>
            <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
            
            <Link to="/login" className="bg-blue-600 px-4 py-1 rounded hover:bg-blue-500 text-white">
                Login
            </Link>
        </div>
      </header>

      <main className="p-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-500">About Connect Ustaad</h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Connect Ustaad is a platform designed to bridge the gap between skilled professionals and those who need them.
          Whether you are looking for a teacher, a mentor, or a skilled technician, we connect you with the best "Ustaads" in town.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Our mission is to empower skilled individuals by providing them a platform to showcase their talents while making
          it easy for users to find reliable services.
        </p>
      </main>
    </div>
  )
}

export default About;