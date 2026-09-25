import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Eye, 
  EyeOff, 
  Lock, 
  Mail, 
  LogIn, 
  UserPlus, 
  ShieldCheck, 
  Coins, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  Star, 
  ArrowRight 
} from 'lucide-react';
import SkilloraLogo from '../components/SkilloraLogo';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('alex@example.com');
  const [password, setPassword] = useState('SuperSecureP@ss123');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(`Welcome back to Skillora! (Demo Sign-In successful for ${email})`);
    }, 800);
  };

  const handleOAuth = (provider) => {
    alert(`Connecting with ${provider}... Ready to integrate with Better Auth / OAuth provider!`);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-[#f4f6fb] flex items-center justify-center p-4 sm:p-6 lg:p-10">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Login Card (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/60 border border-slate-100 flex flex-col justify-between">
          <div>
            {/* Header & Logo */}
            <div className="mb-6">
              <SkilloraLogo size="md" />
              <p className="text-slate-500 text-sm mt-3 font-normal">
                Sign in to continue your peer learning and skill trades
              </p>
            </div>

            {/* Sign Up / Log In segmented pill tabs */}
            <div className="bg-slate-100/90 p-1.5 rounded-2xl flex items-center mb-6">
              <Link
                to="/signup"
                className="flex-1 py-2.5 text-center text-sm font-semibold rounded-xl text-slate-600 hover:text-slate-900 transition flex items-center justify-center gap-2"
              >
                <UserPlus className="w-4 h-4 text-slate-400" />
                Sign Up
              </Link>
              <button
                type="button"
                className="flex-1 py-2.5 text-center text-sm font-semibold rounded-xl bg-white text-[#302ae6] shadow-sm flex items-center justify-center gap-2 transition"
              >
                <LogIn className="w-4 h-4 text-[#302ae6]" />
                Log In
              </button>
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                type="button"
                onClick={() => handleOAuth('Google')}
                className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-2xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 text-slate-700 text-sm font-semibold transition shadow-sm"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                Google
              </button>

              <button
                type="button"
                onClick={() => handleOAuth('GitHub')}
                className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-2xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 text-slate-700 text-sm font-semibold transition shadow-sm"
              >
                <svg className="w-4 h-4 fill-current text-slate-800" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </button>
            </div>

            {/* Divider */}
            <div className="relative flex items-center justify-center my-6">
              <div className="border-t border-slate-200 w-full"></div>
              <span className="bg-white px-3 text-[11px] font-semibold tracking-wider text-slate-400 uppercase absolute">
                or continue with email
              </span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <span className="text-sm font-bold">@</span>
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@example.com"
                    className="w-full pl-9 pr-4 py-3 bg-slate-50/80 border border-slate-200 rounded-2xl text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#302ae6]/20 focus:border-[#302ae6] transition"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-10 pr-10 py-3 bg-slate-50/80 border border-slate-200 rounded-2xl text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#302ae6]/20 focus:border-[#302ae6] transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none text-slate-600 font-medium">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded text-[#302ae6] focus:ring-[#302ae6]/30 border-slate-300"
                  />
                  <span>Remember this device</span>
                </label>
                <a href="#forgot" onClick={(e) => { e.preventDefault(); alert("Password reset link will be sent to your email."); }} className="font-semibold text-[#302ae6] hover:underline">
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-4 bg-[#302ae6] hover:bg-[#2520c0] active:scale-[0.99] text-white font-semibold text-sm rounded-2xl shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2 transition duration-150 disabled:opacity-75 mt-2"
              >
                {loading ? (
                  <span className="inline-flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Signing In...
                  </span>
                ) : (
                  <>
                    <LogIn className="w-4 h-4" />
                    <span>Sign In to Skillora</span>
                  </>
                )}
              </button>
            </form>

            {/* Prompt to register */}
            <p className="text-center text-xs text-slate-500 mt-6">
              Don't have an account yet?{' '}
              <Link to="/signup" className="text-[#302ae6] font-bold hover:underline">
                Sign Up (Get 50 Free Credits)
              </Link>
            </p>
          </div>

          {/* Footer Security Badges */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-[11px] font-medium text-slate-500">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              End-to-End Encrypted
            </span>
            <span className="flex items-center gap-1.5">
              <Coins className="w-3.5 h-3.5 text-amber-500" />
              Knowledge Exchange
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500" />
              Peer Verified
            </span>
          </div>
        </div>

        {/* Right Info Column (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Top Dark Cosmic Card */}
          <div className="rounded-3xl p-7 text-white shadow-xl dark-gradient-card relative overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none"></div>
            
            {/* Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-semibold text-indigo-200 mb-5">
              <Sparkles className="w-3 h-3 text-indigo-300" />
              <span>Peer-to-Peer Learning</span>
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-white mb-3">
              Continue your exchange journey
            </h2>

            <p className="text-slate-300 text-xs leading-relaxed mb-6 font-normal">
              Over 4,800 active sessions happening today. Your next mentor or mentee is one exchange away.
            </p>

            {/* Embedded Active Session Pill */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-white">Next Session with Elena Vance</h5>
                  <p className="text-[11px] text-slate-400">Starting in 2 hours</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-slate-950 font-bold text-xs shadow-sm">
                Ready
              </span>
            </div>
          </div>

          {/* Bottom Testimonial Card */}
          <div className="bg-white rounded-3xl p-7 shadow-xl shadow-slate-200/50 border border-slate-100">
            {/* User row */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="Sophia Chen"
                  className="w-11 h-11 rounded-full object-cover border-2 border-indigo-100 shadow-sm"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Sophia Chen</h4>
                  <p className="text-xs text-slate-500">Design Lead & Rustacean</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs font-bold text-amber-500 bg-amber-50 px-2 py-1 rounded-lg">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>5.0</span>
              </div>
            </div>

            {/* Quote */}
            <p className="text-xs text-slate-600 italic leading-relaxed mb-5">
              “Skillora transformed how I learn. Traded 12 hours of design coaching for fullstack engineering without spending a single dollar.”
            </p>

            {/* Hours & link */}
            <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-100">
              <span className="flex items-center gap-1.5 text-emerald-600 font-semibold text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                34 Exchanged Hours
              </span>
              <a href="#stories" onClick={(e) => { e.preventDefault(); navigate('/#stories'); }} className="text-[#302ae6] font-semibold text-[11px] hover:underline flex items-center gap-1">
                <span>Read community stories</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
