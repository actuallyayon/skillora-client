import React from 'react';
import { Link } from 'react-router-dom';
import SkilloraLogo from './SkilloraLogo';
import { Github, Twitter, Linkedin, Heart, ShieldCheck, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200/80 pt-14 pb-10 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-100">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <SkilloraLogo size="md" showSubtitle={true} />
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              Skillora is a decentralized peer skill exchange platform. Trade knowledge, earn credits, and collaborate with verified peers worldwide using intelligent AI pairing.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 transition">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 transition">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 transition">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Marketplace */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Marketplace</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#explore" className="hover:text-[#302ae6] transition">Explore Skills</a></li>
              <li><a href="#ai-matcher" className="hover:text-[#302ae6] transition">AI Skill Matcher</a></li>
              <li><a href="#featured" className="hover:text-[#302ae6] transition">Top Rated Mentors</a></li>
              <li><a href="#categories" className="hover:text-[#302ae6] transition">Skill Categories</a></li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Platform</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#how-it-works" className="hover:text-[#302ae6] transition">How it Works</a></li>
              <li><span className="text-slate-400">Credit Escrow Model</span></li>
              <li><span className="text-slate-400">Community Honor Code</span></li>
              <li><span className="text-slate-400">AI Compatibility</span></li>
            </ul>
          </div>

          {/* Legal & Security */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Trust & Security</h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-1.5 text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero Cash Currency</span>
              </li>
              <li><span className="text-slate-400">Privacy Policy</span></li>
              <li><span className="text-slate-400">Terms of Service</span></li>
              <li><span className="text-slate-400">Cookie Settings</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Skillora Inc. All rights reserved. Built for peer reciprocity.</p>
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              All systems operational
            </span>
            <Link to="/login" className="hover:text-slate-600">Sign In</Link>
            <Link to="/signup" className="hover:text-slate-600">Register</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
