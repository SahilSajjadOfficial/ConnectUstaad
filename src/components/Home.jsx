import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex-grow flex flex-col items-center justify-center text-center px-4 py-20 relative z-10'>
      
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-8">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
        </span>
        Over 5,000 Verified Ustaads
      </div>

      <h1 className='text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight max-w-4xl mx-auto'>
        Expert Ustaads, <br />
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-500 animate-gradient-x'>
          At Your Doorstep
        </span>
      </h1>
      
      <p className='text-slate-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed'>
        Connect with trusted, top-rated professionals for all your home repair, maintenance, and learning needs with just a few clicks. Your convenience, our priority.
      </p>

      <div className='flex flex-col sm:flex-row gap-4'>
        <Link 
          to="/services" 
          className="px-8 py-4 rounded-full text-white font-semibold bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] hover:-translate-y-1"
        >
          Book an Ustaad
        </Link>
        <Link 
          to="/about" 
          className="px-8 py-4 rounded-full text-white font-semibold border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
        >
          Learn More
        </Link>
      </div>

      {/* Stats Section */}
      <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl w-full border-t border-white/10 pt-12">
        {[
          { label: 'Active Users', value: '10k+' },
          { label: 'Ustaads', value: '5,000+' },
          { label: 'Cities', value: '12' },
          { label: 'Rating', value: '4.9/5' }
        ].map((stat, i) => (
          <div key={i} className="text-center space-y-2">
            <h4 className="text-3xl font-bold text-white">{stat.value}</h4>
            <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home;