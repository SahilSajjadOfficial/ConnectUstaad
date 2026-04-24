import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

const Contact = () => {
  return (
    <div className='bg-black h-screen-full text-white'>
      <header className='flex items-center justify-between p-4 border-b border-gray-800'>
        <Link to="/home">
            <img src={logo} alt="connect ustaad" className='h-16 rounded-full' />
        </Link>

        <div className='flex gap-6 items-center'>
            <Link to="/home" className="hover:text-blue-400 transition">Home</Link>
            <Link to="/about" className="hover:text-blue-400 transition">About</Link>
            <Link to="/contact" className="text-blue-400 font-bold">Contact</Link>
            
            <Link to="/login" className="bg-blue-600 px-4 py-1 rounded hover:bg-blue-500 text-white">
                Login
            </Link>
        </div>
      </header>

      <main className="p-10 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Get in Touch</h1>
        
        <form className="space-y-6 bg-gray-900 p-8 rounded-xl border border-gray-800">
            <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <input type="text" className="w-full p-3 rounded bg-black border border-gray-700 focus:border-blue-500 outline-none" placeholder="John Doe"/>
            </div>

            <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input type="email" className="w-full p-3 rounded bg-black border border-gray-700 focus:border-blue-500 outline-none" placeholder="john@example.com"/>
            </div>

            <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea className="w-full p-3 h-32 rounded bg-black border border-gray-700 focus:border-blue-500 outline-none" placeholder="How can we help you?"></textarea>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded transition">
                Send Message
            </button>
        </form>
      </main>
    </div>
  )
}

export default Contact;