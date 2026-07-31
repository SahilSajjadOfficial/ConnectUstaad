import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate auth request
    setTimeout(() => {
      setIsSubmitting(false)
      navigate('/home')
    }, 1500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4 relative overflow-hidden selection:bg-indigo-500/30">
      
      {/* Background Effects */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-indigo-900/30 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] relative z-10">
        
        <Link to="/home" className="block text-center mb-8 group cursor-pointer">
          <h1 className="text-3xl font-bold text-white tracking-tight group-hover:scale-105 transition-transform duration-300">
            CONNECT <span className="text-indigo-500">USTAAD</span>
          </h1>
          <p className="text-slate-400 text-sm mt-2">Welcome back! Please login to your account</p>
        </Link>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5 ml-1">Email Address</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="name@example.com" 
              className="w-full px-5 py-3.5 bg-black/40 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5 ml-1 flex justify-between">
              Password
              <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors text-xs">Forgot password?</a>
            </label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="••••••••" 
              className="w-full px-5 py-3.5 bg-black/40 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              required 
            />
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`w-full py-4 px-6 mt-2 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
              isSubmitting 
                ? 'bg-indigo-600/50 cursor-not-allowed' 
                : 'bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-500/30 hover:-translate-y-0.5 active:translate-y-0'
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing in...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-slate-400 text-sm">
            New to Connect Ustaad?{' '}
            <Link to="/signup" className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login