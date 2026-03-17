import { mockArticles } from '@/data/mock';
import { LatestNewsList } from '@/components/LatestNewsList';
import { AboutMeWidget } from '@/components/AboutMeWidget';
import { ResearchWidget } from '@/components/ResearchWidget';
import Image from 'next/image';
import Link from 'next/link';
import { Lock, ArrowRight, PlayCircle, TrendingUp, Zap } from 'lucide-react';

export default function Home() {
  const featuredArticle = mockArticles[0];
  const gridArticles = mockArticles.slice(1, 7); // 6 articles for denser grid
  const moreArticles = mockArticles.slice(7, 15); // 8 more articles for density

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
        
        {/* Left Column (20%) */}
        <aside className="lg:col-span-3 space-y-6 lg:sticky lg:top-24 h-fit">
          <LatestNewsList />
          
          {/* Trending Topics Widget */}
          <div className="bg-surface rounded-md p-4 border border-border-subtle relative overflow-hidden group">
            <div className="flex items-center gap-2 mb-4 relative z-10 pb-2 border-b border-border-subtle">
              <TrendingUp className="w-4 h-4 text-blue-light" />
              <h3 className="text-xs font-semibold text-white tracking-wide">Trending</h3>
            </div>
            <div className="flex flex-wrap gap-1.5 relative z-10">
              {['Bitcoin ETF', 'Ethereum', 'Solana', 'DeFi', 'Regulation', 'AI & Crypto', 'L2s', 'RWA'].map((topic) => (
                <Link key={topic} href={`/search?q=${topic}`} className="text-[10px] font-bold text-text-secondary bg-white/5 hover:bg-white/10 hover:text-white px-2 py-1 rounded-md transition-all border border-white/5">
                  {topic}
                </Link>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content Area (55%) */}
        <div className="lg:col-span-6 space-y-8">
          
          {/* Hero Featured */}
          <article className="relative group flex flex-col gap-4 border-b border-border-subtle pb-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="bg-blue-light text-white px-1.5 py-0.5 rounded-md font-heading uppercase tracking-widest text-[10px] font-semibold">
                  BREAKING
                </span>
                <span className="text-blue-light/70 font-heading uppercase tracking-widest text-[10px] font-semibold">
                  REGULATION
                </span>
              </div>
              <Link href={`/article/${featuredArticle.slug}`}>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white mb-1 leading-tight tracking-tighter group-hover:text-blue-light transition-colors">
                  Binance founder Changpeng Zhao released from US custody
                </h1>
              </Link>
              <div className="flex items-center gap-2 font-heading uppercase tracking-widest text-[10px] font-semibold text-text-secondary">
                <span className="text-white/60">Tim Copeland</span>
                <span>•</span>
                <span>Sept 27, 2024</span>
              </div>
            </div>
            <Link href={`/article/${featuredArticle.slug}`} className="relative w-full aspect-[21/9] overflow-hidden bg-black mt-1 rounded-md block border border-border-subtle">
              <Image 
                src="https://picsum.photos/seed/cz-binance/1200/600" 
                alt="Binance founder Changpeng Zhao"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-1000 opacity-80"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            </Link>
          </article>

          {/* Trending Market Movers - Fill void below hero */}
          <div className="border-t border-b border-border-subtle py-4">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-4 h-4 text-blue-light" />
              <h3 className="text-xs font-bold text-white tracking-widest uppercase">Trending Movers</h3>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {[
                { symbol: 'BTC', price: '$67,234', change: '+2.4%', up: true },
                { symbol: 'ETH', price: '$2,456', change: '-1.1%', up: false },
                { symbol: 'SOL', price: '$145.60', change: '+5.2%', up: true },
                { symbol: 'MATIC', price: '$1.25', change: '+4.2%', up: true },
                { symbol: 'AVAX', price: '$28.20', change: '+3.1%', up: true },
                { symbol: 'ATOM', price: '$12.34', change: '+3.8%', up: true },
                { symbol: 'NEAR', price: '$4.90', change: '+2.1%', up: true },
                { symbol: 'FIL', price: '$4.10', change: '+3.0%', up: true },
              ].map((item) => (
                <Link 
                  key={item.symbol} 
                  href={`/prices?symbol=${item.symbol}`}
                  className="flex items-center gap-3 px-3 py-2 bg-black/50 border border-border-subtle rounded-md hover:bg-white/5 transition-colors min-w-fit"
                >
                  <span className="text-xs font-bold text-white">{item.symbol}</span>
                  <span className="text-xs font-mono text-white/80">{item.price}</span>
                  <span className={`text-[10px] font-bold ${item.up ? 'text-green-bullish' : 'text-red-bearish'}`}>
                    {item.change}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Breaking Quick-Bites - Fill gap between sections */}
          <div className="py-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-red-500 rounded-sm animate-pulse" />
              <h3 className="text-xs font-bold text-white tracking-widest uppercase">Breaking Quick-Bites</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { title: 'SEC delays Bitcoin ETF decision again', time: '5m ago', category: 'Regulation' },
                { title: 'Solana network hits new TPS record', time: '12m ago', category: 'Tech' },
                { title: 'Major DeFi protocol announces governance upgrade', time: '18m ago', category: 'DeFi' },
                { title: 'Coinbase expands to 3 new European markets', time: '25m ago', category: 'Business' },
              ].map((item, idx) => (
                <Link 
                  key={idx} 
                  href={`/article/breaking-${idx}`}
                  className="flex items-start gap-3 p-3 bg-black/30 border border-border-subtle rounded-md hover:bg-white/5 transition-colors group"
                >
                  <div className="flex flex-col items-center min-w-[40px]">
                    <span className="text-[10px] font-bold text-blue-light">{item.time}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs font-medium text-white group-hover:text-blue-light transition-colors leading-snug">{item.title}</h4>
                    <span className="text-[9px] text-white/50 uppercase">{item.category}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Denser Article Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gridArticles.map((article) => (
              <article key={article.id} className="flex flex-col gap-2 group">
                <Link href={`/article/${article.slug}`} className="relative w-full aspect-[16/9] overflow-hidden bg-black rounded-md border border-border-subtle block">
                  <Image 
                    src={article.image} 
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 opacity-70"
                    sizes="(max-width: 1024px) 50vw, 20vw"
                  />
                </Link>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-text-secondary font-heading uppercase tracking-widest text-[10px] font-semibold">
                    <span className="text-blue-light">{article.category}</span>
                    <span>•</span>
                    <span>{article.author}</span>
                  </div>
                  <Link href={`/article/${article.slug}`}>
                    <h3 className="text-sm font-semibold text-white group-hover:text-blue-light transition-colors leading-tight line-clamp-2">
                      {article.title}
                    </h3>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          {/* Video Section - More Compact */}
          <div className="border-t border-border-subtle pt-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-white tracking-wide flex items-center gap-2">
                <PlayCircle className="w-4 h-4 text-blue-light" />
                HGM TV
              </h2>
              <Link href="/video" className="text-[10px] font-semibold text-blue-light hover:text-white tracking-wide flex items-center gap-1 transition-colors">
                View All <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="relative w-full aspect-video rounded-md overflow-hidden group cursor-pointer border border-border-subtle bg-black">
              <Image 
                src="https://picsum.photos/seed/video-thumb/1200/675" 
                alt="Video Thumbnail"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-300 opacity-60"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                  <PlayCircle className="w-6 h-6 text-white ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <span className="bg-red-600 text-white text-[8px] font-semibold px-1.5 py-0.5 tracking-tight rounded-sm mb-2 inline-flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-white animate-pulse" /> LIVE
                </span>
                <h3 className="text-lg font-semibold text-white leading-none tracking-tight">The Future of Digital Assets Summit 2024</h3>
              </div>
            </div>
          </div>

          {/* Latest Research & News - Dense grid above footer */}
          <div className="border-t border-border-subtle pt-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-white tracking-wide flex items-center gap-2">
                <Zap className="w-4 h-4 text-blue-light" />
                Latest Research & News
              </h2>
              <Link href="/news" className="text-[10px] font-semibold text-blue-light hover:text-white tracking-wide flex items-center gap-1 transition-colors">
                View All <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { title: 'DeFi Liquidity Pools Reach New Highs', category: 'Research', time: '2h ago', img: 'defi' },
                { title: 'Layer-2 Adoption Accelerates in Q4', category: 'Tech', time: '3h ago', img: 'layer2' },
                { title: 'Institutional inflows into Bitcoin ETFs', category: 'Markets', time: '4h ago', img: 'etf' },
                { title: 'Cross-chain bridges see record volume', category: 'Infra', time: '5h ago', img: 'bridge' },
                { title: 'Smart contract audit demand surges', category: 'Security', time: '6h ago', img: 'audit' },
                { title: 'NFT utility drives new use cases', category: 'NFT', time: '7h ago', img: 'nft' },
                { title: 'Governance tokens show strong performance', category: 'Analytics', time: '8h ago', img: 'governance' },
                { title: 'Wallet providers expand global coverage', category: 'UX', time: '9h ago', img: 'wallet' },
              ].map((item, idx) => (
                <Link 
                  key={idx} 
                  href={`/article/research-${idx}`}
                  className="group block rounded-md border border-border-subtle overflow-hidden bg-black hover:bg-white/5 transition-colors"
                >
                  <div className="relative h-32 overflow-hidden">
                    <Image 
                      src={`https://picsum.photos/seed/${item.img}/400/300`}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3">
                    <div className="text-[10px] font-bold text-blue-light uppercase tracking-wider mb-1">{item.category}</div>
                    <h3 className="text-sm font-medium text-white leading-snug line-clamp-2">{item.title}</h3>
                    <div className="text-[9px] text-white/50 mt-2">{item.time}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
        </div>

        {/* Right Column (25%) */}
        <aside className="lg:col-span-3 space-y-6 lg:sticky lg:top-24 h-fit">
          <AboutMeWidget />
          <ResearchWidget />
          
          {/* Access Ad Widget - Minimalist */}
          <div className="bg-surface rounded-md p-5 flex flex-col gap-3 border border-border-subtle relative overflow-hidden group">
            <div className="flex items-center gap-2 relative z-10">
              <div className="w-6 h-6 bg-blue-light rounded-md flex items-center justify-center text-white font-semibold text-[10px]">
                H
              </div>
              <span className="text-lg font-semibold tracking-tight text-white leading-none">access</span>
            </div>
            <p className="text-white/60 font-medium relative z-10 text-[11px] leading-tight">
              Unlimited access to HGM Media&apos;s premium content and institutional data.
            </p>
            <div className="flex items-start gap-2 mt-1 relative z-10 bg-black p-3 rounded-md border border-border-subtle">
              <Lock className="w-3 h-3 text-blue-light shrink-0 mt-0.5" />
              <p className="text-[10px] text-text-secondary leading-tight font-medium">
                Exodus launches non-custodial payments as it expands
              </p>
            </div>
            <button className="mt-1 w-full bg-white text-black text-[10px] font-semibold py-2.5 rounded-md tracking-wide hover:bg-blue-light hover:text-white transition-all flex items-center justify-center gap-2">
              Unlock Access <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </aside>

      </div>
    </div>
  );
}
