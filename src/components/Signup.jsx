import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const requirements = [
    { regex: /.{8,}/, text: "At least 8 characters" },
    { regex: /[0-9]/, text: "At least 1 number" },
    { regex: /[A-Z]/, text: "At least 1 uppercase letter" }
  ]

  const isPasswordValid = requirements.every((req) => req.regex.test(password))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isPasswordValid) return
    
    console.log("Signup Attempt:", { email, password })
    navigate('/home')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black to-black p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl">
        
        <h1 className="text-3xl font-bold text-white text-center mb-2 tracking-tight">
          CONNECT <span className="text-indigo-400">USTAAD</span>
        </h1>
        <p className="text-slate-400 text-center mb-8 text-sm">Create your account to get started</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5 ml-1">Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="name@company.com" 
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5 ml-1">Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="••••••••" 
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              required 
            />
            <div className="space-y-1.5 mt-3 ml-1">
              {requirements.map((req, index) => {
                const isValid = req.regex.test(password)
                return (
                  <div 
                    key={index} 
                    className={`flex items-center text-xs transition-colors duration-200 ${
                      isValid ? "text-green-400" : "text-slate-500"
                    }`}
                  >
                    <span className="mr-2 text-sm">
                      {isValid ? "✓" : "•"}
                    </span>
                    {req.text}
                  </div>
                )
              })}
            </div>
          </div>

          <button 
            type="submit" 
            disabled={!isPasswordValid}
            className={`w-full py-3 px-4 font-semibold rounded-xl shadow-lg transition-all ${
              isPasswordValid 
                ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-500/30 transform active:scale-[0.98] cursor-pointer" 
                : "bg-slate-700 text-slate-400 cursor-not-allowed opacity-50"
            }`}
          >
            Sign Up
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-slate-400 text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors underline-offset-4 hover:underline cursor-pointer">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup