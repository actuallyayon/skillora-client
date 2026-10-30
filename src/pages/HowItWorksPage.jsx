import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Repeat, 
  Zap, 
  ShieldCheck, 
  Lock, 
  Clock, 
  CheckCircle2, 
  Play, 
  ChevronDown, 
  Scale, 
  UserCheck, 
  Video, 
  Coins, 
  Layers, 
  Star, 
  Award, 
  Check, 
  Sliders, 
  DollarSign, 
  Lightbulb, 
  HeartHandshake,
  Users
} from 'lucide-react';

export default function HowItWorksPage() {
  // Interactive Monthly Learning Simulator State
  const [hoursPerWeek, setHoursPerWeek] = useState(2);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  // Video walkthrough modal state
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Calculated values for velocity simulator
  const monthlyCredits = hoursPerWeek * 4;
  const monthlyHours = hoursPerWeek * 4;
  const monthlySavings = monthlyHours * 150; // $150/hr average tech mentorship rate

  const faqs = [
    {
      q: 'How much does Skillora cost?',
      a: 'Skillora is 100% free of subscription fees. When you create an account, you receive 50 welcome credits. You earn 1 credit for every 60 minutes you teach, and spend 1 credit for every 60 minutes you learn. There is never any monthly subscription or gatekeeping.'
    },
    {
      q: 'What happens if a peer does not show up for a session?',
      a: 'Our dual-confirmation smart escrow system protects your time and credits. If a peer fails to arrive within 10 minutes of the scheduled start time, 100% of your escrowed credits are instantly returned to your balance, and the absent peer receives a recorded penalty on their honor score.'
    },
    {
      q: 'Can I exchange skills directly without using credits?',
      a: 'Yes! If you and your peer have reciprocal matching skills (for instance, you teach React and they teach UI Design), our engine facilitates a "Zero-Credit Direct Barter". Both of you spend 1 hour learning from each other simultaneously with zero credits debited.'
    },
    {
      q: 'How are sessions and agendas structured?',
      a: 'Our AI engine analyzes both profiles and generates a custom balanced 60-minute curriculum for your first meeting (typically: 25 min module 1 led by peer A, 25 min module 2 led by peer B, and 10 min alignment & code/canvas sync). You can customize or expand this anytime.'
    }
  ];

  return (
    <div className="bg-[#f6f8fc] min-h-screen pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden bg-mesh-radial border-b border-slate-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f0f3ff] border border-indigo-200/80 text-[#302ae6] text-xs font-bold tracking-wide mb-6 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#302ae6]" />
            <span>HOW SKILLORA WORKS</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-black tracking-tight text-slate-900 leading-[1.15] max-w-4xl mx-auto">
            How Skillora Works:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#302ae6] via-[#6366f1] to-[#8b5cf6]">
              Exchange Knowledge, Not Cash
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Discover a friction-free bilateral knowledge barter ecosystem. Learn from verified practitioners, teach what you love, and earn guaranteed credits with zero cash needed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8">
            <Link
              to="/signup"
              className="px-6 py-3.5 bg-[#302ae6] hover:bg-[#2520c0] active:scale-95 text-white text-xs sm:text-sm font-bold rounded-2xl shadow-lg shadow-indigo-600/25 transition flex items-center gap-2"
            >
              <span>Start Swapping for Free</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => setVideoModalOpen(true)}
              className="px-5 py-3.5 bg-white hover:bg-slate-50 active:scale-95 text-slate-700 text-xs sm:text-sm font-bold rounded-2xl border border-slate-200/80 shadow-2xs transition flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-full bg-indigo-50 text-[#302ae6] flex items-center justify-center">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </div>
              <span>2 Min Product Walkthrough</span>
            </button>
          </div>

          {/* Trust Floating Pills */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-xs font-bold text-slate-700">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-2xl border border-slate-200/70 shadow-2xs">
              <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-2xl border border-slate-200/70 shadow-2xs">
              <Scale className="w-4 h-4 text-indigo-600" />
              <span>1:1 Parity Backing</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-2xl border border-slate-200/70 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Escrow Protected</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. THE 4 STEPS OF KNOWLEDGE EXCHANGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            Step-by-Step Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            The 4 Steps of Knowledge Exchange
          </h2>
          <p className="text-sm text-slate-500 mt-2 font-normal">
            From profile pairing to session completion, here is how our friction-free barter network operates.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Step 1 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-lg transition duration-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-2xl bg-indigo-50 text-[#302ae6] flex items-center justify-center border border-indigo-100/70">
                  <UserCheck className="w-5 h-5" />
                </div>
                <span className="text-sm font-black text-slate-300">01</span>
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2">
                List What You Know & Want
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal mb-6">
                Publish skills you can teach and skills you want to learn. Our vector parser indexes your strengths and goals instantly.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-indigo-700">
              <span className="bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-100">
                Setup in 2 mins
              </span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-lg transition duration-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100/70">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-sm font-black text-slate-300">02</span>
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2">
                AI Finds Your 1:1 Match
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal mb-6">
                Our matching model finds peers with reciprocal needs: they want what you teach, and teach what you want to master.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-700">
              <span className="bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                94%+ Match Affinity
              </span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-lg transition duration-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100/70">
                  <Video className="w-5 h-5" />
                </div>
                <span className="text-sm font-black text-slate-300">03</span>
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2">
                Book & Collaborate Live
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal mb-6">
                Meet via built-in WebRTC video with real-time collaborative code, canvas, and structured 30m/30m split agendas.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700">
              <span className="bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                Integrated Video & IDE
              </span>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-lg transition duration-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100/70">
                  <Coins className="w-5 h-5" />
                </div>
                <span className="text-sm font-black text-slate-300">04</span>
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2">
                Earn or Redeem Skill Credits
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal mb-6">
                Complete the session and credits transfer automatically through our dual-confirmation escrow protocol.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-purple-700">
              <span className="bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-200">
                Instant Escrow Release
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. BILATERAL BARTER SECTION: 1 HOUR SHARED = 1 SKILL CREDIT = 1 HOUR LEARNED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              DUAL BARTER CURRENCY
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              1 Hour Shared = 1 Skill Credit = 1 Hour Learned
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              We eliminate cash barriers by valuing all knowledge equally by time. Spend 60 minutes teaching web dev, earn 1 credit. Redeem that credit for 60 minutes of UX design, Japanese, or product strategy whenever you choose.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">Fair & Universal Rate (1:1)</h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed font-normal">
                    No dynamic surge pricing or unfair gatekeeping. One hour of verified mentorship is always worth one skill credit.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-indigo-50 text-[#302ae6] flex items-center justify-center border border-indigo-100 flex-shrink-0 mt-0.5">
                  <Repeat className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">Zero-Cash Barter Option</h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed font-normal">
                    Direct bilateral trade allows two peers with mutual matches to learn simultaneously without spending any credits.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Interactive Barter Visual */}
          <div className="lg:col-span-5 bg-[#f6f8fd] rounded-2xl p-5 sm:p-6 border border-slate-200/70">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-slate-700">Example Bilateral Swap (Direct Barter)</span>
              <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                Zero Fee
              </span>
            </div>

            {/* Peer exchange visualization */}
            <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                {/* Peer 1 */}
                <div className="flex items-center gap-2.5">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                    alt=""
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">James Cole</h5>
                    <p className="text-[11px] text-slate-400">Fullstack Eng</p>
                  </div>
                </div>

                <div className="w-7 h-7 rounded-full bg-indigo-50 text-[#302ae6] flex items-center justify-center shadow-2xs">
                  <Repeat className="w-3.5 h-3.5" />
                </div>

                {/* Peer 2 */}
                <div className="flex items-center gap-2.5">
                  <div>
                    <h5 className="text-xs font-bold text-slate-900 text-right">Elena Vance</h5>
                    <p className="text-[11px] text-slate-400 text-right">UI/UX Designer</p>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                    alt=""
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Bilateral swap details */}
              <div className="bg-slate-50 rounded-xl p-2.5 flex items-center justify-between text-xs font-bold text-slate-700">
                <span className="text-indigo-700">Teaches 1 hr Next.js</span>
                <span className="text-slate-400">⇄</span>
                <span className="text-purple-700">Teaches 1 hr Figma Tokens</span>
              </div>
            </div>

            {/* Bottom confirmation box */}
            <div className="mt-4 bg-[#f0fbf6] rounded-xl p-3 border border-emerald-200 text-xs font-semibold text-emerald-800 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Result: Both peers gain high-velocity mastery with $0 spent.</span>
            </div>
          </div>

        </div>
      </section>

      {/* 4. ESCROW PROTECTION SIMULATION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column (5 cols): Live Escrow Simulation Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold text-slate-900">Escrow Protection Status</span>
              </div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                Active Session
              </span>
            </div>

            {/* Progress bar visual */}
            <div>
              <div className="flex items-center justify-between text-xs font-medium text-slate-500 mb-1.5">
                <span>Session Duration: 60 min</span>
                <span className="font-bold text-slate-800">100% Completed</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full w-full"></div>
              </div>
            </div>

            {/* Confirmation checklist */}
            <div className="space-y-2 py-1 text-xs">
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100 text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Alex confirmed session completion</span>
                </div>
                <span className="text-[10px] text-slate-400 font-semibold">18:02 UTC</span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100 text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Elena confirmed session completion</span>
                </div>
                <span className="text-[10px] text-slate-400 font-semibold">18:03 UTC</span>
              </div>
            </div>

            {/* Release pill */}
            <div className="bg-[#f0f4ff] rounded-2xl p-3 border border-indigo-100 flex items-center justify-between text-xs font-bold text-indigo-900">
              <div className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-[#302ae6]" />
                <span>1.0 Skill Credit Released to Elena Vance</span>
              </div>
              <span className="text-[10px] text-[#302ae6] bg-white px-2 py-0.5 rounded-md shadow-2xs">
                Verified ✓
              </span>
            </div>
          </div>

          {/* Right Column (7 cols): Friction-free copy */}
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              INTELLIGENT ESCROW PROTECTION
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Stop searching. Start exchanging with zero friction.
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Traditional learning platforms suffer from ghosting, low commitment, and high financial barriers. Skillora’s algorithmic escrow guarantees that every peer honors their scheduled session.
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Automated escrow hold until both parties submit mutual sign-off.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Built-in rescheduling & dispute resolution with peer jury review.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Honor score tracking: 99.2% on-time show-up rate across 45,000+ sessions.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. INTERACTIVE CALCULATOR: SEE WHAT YOU CAN LEARN IN A MONTH */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            SIMULATE YOUR VELOCITY
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
            See What You Can Learn in a Month
          </h2>
          <p className="text-sm text-slate-500 mt-2 font-normal">
            Slide to see how exchanging just a couple hours each week compounds into career-changing skills.
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md space-y-6">
          
          {/* Slider Header & Range */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                Exchanging {hoursPerWeek} Hours / Week
              </span>
              <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                {hoursPerWeek * 4} Total Hours / Mo
              </span>
            </div>

            <input
              type="range"
              min="1"
              max="6"
              step="1"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#302ae6]"
            />

            <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold mt-1.5">
              <span>1 hr/wk (Casual)</span>
              <span>3 hrs/wk (Standard)</span>
              <span>6 hrs/wk (Hyper-Growth)</span>
            </div>
          </div>

          {/* 3 Metric Output Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            <div className="bg-[#f8faff] rounded-2xl p-4 border border-indigo-100/70 text-center">
              <div className="w-8 h-8 rounded-xl bg-indigo-100 text-[#302ae6] flex items-center justify-center mx-auto mb-2">
                <Zap className="w-4 h-4 fill-[#302ae6]" />
              </div>
              <div className="text-2xl font-black text-slate-900">{monthlyCredits} Credits</div>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">Earned / Month</p>
            </div>

            <div className="bg-[#f0fbf6] rounded-2xl p-4 border border-emerald-100/70 text-center">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-2xl font-black text-slate-900">{monthlyHours} Hours</div>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">1:1 Mentorship Received</p>
            </div>

            <div className="bg-[#fffbeb] rounded-2xl p-4 border border-amber-100/70 text-center">
              <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-2">
                <DollarSign className="w-4 h-4" />
              </div>
              <div className="text-2xl font-black text-amber-700">${monthlySavings.toLocaleString()}</div>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">Market Value Saved</p>
            </div>

          </div>

          {/* Dynamic Example Callout */}
          <div className="bg-[#f4f6fc] rounded-2xl p-3.5 border border-slate-200/60 flex items-center gap-2.5 text-xs text-slate-700">
            <Lightbulb className="w-4 h-4 text-amber-500 flex-shrink-0" />
            <span>
              With {monthlyHours} hours you can master:{' '}
              <strong className="text-slate-900">Advanced Next.js 15, Figma Token Systems, or LangChain Workflows.</strong>
            </span>
          </div>

        </div>
      </section>

      {/* 6. TRUST AND INTEGRITY AT EVERY STEP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            PILLARS OF TRUST
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Trust and Integrity at Every Step
          </h2>
          <p className="text-sm text-slate-500 mt-2 font-normal">
            Our reputation framework ensures high caliber exchanges with verified peers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition">
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-[#302ae6] flex items-center justify-center mb-4 border border-indigo-100">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-extrabold text-slate-900 mb-1.5">
              Identity & Skill Vetting
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              GitHub, LinkedIn, and portfolio cross-checks verify that mentors possess demonstrable domain experience.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 border border-amber-100">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-extrabold text-slate-900 mb-1.5">
              Escrow Guarantee
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              Credits are held in non-custodial smart escrow and never disbursed without affirmative mutual session completion.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-100">
              <Star className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-extrabold text-slate-900 mb-1.5">
              Double-Blind Reviews
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              Both peers review each other privately. Ratings are published simultaneously to eliminate reciprocal bias.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition">
            <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4 border border-purple-100">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-extrabold text-slate-900 mb-1.5">
              Community Honor Code
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              Punctuality, respectful dialogue, and committed preparation are required. Flaky accounts are automatically suspended.
            </p>
          </div>

        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            GOT QUESTIONS?
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs transition"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:text-[#302ae6] transition select-none"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                    isOpen ? 'rotate-180 text-[#302ae6]' : ''
                  }`} />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-xs text-slate-600 leading-relaxed font-normal border-t border-slate-100 pt-3 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. BOTTOM CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="rounded-3xl p-8 sm:p-12 text-center bg-gradient-to-r from-[#291fbc] via-[#3525d8] to-[#4833e6] text-white shadow-xl shadow-indigo-600/20 relative overflow-hidden">
          {/* Subtle glow background */}
          <div className="absolute top-0 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-indigo-200 bg-white/15 px-3 py-1 rounded-full border border-white/20">
              JOIN 45,000+ LIFELONG LEARNERS
            </span>

            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              Ready to unlock peer-to-peer learning?
            </h2>

            <p className="text-xs sm:text-sm text-indigo-100 max-w-xl mx-auto font-normal leading-relaxed">
              Join thousands of top designers, developers, and founders trading knowledge without spending money.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
              <Link
                to="/signup"
                className="px-6 py-3 bg-white hover:bg-slate-50 text-[#302ae6] text-xs sm:text-sm font-bold rounded-2xl shadow-md active:scale-95 transition"
              >
                Claim 50 Free Welcome Credits
              </Link>
              <Link
                to="/explore"
                className="px-6 py-3 bg-white/15 hover:bg-white/20 text-white text-xs sm:text-sm font-bold rounded-2xl border border-white/30 active:scale-95 transition"
              >
                Browse All Available Skills
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Walkthrough Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl border border-slate-100 text-center space-y-4 relative">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100"
            >
              ✕
            </button>

            <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-[#302ae6] flex items-center justify-center mx-auto shadow-xs">
              <Play className="w-6 h-6 fill-current ml-0.5" />
            </div>

            <h3 className="text-xl font-extrabold text-slate-900">Skillora 2-Minute Overview</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Skillora connects practitioners for 1:1 bilateral skill trades using verified escrow credits. No cash, no subscriptions, zero friction.
            </p>

            <div className="bg-slate-900 text-white rounded-2xl p-8 flex items-center justify-center flex-col gap-2">
              <Play className="w-10 h-10 text-indigo-400 animate-pulse cursor-pointer" />
              <span className="text-xs font-semibold text-slate-300">Click to Play Interactive Demo</span>
            </div>

            <button
              onClick={() => setVideoModalOpen(false)}
              className="px-5 py-2.5 bg-[#302ae6] text-white text-xs font-bold rounded-xl hover:bg-[#2520c0]"
            >
              Got It
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
