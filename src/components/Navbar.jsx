import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Zap, 
  Moon, 
  Sun,
  Bell, 
  ChevronDown, 
  Menu, 
  X, 
  User, 
  PlusCircle,
  Sparkles,
  LogOut,
  Settings
} from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Left: Brand Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-black tracking-tight text-[#3424d6] hover:opacity-95 transition">
            Skillora
          </Link>
        </div>

        {/* Center: Floating Pill Navigation Capsule */}
        {!isAuthPage && (
          <nav className="hidden md:flex items-center bg-[#f1f4fb] px-4 py-2 rounded-2xl gap-8 shadow-inner border border-slate-200/50">
            <a 
              href="#explore" 
              className="text-xs lg:text-sm font-semibold text-slate-700 hover:text-[#3424d6] transition-colors"
            >
              Explore Skills
            </a>
            <a 
              href="#ai-matcher" 
              className="text-xs lg:text-sm font-semibold text-slate-700 hover:text-[#3424d6] transition-colors"
            >
              AI Matches
            </a>
            <a 
              href="#how-it-works" 
              className="text-xs lg:text-sm font-semibold text-slate-700 hover:text-[#3424d6] transition-colors"
            >
              How it Works
            </a>
          </nav>
        )}

        {/* Right: Actions, Credits, Auth, Icons */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          
          {/* Credits Pill */}
          <Link
            to="/signup"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-full bg-[#fef5ea] border border-[#fae2c8] text-[#c26d18] hover:bg-[#fdecd5] transition shadow-2xs"
          >
            <Zap className="w-3.5 h-3.5 fill-[#d97706] text-[#d97706]" />
            <span>140 Credits</span>
          </Link>

          {/* Sign In text link */}
          <Link
            to="/login"
            className="hidden sm:inline-block px-2.5 py-2 text-xs lg:text-sm font-bold text-slate-700 hover:text-slate-950 transition"
          >
            Sign In
          </Link>

          {/* Post a Skill Button */}
          <Link
            to="/signup"
            className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-white bg-[#4338ca] hover:bg-[#3730a3] active:scale-[0.98] transition-all rounded-xl sm:rounded-2xl shadow-sm shadow-indigo-600/20"
          >
            Post a Skill
          </Link>

          {/* Moon Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="p-2 text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>

          {/* Notification Bell with Badge */}
          <button
            onClick={() => alert("You have 2 new exchange requests and 1 upcoming session!")}
            title="Notifications"
            className="relative p-2 text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition"
          >
            <Bell className="w-4 h-4 text-slate-600" />
            {/* Orange notification dot */}
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-500 ring-2 ring-white"></span>
          </button>

          {/* Profile Chevron Dropdown */}
          <div className="relative">
            <button
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              className="p-1.5 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition flex items-center"
              aria-label="User menu"
            >
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${profileDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {profileDropdownOpen && (
              <div 
                className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                onClick={() => setProfileDropdownOpen(false)}
              >
                <div className="px-4 py-2 border-b border-slate-100">
                  <p className="text-xs font-bold text-slate-900">Alex Morgan</p>
                  <p className="text-[11px] text-slate-500 truncate">alex@example.com</p>
                </div>
                <Link
                  to="/signup"
                  className="flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#3424d6]"
                >
                  <User className="w-4 h-4 text-slate-400" />
                  My Profile
                </Link>
                <Link
                  to="/signup"
                  className="flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#3424d6]"
                >
                  <PlusCircle className="w-4 h-4 text-slate-400" />
                  Create Skill Listing
                </Link>
                <Link
                  to="/login"
                  className="flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50"
                >
                  <LogOut className="w-4 h-4 text-rose-500" />
                  Sign Out
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 ml-1"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && !isAuthPage && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2">
          <a
            href="#explore"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Explore Skills
          </a>
          <a
            href="#ai-matcher"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            AI Matches
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            How it Works
          </a>
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold text-slate-700"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 text-xs font-bold text-white bg-[#4338ca] rounded-xl"
            >
              Post a Skill
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

