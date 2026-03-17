import { BookOpen, GraduationCap, ArrowRight, Search, Filter, Star, Clock, Users, Shield, Zap, Database, Globe, Layers, Target } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function LearnPage() {
  const categories = [
    { id: 'fundamentals', name: 'Blockchain Fundamentals', desc: 'The core concepts of decentralized ledgers and consensus.', count: 12, level: 'BEGINNER' },
    { id: 'defi', name: 'Decentralized Finance', desc: 'Mastering liquidity, yield, and protocol mechanics.', count: 24, level: 'INTERMEDIATE' },
    { id: 'development', name: 'Web3 Development', desc: 'Building smart contracts and dApps on multiple chains.', count: 18, level: 'ADVANCED' },
    { id: 'security', name: 'Security & Auditing', desc: 'Protecting assets and identifying protocol vulnerabilities.', count: 9, level: 'ADVANCED' },
    { id: 'macro', name: 'Macro Economics', desc: 'Understanding the global financial context of digital assets.', count: 15, level: 'INTERMEDIATE' },
    { id: 'trading', name: 'Technical Analysis', desc: 'Advanced charting and market psychology strategies.', count: 21, level: 'INTERMEDIATE' },
  ];

  const levels = [
    { name: 'BEGINNER', color: 'text-emerald-bullish', bg: 'bg-emerald-bullish/10', border: 'border-emerald-bullish/20', desc: 'Foundational knowledge for newcomers.' },
    { name: 'INTERMEDIATE', color: 'text-blue-light', bg: 'bg-blue-light/10', border: 'border-blue-light/20', desc: 'Deep dive into mechanics and strategy.' },
    { name: 'ADVANCED', color: 'text-red-bearish', bg: 'bg-red-bearish/10', border: 'border-red-bearish/20', desc: 'Technical mastery and protocol architecture.' },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
      
      {/* Header - High Density */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 border-b border-border-subtle pb-10">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-blue-light font-black text-[10px] uppercase tracking-[0.2em]">
            <BookOpen className="w-3 h-3" /> Knowledge Protocol
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-none">
            HGM <span className="text-blue-light">Learn</span>
          </h1>
          <p className="text-xs text-white/50 font-bold max-w-2xl uppercase tracking-tight">
            Institutional-grade educational resources to navigate the complexities of the digital asset ecosystem.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/30" />
            <input 
              type="text" 
              placeholder="SEARCH GUIDES..." 
              className="w-full bg-surface border border-border-subtle rounded-md py-2.5 pl-9 pr-4 text-[10px] font-black text-white placeholder:text-white/20 focus:outline-none focus:border-blue-light/50 transition-colors uppercase tracking-widest"
            />
          </div>
          <button className="bg-surface border border-border-subtle p-2.5 rounded-md hover:bg-white/5 transition-colors">
            <Filter className="w-4 h-4 text-white/60" />
          </button>
        </div>
      </div>

      {/* Level Selection - High Density */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {levels.map((level) => (
          <div key={level.name} className={`p-6 rounded-md border ${level.border} ${level.bg} group cursor-pointer hover:bg-opacity-20 transition-all`}>
            <div className="flex items-center justify-between mb-4">
              <div className={`text-[10px] font-black uppercase tracking-[0.2em] ${level.color}`}>{level.name}</div>
              <Target className={`w-4 h-4 ${level.color}`} />
            </div>
            <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-2">Level {level.name.charAt(0)}</h3>
            <p className="text-[10px] text-white/40 font-bold uppercase tracking-tight leading-tight mb-6">{level.desc}</p>
            <button className={`text-[9px] font-black uppercase tracking-widest flex items-center gap-2 ${level.color} hover:text-white transition-colors`}>
              EXPLORE PATH <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>

      {/* Categories Grid - High Density */}
      <div className="space-y-8 mb-20">
        <div className="flex items-center justify-between border-b border-border-subtle pb-4">
          <h2 className="text-xs font-black text-white uppercase tracking-widest">Knowledge Domains</h2>
          <button className="text-[9px] font-black text-blue-light uppercase tracking-widest hover:text-white transition-colors">VIEW ALL CATEGORIES</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, i) => (
            <Link 
              href={`/learn/${category.id}`} 
              key={category.id}
              className="bg-surface border border-border-subtle rounded-md p-6 group hover:border-white/20 transition-all flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-black border border-border-subtle rounded-md flex items-center justify-center group-hover:bg-blue-light/10 transition-colors">
                  <Layers className="w-6 h-6 text-blue-light" />
                </div>
                <div className="text-right space-y-1">
                  <div className="text-[9px] font-black text-white/20 uppercase tracking-widest">{category.count} GUIDES</div>
                  <div className={`text-[8px] font-black uppercase tracking-tighter ${category.level === 'BEGINNER' ? 'text-emerald-bullish' : category.level === 'ADVANCED' ? 'text-red-bearish' : 'text-blue-light'}`}>{category.level}</div>
                </div>
              </div>
              <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-3 group-hover:text-blue-light transition-colors">{category.name}</h3>
              <p className="text-[11px] text-white/50 font-bold uppercase tracking-tight leading-relaxed mb-8 flex-grow">
                {category.desc}
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-border-subtle">
                <div className="flex items-center gap-2 text-[9px] font-black text-white/20 uppercase tracking-widest">
                  <Database className="w-3 h-3" /> INDEXED CONTENT
                </div>
                <div className="text-[10px] font-black text-blue-light uppercase tracking-widest flex items-center gap-2">
                  EXPLORE <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Guide - High Density */}
      <div className="bg-black border border-border-subtle rounded-md p-8 lg:p-12 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12 shadow-2xl">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://picsum.photos/seed/learn-featured/1920/1080')] opacity-5 pointer-events-none" />
        <div className="relative z-10 flex-1 space-y-8">
          <div className="space-y-2">
            <div className="text-blue-light font-black text-[10px] uppercase tracking-[0.2em]">FEATURED MASTERCLASS</div>
            <h2 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-none">
              The Architecture of <span className="text-blue-light">Consensus</span>
            </h2>
            <p className="text-xs text-white/50 font-bold uppercase tracking-tight leading-relaxed max-w-xl">
              A deep-dive into Proof of Work, Proof of Stake, and the emerging paradigms of modular consensus. Understand the trade-offs between security, scalability, and decentralization.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-border-subtle overflow-hidden">
                <Image src="https://picsum.photos/seed/author/100/100" alt="Author" width={40} height={40} />
              </div>
              <div>
                <div className="text-[10px] font-black text-white uppercase tracking-tight">Dr. Elena Vance</div>
                <div className="text-[8px] text-white/30 font-bold uppercase tracking-tighter">Chief Research Officer</div>
              </div>
            </div>
            <div className="h-8 w-px bg-border-subtle" />
            <div className="flex items-center gap-4 text-[9px] font-black text-white/40 uppercase tracking-widest">
              <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> 45 MIN READ</span>
              <span className="flex items-center gap-1.5"><Users className="w-3 h-3" /> 12K READS</span>
            </div>
          </div>
          <button className="bg-white text-black font-black py-3 px-8 rounded-md text-[10px] uppercase tracking-[0.2em] hover:bg-white/90 transition-colors">
            START READING
          </button>
        </div>
        <div className="relative w-full lg:w-1/3 aspect-[3/4] max-w-sm rounded-2xl overflow-hidden border border-border-subtle shadow-2xl group">
          <Image 
            src="https://picsum.photos/seed/learn-mock/800/1200" 
            alt="Guide Preview"
            fill
            className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
             <div className="bg-blue-light/20 backdrop-blur-md border border-blue-light/30 p-4 rounded-md">
                <div className="text-white font-black text-xs uppercase tracking-widest mb-1">INTERACTIVE MODULE</div>
                <p className="text-[9px] text-white/60 font-bold uppercase tracking-tight">Test your knowledge with our real-time consensus simulator.</p>
             </div>
          </div>
        </div>
      </div>

    </div>
  );
}
