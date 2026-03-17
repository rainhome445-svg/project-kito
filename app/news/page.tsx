import Link from 'next/link';
import Image from 'next/image';
import { Newspaper, Layers, ArrowRight, Search, Filter, TrendingUp, Zap, Shield, Globe, Database, Code, Briefcase } from 'lucide-react';

export default function NewsPage() {
  const categories = [
    { name: 'Companies', icon: Briefcase, description: 'News about crypto companies from Ripple to Binance and Coinbase. Plus traditional finance giants like BlackRock.' },
    { name: 'Ecosystems', icon: Globe, description: 'Blockchain adoption, upcoming ecosystems, and network growth metrics.' },
    { name: 'Deals', icon: Zap, description: 'Venture capital, M&A, and rumored deals in the cryptocurrency space.' },
    { name: 'Markets', icon: TrendingUp, description: 'Market moving news relevant to liquid tokens and public equities.' },
    { name: 'Metaverse & NFT', icon: Layers, description: 'Latest developments in digital collectibles and virtual worlds.' },
    { name: 'Policy', icon: Shield, description: 'Global government policy, regulation, and legislative updates.' },
    { name: 'Technology', icon: Code, description: 'Deep dives into protocols, consensus mechanisms, and technical advancements.' },
    { name: 'Security', icon: Database, description: 'Hacks, exploits, audits, and security best practices for smart contracts.' }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
      
      {/* Header - High Density */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 border-b border-border-subtle pb-10">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-blue-light font-black text-[10px] uppercase tracking-[0.2em]">
            <Newspaper className="w-3 h-3" /> Information Protocol
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-none">
            HGM <span className="text-blue-light">News</span>
          </h1>
          <p className="text-xs text-white/50 font-bold max-w-2xl uppercase tracking-tight">
            The definitive source for institutional-grade news and analysis across the digital asset industry.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/30" />
            <input 
              type="text" 
              placeholder="SEARCH NEWS..." 
              className="w-full bg-surface border border-border-subtle rounded-md py-2.5 pl-9 pr-4 text-[10px] font-black text-white placeholder:text-white/20 focus:outline-none focus:border-blue-light/50 transition-colors uppercase tracking-widest"
            />
          </div>
          <button className="bg-surface border border-border-subtle p-2.5 rounded-md hover:bg-white/5 transition-colors">
            <Filter className="w-4 h-4 text-white/60" />
          </button>
        </div>
      </div>

      {/* Featured News - High Density */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
        <div className="lg:col-span-8 group relative bg-black border border-border-subtle rounded-md overflow-hidden aspect-video lg:aspect-auto lg:h-[500px]">
          <Image 
            src="https://picsum.photos/seed/news-hero/1200/800" 
            alt="Featured News"
            fill
            className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1024px) 100vw, 66vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-blue-light text-white text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-md">
                BREAKING
              </div>
              <div className="text-[9px] font-black text-white/60 uppercase tracking-widest">
                MARKETS • 12 MIN AGO
              </div>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-tight group-hover:text-blue-light transition-colors">
              SEC Approves Spot Ethereum ETFs in Landmark Decision
            </h2>
            <p className="text-xs text-white/60 font-bold uppercase tracking-tight leading-relaxed max-w-2xl line-clamp-2">
              The Securities and Exchange Commission has officially authorized the first spot Ethereum exchange-traded funds, marking a significant milestone for institutional crypto adoption.
            </p>
          </div>
        </div>
        <div className="lg:col-span-4 space-y-6">
          <h3 className="text-[10px] font-black text-white uppercase tracking-widest border-b border-border-subtle pb-2">Top Stories</h3>
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-4 group cursor-pointer">
              <div className="relative w-24 h-24 shrink-0 rounded-md overflow-hidden border border-border-subtle">
                <Image src={`https://picsum.photos/seed/news-small-${i}/200/200`} alt="News" fill className="object-cover opacity-60 group-hover:scale-110 transition-transform" sizes="96px" />
              </div>
              <div className="space-y-1">
                <div className="text-[8px] font-black text-blue-light uppercase tracking-widest">POLICY • 2H AGO</div>
                <h4 className="text-xs font-black text-white uppercase tracking-tight leading-tight group-hover:text-blue-light transition-colors line-clamp-3">
                  New Regulatory Framework Proposed for Stablecoin Issuers in the European Union
                </h4>
              </div>
            </div>
          ))}
          <button className="w-full py-3 bg-surface border border-border-subtle text-[9px] font-black text-white uppercase tracking-[0.2em] rounded-md hover:bg-white/5 transition-colors">
            VIEW ALL TOP STORIES
          </button>
        </div>
      </div>

      {/* Categories Grid - High Density */}
      <div className="space-y-8">
        <div className="flex items-center justify-between border-b border-border-subtle pb-4">
          <h2 className="text-xs font-black text-white uppercase tracking-widest">News Domains</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, i) => (
            <Link 
              href={`/news/${category.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} 
              key={category.name}
              className="bg-surface border border-border-subtle rounded-md p-6 group hover:border-white/20 transition-all flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-black border border-border-subtle rounded-md flex items-center justify-center group-hover:bg-blue-light/10 transition-colors">
                  <category.icon className="w-6 h-6 text-blue-light" />
                </div>
                <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-blue-light group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-lg font-black text-white uppercase tracking-tighter mb-3 group-hover:text-blue-light transition-colors">{category.name}</h3>
              <p className="text-[10px] text-white/50 font-bold uppercase tracking-tight leading-relaxed flex-grow">
                {category.description}
              </p>
              <div className="pt-6 border-t border-border-subtle mt-6">
                <div className="text-[8px] font-black text-white/20 uppercase tracking-widest">EXPLORE DOMAIN</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
