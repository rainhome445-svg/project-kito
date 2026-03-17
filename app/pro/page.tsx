import { Shield, Zap, BarChart3, Users, CheckCircle2, ArrowRight, Lock, Search, Filter, Database, Globe, Layers, Target, Briefcase } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
      
      {/* Header - High Density */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 border-b border-border-subtle pb-10">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-blue-light font-black text-[10px] uppercase tracking-[0.2em]">
            <Lock className="w-3 h-3" /> Institutional Protocol
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-none">
            HGM <span className="text-blue-light">Pro</span>
          </h1>
          <p className="text-xs text-white/50 font-bold max-w-2xl uppercase tracking-tight">
            Proprietary intelligence, real-time forensics, and institutional-grade research for the digital asset economy.
          </p>
        </div>
        <div className="flex items-center gap-4 text-[9px] font-black text-white/30 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-light rounded-full" /> PRO ACCESS: ACTIVE
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-bullish rounded-full" /> DATA STREAMS: LIVE
          </div>
        </div>
      </div>

      {/* Hero Section - High Density */}
      <div className="group relative bg-black border border-border-subtle rounded-md overflow-hidden flex flex-col lg:flex-row mb-16 shadow-2xl">
        <div className="relative w-full lg:w-1/2 aspect-video lg:aspect-auto overflow-hidden">
          <Image 
            src="https://picsum.photos/seed/pro-hero/1200/800" 
            alt="Pro Interface"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:hidden" />
          <div className="absolute top-6 left-6 flex items-center gap-3">
             <div className="bg-blue-light text-white text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded">
              PREMIUM ACCESS
            </div>
          </div>
        </div>
        <div className="p-8 lg:p-12 flex-1 flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tighter uppercase leading-tight group-hover:text-blue-light transition-colors">
              The Edge You Need in Digital Assets
            </h2>
            <p className="text-xs text-white/60 font-bold leading-relaxed uppercase tracking-tight max-w-xl">
              HGM Pro delivers proprietary data, deep-dive research, and exclusive analyst access to help you navigate the crypto markets with institutional confidence.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'PROPRIETARY DATA', value: '1,200+ METRICS' },
              { label: 'RESEARCH REPORTS', value: '450+ ARCHIVED' },
              { label: 'REAL-TIME ALERTS', value: '24/7 MONITORING' },
              { label: 'ANALYST ACCESS', value: 'DIRECT CHANNEL' }
            ].map((stat, i) => (
              <div key={i} className="bg-surface border border-border-subtle p-3 rounded-md">
                <div className="text-[10px] font-black text-white uppercase tracking-tighter">{stat.value}</div>
                <div className="text-[8px] text-white/30 font-black uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button className="bg-white text-black font-black py-3 px-8 rounded-md text-[10px] uppercase tracking-[0.2em] hover:bg-white/90 transition-colors flex items-center gap-2">
              START FREE TRIAL
            </button>
            <button className="bg-surface border border-border-subtle text-white font-black py-3 px-6 rounded-md text-[10px] uppercase tracking-[0.2em] hover:bg-white/5 transition-colors">
              VIEW PRICING
            </button>
          </div>
        </div>
      </div>

      {/* Features Grid - High Density */}
      <div className="space-y-8 mb-20">
        <h2 className="text-xs font-black text-white uppercase tracking-widest border-b border-border-subtle pb-4">Pro Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: 'Institutional Research', desc: 'Deep-dive reports on protocols, sectors, and macro trends.' },
            { icon: BarChart3, title: 'Proprietary Data', desc: 'Access to exclusive dashboards, metrics, and on-chain analytics.' },
            { icon: Zap, title: 'Real-Time Alerts', desc: 'Get notified instantly about market-moving news and events.' },
            { icon: Users, title: 'Analyst Access', desc: 'Direct access to our research team via exclusive calls and Q&A.' }
          ].map((feature, i) => (
            <div key={i} className="bg-surface border border-border-subtle rounded-md p-6 group hover:border-blue-light/30 transition-all">
              <div className="w-12 h-12 bg-black border border-border-subtle rounded-md flex items-center justify-center mb-6 group-hover:bg-blue-light/10 transition-colors">
                <feature.icon className="w-6 h-6 text-blue-light" />
              </div>
              <h3 className="text-base font-black text-white uppercase tracking-tight mb-2 group-hover:text-blue-light transition-colors">{feature.title}</h3>
              <p className="text-[10px] text-white/40 font-bold uppercase tracking-tight leading-tight">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing - High Density */}
      <div className="space-y-12 mb-20">
        <div className="text-center space-y-2">
          <div className="text-blue-light font-black text-[10px] uppercase tracking-[0.2em]">PRICING TIERS</div>
          <h2 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter">Select Your <span className="text-blue-light">Access Level</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Pro Plan */}
          <div className="bg-surface border border-border-subtle rounded-md p-8 lg:p-10 flex flex-col group hover:border-white/20 transition-all">
            <div className="space-y-1 mb-8">
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter">HGM PRO</h3>
              <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">FOR INDIVIDUAL PROFESSIONALS</p>
            </div>
            <div className="mb-10 flex items-baseline gap-2">
              <span className="text-5xl font-black text-white tracking-tighter">$99</span>
              <span className="text-white/30 text-xs font-black uppercase tracking-widest">/ MONTH</span>
            </div>
            <ul className="space-y-4 mb-12 flex-grow">
              {[
                'Full access to research library',
                'Daily market commentary',
                'Proprietary data dashboards',
                'Weekly analyst briefing',
                'Real-time news alerts'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[10px] font-black text-white/60 uppercase tracking-tight">
                  <CheckCircle2 className="w-4 h-4 text-blue-light" /> {item}
                </li>
              ))}
            </ul>
            <button className="w-full bg-white text-black font-black py-4 rounded-md text-[10px] uppercase tracking-[0.2em] hover:bg-white/90 transition-colors">
              SUBSCRIBE TO PRO
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-black border-2 border-blue-light rounded-md p-8 lg:p-10 flex flex-col relative overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.1)]">
            <div className="absolute top-0 right-0 bg-blue-light text-white text-[8px] font-black uppercase tracking-widest px-4 py-1 rounded-bl-lg">
              MOST POPULAR
            </div>
            <div className="space-y-1 mb-8">
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter">HGM ENTERPRISE</h3>
              <p className="text-blue-light/60 text-[10px] font-bold uppercase tracking-widest">FOR FUNDS & INSTITUTIONS</p>
            </div>
            <div className="mb-10 flex items-baseline gap-2">
              <span className="text-5xl font-black text-white tracking-tighter">CUSTOM</span>
            </div>
            <ul className="space-y-4 mb-12 flex-grow">
              {[
                'Everything in Pro',
                'Advanced API access',
                'Custom data requests',
                'Dedicated account manager',
                '1-on-1 analyst calls',
                'Team-wide licensing'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[10px] font-black text-white/80 uppercase tracking-tight">
                  <CheckCircle2 className="w-4 h-4 text-blue-light" /> {item}
                </li>
              ))}
            </ul>
            <button className="w-full bg-blue-light text-white font-black py-4 rounded-md text-[10px] uppercase tracking-[0.2em] hover:bg-blue-600 transition-colors shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              CONTACT SALES
            </button>
          </div>
        </div>
      </div>

      {/* Trust Section - High Density */}
      <div className="bg-surface border border-border-subtle rounded-md p-8 lg:p-12 text-center space-y-8">
        <div className="space-y-2">
          <div className="text-blue-light font-black text-[10px] uppercase tracking-[0.2em]">TRUSTED BY THE BEST</div>
          <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Powering the World&apos;s Leading <span className="text-blue-light">Digital Asset Teams</span></h2>
        </div>
        <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale">
           {[1, 2, 3, 4, 5].map(i => (
             <div key={i} className="text-xl font-black text-white uppercase tracking-widest">PARTNER_{i}</div>
           ))}
        </div>
      </div>

    </div>
  );
}
