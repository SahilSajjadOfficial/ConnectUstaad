import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col text-slate-300 font-sans selection:bg-indigo-500/30">
      <Navbar />
      {/* 
        Add padding top to account for fixed navbar.
        The main content will flex-grow to fill available space.
      */}
      <main className="flex-grow pt-20 flex flex-col relative overflow-hidden">
        {/* Global decorative background elements */}
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
