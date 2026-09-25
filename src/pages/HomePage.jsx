import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  Search, 
  ArrowRight, 
  Repeat, 
  Zap, 
  ShieldCheck, 
  Coins, 
  Star, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Palette, 
  Code2, 
  Compass, 
  LineChart, 
  Smartphone, 
  Terminal, 
  Award,
  Users,
  Clock,
  ExternalLink
} from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();
  const [skillNeeded, setSkillNeeded] = useState('');
  const [skillOffered, setSkillOffered] = useState('');
  const [ctaEmail, setCtaEmail] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!skillNeeded && !skillOffered) {
      alert("Please enter a skill you need or offer to test AI matching!");
      return;
    }
    navigate(`/signup?needed=${encodeURIComponent(skillNeeded)}&offered=${encodeURIComponent(skillOffered)}`);
  };

  const handleCtaSubmit = (e) => {
    e.preventDefault();
    if (!ctaEmail) return;
    navigate(`/signup?email=${encodeURIComponent(ctaEmail)}`);
  };

  // Categories Data
  const categories = [
    {
      id: 'web-cloud',
      title: 'Web & Cloud',
      desc: 'Next.js, Node.js, Kubernetes, AWS architectures & CI/CD',
      icon: Code2,
      count: '1,420 Peers',
      color: 'bg-blue-50 text-blue-600 border-blue-100',
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Design',
      desc: 'Design systems, Figma tokens, micro-interactions & user research',
      icon: Palette,
      count: '980 Peers',
      color: 'bg-purple-50 text-purple-600 border-purple-100',
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning',
      desc: 'LLMs, PyTorch, RAG pipelines, fine-tuning & prompt engineering',
      icon: Cpu,
      count: '840 Peers',
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
    {
      id: 'systems',
      title: 'Systems & Rust',
      desc: 'Rust, Tokio, Go concurrency, memory management & low-latency',
      icon: Terminal,
      count: '620 Peers',
      color: 'bg-amber-50 text-amber-600 border-amber-100',
    },
    {
      id: 'product-strategy',
      title: 'Product Strategy',
      desc: 'Roadmapping, user interviews, GTM strategy & monetization',
      icon: Layers,
      count: '510 Peers',
      color: 'bg-rose-50 text-rose-600 border-rose-100',
    },
    {
      id: 'token-web3',
      title: 'Token & Web3',
      desc: 'Solidity, smart contract audits, EVM architecture & DeFi mechanics',
      icon: Coins,
      count: '430 Peers',
      color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    },
    {
      id: 'growth-marketing',
      title: 'Growth Marketing',
      desc: 'SEO engines, outbound viral loops, conversion funnels & ads',
      icon: LineChart,
      count: '760 Peers',
      color: 'bg-cyan-50 text-cyan-600 border-cyan-100',
    },
    {
      id: 'mobile-dev',
      title: 'Mobile Dev',
      desc: 'React Native, Flutter, Swift iOS & Android Jetpack Compose',
      icon: Smartphone,
      count: '590 Peers',
      color: 'bg-teal-50 text-teal-600 border-teal-100',
    },
  ];

  // Testimonials Data
  const testimonials = [
    {
      name: 'Sophia Chen',
      role: 'Design Lead @ Stripe Alum',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      rating: 5,
      quote: 'Skillora transformed how I learn. Traded 12 hours of design system coaching for fullstack engineering without spending a single dollar.',
      hours: '34 Exchanged Hours',
      badge: 'Rust ⇄ Figma Master'
    },
    {
      name: 'Marcus Vance',
      role: 'Principal Engineer @ HyperScale',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80',
      rating: 5,
      quote: 'The AI matching algorithm found me a compiler specialist in 30 seconds who wanted to learn low-level audio DSP. Unbeatable peer exchange experience.',
      hours: '48 Exchanged Hours',
      badge: 'Compiler ⇄ Audio DSP'
    },
    {
      name: 'Alya Rahman',
      role: 'Product Strategist @ BioSynth',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
      rating: 5,
      quote: 'Credit escrow guarantees that every session happens on time. Zero flaky meetings, pure high-caliber mentorship and bidirectional learning.',
      hours: '29 Exchanged Hours',
      badge: 'Strategy ⇄ ML Ops'
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-10 pb-16 md:pt-16 md:pb-20 overflow-hidden bg-mesh-radial">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f0f3ff] border border-indigo-100/80 text-[#302ae6] text-xs font-bold tracking-wide mb-6 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#302ae6]"></span>
            <span>AI-Powered Peer Skill & Knowledge Exchange</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.12]">
            Share Skills. Earn Credits.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b35f6] to-[#a855f7]">
              Grow Together.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Trade knowledge without spending money. Get 50 free welcome credits to learn design, coding, languages, or marketing through bilateral peer reciprocity.
          </p>

          {/* Search Bar matching screenshot */}
          <div className="mt-9 max-w-3xl mx-auto">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                navigate(`/signup?query=${encodeURIComponent(skillNeeded)}`);
              }}
              className="bg-white p-2 sm:p-2.5 rounded-2xl sm:rounded-3xl shadow-xl shadow-indigo-500/10 border border-slate-200/80 flex flex-col sm:flex-row items-center gap-2"
            >
              {/* Disciplines dropdown */}
              <div className="w-full sm:w-auto flex items-center justify-between gap-2 px-3 py-2 bg-slate-50/80 hover:bg-slate-100/80 rounded-xl sm:rounded-2xl border border-slate-200/70 text-slate-700 text-xs font-bold cursor-pointer transition flex-shrink-0">
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-indigo-600" />
                  <span>All Disciplines</span>
                </div>
                <span className="text-slate-400 text-xs">▼</span>
              </div>

              {/* Text Input */}
              <div className="flex-1 w-full flex items-center gap-2 px-3 py-2 text-left">
                <input
                  type="text"
                  placeholder="Search skills, e.g. Next.js 15, Figma Tokens, LangChain..."
                  value={skillNeeded}
                  onChange={(e) => setSkillNeeded(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none"
                />
              </div>

              {/* Explore Peers Button */}
              <button
                type="submit"
                className="w-full sm:w-auto px-5 py-2.5 sm:py-3 bg-[#302ae6] hover:bg-[#2520c0] active:scale-95 text-white text-xs sm:text-sm font-bold rounded-xl sm:rounded-2xl shadow-md shadow-indigo-600/25 flex items-center justify-center gap-1.5 transition flex-shrink-0"
              >
                <span>Explore Peers</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Dual Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#302ae6] hover:bg-[#2520c0] text-white text-xs sm:text-sm font-bold shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 active:scale-95 transition"
            >
              <Zap className="w-4 h-4 fill-amber-300 text-amber-300" />
              <span>Get Started — Claim 50 Free Credits</span>
            </Link>

            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#eef2ff] hover:bg-[#e0e7ff] text-[#302ae6] text-xs sm:text-sm font-bold transition"
            >
              <div className="w-4 h-4 rounded-full bg-[#302ae6] flex items-center justify-center text-white text-[10px]">
                ▶
              </div>
              <span>See How It Works</span>
            </a>
          </div>

          {/* Social Proof / Avatars */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="flex items-center -space-x-2">
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover shadow-xs" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Peer 1" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover shadow-xs" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80" alt="Peer 2" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover shadow-xs" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Peer 3" />
              <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-[#302ae6] text-white text-[11px] font-bold ring-2 ring-white shadow-xs">
                +45k
              </div>
            </div>
            <div className="text-center sm:text-left text-xs">
              <div className="flex items-center justify-center sm:justify-start text-amber-500 font-bold gap-1">
                <span>{'★'.repeat(5)}</span>
                <span className="text-slate-900 font-extrabold ml-1">4.9 / 5</span>
              </div>
              <p className="text-slate-500 font-medium">Trusted by 45,000+ engineers, designers, and creators</p>
            </div>
          </div>

          {/* Interactive Bilateral Hero Match Card (matching screenshot) */}
          <div className="mt-12 max-w-5xl mx-auto bg-white rounded-3xl p-5 sm:p-7 shadow-xl shadow-slate-200/70 border border-slate-200/80 text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
              
              {/* Left 7 cols: 1:1 Direct Barter Match Area */}
              <div className="lg:col-span-7 bg-[#f6f8fd] rounded-2xl p-4 sm:p-5 border border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                
                {/* User 1: Sarah Lin */}
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
                      alt="Sarah Lin"
                      className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-xs"
                    />
                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-white"></span>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">Sarah Lin</h4>
                      <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[9px] font-bold">✓</span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium truncate max-w-[140px]">Senior React Architect @ Vercel Alum</p>
                    <span className="inline-block mt-1 px-2 py-0.5 rounded-md bg-indigo-50 border border-indigo-100 text-[#302ae6] text-[10px] font-bold">
                      React 19 / Next.js
                    </span>
                  </div>
                </div>

                {/* Center Barter Tag */}
                <div className="flex flex-col items-center justify-center flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-[#fef5ea] border border-[#fae2c8] text-[#d97706] flex items-center justify-center shadow-xs">
                    <Repeat className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] font-bold tracking-tight text-amber-800 uppercase mt-1">
                    $0 Fee 1:1 Direct Barter
                  </span>
                </div>

                {/* User 2: Mateo Rossi */}
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
                      alt="Mateo Rossi"
                      className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-xs"
                    />
                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-white"></span>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">Mateo Rossi</h4>
                      <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[9px] font-bold">✓</span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium truncate max-w-[140px]">Staff Systems Designer @ Figma Comm.</p>
                    <span className="inline-block mt-1 px-2 py-0.5 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold">
                      Design Systems
                    </span>
                  </div>
                </div>

              </div>

              {/* Right 5 cols: AI Match Affinity Card */}
              <div className="lg:col-span-5 bg-[#f0f3ff] rounded-2xl p-4 sm:p-5 border border-indigo-100 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#302ae6]">
                      <Sparkles className="w-3.5 h-3.5 text-[#302ae6]" />
                      <span>AI Match Affinity</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-extrabold">
                      98.2% Affinity
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed font-normal mb-3">
                    Sarah seeks systematic multi-brand design tokens; Mateo requires high-throughput React server component auditing. Ideal reciprocal peer pairing.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-indigo-100/80">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-700">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Instant Escrow Guarantee</span>
                  </span>
                  <Link
                    to="/signup"
                    className="px-3.5 py-1.5 bg-[#302ae6] hover:bg-[#2520c0] active:scale-95 text-white text-xs font-bold rounded-xl shadow-sm transition"
                  >
                    View AI Synergy Graph
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. HOW SKILLORA WORKS (3 STEPS) */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#3b28cc] mb-2">
            SIMPLE & FRICTIONLESS
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            How Skillora Works in 3 Steps
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-xl mx-auto leading-relaxed">
            The collaborative knowledge economy: replace high tuition fees with genuine peer-to-peer reciprocity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Step 01 */}
          <div className="bg-white rounded-3xl p-7 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between transition-all hover:shadow-2xl hover:border-indigo-100">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-2xl bg-[#eff2fe] flex items-center justify-center text-[#3b28cc]">
                  <Sparkles className="w-5 h-5 fill-current" />
                </div>
                <span className="text-sm font-bold text-slate-300">01</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">List Your Craft</h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-6 font-normal">
                Share what you excel at—from UI design to cloud DevOps. Detail your availability, experience, and hourly credit rate or reciprocal barter goals.
              </p>
            </div>
            <div className="bg-[#f4f6fc] rounded-2xl p-3 border border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700">
              <span className="w-4 h-4 rounded-full bg-amber-500 text-white flex items-center justify-center text-[9px] font-bold flex-shrink-0">
                ⚡
              </span>
              <span className="text-[11px] sm:text-xs">Earn +20 to +50 credits per 45-min session</span>
            </div>
          </div>

          {/* Step 02 */}
          <div className="bg-white rounded-3xl p-7 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between transition-all hover:shadow-2xl hover:border-purple-100">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-2xl bg-[#f3edff] flex items-center justify-center text-[#7c3aed]">
                  {/* Asterisk / 6-pointed star */}
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2a1 1 0 0 1 1 1v7.268l6.294-3.634a1 1 0 1 1 1 1.732L14 12l6.294 3.634a1 1 0 1 1-1 1.732L13 13.732V21a1 1 0 1 1-2 0v-7.268l-6.294 3.634a1 1 0 1 1-1-1.732L10 12 3.706 8.366a1 1 0 1 1 1-1.732L11 10.268V3a1 1 0 0 1 1-1z"/>
                  </svg>
                </div>
                <span className="text-sm font-bold text-slate-300">02</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">AI Synthesizes Your Match</h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-6 font-normal">
                Our smart compatibility engine correlates your learning targets with qualified peers, pairing mutual needs for direct zero-cost bilateral swaps.
              </p>
            </div>
            <div className="bg-[#f4f6fc] rounded-2xl p-3 border border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700">
              <span className="text-[#3b28cc] text-sm flex-shrink-0">✦</span>
              <span className="text-[11px] sm:text-xs">Intelligent multi-variable vector pairing</span>
            </div>
          </div>

          {/* Step 03 */}
          <div className="bg-white rounded-3xl p-7 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between transition-all hover:shadow-2xl hover:border-emerald-100">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-2xl bg-[#ebfbf3] flex items-center justify-center text-[#059669]">
                  <ShieldCheck className="w-5 h-5 text-[#059669]" />
                </div>
                <span className="text-sm font-bold text-slate-300">03</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Exchange & Escrow</h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-6 font-normal">
                Meet via integrated live video, share code or canvas in real-time, and settle verified credits automatically with our escrow guarantee.
              </p>
            </div>
            <div className="bg-[#f4f6fc] rounded-2xl p-3 border border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span className="text-[11px] sm:text-xs">Built-in live video & instant escrow release</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. FEATURED SKILL CATEGORIES */}
      <section id="explore" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Marketplace
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Featured Skill Categories
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Browse top trending crafts and find immediate exchange partners.
            </p>
          </div>
          <Link
            to="/signup"
            className="text-sm font-bold text-[#302ae6] hover:underline inline-flex items-center gap-1"
          >
            <span>Explore all 50+ skills</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                onClick={() => navigate(`/signup?category=${cat.id}`)}
                className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-100 hover:-translate-y-1 transition duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${cat.color} border flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">{cat.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4">
                    {cat.desc}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs font-semibold">
                  <span className="text-slate-400">{cat.count}</span>
                  <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                    1 Hr = 1 Credit
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. STATS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-xl shadow-slate-200/50">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            
            <div className="pt-4 sm:pt-0">
              <h3 className="text-3xl sm:text-5xl font-extrabold text-[#302ae6] tracking-tight">
                120k+
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-2 uppercase tracking-wider">
                Hours Exchanged
              </p>
            </div>

            <div className="pt-4 sm:pt-0 sm:pl-8">
              <h3 className="text-3xl sm:text-5xl font-extrabold text-indigo-600 tracking-tight">
                45k+
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-2 uppercase tracking-wider">
                Active Peers
              </p>
            </div>

            <div className="pt-4 sm:pt-0 sm:pl-8">
              <h3 className="text-3xl sm:text-5xl font-extrabold text-emerald-600 tracking-tight">
                98.4%
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-2 uppercase tracking-wider">
                Match Satisfaction
              </p>
            </div>

            <div className="pt-4 sm:pt-0 sm:pl-8">
              <h3 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                $0
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-2 uppercase tracking-wider">
                Spent on Tuition
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION */}
      <section id="stories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            Verified Testimonials
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Real Exchanges, Real Growth
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Read stories from members who accelerated their careers with Skillora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-7 border border-slate-100 shadow-xl shadow-slate-200/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center text-amber-500 mb-4">
                  {'★'.repeat(t.rating)}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed mb-6">
                  “{t.quote}”
                </p>
                <div className="inline-block px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-[11px] font-semibold mb-5">
                  {t.badge}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h5 className="text-xs font-bold text-slate-900">{t.name}</h5>
                  <p className="text-[11px] text-slate-400">{t.hours}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="rounded-3xl p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden bg-gradient-to-r from-[#2c22d4] via-[#3b2ecc] to-[#4338ca]">
          
          {/* Ambient lighting orb */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-amber-300 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" />
              <span>New user bonus: claim 50 free credits upon signup!</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Ready to unlock unlimited peer learning?
            </h2>

            <p className="text-sm sm:text-base text-indigo-100 mb-8 max-w-xl mx-auto leading-relaxed">
              Join 45,000+ engineers, designers, and creators trading skills today. Zero fiat involved, pure reciprocal knowledge.
            </p>

            {/* Email form */}
            <form onSubmit={handleCtaSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                value={ctaEmail}
                onChange={(e) => setCtaEmail(e.target.value)}
                className="flex-1 px-5 py-3.5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-indigo-200 text-sm focus:outline-none focus:ring-2 focus:ring-white/40 backdrop-blur-md"
              />
              <button
                type="submit"
                className="px-7 py-3.5 bg-amber-400 hover:bg-amber-300 active:scale-95 text-slate-950 font-bold text-sm rounded-2xl shadow-lg transition duration-150 flex items-center justify-center gap-1.5 flex-shrink-0"
              >
                <span>Get 50 Credits</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <p className="text-[11px] text-indigo-200/80 mt-4">
              Free 50 credits granted immediately. No credit card or payments required.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
