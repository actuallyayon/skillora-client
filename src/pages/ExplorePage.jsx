import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  Sparkles, 
  Search, 
  ArrowRight, 
  Repeat, 
  Zap, 
  ShieldCheck, 
  Star, 
  CheckCircle2, 
  Filter, 
  SlidersHorizontal,
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  Globe, 
  Calendar, 
  Clock, 
  X,
  Send,
  HelpCircle,
  Lightbulb,
  Check
} from 'lucide-react';

export default function ExplorePage() {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('search') || '';

  // State for search and filter controls
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  useEffect(() => {
    const q = searchParams.get('search');
    if (q !== null) {
      setSearchQuery(q);
    }
  }, [searchParams]);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [matchTypes, setMatchTypes] = useState({ bilateral: true, creditOnly: false });
  const [expLevels, setExpLevels] = useState({ beginner: false, intermediate: false, advanced: true, lead: false });
  const [maxCredits, setMaxCredits] = useState(50);
  const [minRating, setMinRating] = useState('all'); // 'all', '4.5', '4.8'
  const [availability, setAvailability] = useState({ today: false, weekend: true, frequent: false });
  const [sortBy, setSortBy] = useState('best-match');
  const [locationMode, setLocationMode] = useState('Global (Remote 1:1)');
  const [currentPage, setCurrentPage] = useState(1);

  // Modal state
  const [selectedPeerForTrade, setSelectedPeerForTrade] = useState(null);
  const [wantedModalOpen, setWantedModalOpen] = useState(false);
  const [tradeSuccess, setTradeSuccess] = useState(false);
  const [tradeForm, setTradeForm] = useState({
    myOfferedSkill: 'Fullstack React & Node.js',
    sessionType: '1 Hour (Escrow Protected)',
    message: "Hi! I'd love to exchange skills and do a hands-on session with you."
  });

  const categories = [
    'All Categories',
    'Design & UX',
    'Fullstack Dev',
    'AI & Data',
    'Languages',
    'Business & Growth',
    'Music & Creative'
  ];

  // AI Smart Matches Carousel Data
  const smartMatches = [
    {
      id: 'sm-1',
      name: 'Elena Vance',
      role: 'Staff Frontend Eng & Next.js Alum',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80',
      rating: 4.9,
      reviews: 42,
      matchRate: '95% AI Match',
      badge: 'Direct Swap',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      title: 'Next.js 15 & App Router Systems',
      description: 'Deep-dive architecture review, streaming layouts, and production server-action patterns.',
      teaches: 'Next.js 15',
      wants: 'Figma UI Systems',
      credits: 20
    },
    {
      id: 'sm-2',
      name: 'Dev Patel',
      role: 'Lead AI Systems Architect',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80',
      rating: 4.8,
      reviews: 31,
      matchRate: '91% AI Match',
      badge: 'Skill Escrow',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      title: 'Prompt Eng & LangChain Agents',
      description: 'Production multi-agent routing, structured LLM generation, and memory-augmented autonomous loops.',
      teaches: 'LangChain & LLMs',
      wants: 'AI Product Design',
      credits: 25
    },
    {
      id: 'sm-3',
      name: 'Kenji Sato',
      role: 'Principal Fullstack & Cloud',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&auto=format&fit=crop&q=80',
      rating: 5.0,
      reviews: 55,
      matchRate: '89% AI Match',
      badge: 'Top Mentor',
      badgeColor: 'bg-amber-100/80 text-amber-800 border-amber-300',
      title: 'Conversational Japanese (N2/N1 Prep)',
      description: 'Real-world immersive preparation for engineering interviews, technical fluency, and cross-cultural teams.',
      teaches: 'Japanese N2-N1',
      wants: 'Fullstack Web Dev',
      credits: 15
    }
  ];

  // Primary Skills Grid Data
  const initialSkills = [
    {
      id: 'skill-1',
      mentorName: 'Elena Vance',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80',
      rating: 4.9,
      reviews: 42,
      category: 'Fullstack Dev',
      categoryColor: 'bg-indigo-50 text-indigo-600 border-indigo-100',
      matchScore: '92% Match',
      title: 'Advanced Next.js 15 & Server Actions',
      description: 'Hands-on architecture reviews, server components optimization, and large-scale code-splitting.',
      teaches: 'Next.js 15 Server Actions',
      wants: 'Figma Design Systems',
      availability: 'Weekend',
      rate: 20,
      level: 'advanced'
    },
    {
      id: 'skill-2',
      mentorName: 'Kenji Sato',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&auto=format&fit=crop&q=80',
      rating: 5.0,
      reviews: 55,
      category: 'Languages',
      categoryColor: 'bg-sky-50 text-sky-600 border-sky-100',
      matchScore: '89% Match',
      title: 'Conversational Japanese (N2/N1 Prep)',
      description: 'Real-world immersive Japanese conversation, grammar nuances, and interview preparation for bilingual engineering roles.',
      teaches: 'Japanese Language Mentorship',
      wants: 'Modern Web Dev (Tailwind/CSS)',
      availability: 'Evening / PST',
      rate: 15,
      level: 'intermediate'
    },
    {
      id: 'skill-3',
      mentorName: 'Dev Patel',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80',
      rating: 4.8,
      reviews: 31,
      category: 'AI & Data',
      categoryColor: 'bg-purple-50 text-purple-600 border-purple-100',
      matchScore: '91% Match',
      title: 'Prompt Engineering & LangChain Workflows',
      description: 'Build production-ready agent workflows with LangChain, semantic memory caching, and custom LLM evaluation.',
      teaches: 'Agentic AI Systems Architecture',
      wants: 'UI Design & User Research',
      availability: 'Flexible Timing',
      rate: 25,
      level: 'advanced'
    },
    {
      id: 'skill-4',
      mentorName: 'Claire Chen',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&auto=format&fit=crop&q=80',
      rating: 4.9,
      reviews: 19,
      category: 'Business & Growth',
      categoryColor: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      badge: 'Mentor Vetted',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      title: 'Product Strategy & Pitch Decks for Startups',
      description: 'Validate product positioning, refine pitch decks for venture funding, and design scalable unit economics models.',
      teaches: 'Startup Pitch Deck & Product',
      wants: 'Python Data Scraping',
      availability: 'Flexible / 1:1',
      rate: 30,
      level: 'lead'
    },
    {
      id: 'skill-5',
      mentorName: 'Liam Ross',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=160&auto=format&fit=crop&q=80',
      rating: 4.9,
      reviews: 38,
      category: 'Design & UX',
      categoryColor: 'bg-rose-50 text-rose-600 border-rose-100',
      badge: 'Top Rated',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      title: '3D Modeling & Blender for Product Designers',
      description: 'Master hard-surface modeling, procedural texturing, lighting, and photorealistic 3D asset rendering.',
      teaches: 'Blender 3D & Product Viz',
      wants: 'React Native / Expo',
      availability: 'Weekend / Flexible',
      rate: 18,
      level: 'advanced'
    },
    {
      id: 'skill-6',
      mentorName: 'Maya Lin',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=160&auto=format&fit=crop&q=80',
      rating: 4.8,
      reviews: 27,
      category: 'Business & Growth',
      categoryColor: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      badge: 'High Demand',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      title: 'Growth Marketing & SEO Engine Optimization',
      description: 'Programmatic SEO systems, reverse-engineering competitors, programmatic keywords, and conversion funnels.',
      teaches: 'Growth Marketing & Product SEO',
      wants: 'Video Editing / DaVinci',
      availability: 'Fri / Sat',
      rate: 20,
      level: 'intermediate'
    }
  ];

  // Filtering logic
  const filteredSkills = useMemo(() => {
    return initialSkills.filter((item) => {
      // Category filter
      if (selectedCategory !== 'All Categories' && item.category !== selectedCategory) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.mentorName.toLowerCase().includes(query);
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesTeaches = item.teaches.toLowerCase().includes(query);
        const matchesWants = item.wants.toLowerCase().includes(query);
        if (!matchesName && !matchesTitle && !matchesTeaches && !matchesWants) {
          return false;
        }
      }

      // Max credit filter
      if (item.rate > maxCredits) {
        return false;
      }

      // Rating filter
      if (minRating === '4.5' && item.rating < 4.5) return false;
      if (minRating === '4.8' && item.rating < 4.8) return false;

      return true;
    });
  }, [initialSkills, selectedCategory, searchQuery, maxCredits, minRating]);

  // Reset all filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All Categories');
    setMaxCredits(50);
    setMinRating('all');
    setMatchTypes({ bilateral: true, creditOnly: false });
    setExpLevels({ beginner: false, intermediate: false, advanced: true, lead: false });
    setAvailability({ today: false, weekend: true, frequent: false });
  };

  const openTradeModal = (peer) => {
    setSelectedPeerForTrade(peer);
    setTradeSuccess(false);
  };

  const handleConfirmTrade = (e) => {
    e.preventDefault();
    setTradeSuccess(true);
    setTimeout(() => {
      setSelectedPeerForTrade(null);
      setTradeSuccess(false);
    }, 2000);
  };

  return (
    <div className="bg-[#f6f8fc] min-h-screen pb-20">
      
      {/* 1. TOP HEADER & STATS BAR */}
      <section className="bg-mesh-radial pt-8 pb-6 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              {/* Header Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f0f3ff] border border-indigo-200/80 text-[#302ae6] text-xs font-bold tracking-wide mb-3 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#302ae6]" />
                <span>Decentralized Knowledge Exchange</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900 leading-tight">
                Explore Peer Skills & Mentors
              </h1>

              {/* Subtitle */}
              <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl font-normal leading-relaxed">
                Trade real-world engineering, design, and growth expertise. Filter or unlock vetted strands using peer-verified credits.
              </p>
            </div>

            {/* Right-Side Stats Card Badge */}
            <div className="flex items-center bg-white rounded-2xl px-5 py-3 border border-slate-200/80 shadow-sm divide-x divide-slate-100 flex-shrink-0 self-start md:self-auto">
              <div className="pr-4 text-left">
                <div className="text-lg sm:text-xl font-extrabold text-[#302ae6] tracking-tight">1,420</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">ACTIVE PEERS</div>
              </div>
              <div className="pl-4 text-left">
                <div className="text-lg sm:text-xl font-extrabold text-amber-500 tracking-tight">98.4%</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">TRUST SUCCESS</div>
              </div>
            </div>
          </div>

          {/* Search Bar Container */}
          <div className="mt-6">
            <div className="bg-white p-2 rounded-2xl sm:rounded-3xl shadow-lg shadow-indigo-500/5 border border-slate-200 flex flex-col md:flex-row items-center gap-2">
              
              {/* Search text input */}
              <div className="flex-1 w-full flex items-center gap-3 px-3 py-2 text-left">
                <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search by topic, framework, mentor (e.g., Next.js 15, Figma, LangChain)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="p-1 hover:bg-slate-100 rounded-lg text-slate-400"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
                <SlidersHorizontal className="w-4 h-4 text-slate-400 hidden sm:block flex-shrink-0 cursor-pointer hover:text-slate-700" />
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-8 bg-slate-200"></div>

              {/* Mode / Location Pill Dropdown */}
              <div className="w-full md:w-auto flex items-center justify-between gap-2 px-3 py-2 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold cursor-pointer transition flex-shrink-0">
                <div className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-amber-600" />
                  <span>{locationMode}</span>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </div>

              {/* Find Exchanges Blue Button */}
              <button
                type="button"
                onClick={() => {}}
                className="w-full md:w-auto px-6 py-2.5 sm:py-3 bg-[#302ae6] hover:bg-[#2520c0] active:scale-98 text-white text-xs sm:text-sm font-bold rounded-xl sm:rounded-2xl shadow-md shadow-indigo-600/25 flex items-center justify-center gap-2 transition flex-shrink-0"
              >
                <span>Find Exchanges</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Category Pills Row */}
          <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    isActive 
                      ? 'bg-[#2520c0] text-white shadow-sm ring-2 ring-indigo-600/20' 
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* 2. AI SMART MATCHES HORIZONTAL CAROUSEL SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-gradient-to-r from-[#f0f3ff] via-[#f7f8ff] to-[#f5f0ff] rounded-3xl p-5 sm:p-6 border border-indigo-100 shadow-sm">
          
          {/* Header Row */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#302ae6] text-white flex items-center justify-center shadow-md shadow-indigo-500/20">
                <Sparkles className="w-5 h-5 text-indigo-100" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-base font-extrabold text-slate-900 tracking-tight">
                    AI Smart Matches for You
                  </h2>
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200 uppercase tracking-wide">
                    MUTUAL MATCH
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-normal">
                  Pre-solved bilateral agreements matching your wanted skill:{' '}
                  <span className="font-semibold text-indigo-700">Fullstack React & Next.js</span>
                </p>
              </div>
            </div>

            {/* Arrows */}
            <div className="hidden sm:flex items-center gap-1.5">
              <button 
                title="Previous"
                className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-slate-900 shadow-2xs transition"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                title="Next"
                className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-slate-900 shadow-2xs transition"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Smart Match Cards Grid (3 cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {smartMatches.map((sm) => (
              <div 
                key={sm.id} 
                className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-xs hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      {sm.matchRate}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${sm.badgeColor}`}>
                      {sm.badge}
                    </span>
                  </div>

                  {/* Mentor Info */}
                  <div className="flex items-center gap-3 mb-3">
                    <img 
                      src={sm.avatar} 
                      alt={sm.name} 
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-indigo-50"
                    />
                    <div>
                      <h3 className="text-xs font-bold text-slate-900">{sm.name}</h3>
                      <p className="text-[11px] text-slate-500 line-clamp-1">{sm.role}</p>
                      <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-700 mt-0.5">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span>{sm.rating}</span>
                        <span className="text-slate-400 font-normal">({sm.reviews} exchanges)</span>
                      </div>
                    </div>
                  </div>

                  {/* Heading & description */}
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug mb-1">
                    {sm.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed mb-4 line-clamp-2">
                    {sm.description}
                  </p>

                  {/* Exchange comparison boxes */}
                  <div className="bg-[#f7f8fc] rounded-xl p-2.5 border border-slate-100 flex items-center justify-between gap-1 mb-4 text-[11px]">
                    <div className="flex-1 text-center">
                      <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">TEACHES</div>
                      <div className="font-bold text-indigo-700 truncate mt-0.5">{sm.teaches}</div>
                    </div>
                    
                    <div className="w-6 h-6 rounded-full bg-white shadow-xs border border-indigo-100 flex items-center justify-center text-[#302ae6] flex-shrink-0">
                      <Repeat className="w-3 h-3" />
                    </div>

                    <div className="flex-1 text-center">
                      <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">WANTS</div>
                      <div className="font-bold text-purple-700 truncate mt-0.5">{sm.wants}</div>
                    </div>
                  </div>
                </div>

                {/* Footer price & action */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-1 text-xs font-bold text-slate-800">
                    <Zap className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>{sm.credits} credits</span>
                  </div>
                  <button
                    onClick={() => openTradeModal({
                      mentorName: sm.name,
                      title: sm.title,
                      teaches: sm.teaches,
                      wants: sm.wants,
                      rate: sm.credits,
                      avatar: sm.avatar,
                      rating: sm.rating
                    })}
                    className="px-3 py-1.5 bg-[#302ae6] hover:bg-[#2520c0] active:scale-95 text-white text-xs font-bold rounded-lg shadow-sm shadow-indigo-600/20 transition"
                  >
                    Propose Trade
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. MAIN BODY: FILTERS SIDEBAR + 2-COLUMN SKILLS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDEBAR FILTERS (4 cols) */}
          <aside className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-200/70 shadow-sm space-y-6">
            
            {/* Filter Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#302ae6]" />
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900">
                  Filters
                </h3>
              </div>
              <button
                onClick={handleResetFilters}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition"
              >
                Reset
              </button>
            </div>

            {/* Filter Group: MATCH TYPE */}
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2.5">
                MATCH TYPE
              </label>
              <div className="space-y-2 text-xs font-medium text-slate-700">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={matchTypes.bilateral}
                    onChange={(e) => setMatchTypes({ ...matchTypes, bilateral: e.target.checked })}
                    className="w-4 h-4 rounded text-[#302ae6] focus:ring-indigo-500 border-slate-300"
                  />
                  <span>Direct bilateral swap (24)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={matchTypes.creditOnly}
                    onChange={(e) => setMatchTypes({ ...matchTypes, creditOnly: e.target.checked })}
                    className="w-4 h-4 rounded text-[#302ae6] focus:ring-indigo-500 border-slate-300"
                  />
                  <span>Credits-only exchange</span>
                </label>
              </div>
            </div>

            {/* Filter Group: EXPERIENCE LEVEL */}
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2.5">
                EXPERIENCE LEVEL
              </label>
              <div className="space-y-2 text-xs font-medium text-slate-700">
                <label className="flex items-center justify-between cursor-pointer select-none">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={expLevels.beginner}
                      onChange={(e) => setExpLevels({ ...expLevels, beginner: e.target.checked })}
                      className="w-4 h-4 rounded text-[#302ae6] border-slate-300"
                    />
                    <span>Beginner</span>
                  </div>
                  <span className="text-slate-400 text-[11px]">4</span>
                </label>
                <label className="flex items-center justify-between cursor-pointer select-none">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={expLevels.intermediate}
                      onChange={(e) => setExpLevels({ ...expLevels, intermediate: e.target.checked })}
                      className="w-4 h-4 rounded text-[#302ae6] border-slate-300"
                    />
                    <span>Intermediate</span>
                  </div>
                  <span className="text-slate-400 text-[11px]">62</span>
                </label>
                <label className="flex items-center justify-between cursor-pointer select-none">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={expLevels.advanced}
                      onChange={(e) => setExpLevels({ ...expLevels, advanced: e.target.checked })}
                      className="w-4 h-4 rounded text-[#302ae6] border-slate-300"
                    />
                    <span className="font-bold text-slate-900">Advanced</span>
                  </div>
                  <span className="text-slate-500 font-bold text-[11px]">142</span>
                </label>
                <label className="flex items-center justify-between cursor-pointer select-none">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={expLevels.lead}
                      onChange={(e) => setExpLevels({ ...expLevels, lead: e.target.checked })}
                      className="w-4 h-4 rounded text-[#302ae6] border-slate-300"
                    />
                    <span>Lead & Staff</span>
                  </div>
                  <span className="text-slate-400 text-[11px]">40</span>
                </label>
              </div>
            </div>

            {/* Filter Group: CREDIT RANGE */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                  CREDIT RANGE
                </label>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                  <Zap className="w-3 h-3 fill-amber-500 text-amber-500" />
                  <span>10 - {maxCredits} cr</span>
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="60"
                step="5"
                value={maxCredits}
                onChange={(e) => setMaxCredits(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#302ae6]"
              />
              <div className="flex items-center justify-between text-[11px] text-slate-400 mt-1">
                <span>0 credits</span>
                <span>60 credits</span>
              </div>
            </div>

            {/* Filter Group: MINIMUM RATING */}
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2.5">
                MINIMUM RATING
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setMinRating(minRating === '4.5' ? 'all' : '4.5')}
                  className={`py-1.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1 transition ${
                    minRating === '4.5'
                      ? 'bg-amber-50 border-amber-300 text-amber-800 shadow-2xs'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>4.5+</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMinRating(minRating === '4.8' ? 'all' : '4.8')}
                  className={`py-1.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1 transition ${
                    minRating === '4.8'
                      ? 'bg-amber-50 border-amber-300 text-amber-800 shadow-2xs'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>4.8</span>
                </button>
              </div>
            </div>

            {/* Filter Group: AVAILABILITY */}
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2.5">
                AVAILABILITY
              </label>
              <div className="space-y-2 text-xs font-medium text-slate-700">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={availability.today}
                    onChange={(e) => setAvailability({ ...availability, today: e.target.checked })}
                    className="w-4 h-4 rounded text-[#302ae6] border-slate-300"
                  />
                  <span>Available Today</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={availability.weekend}
                    onChange={(e) => setAvailability({ ...availability, weekend: e.target.checked })}
                    className="w-4 h-4 rounded text-[#302ae6] border-slate-300"
                  />
                  <span>Weekend</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={availability.frequent}
                    onChange={(e) => setAvailability({ ...availability, frequent: e.target.checked })}
                    className="w-4 h-4 rounded text-[#302ae6] border-slate-300"
                  />
                  <span>2x+/Week Frequently</span>
                </label>
              </div>
            </div>

            {/* Escrow Protocol Guarantee Box */}
            <div className="bg-[#f0f9f5] rounded-2xl p-4 border border-emerald-200/80">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-900 mb-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Escrow Protocol</span>
              </div>
              <p className="text-[11px] text-emerald-800 leading-relaxed font-normal">
                Credits are only deducted once both peers confirm session completion.
              </p>
            </div>

          </aside>

          {/* RIGHT COLUMN: SKILLS GRID & PAGINATION (8 cols) */}
          <main className="lg:col-span-8 space-y-6">
            
            {/* Header info bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-base sm:text-lg font-extrabold text-slate-900">
                  <span className="text-[#302ae6]">248 Skills</span> available for exchange
                </h2>
                <p className="text-xs text-slate-500 font-normal">
                  Showing high-affinity verified peer mentors
                </p>
              </div>

              {/* Sort by dropdown */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-slate-500">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-800 focus:outline-none focus:border-indigo-500 shadow-2xs cursor-pointer"
                >
                  <option value="best-match">Best AI Match</option>
                  <option value="highest-rated">Highest Rated</option>
                  <option value="lowest-credits">Lowest Credits</option>
                  <option value="most-active">Most Active</option>
                </select>
              </div>
            </div>

            {/* Grid of Skill Cards (2 Columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-indigo-100 transition duration-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Tags */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${skill.categoryColor}`}>
                        {skill.category}
                      </span>
                      {skill.matchScore ? (
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          {skill.matchScore}
                        </span>
                      ) : (
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${skill.badgeColor}`}>
                          {skill.badge}
                        </span>
                      )}
                    </div>

                    {/* Mentor row */}
                    <div className="flex items-center gap-2.5 mb-3">
                      <img
                        src={skill.avatar}
                        alt={skill.mentorName}
                        className="w-9 h-9 rounded-full object-cover ring-2 ring-slate-100"
                      />
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">{skill.mentorName}</h4>
                        <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-600">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          <span>{skill.rating}</span>
                          <span className="text-slate-400 font-normal">({skill.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-bold text-slate-900 leading-snug mb-1">
                      {skill.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2 font-normal">
                      {skill.description}
                    </p>

                    {/* Exchange Bilateral Capsule */}
                    <div className="bg-[#f8faff] rounded-2xl p-3 border border-indigo-100/70 mb-4 text-[11px]">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Mutual Exchange
                      </div>
                      <div className="font-bold text-slate-800 flex items-center gap-1.5 flex-wrap">
                        <span className="text-indigo-700">{skill.teaches}</span>
                        <Repeat className="w-3 h-3 text-slate-400 flex-shrink-0" />
                        <span className="text-purple-700">{skill.wants}</span>
                      </div>
                      <div className="mt-2 text-[10px] font-semibold text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span>Availability: {skill.availability}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Bar */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-1 text-xs font-bold text-slate-900">
                      <Zap className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      <span>{skill.rate} credits/hr</span>
                    </div>

                    <button
                      onClick={() => openTradeModal(skill)}
                      className="px-4 py-2 rounded-xl border border-slate-200 hover:border-[#302ae6] hover:bg-indigo-50/50 text-[#302ae6] text-xs font-bold transition active:scale-95 shadow-2xs"
                    >
                      Request Trade
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
              <span className="text-xs text-slate-500 font-medium">
                Showing 1 to {filteredSkills.length} of 248 skills
              </span>

              <div className="flex items-center gap-1">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  className="w-8 h-8 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 disabled:opacity-40"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                
                <button
                  onClick={() => setCurrentPage(1)}
                  className={`w-8 h-8 rounded-xl text-xs font-bold ${
                    currentPage === 1 ? 'bg-[#302ae6] text-white shadow-xs' : 'border border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  1
                </button>

                <button
                  onClick={() => setCurrentPage(2)}
                  className={`w-8 h-8 rounded-xl text-xs font-bold ${
                    currentPage === 2 ? 'bg-[#302ae6] text-white shadow-xs' : 'border border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  2
                </button>

                <button
                  onClick={() => setCurrentPage(3)}
                  className={`w-8 h-8 rounded-xl text-xs font-bold ${
                    currentPage === 3 ? 'bg-[#302ae6] text-white shadow-xs' : 'border border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  3
                </button>

                <span className="px-1 text-slate-400 text-xs">...</span>

                <button
                  onClick={() => setCurrentPage(42)}
                  className={`w-8 h-8 rounded-xl text-xs font-bold ${
                    currentPage === 42 ? 'bg-[#302ae6] text-white shadow-xs' : 'border border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  42
                </button>

                <button
                  disabled={currentPage === 42}
                  onClick={() => setCurrentPage(prev => Math.min(42, prev + 1))}
                  className="w-8 h-8 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 disabled:opacity-40"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Wanted Skill Request Bottom Banner */}
            <div className="bg-[#fff9ef] rounded-3xl p-6 border border-[#fae2c8] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-700 flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900">
                    Can't find what you need?
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed font-normal">
                    Post a "Wanted Skill" request. Our AI agent will ping matching peers in the network.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setWantedModalOpen(true)}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#8b5e14] hover:bg-[#724d10] active:scale-95 text-white text-xs font-bold rounded-2xl transition shadow-xs flex-shrink-0 text-center"
              >
                Post a Wanted Request
              </button>
            </div>

          </main>
        </div>
      </section>

      {/* 4. PROPOSE TRADE MODAL */}
      {selectedPeerForTrade && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 relative animate-in fade-in zoom-in-95 duration-150">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedPeerForTrade(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition"
            >
              <X className="w-5 h-5" />
            </button>

            {tradeSuccess ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">Proposal Sent!</h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  {selectedPeerForTrade.mentorName} will be notified immediately. {selectedPeerForTrade.rate} credits are held in trust escrow until session sign-off.
                </p>
              </div>
            ) : (
              <form onSubmit={handleConfirmTrade} className="space-y-4">
                
                {/* Header */}
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100">
                    Bilateral Skill Proposal
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-2">
                    Propose Trade with {selectedPeerForTrade.mentorName}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Topic: {selectedPeerForTrade.title}
                  </p>
                </div>

                {/* Peer summary capsule */}
                <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <img 
                      src={selectedPeerForTrade.avatar} 
                      alt="" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-bold text-slate-900">{selectedPeerForTrade.mentorName}</div>
                      <div className="text-[11px] text-slate-500">Teaches {selectedPeerForTrade.teaches}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                      ⚡ {selectedPeerForTrade.rate} cr / hr
                    </span>
                  </div>
                </div>

                {/* What Skill will you offer in return */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    What skill will you share or teach in return?
                  </label>
                  <input
                    type="text"
                    value={tradeForm.myOfferedSkill}
                    onChange={(e) => setTradeForm({ ...tradeForm, myOfferedSkill: e.target.value })}
                    placeholder="e.g. Fullstack React, UI Design, Rust"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#302ae6]"
                    required
                  />
                </div>

                {/* Session Escrow Duration */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Session & Escrow Commitment
                  </label>
                  <select
                    value={tradeForm.sessionType}
                    onChange={(e) => setTradeForm({ ...tradeForm, sessionType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#302ae6]"
                  >
                    <option value="1 Hour (Escrow Protected)">1 Hour 1:1 Live Swap ({selectedPeerForTrade.rate} Credits Escrow)</option>
                    <option value="Direct Skill Swap (0 Credits, Equal Reciprocity)">Direct Skill-for-Skill Swap (Zero Credits, Bilateral Time)</option>
                    <option value="Async Code & Portfolio Review">Async Project & Code Review (10 Credits Escrow)</option>
                  </select>
                </div>

                {/* Note message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Introduction & Availability note
                  </label>
                  <textarea
                    rows={2}
                    value={tradeForm.message}
                    onChange={(e) => setTradeForm({ ...tradeForm, message: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#302ae6]"
                  ></textarea>
                </div>

                {/* Escrow note */}
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-indigo-50/70 border border-indigo-100 text-[11px] text-indigo-900">
                  <ShieldCheck className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                  <span>
                    Escrow Guaranteed: Credits are only deducted when both peers confirm completion.
                  </span>
                </div>

                {/* Modal Buttons */}
                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedPeerForTrade(null)}
                    className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#302ae6] hover:bg-[#2520c0] text-white text-xs font-bold rounded-xl shadow-md shadow-indigo-600/25 active:scale-95 transition"
                  >
                    Send Trade Proposal
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>
      )}

      {/* 5. WANTED SKILL MODAL */}
      {wantedModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 relative animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setWantedModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                Network Request
              </span>
              <h3 className="text-lg font-extrabold text-slate-900 mt-2">
                Post a Wanted Skill Request
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Our AI matcher will broadcast your request to vetted peers with high topic affinity.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Wanted request posted! Our AI matcher will alert matching mentors.");
                setWantedModalOpen(false);
              }}
              className="space-y-3.5"
            >
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  What skill are you looking for?
                </label>
                <input
                  type="text"
                  placeholder="e.g. WebGL Shaders, Kubernetes Ingress, Figma Token Architectures"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:border-[#302ae6]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  What can you offer in exchange?
                </label>
                <input
                  type="text"
                  placeholder="e.g. Next.js 15, Product Management, or 20 Credits"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:border-[#302ae6]"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setWantedModalOpen(false)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#8b5e14] hover:bg-[#724d10] text-white text-xs font-bold rounded-xl shadow-sm transition"
                >
                  Broadcast Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
