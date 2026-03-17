import { Headphones, PlayCircle, Clock, Calendar, ArrowRight, Mic2, Search, Filter, Share2, Download, List } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PodcastsPage() {
  const episodes = [
    { id: 1, title: 'The Evolution of Layer 2 Scaling Solutions', show: 'The Scoop', host: 'Frank Chaparro', duration: '45 min', date: 'Oct 24, 2024', image: 'https://picsum.photos/seed/podcast1/400/400', category: 'INFRASTRUCTURE' },
    { id: 2, title: 'Institutional Adoption: What\'s Next?', show: 'Empire', host: 'Jason Yanowitz', duration: '52 min', date: 'Oct 22, 2024', image: 'https://picsum.photos/seed/podcast2/400/400', category: 'MARKETS' },
    { id: 3, title: 'Navigating the Regulatory Landscape', show: 'Unchained', host: 'Laura Shin', duration: '60 min', date: 'Oct 20, 2024', image: 'https://picsum.photos/seed/podcast3/400/400', category: 'POLICY' },
    { id: 4, title: 'Deep Dive: Tokenomics of New Protocols', show: 'Bankless', host: 'Ryan Sean Adams', duration: '75 min', date: 'Oct 18, 2024', image: 'https://picsum.photos/seed/podcast4/400/400', category: 'DEFI' },
    { id: 5, title: 'The Future of Web3 Gaming Economies', show: 'HGM Special', host: 'Alex Rivet', duration: '40 min', date: 'Oct 15, 2024', image: 'https://picsum.photos/seed/podcast5/400/400', category: 'GAMING' },
    { id: 6, title: 'Bitcoin as a Treasury Asset', show: 'The Scoop', host: 'Frank Chaparro', duration: '55 min', date: 'Oct 12, 2024', image: 'https://picsum.photos/seed/podcast6/400/400', category: 'MACRO' },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
      
      {/* Header - High Density */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10 border-b border-border-subtle pb-10">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-blue-light font-black text-[10px] uppercase tracking-[0.2em]">
            <Mic2 className="w-3 h-3" /> Audio Intelligence
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-none">
            HGM <span className="text-blue-light">Podcasts</span>
          </h1>
          <p className="text-xs text-white/50 font-bold max-w-2xl uppercase tracking-tight">
            Deep-dive conversations with the architects of the digital asset economy.
          </p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/30" />
            <input 
              type="text" 
              placeholder="SEARCH EPISODES..." 
              className="w-full bg-surface border border-border-subtle rounded-md py-2.5 pl-9 pr-4 text-[10px] font-black text-white placeholder:text-white/20 focus:outline-none focus:border-blue-light/50 transition-colors uppercase tracking-widest"
            />
          </div>
          <button className="bg-surface border border-border-subtle p-2.5 rounded-md hover:bg-white/5 transition-colors">
            <Filter className="w-4 h-4 text-white/60" />
          </button>
        </div>
      </div>

      {/* Featured Episode - High Density */}
      <div className="group relative bg-black border border-border-subtle rounded-md overflow-hidden flex flex-col lg:flex-row mb-12 shadow-2xl">
        <div className="relative w-full lg:w-1/2 aspect-video lg:aspect-auto overflow-hidden">
          <Image 
            src="https://picsum.photos/seed/featured-pod/1200/800" 
            alt="Featured Podcast"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
            sizes="(max-width: 1200px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:hidden" />
          <div className="absolute top-6 left-6 flex items-center gap-3">
             <div className="bg-blue-light text-white text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded">
              LATEST EPISODE
            </div>
            <div className="bg-black/80 backdrop-blur-md border border-white/10 text-white text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-red-bearish rounded-full animate-pulse" /> LIVE NOW
            </div>
          </div>
        </div>
        <div className="p-8 lg:p-12 flex-1 flex flex-col justify-center space-y-6">
          <div className="space-y-2">
            <div className="text-blue-light font-black text-[10px] uppercase tracking-widest">THE SCOOP • EPISODE #452</div>
            <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tighter uppercase leading-tight group-hover:text-blue-light transition-colors">
              The Institutional Pivot: Why Wall Street is Finally All-In
            </h2>
            <p className="text-xs text-white/60 font-bold leading-relaxed uppercase tracking-tight max-w-xl">
              Frank Chaparro sits down with the Head of Digital Assets at BlackRock to discuss the unprecedented demand for spot ETFs and the future of institutional custody.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button className="bg-white text-black font-black py-3 px-8 rounded-md text-[10px] uppercase tracking-[0.2em] hover:bg-white/90 transition-colors flex items-center gap-2">
              <PlayCircle className="w-4 h-4" /> LISTEN NOW
            </button>
            <button className="bg-surface border border-border-subtle text-white font-black py-3 px-6 rounded-md text-[10px] uppercase tracking-[0.2em] hover:bg-white/5 transition-colors flex items-center gap-2">
              <List className="w-4 h-4" /> VIEW SHOW NOTES
            </button>
          </div>
        </div>
      </div>

      {/* Episodes Grid - High Density */}
      <div className="space-y-8">
        <div className="flex items-center justify-between border-b border-border-subtle pb-4">
          <h2 className="text-xs font-black text-white uppercase tracking-widest">Recent Episodes</h2>
          <div className="flex gap-2">
            {['ALL', 'THE SCOOP', 'EMPIRE', 'UNCHAINED', 'HGM SPECIAL'].map((tab) => (
              <button key={tab} className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded transition-colors ${tab === 'ALL' ? 'bg-white text-black' : 'text-white/40 hover:text-white hover:bg-white/5'}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {episodes.map((episode) => (
            <div key={episode.id} className="bg-surface border border-border-subtle rounded-md overflow-hidden group hover:border-white/20 transition-all">
              <div className="relative aspect-video overflow-hidden">
                <Image 
                  src={episode.image} 
                  alt={episode.title}
                  fill
                  className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 bg-white/10 backdrop-blur-md border border-white/10 px-2 py-1 rounded text-[8px] font-black text-white uppercase tracking-widest">
                  {episode.category}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-blue-light flex items-center justify-center text-white shadow-2xl">
                    <PlayCircle className="w-6 h-6 ml-0.5" />
                  </div>
                </div>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-tighter">
                  <span className="text-blue-light">{episode.show}</span>
                  <span className="text-white/40">{episode.duration} • {episode.date}</span>
                </div>
                <h3 className="text-sm font-black text-white leading-tight uppercase tracking-tight group-hover:text-blue-light transition-colors line-clamp-2">
                  {episode.title}
                </h3>
                <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
                  <span className="text-[9px] font-bold text-white/40 uppercase">HOST: {episode.host}</span>
                  <div className="flex items-center gap-3">
                    <button className="p-1.5 hover:bg-white/5 rounded transition-colors">
                      <Share2 className="w-3.5 h-3.5 text-white/40" />
                    </button>
                    <button className="p-1.5 hover:bg-white/5 rounded transition-colors">
                      <Download className="w-3.5 h-3.5 text-white/40" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="px-8 py-3 bg-surface border border-border-subtle text-[10px] font-black text-white uppercase tracking-[0.2em] rounded-md hover:bg-white/5 transition-colors">
            EXPLORE FULL CATALOG
          </button>
        </div>
      </div>

      {/* Featured Shows - High Density */}
      <div className="mt-20 space-y-8">
        <h2 className="text-xs font-black text-white uppercase tracking-widest border-b border-border-subtle pb-4">Featured Shows</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'The Scoop', desc: 'Deep dives with industry leaders.', host: 'Frank Chaparro', episodes: 452 },
            { title: 'Empire', desc: 'Exploring the business of crypto.', host: 'Jason Yanowitz', episodes: 328 },
            { title: 'Unchained', desc: 'Your no-hype resource for all things crypto.', host: 'Laura Shin', episodes: 512 }
          ].map((show, i) => (
            <div key={i} className="bg-surface border border-border-subtle p-6 rounded-md flex items-center gap-5 group hover:border-blue-light/30 transition-all cursor-pointer">
              <div className="w-14 h-14 bg-black border border-border-subtle rounded-md flex items-center justify-center shrink-0 group-hover:bg-blue-light/10 transition-colors">
                <Mic2 className="w-6 h-6 text-blue-light" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-black text-white uppercase tracking-tight group-hover:text-blue-light transition-colors">{show.title}</h3>
                <p className="text-[10px] text-white/40 font-bold uppercase tracking-tight leading-tight">{show.desc}</p>
                <div className="text-[9px] font-black text-white/20 uppercase tracking-widest pt-1">
                  {show.host} • {show.episodes} EPISODES
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
