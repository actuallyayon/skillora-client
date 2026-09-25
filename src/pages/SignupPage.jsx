import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Eye, 
  EyeOff, 
  Lock, 
  User, 
  Mail, 
  Sparkles, 
  ShieldCheck, 
  Coins, 
  CheckCircle2, 
  Star, 
  ArrowRight, 
  UserPlus, 
  LogIn, 
  Check, 
  Zap, 
  Wallet, 
  Repeat 
} from 'lucide-react';
import SkilloraLogo from '../components/SkilloraLogo';

export default function SignupPage() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('Alex Morgan');
  const [email, setEmail] = useState('alex@example.com');
  const [password, setPassword] = useState('SuperSecureP@ss123');
  const [confirmPassword, setConfirmPassword] = useState('SuperSecureP@ss123');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [loading, setLoading] = useState(false);

  // Skill tags state
  const availableSkills = [
    'Rust Systems',
    'Product Design',
    'Prompt Eng.',
    'Smart Contracts',
    'Brand Strategy',
    'Next.js 15',
    'Machine Learning',
    'Growth Hacking'
  ];
  const [selectedSkills, setSelectedSkills] = useState(['Rust Systems', 'Product Design']);

  const toggleSkill = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      if (selectedSkills.length < 3) {
        setSelectedSkills([...selectedSkills, skill]);
      } else {
        alert("You can select up to 3 priority learning topics!");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreeTerms) {
      alert("Please agree to the Terms and Community Honor Code.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(`Account created successfully for ${fullName}! 50 Welcome Credits have been added to your Skillora wallet.`);
      navigate('/');
    }, 900);
  };

  const handleOAuth = (provider) => {
    alert(`Signing up with ${provider}... Ready to link with Better Auth!`);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-[#f4f6fb] flex items-center justify-center p-4 sm:p-6 lg:p-10">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Form Card (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-9 shadow-xl shadow-slate-200/60 border border-slate-100 flex flex-col justify-between">
          <div>
            {/* Header with active badge */}
            <div className="flex items-start justify-between mb-5 flex-wrap gap-2">
              <SkilloraLogo size="md" showSubtitle={true} />
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>4,812 active sessions today</span>
              </div>
            </div>

            {/* Segmented Tab */}
            <div className="bg-slate-100/90 p-1.5 rounded-2xl flex items-center mb-5">
              <button
                type="button"
                className="flex-1 py-2.5 text-center text-sm font-semibold rounded-xl bg-white text-[#302ae6] shadow-sm flex items-center justify-center gap-2 transition"
              >
                <UserPlus className="w-4 h-4 text-[#302ae6]" />
                Sign Up
              </button>
              <Link
                to="/login"
                className="flex-1 py-2.5 text-center text-sm font-semibold rounded-xl text-slate-600 hover:text-slate-900 transition flex items-center justify-center gap-2"
              >
                <LogIn className="w-4 h-4 text-slate-400" />
                Log In
              </Link>
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              <button
                type="button"
                onClick={() => handleOAuth('Google')}
                className="flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-2xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 text-slate-700 text-xs sm:text-sm font-semibold transition shadow-sm"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                Continue with Google
              </button>

              <button
                type="button"
                onClick={() => handleOAuth('GitHub')}
                className="flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-2xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 text-slate-700 text-xs sm:text-sm font-semibold transition shadow-sm"
              >
                <svg className="w-4 h-4 fill-current text-slate-800" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                Continue with GitHub
              </button>
            </div>

            {/* Divider */}
            <div className="relative flex items-center justify-center my-5">
              <div className="border-t border-slate-200 w-full"></div>
              <span className="bg-white px-3 text-[10px] font-semibold tracking-wider text-slate-400 uppercase absolute">
                or continue with email
              </span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Alex Morgan"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50/80 border border-slate-200 rounded-2xl text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#302ae6]/20 focus:border-[#302ae6] transition"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Work or Personal Email
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
                    className="w-full pl-9 pr-4 py-2.5 bg-slate-50/80 border border-slate-200 rounded-2xl text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#302ae6]/20 focus:border-[#302ae6] transition"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
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
                    className="w-full pl-10 pr-10 py-2.5 bg-slate-50/80 border border-slate-200 rounded-2xl text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#302ae6]/20 focus:border-[#302ae6] transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {/* 4-bar password strength meter */}
                <div className="mt-2 flex items-center gap-1.5">
                  <div className="h-1.5 flex-1 rounded-full bg-emerald-700"></div>
                  <div className="h-1.5 flex-1 rounded-full bg-emerald-700"></div>
                  <div className="h-1.5 flex-1 rounded-full bg-emerald-700"></div>
                  <div className="h-1.5 flex-1 rounded-full bg-slate-200"></div>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1">
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Strong password
                  </span>
                  <span>Minimum 8 characters</span>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-10 pr-10 py-2.5 bg-slate-50/80 border border-slate-200 rounded-2xl text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#302ae6]/20 focus:border-[#302ae6] transition"
                  />
                </div>
              </div>

              {/* Interactive Skill Selection */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    What do you want to learn first?
                  </label>
                  <span className="text-[11px] text-slate-400">Select up to 3</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {availableSkills.map((skill) => {
                    const isSelected = selectedSkills.includes(skill);
                    return (
                      <button
                        key={skill}
                        type="button"
                        onClick={() => toggleSkill(skill)}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-[#2c22d4] text-white shadow-sm'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
                        }`}
                      >
                        <span>{skill}</span>
                        {isSelected && <Check className="w-3 h-3" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Agreement checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600 leading-snug">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded text-[#302ae6] focus:ring-[#302ae6]/30 border-slate-300"
                  />
                  <span>
                    I agree to the <a href="#terms" className="text-[#302ae6] underline">Terms of Service</a> and the <span className="font-semibold text-slate-800">Community Honor Code</span> (zero cash transactions; pure peer reciprocity).
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 bg-[#302ae6] hover:bg-[#2520c0] active:scale-[0.99] text-white font-semibold text-sm rounded-2xl shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2 transition duration-150 disabled:opacity-75 mt-3"
              >
                {loading ? (
                  <span>Creating Account...</span>
                ) : (
                  <>
                    <Star className="w-4 h-4 fill-white text-white" />
                    <span>Create Account</span>
                  </>
                )}
              </button>
            </form>

            {/* Prompt to Log in */}
            <p className="text-center text-xs text-slate-500 mt-4">
              Already have an account?{' '}
              <Link to="/login" className="text-[#302ae6] font-bold hover:underline">
                Log In
              </Link>
            </p>
          </div>

          {/* Footer Security Badges */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-[11px] font-medium text-slate-500">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              End-to-End Encrypted
            </span>
            <span className="flex items-center gap-1.5">
              <Coins className="w-3.5 h-3.5 text-amber-500" />
              Non-Fiat Economy
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500" />
              Verified Peer Reputation
            </span>
          </div>
        </div>

        {/* Right Info Column (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* 1. Dark Banner Card */}
          <div className="rounded-3xl p-6 text-white shadow-xl dark-gradient-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-44 h-44 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-semibold text-indigo-200 mb-3">
              <Coins className="w-3 h-3 text-amber-400" />
              <span>The Peer-Knowledge Currency</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2 leading-tight">
              Zero money exchanged. Pure peer reciprocity.
            </h2>

            <p className="text-slate-300 text-xs leading-relaxed font-normal">
              Teach an hour of your craft, earn an hour in return. Our AI pairing engine instantly matches your superpowers with the exact mentors you need.
            </p>
          </div>

          {/* 2. Live AI Matching Engine Card */}
          <div className="bg-white rounded-3xl p-5 shadow-lg shadow-slate-200/50 border border-slate-100">
            <div className="flex items-center justify-between mb-3.5">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                Live AI Matching Engine
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200">
                <Zap className="w-3 h-3 text-emerald-600 fill-emerald-500" />
                96% Match Compatibility
              </span>
            </div>

            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80"
                  alt="Marcus Vance"
                  className="w-10 h-10 rounded-full object-cover border border-slate-200 shadow-sm"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Marcus Vance</h4>
                  <p className="text-[11px] text-slate-500">Principal Engineer @ HyperScale</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs font-bold text-amber-600">
                <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                <span>4.99 (48)</span>
              </div>
            </div>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-2 text-[11px] mb-3">
              <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 font-medium">
                Offers: Rust / Tokio
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 font-medium">
                Needs: Figma Tokens
              </span>
            </div>

            <div className="flex items-center justify-between pt-2.5 border-t border-slate-100 text-[11px] text-slate-500">
              <span className="flex items-center gap-1 font-medium">
                <Repeat className="w-3.5 h-3.5 text-indigo-500" />
                Direct Reciprocal Exchange
              </span>
              <span className="text-emerald-600 font-bold">
                Instant Booking Available
              </span>
            </div>
          </div>

          {/* 3. Wallet Balance Card */}
          <div className="bg-white rounded-3xl p-4 shadow-sm border border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center text-[#302ae6]">
                <Wallet className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">WALLET BALANCE</p>
                <h4 className="text-sm font-extrabold text-slate-900">0.00 <span className="text-xs text-slate-500 font-medium">SKILL COINS</span></h4>
              </div>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-700">
                <Repeat className="w-3 h-3 text-slate-400" /> Direct Exchange
              </span>
              <p className="text-[10px] text-slate-400">Earn credits by teaching</p>
            </div>
          </div>

          {/* 4. Testimonial Card */}
          <div className="bg-white rounded-3xl p-5 shadow-lg shadow-slate-200/50 border border-slate-100 relative">
            <span className="absolute top-4 right-5 text-4xl text-slate-200 font-serif leading-none select-none">“</span>
            <div className="flex items-center gap-3 mb-2.5">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="Sophia Chen"
                className="w-9 h-9 rounded-full object-cover border border-slate-200"
              />
              <div>
                <h5 className="text-xs font-bold text-slate-900">Sophia Chen</h5>
                <p className="text-[10px] text-slate-500">Design Lead & Rustacean</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 italic leading-relaxed mb-3">
              “I learned Rust by teaching Figma. Skillora is the best platform on the web. We eliminated invoice headaches and just traded mastery.”
            </p>

            <div className="flex items-center gap-3 text-[11px] text-slate-400 pt-2 border-t border-slate-100">
              <span className="text-emerald-600 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 34 Exchanged Hours
              </span>
              <span>•</span>
              <span>Member since 2023</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
