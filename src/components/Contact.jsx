import React, { useState } from 'react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form after a few seconds
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="flex-grow py-16 px-4 relative z-10">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-slate-400">Have a question or need support? We'd love to hear from you.</p>
        </div>
        
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
          
          {/* Success Overlay */}
          <div className={`absolute inset-0 bg-indigo-900/90 backdrop-blur-sm z-20 flex flex-col items-center justify-center transition-all duration-500 ${isSuccess ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div className="text-6xl mb-4 animate-bounce">🎉</div>
            <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
            <p className="text-indigo-200 text-center px-6">We'll get back to you as soon as possible.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2 ml-1">Your Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-5 py-3.5 bg-black/40 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2 ml-1">Email Address</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-5 py-3.5 bg-black/40 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2 ml-1">Message</label>
              <textarea 
                required
                className="w-full px-5 py-3.5 h-36 resize-none bg-black/40 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full py-4 px-6 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                isSubmitting 
                  ? 'bg-indigo-600/50 cursor-not-allowed' 
                  : 'bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-500/30 hover:-translate-y-0.5'
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;