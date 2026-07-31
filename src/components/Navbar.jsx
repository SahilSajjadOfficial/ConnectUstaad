import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
  const navLinks = [
    { name: 'Home', path: '/home' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/home" className="flex items-center gap-3 group">
            <div className="overflow-hidden rounded-full border-2 border-transparent group-hover:border-indigo-500 transition-colors duration-300">
              <img src={logo} alt="Connect Ustaad" className="h-12 w-12 object-cover" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight group-hover:text-indigo-400 transition-colors">
              CONNECT <span className="text-indigo-500">USTAAD</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-sm font-medium transition-all duration-300 hover:text-indigo-400 relative ${
                  isActive(link.path) ? 'text-indigo-400' : 'text-slate-300'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.8)]"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link 
              to="/login" 
              className="hidden sm:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white transition-all duration-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20"
            >
              Log in
            </Link>
            <Link 
              to="/signup" 
              className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white transition-all duration-300 bg-indigo-600 rounded-full shadow-lg shadow-indigo-500/30 hover:bg-indigo-500 hover:shadow-indigo-500/50 hover:-translate-y-0.5 active:translate-y-0"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
