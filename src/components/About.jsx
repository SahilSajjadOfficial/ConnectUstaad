import React from 'react';

const About = () => {
  return (
    <div className="flex-grow py-16 px-4 relative z-10">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">
            About Connect Ustaad
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Bridging the gap between skilled professionals and those who need them. We make finding reliable services effortless.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors duration-300">
            <div className="w-12 h-12 bg-indigo-500/20 text-indigo-400 flex items-center justify-center rounded-xl mb-6 text-2xl">
              🎯
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-slate-400 leading-relaxed">
              Our mission is to empower skilled individuals by providing them a platform to showcase their talents, while simultaneously making it incredibly easy for users to find and book reliable, high-quality services right at their doorstep.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors duration-300">
            <div className="w-12 h-12 bg-blue-500/20 text-blue-400 flex items-center justify-center rounded-xl mb-6 text-2xl">
              🤝
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h2>
            <ul className="text-slate-400 space-y-3">
              <li className="flex items-center gap-3">
                <span className="text-green-400">✓</span> Verified Professionals
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-400">✓</span> Transparent Pricing
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-400">✓</span> 24/7 Customer Support
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-400">✓</span> Secure Payments
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About;