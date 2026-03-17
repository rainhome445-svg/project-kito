import { Mail, CheckCircle2, ArrowRight, Zap, TrendingUp, Shield, Bell, Send, Users, Search, Filter, Globe, Database } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function NewslettersPage() {
  const newsletters = [
    { id: 1, title: 'The Daily Brief', frequency: 'Daily', desc: 'The most important crypto news, market movements, and insights delivered every morning.', icon: Zap, subscribers: '150K+', category: 'MARKETS' },
    { id: 2, title: 'DeFi Weekly', frequency: 'Weekly', desc: 'Deep dives into decentralized finance protocols, yields, and emerging trends.', icon: TrendingUp, subscribers: '85K+', category: 'DEFI' },
    { id: 3, title: 'Policy & Regulation', frequency: 'Bi-weekly', desc: 'Navigating the complex global regulatory landscape for digital assets.', icon: Shield, subscribers: '45K+', category: 'POLICY' },
    { id: 4, title: 'Infrastructure Alpha', frequency: 'Weekly', desc: 'Technical analysis of Layer 1 and Layer 2 scaling solutions and MEV.', icon: Database, subscribers: '32K+', category: 'TECH' },
    { id: 5, title: 'Web3 Gaming Hub', frequency: 'Weekly', desc: 'Exploring the intersection of gaming, NFTs, and decentralized economies.', icon: Globe, subscribers: '28K+', category: 'GAMING' },
    { id: 6, title: 'Institutional Flow', frequency: 'Daily', desc: 'Tracking whale movements and institutional capital flows across exchanges.', icon: Bell, subscribers: '12K+', category: 'INSTITUTIONAL' },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
      
      {/* Header - High Density */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 border-b border-border-subtle pb-10">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-blue-light font-black text-[10px] uppercase tracking-[0.2em]">
            <Mail className="w-3 h-3" /> Information Streams
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-none">
            HGM <span className="text-blue-light">Newsletters</span>
          </h1>
          <p className="text-xs text-white/50 font-bold max-w-2xl uppercase tracking-tight">
            Curated intelligence across the entire digital asset spectrum, delivered directly to your terminal.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/30" />
            <input 
              type="email" 
              placeholder="ENTER EMAIL ADDRESS..." 
              className="w-full bg-surface border border-border-subtle rounded-md py-2.5 pl-9 pr-4 text-[10px] font-black text-white placeholder:text-white/20 focus:outline-none focus:border-blue-light/50 transition-colors uppercase tracking-widest"
            />
          </div>
          <button className="w-full sm:w-auto bg-blue-light text-white font-black py-2.5 px-6 rounded-md text-[10px] uppercase tracking-[0.2em] hover:bg-blue-600 transition-colors shadow-[0_0_20px_rgba(59,130,246,0.2)]">
            SUBSCRIBE ALL
          </button>
        </div>
      </div>

      {/* Newsletters Grid - High Density */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {newsletters.map((newsletter) => (
          <div key={newsletter.id} className="bg-surface border border-border-subtle rounded-md p-6 hover:border-white/20 transition-all group flex flex-col h-full">
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 bg-black border border-border-subtle rounded-md flex items-center justify-center group-hover:bg-blue-light/10 transition-colors">
                <newsletter.icon className="w-6 h-6 text-blue-light" />
              </div>
              <div className="text-right space-y-1">
                <div className="text-[9px] font-black text-white uppercase tracking-widest bg-white/5 border border-white/10 px-2 py-0.5 rounded">{newsletter.frequency}</div>
                <div className="text-[8px] font-bold text-white/20 uppercase tracking-tighter">{newsletter.category}</div>
              </div>
            </div>
            <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-3 group-hover:text-blue-light transition-colors">{newsletter.title}</h3>
            <p className="text-[11px] text-white/50 font-bold uppercase tracking-tight leading-relaxed mb-8 flex-grow">
              {newsletter.desc}
            </p>
            <div className="flex items-center justify-between pt-6 border-t border-border-subtle">
              <div className="flex items-center gap-2 text-[9px] font-black text-white/20 uppercase tracking-widest">
                <Users className="w-3 h-3" /> {newsletter.subscribers} SUBSCRIBERS
              </div>
              <button className="text-[10px] font-black text-blue-light uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
                SUBSCRIBE <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Section - High Density */}
      <div className="bg-black border border-border-subtle rounded-md p-8 lg:p-12 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://picsum.photos/seed/newsletter-bg/1920/1080')] opacity-5 pointer-events-none" />
        <div className="relative z-10 flex-1 space-y-8">
          <div className="space-y-2">
            <div className="text-blue-light font-black text-[10px] uppercase tracking-[0.2em]">WHY HGM INTELLIGENCE?</div>
            <h2 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-none">
              Institutional Grade <span className="text-blue-light">Insights</span>
            </h2>
            <p className="text-xs text-white/50 font-bold uppercase tracking-tight leading-relaxed max-w-xl">
              Our editorial team sifts through the noise to bring you only what matters. Data-driven analysis to help you make informed decisions in the market.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'Curated by Experts', desc: 'Deep-dive analysis from industry veterans.' },
              { title: 'Actionable Data', desc: 'Proprietary metrics and on-chain forensics.' },
              { title: 'Exclusive Access', desc: 'Early access to research and events.' },
              { title: 'Global Coverage', desc: 'Insights from every major crypto hub.' }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-surface border border-border-subtle rounded-md flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-blue-light" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-[10px] font-black text-white uppercase tracking-tight">{item.title}</div>
                  <p className="text-[9px] text-white/40 font-bold uppercase tracking-tighter leading-tight">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-full lg:w-1/3 aspect-square max-w-sm rounded-2xl overflow-hidden border border-border-subtle shadow-2xl group">
          <Image 
            src="https://picsum.photos/seed/newsletter-mock/800/800" 
            alt="Newsletter Mockup"
            fill
            className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 space-y-2">
            <div className="text-blue-light font-black text-[9px] uppercase tracking-widest">LATEST ISSUE</div>
            <h3 className="text-xl font-black text-white uppercase tracking-tighter leading-tight">The Daily Brief: Market Recovery Analysis</h3>
          </div>
        </div>
      </div>

    </div>
  );
}
