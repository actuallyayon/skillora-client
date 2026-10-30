import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Repeat, 
  ShieldCheck, 
  Star, 
  CheckCircle2, 
  SlidersHorizontal,
  Clock, 
  MapPin,
  Calendar,
  MessageSquare,
  User,
  Check,
  X,
  Upload,
  ArrowDownToLine,
  Target,
  GraduationCap,
  Layers,
  Zap,
  ExternalLink,
  ChevronRight,
  Send
} from 'lucide-react';

export default function AiMatchesPage() {
  // Active match selection (default to Elena Vance as in screenshot)
  const [activePeerId, setActivePeerId] = useState('elena');
  
  // Modals state
  const [proposeModalOpen, setProposeModalOpen] = useState(false);
  const [messageModalOpen, setMessageModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [sessionConfirmed, setSessionConfirmed] = useState(false);

  // Form states
  const [selectedSlot, setSelectedSlot] = useState('Fri, Nov 6 • 18:00 UTC (Mutual Favorite)');
  const [sessionNote, setSessionNote] = useState('Excited for our mutual exchange! I will prepare the Figma Token repository beforehand.');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'elena', time: '14:20', text: 'Hey Alex! I saw our AI match index is 94%. Your Figma design systems work is exactly what our team needs.' },
    { sender: 'you', time: '14:24', text: 'Hi Elena! Perfect timing—I’ve been building a project in Next.js 15 and would love your guidance on server actions and cache tags.' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  // Available Matches data
  const matchesData = {
    elena: {
      id: 'elena',
      name: 'Elena Vance',
      verified: true,
      role: 'Staff Frontend Engineer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
      rating: 5.0,
      exchanges: 64,
      online: true,
      matchIndex: 94,
      location: 'Berlin (CET, UTC+1)',
      availability: 'Mutual slot available Fri',
      youOffer: ['Figma Systems', 'Design Tokens', 'UX Reviews'],
      yourPriority: ['Fullstack Next.js', 'Python APIs'],
      peerOffers: ['Next.js 15', 'React 19', 'TypeScript'],
      peerSeeks: ['Figma Component Variants', 'Design Systems'],
      whyMatch: "Alex has 6+ years building design systems at enterprise scale. Elena is a staff engineer seeking to upgrade her team's component workflow. Elena offers production-grade Next.js 15 mentoring, exactly matching Alex's top learning priority.",
      speedMultiplier: '3.2x Accelerated Mastery',
      timeSynthesized: '4m ago',
      teachesShort: 'Next.js',
      learnsShort: 'Figma',
      agenda: [
        {
          num: '01',
          time: '25 MIN',
          lead: 'Elena Leads',
          leadType: 'elena',
          title: 'App Router & Server Actions',
          desc: "Live code walkthrough configuring Next.js 15 asynchronous server components and typed data-fetching pipes tailored to Alex's portfolio app.",
          target: 'Working local API route'
        },
        {
          num: '02',
          time: '25 MIN',
          lead: 'Alex Leads',
          leadType: 'alex',
          title: 'Figma Token Architecture',
          desc: "Live critique and restructuring of Elena's design library variants, nested component properties, and semantic alias naming tokens.",
          target: 'Production-ready button matrix'
        },
        {
          num: '03',
          time: '10 MIN',
          lead: 'Mutual',
          leadType: 'mutual',
          title: 'Code • Canvas Alignment Sync',
          desc: "Inspect automated synchronization strategies between Figma Tokens via GitHub Action webhooks into Elena's Tailwind configuration.",
          target: 'Set next weekly recurrence'
        }
      ]
    },
    dev: {
      id: 'dev',
      name: 'Dev Patel',
      verified: true,
      role: 'Lead AI Systems Architect',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
      rating: 4.8,
      exchanges: 31,
      online: true,
      matchIndex: 91,
      location: 'San Francisco (PST, UTC-8)',
      availability: 'Mutual slot available Sat',
      youOffer: ['UX Workflows', 'Design Tokens'],
      yourPriority: ['LangChain Agents', 'Python APIs'],
      peerOffers: ['LangChain & LLMs', 'Vector DBs', 'Python'],
      peerSeeks: ['AI Product Design', 'Clean UI'],
      whyMatch: "Dev specializes in multi-agent LangChain architectures and wants clean UI/UX heuristics for enterprise AI interfaces. Alex gains deep insights into production LLM evaluation.",
      speedMultiplier: '2.8x Accelerated Mastery',
      timeSynthesized: '12m ago',
      teachesShort: 'LangChain',
      learnsShort: 'UI Design',
      agenda: [
        {
          num: '01',
          time: '25 MIN',
          lead: 'Dev Leads',
          leadType: 'elena',
          title: 'Agentic Routing & Vector Pipelines',
          desc: 'Hands-on setup of memory-augmented agent workflows with real-time vector embeddings and error fallbacks.',
          target: 'Working agent prototype'
        },
        {
          num: '02',
          time: '25 MIN',
          lead: 'Alex Leads',
          leadType: 'alex',
          title: 'AI Human-in-the-Loop UX',
          desc: 'Design heuristics and interaction models for generative AI latency, confidence scoring, and fallback states.',
          target: 'AI chat prototype layout'
        },
        {
          num: '03',
          time: '10 MIN',
          lead: 'Mutual',
          leadType: 'mutual',
          title: 'Roadmap & Next Steps',
          desc: 'Establish benchmark datasets and verify reciprocal escrow credits for follow-up testing.',
          target: 'Scheduled session 2'
        }
      ]
    }
  };

  const activePeer = matchesData[activePeerId] || matchesData.elena;

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setChatMessages([...chatMessages, { sender: 'you', time: 'Just now', text: newMessage }]);
    setNewMessage('');
  };

  const handleConfirmSession = (e) => {
    e.preventDefault();
    setSessionConfirmed(true);
    setTimeout(() => {
      setSessionConfirmed(false);
      setProposeModalOpen(false);
    }, 2000);
  };

  return (
    <div className="bg-[#f6f8fc] min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-6">
        
        {/* 1. HERO TOP BANNER (Matching dark futuristic banner) */}
        <div className="relative rounded-3xl p-6 sm:p-7 overflow-hidden shadow-xl bg-gradient-to-r from-[#111628] via-[#1a213e] to-[#12172b] border border-white/10 text-white">
          {/* Ambient lighting backdrop */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-10 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
            {/* Left Engine info & Heading */}
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#4f3ff0] to-[#7f5af0] text-white flex items-center justify-center shadow-lg shadow-indigo-600/30 flex-shrink-0">
                <Sparkles className="w-6 h-6 text-white" />
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-slate-300 uppercase mb-1">
                  <span>SKILLORA ENGINE V2.4</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-emerald-400 font-semibold normal-case">Active Algorithmic Link</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight">
                  Mutual Exchange Opportunity Detected
                </h1>
              </div>
            </div>

            {/* Right pill button & controls */}
            <div className="flex items-center gap-2 self-start md:self-auto">
              {/* Bilateral Trade toggle / indicator */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-bold backdrop-blur-md transition select-none">
                <Repeat className="w-4 h-4 text-indigo-300" />
                <span>Bilateral Direct Trade</span>
              </div>

              {/* Match Switcher Dropdown / Filter button */}
              <button
                onClick={() => setActivePeerId(activePeerId === 'elena' ? 'dev' : 'elena')}
                title="Switch detected match"
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white transition flex items-center gap-1.5 text-xs font-bold"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span className="hidden sm:inline">Switch ({activePeerId === 'elena' ? 'Dev Patel' : 'Elena Vance'})</span>
              </button>
            </div>
          </div>
        </div>

        {/* 2. CORE THREE-COLUMN COMPARISON SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT COLUMN: YOU (Alex Rivera) - 4 cols */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between relative overflow-hidden">
            {/* Top Purple Accent line */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-indigo-500 to-indigo-600"></div>

            <div className="space-y-5">
              {/* User Header */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80"
                      alt="Alex Rivera"
                      className="w-12 h-12 rounded-2xl object-cover ring-2 ring-slate-100"
                    />
                    <span className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-md bg-[#302ae6] text-white text-[9px] font-extrabold uppercase">
                      YOU
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 leading-snug">Alex Rivera</h3>
                    <p className="text-xs text-slate-500 font-medium">Senior Product Designer</p>
                    <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-700 mt-0.5">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>4.96</span>
                      <span className="text-slate-400 font-normal">(38 exchanges)</span>
                    </div>
                  </div>
                </div>

                <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200/80">
                  Tier 4 Mentor
                </span>
              </div>

              {/* Block 1: YOU OFFER TO ELENA */}
              <div>
                <div className="flex items-center gap-1.5 text-[11px] font-extrabold text-indigo-700 uppercase tracking-wider mb-2">
                  <Upload className="w-3.5 h-3.5 text-indigo-600" />
                  <span>YOU OFFER TO {activePeer.name.split(' ')[0].toUpperCase()}</span>
                </div>
                <div className="bg-[#f6f8fe] p-3 rounded-2xl border border-indigo-100/70 flex flex-wrap gap-2">
                  {activePeer.youOffer.map((item, idx) => (
                    <span 
                      key={idx} 
                      className="bg-white text-slate-800 text-xs font-semibold px-3 py-1 rounded-xl border border-indigo-100 shadow-2xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Block 2: YOUR LEARNING PRIORITY */}
              <div>
                <div className="flex items-center gap-1.5 text-[11px] font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                  <ArrowDownToLine className="w-3.5 h-3.5 text-slate-600" />
                  <span>YOUR LEARNING PRIORITY</span>
                </div>
                <div className="bg-[#f8f9fc] p-3 rounded-2xl border border-slate-200/60 flex flex-wrap gap-2">
                  {activePeer.yourPriority.map((item, idx) => (
                    <span 
                      key={idx} 
                      className={`${
                        idx === 0 
                          ? 'bg-[#302ae6] text-white font-bold' 
                          : 'bg-white text-slate-800 font-semibold border border-slate-200'
                      } text-xs px-3 py-1 rounded-xl shadow-2xs`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer / Availability */}
            <div className="bg-slate-50 mt-5 p-3 rounded-2xl border border-slate-200/60 flex items-center justify-between text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>Mon & Thu Evenings UTC</span>
              </div>
              <span className="font-extrabold text-slate-900">60 min slot</span>
            </div>
          </div>

          {/* CENTER COLUMN: MATCH INDEX & WHY THIS WORKS - 4 cols */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between text-center relative">
            <div>
              {/* Circular Gauge / Match Index */}
              <div className="relative w-36 h-36 mx-auto my-2 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                  {/* Background track circle */}
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="transparent"
                    stroke="#e8ecf8"
                    strokeWidth="8"
                  />
                  {/* Progress stroke */}
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="transparent"
                    stroke="#3b28cc"
                    strokeWidth="8"
                    strokeDasharray={2 * Math.PI * 50}
                    strokeDashoffset={2 * Math.PI * 50 * (1 - activePeer.matchIndex / 100)}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center select-none">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-black text-slate-900 tracking-tight">
                      {activePeer.matchIndex}
                    </span>
                    <span className="text-lg font-bold text-slate-600">%</span>
                  </div>
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400 -mt-1">
                    MATCH INDEX
                  </span>
                </div>
              </div>

              {/* Bilateral Reciprocity Pill */}
              <div className="inline-flex items-center justify-center gap-2 bg-[#f0f3ff] px-4 py-1.5 rounded-full border border-indigo-100 text-xs font-semibold text-slate-700 mx-auto mt-1 mb-3">
                <span className="text-indigo-800 font-bold">You teach {activePeer.learnsShort}</span>
                <div className="w-5 h-5 rounded-full bg-[#302ae6] text-white flex items-center justify-center shadow-xs">
                  <Repeat className="w-3 h-3" />
                </div>
                <span className="text-indigo-800 font-bold">{activePeer.name.split(' ')[0]} teaches {activePeer.teachesShort}</span>
              </div>

              {/* Zero-Credit Direct Barter Banner */}
              <div className="bg-[#fffbeb] border border-[#fef08a] text-[#b45309] rounded-2xl py-2 px-3 text-xs font-bold flex items-center justify-center gap-1.5 shadow-2xs mb-4">
                <Zap className="w-3.5 h-3.5 fill-[#d97706] text-[#d97706]" />
                <span>Zero-Credit Direct Barter (1 hr : 1 hr parity)</span>
              </div>

              {/* Why this match works box */}
              <div className="bg-[#f9faff] rounded-2xl p-4 border border-indigo-100/70 text-left space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-800">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Why this match works</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {activePeer.whyMatch}
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-indigo-100/50 text-[10px]">
                  <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 font-bold">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>{activePeer.speedMultiplier}</span>
                  </span>
                  <span className="text-slate-400 font-medium">Synthesized {activePeer.timeSynthesized}</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: PEER (Elena Vance) - 4 cols */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between relative overflow-hidden">
            {/* Top Green Accent line */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500"></div>

            <div className="space-y-5">
              {/* Peer Header */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img 
                      src={activePeer.avatar}
                      alt={activePeer.name}
                      className="w-12 h-12 rounded-2xl object-cover ring-2 ring-slate-100"
                    />
                    <span className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-md bg-emerald-600 text-white text-[9px] font-extrabold uppercase">
                      PEER
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-base font-extrabold text-slate-900 leading-snug">{activePeer.name}</h3>
                      <span className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px] font-bold" title="Verified Mentor">
                        ✓
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium">{activePeer.role}</p>
                    <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-700 mt-0.5">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{activePeer.rating}</span>
                      <span className="text-slate-400 font-normal">({activePeer.exchanges} exchanges)</span>
                    </div>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>Online</span>
                </span>
              </div>

              {/* Block 1: ELENA OFFERS YOU */}
              <div>
                <div className="flex items-center gap-1.5 text-[11px] font-extrabold text-emerald-700 uppercase tracking-wider mb-2">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{activePeer.name.split(' ')[0].toUpperCase()} OFFERS YOU</span>
                </div>
                <div className="bg-[#f0fbf6] p-3 rounded-2xl border border-emerald-100/70 flex flex-wrap gap-2">
                  {activePeer.peerOffers.map((item, idx) => (
                    <span 
                      key={idx} 
                      className="bg-white text-slate-800 text-xs font-semibold px-3 py-1 rounded-xl border border-emerald-100 shadow-2xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Block 2: ELENA SEEKS */}
              <div>
                <div className="flex items-center gap-1.5 text-[11px] font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                  <Target className="w-3.5 h-3.5 text-slate-600" />
                  <span>{activePeer.name.split(' ')[0].toUpperCase()} SEEKS</span>
                </div>
                <div className="bg-[#f8f9fc] p-3 rounded-2xl border border-slate-200/60 flex flex-wrap gap-2">
                  {activePeer.peerSeeks.map((item, idx) => (
                    <span 
                      key={idx} 
                      className="bg-white text-slate-800 text-xs font-semibold px-3 py-1 rounded-xl border border-slate-200 shadow-2xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer / Availability */}
            <div className="bg-slate-50 mt-5 p-3 rounded-2xl border border-slate-200/60 flex items-center justify-between text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{activePeer.location}</span>
              </div>
              <span className="font-extrabold text-emerald-700">{activePeer.availability}</span>
            </div>
          </div>

        </div>

        {/* 3. ESCROW STATUS & ACTIONS BAR */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          {/* Left: Escrow badge & guarantee */}
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#eefaf4] text-emerald-600 flex items-center justify-center border border-emerald-100 flex-shrink-0">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-slate-900 leading-snug">
                Guaranteed Reciprocal Escrow Protection
              </h4>
              <p className="text-xs text-slate-500 font-normal">
                No credits debited. Mutual satisfaction verified upon completion.
              </p>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
            <button
              onClick={() => setProfileModalOpen(true)}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-2xs"
            >
              <User className="w-3.5 h-3.5 text-slate-500" />
              <span>View Profile</span>
            </button>

            <button
              onClick={() => setMessageModalOpen(true)}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-2xs"
            >
              <MessageSquare className="w-3.5 h-3.5 text-slate-500" />
              <span>Message {activePeer.name.split(' ')[0]}</span>
            </button>

            <button
              onClick={() => setProposeModalOpen(true)}
              className="w-full sm:w-auto px-6 py-2.5 bg-[#3424d6] hover:bg-[#281bbb] active:scale-95 text-white text-xs font-bold rounded-xl shadow-md shadow-indigo-600/25 transition flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Accept Match & Propose Session</span>
            </button>
          </div>
        </div>

        {/* 4. RECOMMENDED BILATERAL AGENDA (AI SYNTHESIZED) */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#302ae6]" />
                <h3 className="text-base font-extrabold text-slate-900 tracking-tight">
                  Recommended Bilateral Agenda
                </h3>
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-200">
                  AI SYNTHESIZED
                </span>
              </div>
              <p className="text-xs text-slate-500 font-normal mt-0.5">
                Custom balanced 60-minute curriculum generated to maximize mutual output in your first session.
              </p>
            </div>

            <div className="text-xs font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-xl border border-indigo-100">
              Split: 30m / 30m
            </div>
          </div>

          {/* Agenda 3 Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {activePeer.agenda.map((mod, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  {/* Module header row */}
                  <div className="flex items-center justify-between mb-2.5">
                    <span className={`text-[10px] font-black uppercase tracking-wider ${
                      idx === 0 ? 'text-indigo-600' : idx === 1 ? 'text-emerald-600' : 'text-amber-600'
                    }`}>
                      MODULE {mod.num} • {mod.time}
                    </span>

                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                      mod.leadType === 'elena'
                        ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                        : mod.leadType === 'alex'
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : 'bg-amber-50 text-amber-700 border-amber-200'
                    }`}>
                      {mod.lead}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-sm font-bold text-slate-900 mb-1.5 leading-snug">
                    {mod.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs text-slate-500 leading-relaxed font-normal mb-4">
                    {mod.desc}
                  </p>
                </div>

                {/* Target milestone */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  {idx === 2 ? (
                    <Zap className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                  ) : (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  )}
                  <span className="text-[11px] truncate">Target: {mod.target}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 5. MODAL: ACCEPT MATCH & PROPOSE SESSION */}
      {proposeModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 relative animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setProposeModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            {sessionConfirmed ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">Session Proposed!</h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  {activePeer.name} has been notified with your preferred slot. Once accepted, calendar invitations and a live video link will be generated.
                </p>
              </div>
            ) : (
              <form onSubmit={handleConfirmSession} className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100">
                    Bilateral Direct Barter
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-2">
                    Propose Session with {activePeer.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Match Index: <strong className="text-indigo-600">{activePeer.matchIndex}%</strong> • Zero-credit direct bilateral barter
                  </p>
                </div>

                {/* Selected Slot */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Select Mutual Availability Slot
                  </label>
                  <select
                    value={selectedSlot}
                    onChange={(e) => setSelectedSlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#302ae6]"
                  >
                    <option value="Fri, Nov 6 • 18:00 UTC (Mutual Favorite)">Fri, Nov 6 • 18:00 UTC (Mutual Favorite)</option>
                    <option value="Sat, Nov 7 • 16:00 UTC">Sat, Nov 7 • 16:00 UTC</option>
                    <option value="Mon, Nov 9 • 19:00 UTC">Mon, Nov 9 • 19:00 UTC</option>
                  </select>
                </div>

                {/* Custom Note */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Session Note / Objective
                  </label>
                  <textarea
                    rows={3}
                    value={sessionNote}
                    onChange={(e) => setSessionNote(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#302ae6]"
                  ></textarea>
                </div>

                {/* Escrow banner */}
                <div className="bg-[#f0fbf6] rounded-2xl p-3 border border-emerald-200 flex items-center gap-2.5 text-xs text-emerald-900">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-[11px] leading-relaxed">
                    <strong>Zero-Credit Guarantee:</strong> 1 hour of your mentorship balances 1 hour of {activePeer.name.split(' ')[0]}'s mentorship.
                  </span>
                </div>

                {/* Modal footer */}
                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setProposeModalOpen(false)}
                    className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#302ae6] hover:bg-[#2520c0] text-white text-xs font-bold rounded-xl shadow-md shadow-indigo-600/25 active:scale-95 transition"
                  >
                    Send Invitation
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 6. MODAL: MESSAGE PEER */}
      {messageModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 relative flex flex-col h-[500px]">
            <button
              onClick={() => setMessageModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Chat header */}
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <img 
                src={activePeer.avatar} 
                alt="" 
                className="w-10 h-10 rounded-full object-cover ring-2 ring-indigo-50"
              />
              <div>
                <h4 className="text-sm font-bold text-slate-900">{activePeer.name}</h4>
                <p className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>Active Now • 94% Match</span>
                </p>
              </div>
            </div>

            {/* Chat message thread */}
            <div className="flex-1 overflow-y-auto py-4 space-y-3">
              {chatMessages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex flex-col ${msg.sender === 'you' ? 'items-end' : 'items-start'}`}
                >
                  <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-xs ${
                    msg.sender === 'you' 
                      ? 'bg-[#302ae6] text-white rounded-br-xs' 
                      : 'bg-slate-100 text-slate-800 rounded-bl-xs'
                  }`}>
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 px-1">{msg.time}</span>
                </div>
              ))}
            </div>

            {/* Message input */}
            <form onSubmit={handleSendMessage} className="pt-3 border-t border-slate-100 flex items-center gap-2">
              <input
                type="text"
                placeholder={`Message ${activePeer.name.split(' ')[0]}...`}
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:border-[#302ae6]"
              />
              <button
                type="submit"
                className="p-2.5 bg-[#302ae6] text-white rounded-xl hover:bg-[#2520c0] transition shadow-xs"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 7. MODAL: VIEW PEER FULL PROFILE */}
      {profileModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 relative">
            <button
              onClick={() => setProfileModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center pb-4 border-b border-slate-100">
              <img 
                src={activePeer.avatar} 
                alt="" 
                className="w-20 h-20 rounded-3xl object-cover mx-auto ring-4 ring-indigo-50 shadow-md mb-3"
              />
              <h3 className="text-lg font-extrabold text-slate-900">{activePeer.name}</h3>
              <p className="text-xs text-slate-500">{activePeer.role}</p>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                  ★ {activePeer.rating} ({activePeer.exchanges} sessions)
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Verified Peer
                </span>
              </div>
            </div>

            <div className="py-4 space-y-3 text-xs">
              <div>
                <span className="font-bold text-slate-700 block mb-1">Primary Specialties:</span>
                <div className="flex flex-wrap gap-1.5">
                  {activePeer.peerOffers.map((s, i) => (
                    <span key={i} className="bg-slate-100 text-slate-800 px-2.5 py-1 rounded-lg font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-bold text-slate-700 block mb-1">Location & Zone:</span>
                <p className="text-slate-600">{activePeer.location}</p>
              </div>

              <div>
                <span className="font-bold text-slate-700 block mb-1">Honor Code Compliance:</span>
                <p className="text-emerald-700 font-medium">100% On-time show-up rate with 0 escrow disputes.</p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
              <button
                onClick={() => {
                  setProfileModalOpen(false);
                  setProposeModalOpen(true);
                }}
                className="w-full py-2.5 bg-[#302ae6] text-white text-xs font-bold rounded-xl hover:bg-[#2520c0] transition"
              >
                Propose Session
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
