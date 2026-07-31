import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    { id: 1, title: 'Plumbing', desc: 'Expert pipe repairs, installations, and leak fixes.', icon: '💧' },
    { id: 2, title: 'Electrical', desc: 'Safe wiring, appliance installation, and fault finding.', icon: '⚡' },
    { id: 3, title: 'Tutoring', desc: 'Home tutors for all subjects and grade levels.', icon: '📚' },
    { id: 4, title: 'Carpentry', desc: 'Custom furniture, repairs, and woodwork.', icon: '🔨' },
    { id: 5, title: 'Cleaning', desc: 'Deep home cleaning and sanitization services.', icon: '✨' },
    { id: 6, title: 'IT Support', desc: 'Computer repair, networking, and tech setup.', icon: '💻' },
  ];

  return (
    <div className="flex-grow flex flex-col items-center py-16 px-4">
      <div className="text-center mb-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">Services</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Explore the wide range of services offered by our verified Ustaads. Professional, reliable, and just a click away.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full relative z-10">
        {services.map(service => (
          <div 
            key={service.id} 
            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 transform origin-left">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
              {service.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {service.desc}
            </p>
            <button className="text-sm font-semibold text-indigo-400 group-hover:text-indigo-300 flex items-center gap-2">
              Book Now 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
