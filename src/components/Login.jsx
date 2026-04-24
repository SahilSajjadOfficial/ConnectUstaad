import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Login Attempt:", { email, password })
    navigate('/home')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black to-black p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl">
        
        <h1 className="text-3xl font-bold text-white text-center mb-2 tracking-tight">
          CONNECT <span className="text-indigo-400">USTAAD</span>
        </h1>
        <p className="text-slate-400 text-center mb-8 text-sm">Welcome back! Please login to your account</p>

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
          </div>

          <button 
            type="submit" 
            className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/30 transform transition-all active:scale-[0.98]"
          >
            Login
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-slate-400 text-sm">
            New To Connect Ustaad?{' '}
            <Link to="/" className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors underline-offset-4 hover:underline cursor-pointer">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login