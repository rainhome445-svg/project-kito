import { Star, Shield, Zap, Activity, ArrowRight, Search, Filter, CheckCircle2, AlertTriangle, Info, Database, BarChart3 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function RatingsPage() {
  const ratings = [
    { asset: 'Bitcoin', symbol: 'BTC', score: 'A+', tech: 'A+', security: 'A+', market: 'A+', tokenomics: 'A', risk: 'Low', icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png' },
    { asset: 'Ethereum', symbol: 'ETH', score: 'A', tech: 'A', security: 'A-', market: 'A+', tokenomics: 'A', risk: 'Low', icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
    { asset: 'Solana', symbol: 'SOL', score: 'B+', tech: 'A-', security: 'B', market: 'A', tokenomics: 'B+', risk: 'Medium', icon: 'https://cryptologos.cc/logos/solana-sol-logo.png' },
    { asset: 'Cardano', symbol: 'ADA', score: 'B', tech: 'B+', security: 'A-', market: 'B', tokenomics: 'B', risk: 'Low', icon: 'https://cryptologos.cc/logos/cardano-ada-logo.png' },
    { asset: 'Polkadot', symbol: 'DOT', score: 'B', tech: 'A-', security: 'B+', market: 'B-', tokenomics: 'B', risk: 'Medium', icon: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.png' },
    { asset: 'Avalanche', symbol: 'AVAX', score: 'B+', tech: 'A-', security: 'B+', market: 'B+', tokenomics: 'B+', risk: 'Medium', icon: 'https://cryptologos.cc/logos/avalanche-avax-logo.png' },
  ];

  const getScoreColor = (score: string) => {
    if (score.startsWith('A')) return 'text-green-bullish';
    if (score.startsWith('B')) return 'text-blue-light';
    if (score.startsWith('C')) return 'text-yellow-500';
    return 'text-red-bearish';
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
      
      {/* Header - Institutional Style */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10 border-b border-border-subtle pb-10">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-blue-light font-black text-[10px] uppercase tracking-[0.2em]">
            <Shield className="w-3 h-3" /> Risk Assessment Division
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-none">
            Asset <span className="text-blue-light">Ratings</span>
          </h1>
          <p className="text-xs text-white/50 font-bold max-w-2xl uppercase tracking-tight">
            Independent, data-driven evaluations of digital asset protocols, security architectures, and economic sustainability.
          </p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/30" />
            <input 
              type="text" 
              placeholder="SEARCH ASSETS..." 
              className="w-full bg-surface border border-border-subtle rounded-md py-2.5 pl-9 pr-4 text-[10px] font-black text-white placeholder:text-white/20 focus:outline-none focus:border-blue-light/50 transition-colors uppercase tracking-widest"
            />
          </div>
          <button className="bg-surface border border-border-subtle p-2.5 rounded-md hover:bg-white/5 transition-colors">
            <Filter className="w-4 h-4 text-white/60" />
          </button>
        </div>
      </div>

      {/* Methodology Grid - High Density */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
        {[
          { icon: Zap, title: 'Technology', desc: 'Architecture, scalability, and decentralization.' },
          { icon: Shield, title: 'Security', desc: 'Audits, vulnerabilities, and resilience.' },
          { icon: Activity, title: 'Market', desc: 'Liquidity, volume, and performance.' },
          { icon: Database, title: 'Tokenomics', desc: 'Distribution, inflation, and utility.' }
        ].map((item, i) => (
          <div key={i} className="bg-surface border border-border-subtle p-4 rounded-md space-y-2">
            <div className="flex items-center gap-2">
              <item.icon className="w-3.5 h-3.5 text-blue-light" />
              <h3 className="text-[10px] font-black text-white uppercase tracking-widest">{item.title}</h3>
            </div>
            <p className="text-[9px] text-white/40 font-bold uppercase tracking-tight leading-tight">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Ratings Table - High Density */}
      <div className="bg-surface border border-border-subtle rounded-md overflow-hidden shadow-2xl">
        <div className="p-4 border-b border-border-subtle flex items-center justify-between bg-black/50">
          <h2 className="text-xs font-black text-white uppercase tracking-widest">HGM Rating Index</h2>
          <div className="flex items-center gap-4 text-[9px] font-black text-white/40 uppercase tracking-widest">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-green-bullish" /> Verified</span>
            <span className="flex items-center gap-1.5"><Info className="w-3 h-3 text-blue-light" /> Methodology</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border-subtle bg-black/30">
                <th className="px-4 py-4 text-[9px] font-black text-white/40 uppercase tracking-widest">Asset</th>
                <th className="px-4 py-4 text-[9px] font-black text-white/40 uppercase tracking-widest text-center">Overall</th>
                <th className="px-4 py-4 text-[9px] font-black text-white/40 uppercase tracking-widest text-center">Tech</th>
                <th className="px-4 py-4 text-[9px] font-black text-white/40 uppercase tracking-widest text-center">Security</th>
                <th className="px-4 py-4 text-[9px] font-black text-white/40 uppercase tracking-widest text-center">Market</th>
                <th className="px-4 py-4 text-[9px] font-black text-white/40 uppercase tracking-widest text-center">Tokenomics</th>
                <th className="px-4 py-4 text-[9px] font-black text-white/40 uppercase tracking-widest text-center">Risk Profile</th>
                <th className="px-4 py-4 text-[9px] font-black text-white/40 uppercase tracking-widest text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle">
              {ratings.map((rating, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors group cursor-pointer">
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-black border border-border-subtle rounded-md p-1.5 flex items-center justify-center">
                        <Image src={rating.icon} alt={rating.asset} width={20} height={20} className="rounded-full" unoptimized />
                      </div>
                      <div>
                        <div className="text-xs font-black text-white leading-none uppercase tracking-tight">{rating.asset}</div>
                        <div className="text-[9px] font-bold text-white/40 uppercase tracking-tighter mt-0.5">{rating.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <span className={`text-lg font-black ${getScoreColor(rating.score)} tracking-tighter`}>{rating.score}</span>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <span className={`text-[10px] font-black ${getScoreColor(rating.tech)}`}>{rating.tech}</span>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <span className={`text-[10px] font-black ${getScoreColor(rating.security)}`}>{rating.security}</span>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <span className={`text-[10px] font-black ${getScoreColor(rating.market)}`}>{rating.market}</span>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <span className={`text-[10px] font-black ${getScoreColor(rating.tokenomics)}`}>{rating.tokenomics}</span>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded border ${rating.risk === 'Low' ? 'text-green-bullish border-green-bullish/20 bg-green-bullish/5' : 'text-yellow-500 border-yellow-500/20 bg-yellow-500/5'}`}>
                      {rating.risk}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right">
                    <button className="text-[9px] font-black text-white/40 uppercase tracking-widest hover:text-blue-light transition-colors">Full Report</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer Info - High Density */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-surface border border-border-subtle p-6 rounded-md space-y-4">
          <div className="flex items-center gap-3">
            <BarChart3 className="w-5 h-5 text-blue-light" />
            <h3 className="text-sm font-black text-white uppercase tracking-tight">Rating Distribution</h3>
          </div>
          <div className="space-y-3">
            {[
              { label: 'A Range (Institutional)', count: 12, color: 'bg-green-bullish' },
              { label: 'B Range (Speculative)', count: 45, color: 'bg-blue-light' },
              { label: 'C Range (High Risk)', count: 128, color: 'bg-yellow-500' },
              { label: 'D/F Range (Distressed)', count: 342, color: 'bg-red-bearish' }
            ].map((dist, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-[9px] font-black uppercase tracking-tight">
                  <span className="text-white/60">{dist.label}</span>
                  <span className="text-white">{dist.count}</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className={`h-full ${dist.color}`} style={{ width: `${(dist.count / 527) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-black border border-border-subtle p-6 rounded-md flex flex-col justify-center space-y-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
            <h3 className="text-sm font-black text-white uppercase tracking-tight">Disclaimer</h3>
          </div>
          <p className="text-[10px] text-white/40 font-bold uppercase tracking-tight leading-relaxed">
            HGM Ratings are independent evaluations based on publicly available data and proprietary models. Ratings do not constitute financial advice. Investors should perform their own due diligence before committing capital to any digital asset.
          </p>
          <button className="text-[9px] font-black text-blue-light uppercase tracking-widest hover:text-white transition-colors text-left">
            READ FULL DISCLOSURE & METHODOLOGY
          </button>
        </div>
      </div>

    </div>
  );
}
