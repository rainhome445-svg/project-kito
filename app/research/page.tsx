import { FileText, Download, Lock, ChevronRight, BarChart2, ArrowRight, Search, Filter, BookOpen, PieChart, Layers, Zap, Shield, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ResearchPage() {
  const reports = [
    { id: 1, title: 'Q3 2024 Digital Asset Funding Landscape', category: 'Funding', date: 'Oct 15, 2024', isPro: true, image: 'https://picsum.photos/seed/research1/600/400', author: 'HGM Research Team', readTime: '12 min' },
    { id: 2, title: 'The State of Layer 2 Scaling Solutions', category: 'Infrastructure', date: 'Oct 10, 2024', isPro: false, image: 'https://picsum.photos/seed/research2/600/400', author: 'Alex Rivet', readTime: '18 min' },
    { id: 3, title: 'Institutional Adoption: A Mid-Year Review', category: 'Markets', date: 'Oct 05, 2024', isPro: true, image: 'https://picsum.photos/seed/research3/600/400', author: 'Sarah Chen', readTime: '25 min' },
    { id: 4, title: 'DeFi Protocols: Risk Assessment Framework', category: 'DeFi', date: 'Sep 28, 2024', isPro: true, image: 'https://picsum.photos/seed/research4/600/400', author: 'Marcus Thorne', readTime: '30 min' },
    { id: 5, title: 'Regulatory Landscape: Global Overview', category: 'Policy', date: 'Sep 20, 2024', isPro: false, image: 'https://picsum.photos/seed/research5/600/400', author: 'Elena Vance', readTime: '15 min' },
    { id: 6, title: 'Emerging Trends in Web3 Gaming', category: 'Gaming', date: 'Sep 15, 2024', isPro: true, image: 'https://picsum.photos/seed/research6/600/400', author: 'HGM Research Team', readTime: '20 min' },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
      
      {/* Header - Institutional Style */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 border-b border-border-subtle pb-10">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-blue-light font-black text-[10px] uppercase tracking-[0.2em]">
            <BookOpen className="w-3 h-3" /> Intelligence Division
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-none">
            Research <span className="text-blue-light">Library</span>
          </h1>
          <p className="text-xs text-white/50 font-bold max-w-2xl uppercase tracking-tight">
            Comprehensive analysis of blockchain infrastructure, tokenomics, and global regulatory frameworks.
          </p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/30" />
            <input 
              type="text" 
              placeholder="SEARCH REPORTS..." 
              className="w-full bg-surface border border-border-subtle rounded-md py-2.5 pl-9 pr-4 text-[10px] font-black text-white placeholder:text-white/20 focus:outline-none focus:border-blue-light/50 transition-colors uppercase tracking-widest"
            />
          </div>
          <button className="bg-surface border border-border-subtle p-2.5 rounded-md hover:bg-white/5 transition-colors">
            <Filter className="w-4 h-4 text-white/60" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Main Feed (65%) */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* Featured Report - High Density */}
          <div className="group relative bg-surface border border-border-subtle rounded-md overflow-hidden flex flex-col md:flex-row shadow-2xl">
            <div className="relative w-full md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden">
              <Image 
                src="https://picsum.photos/seed/featured-res/800/600" 
                alt="Featured Research"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent md:hidden" />
              <div className="absolute top-4 left-4 bg-blue-light text-white text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded">
                FEATURED REPORT
              </div>
            </div>
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-center space-y-4">
              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white/40">
                <span>OCT 16, 2024</span>
                <span className="w-1 h-1 bg-white/20 rounded-full" />
                <span className="text-blue-light">MACRO ANALYSIS</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase leading-tight group-hover:text-blue-light transition-colors">
                The Impact of Global Liquidity Cycles on Digital Asset Volatility
              </h2>
              <p className="text-xs text-white/60 font-bold leading-relaxed line-clamp-3 uppercase tracking-tight">
                An in-depth study of how central bank balance sheet expansions correlate with crypto-asset performance across multiple market cycles.
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-white/10" />
                  <span className="text-[10px] font-black text-white/80 uppercase">Dr. Julian Voss</span>
                </div>
                <Link href="#" className="flex items-center gap-2 text-[10px] font-black text-white uppercase tracking-widest hover:text-blue-light transition-colors">
                  ACCESS FULL REPORT <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Reports Grid - High Density */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reports.map((report) => (
              <div key={report.id} className="bg-surface border border-border-subtle rounded-md overflow-hidden group hover:border-white/20 transition-all">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image 
                    src={report.image} 
                    alt={report.title}
                    fill
                    className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  {report.isPro && (
                    <div className="absolute top-3 right-3 bg-black/80 border border-border-subtle px-2 py-1 rounded flex items-center gap-1.5">
                      <Lock className="w-2.5 h-2.5 text-blue-light" />
                      <span className="text-[8px] font-black text-white uppercase tracking-widest">PRO</span>
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3 bg-white/10 backdrop-blur-md border border-white/10 px-2 py-1 rounded text-[8px] font-black text-white uppercase tracking-widest">
                    {report.category}
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-[9px] font-black text-white/40 uppercase tracking-tighter">
                    <span>{report.date}</span>
                    <span>{report.readTime} READ</span>
                  </div>
                  <h3 className="text-base font-black text-white leading-tight uppercase tracking-tight group-hover:text-blue-light transition-colors line-clamp-2">
                    {report.title}
                  </h3>
                  <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
                    <span className="text-[9px] font-bold text-white/40 uppercase">{report.author}</span>
                    <button className="p-1.5 bg-white/5 hover:bg-white/10 rounded transition-colors">
                      <Download className="w-3.5 h-3.5 text-white/60" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button className="px-8 py-3 bg-surface border border-border-subtle text-[10px] font-black text-white uppercase tracking-[0.2em] rounded-md hover:bg-white/5 transition-colors">
              LOAD ARCHIVE
            </button>
          </div>
        </div>

        {/* Sidebar (35%) */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Pro Subscription - High Density */}
          <div className="bg-black border border-blue-light/30 rounded-md p-6 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-light/5 rounded-full blur-[40px] -mr-16 -mt-16" />
            <div className="space-y-2">
              <h3 className="text-xl font-black text-white uppercase tracking-tighter">HGM Intelligence <span className="text-blue-light">PRO</span></h3>
              <p className="text-[10px] text-white/50 font-bold uppercase tracking-tight leading-relaxed">
                Gain access to the full repository of institutional research and proprietary data models.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Weekly Alpha Reports', icon: Zap },
                { label: 'Tokenomics Audits', icon: Shield },
                { label: 'On-Chain Flow Analysis', icon: PieChart },
                { label: 'Direct Analyst Access', icon: Globe }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[10px] font-black text-white/80 uppercase tracking-tight">
                  <item.icon className="w-3.5 h-3.5 text-blue-light" />
                  {item.label}
                </div>
              ))}
            </div>
            <button className="w-full bg-blue-light text-white font-black py-3 rounded-md text-[10px] uppercase tracking-[0.2em] hover:bg-blue-600 transition-colors shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              UPGRADE TO PRO
            </button>
          </div>

          {/* Categories - High Density */}
          <div className="bg-surface border border-border-subtle rounded-md p-6 space-y-6">
            <h3 className="text-xs font-black text-white uppercase tracking-widest border-b border-border-subtle pb-3">Categories</h3>
            <div className="space-y-1">
              {[
                { name: 'Markets & Trading', count: 142 },
                { name: 'DeFi & Protocols', count: 89 },
                { name: 'Infrastructure', count: 64 },
                { name: 'Policy & Regulation', count: 31 },
                { name: 'NFTs & Gaming', count: 45 },
                { name: 'Macro Economics', count: 28 }
              ].map((cat, i) => (
                <div key={i} className="flex items-center justify-between p-2.5 hover:bg-white/5 rounded-md transition-colors group cursor-pointer">
                  <span className="text-[11px] font-bold text-white/60 group-hover:text-white uppercase tracking-tight">{cat.name}</span>
                  <span className="text-[9px] font-black text-white/20 group-hover:text-blue-light">{cat.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity - High Density */}
          <div className="bg-surface border border-border-subtle rounded-md p-6 space-y-6">
            <h3 className="text-xs font-black text-white uppercase tracking-widest border-b border-border-subtle pb-3">Recent Activity</h3>
            <div className="space-y-4">
              {[
                { user: 'Goldman Sachs', action: 'Accessed Report', time: '2m ago' },
                { user: 'BlackRock', action: 'Downloaded Data', time: '15m ago' },
                { user: 'A16Z', action: 'Updated Subscription', time: '1h ago' }
              ].map((activity, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-blue-light rounded-full mt-1.5" />
                  <div className="space-y-0.5">
                    <div className="text-[10px] font-black text-white uppercase tracking-tight">{activity.user}</div>
                    <div className="text-[9px] font-bold text-white/40 uppercase tracking-tighter">{activity.action} • {activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
