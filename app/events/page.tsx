import { Calendar, MapPin, Users, ArrowRight, Clock, Ticket, Globe, Star, Zap, Search, Filter, Share2, Download } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function EventsPage() {
  const upcomingEvents = [
    { id: 1, title: 'Digital Asset Summit 2024', date: 'Nov 12-14, 2024', location: 'London, UK', type: 'CONFERENCE', image: 'https://picsum.photos/seed/event1/800/600', status: 'REGISTRATION OPEN' },
    { id: 2, title: 'DeFi Summer Meetup', date: 'Aug 24, 2024', location: 'Paris, France', type: 'MEETUP', image: 'https://picsum.photos/seed/event2/800/600', status: 'LIMITED SLOTS' },
    { id: 3, title: 'Web3 Developer Workshop', date: 'Sep 05, 2024', location: 'Online', type: 'WORKSHOP', image: 'https://picsum.photos/seed/event3/800/600', status: 'FREE ACCESS' },
    { id: 4, title: 'Institutional Crypto Forum', date: 'Oct 10, 2024', location: 'New York, USA', type: 'FORUM', image: 'https://picsum.photos/seed/event4/800/600', status: 'INVITE ONLY' },
    { id: 5, title: 'Modular Blockchain Summit', date: 'Oct 25, 2024', location: 'Berlin, Germany', type: 'CONFERENCE', image: 'https://picsum.photos/seed/event5/800/600', status: 'EARLY BIRD' },
    { id: 6, title: 'Global Regulatory Roundtable', date: 'Nov 02, 2024', location: 'Singapore', type: 'ROUNDTABLE', image: 'https://picsum.photos/seed/event6/800/600', status: 'CLOSED DOOR' },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
      
      {/* Header - High Density */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 border-b border-border-subtle pb-10">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-blue-light font-black text-[10px] uppercase tracking-[0.2em]">
            <Calendar className="w-3 h-3" /> Global Event Protocol
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-none">
            HGM <span className="text-blue-light">Events</span>
          </h1>
          <p className="text-xs text-white/50 font-bold max-w-2xl uppercase tracking-tight">
            Connecting the architects of the decentralized economy through high-impact physical and digital gatherings.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/30" />
            <input 
              type="text" 
              placeholder="SEARCH EVENTS..." 
              className="w-full bg-surface border border-border-subtle rounded-md py-2.5 pl-9 pr-4 text-[10px] font-black text-white placeholder:text-white/20 focus:outline-none focus:border-blue-light/50 transition-colors uppercase tracking-widest"
            />
          </div>
          <button className="bg-surface border border-border-subtle p-2.5 rounded-md hover:bg-white/5 transition-colors">
            <Filter className="w-4 h-4 text-white/60" />
          </button>
        </div>
      </div>

      {/* Featured Event - High Density */}
      <div className="group relative bg-black border border-border-subtle rounded-md overflow-hidden flex flex-col lg:flex-row mb-12 shadow-2xl">
        <div className="relative w-full lg:w-3/5 aspect-video lg:aspect-auto overflow-hidden">
          <Image 
            src="https://picsum.photos/seed/das2024/1200/800" 
            alt="Featured Event"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
            sizes="(max-width: 1200px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:hidden" />
          <div className="absolute top-6 left-6 flex items-center gap-3">
             <div className="bg-blue-light text-white text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded">
              FLAGSHIP EVENT
            </div>
            <div className="bg-black/80 backdrop-blur-md border border-white/10 text-white text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-bullish rounded-full animate-pulse" /> REGISTRATION ACTIVE
            </div>
          </div>
        </div>
        <div className="p-8 lg:p-12 flex-1 flex flex-col justify-center space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-blue-light font-black text-[10px] uppercase tracking-widest">
              <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> NOV 12-14, 2024</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" /> LONDON, UK</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tighter uppercase leading-tight group-hover:text-blue-light transition-colors">
              Digital Asset Summit 2024
            </h2>
            <p className="text-xs text-white/60 font-bold leading-relaxed uppercase tracking-tight max-w-xl">
              The premier institutional conference for digital assets. Join 2,000+ industry leaders for three days of high-level networking and strategic insights.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button className="bg-white text-black font-black py-3 px-8 rounded-md text-[10px] uppercase tracking-[0.2em] hover:bg-white/90 transition-colors flex items-center gap-2">
              <Ticket className="w-4 h-4" /> SECURE PASS
            </button>
            <button className="bg-surface border border-border-subtle text-white font-black py-3 px-6 rounded-md text-[10px] uppercase tracking-[0.2em] hover:bg-white/5 transition-colors flex items-center gap-2">
              VIEW AGENDA
            </button>
          </div>
        </div>
      </div>

      {/* Stats Bar - High Density */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { label: 'ANNUAL EVENTS', value: '12+', icon: Calendar },
          { label: 'TOTAL ATTENDEES', value: '25K+', icon: Users },
          { label: 'GLOBAL CITIES', value: '15+', icon: Globe },
          { label: 'EXPERT SPEAKERS', value: '500+', icon: Zap }
        ].map((stat, i) => (
          <div key={i} className="bg-surface border border-border-subtle rounded-md p-4 flex items-center gap-4 group hover:border-blue-light/30 transition-all">
            <div className="w-10 h-10 bg-black border border-border-subtle rounded-md flex items-center justify-center group-hover:bg-blue-light/10 transition-colors">
              <stat.icon className="w-5 h-5 text-blue-light" />
            </div>
            <div>
              <div className="text-lg font-black text-white uppercase tracking-tighter leading-none">{stat.value}</div>
              <div className="text-[8px] text-white/30 font-black uppercase tracking-widest">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Events Grid - High Density */}
      <div className="space-y-8 mb-20">
        <div className="flex items-center justify-between border-b border-border-subtle pb-4">
          <h2 className="text-xs font-black text-white uppercase tracking-widest">Upcoming Schedule</h2>
          <div className="flex gap-2">
            {['ALL', 'CONFERENCE', 'MEETUP', 'WORKSHOP', 'FORUM'].map((tab) => (
              <button key={tab} className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded transition-colors ${tab === 'ALL' ? 'bg-white text-black' : 'text-white/40 hover:text-white hover:bg-white/5'}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="bg-surface border border-border-subtle rounded-md overflow-hidden group hover:border-white/20 transition-all flex flex-col">
              <div className="relative aspect-video overflow-hidden">
                <Image 
                  src={event.image} 
                  alt={event.title}
                  fill
                  className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-white/10 px-2 py-1 rounded text-[8px] font-black text-white uppercase tracking-widest">
                  {event.type}
                </div>
                <div className="absolute bottom-3 right-3 bg-blue-light/20 backdrop-blur-md border border-blue-light/30 px-2 py-1 rounded text-[8px] font-black text-blue-light uppercase tracking-widest">
                  {event.status}
                </div>
              </div>
              <div className="p-5 space-y-4 flex-1 flex flex-col">
                <h3 className="text-base font-black text-white leading-tight uppercase tracking-tight group-hover:text-blue-light transition-colors line-clamp-2">
                  {event.title}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[9px] font-black text-white/40 uppercase tracking-tighter">
                    <Calendar className="w-3 h-3 text-blue-light" /> {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-[9px] font-black text-white/40 uppercase tracking-tighter">
                    <MapPin className="w-3 h-3 text-blue-light" /> {event.location}
                  </div>
                </div>
                <div className="pt-4 border-t border-border-subtle mt-auto">
                  <button className="w-full bg-black border border-border-subtle text-white font-black py-2.5 rounded-md text-[9px] uppercase tracking-[0.2em] hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                    LEARN MORE <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter - High Density */}
      <div className="bg-black border border-border-subtle rounded-md p-8 lg:p-12 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://picsum.photos/seed/event-news/1920/1080')] opacity-5 pointer-events-none" />
        <div className="relative z-10 flex-1 space-y-6">
          <div className="space-y-2">
            <div className="text-blue-light font-black text-[10px] uppercase tracking-[0.2em]">STAY SYNCHRONIZED</div>
            <h2 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-none">
              Never Miss a <span className="text-blue-light">Gathering</span>
            </h2>
            <p className="text-xs text-white/50 font-bold uppercase tracking-tight leading-relaxed max-w-xl">
              Subscribe to our events protocol to receive early-bird access, speaker announcements, and exclusive network discounts.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md">
            <input 
              type="email" 
              placeholder="ENTER EMAIL ADDRESS..." 
              className="flex-1 bg-surface border border-border-subtle rounded-md px-4 py-3 text-[10px] font-black text-white uppercase tracking-widest focus:outline-none focus:border-blue-light/50 transition-all placeholder:text-white/10"
            />
            <button className="bg-blue-light text-white font-black py-3 px-8 rounded-md text-[10px] uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-[0_0_30px_rgba(59,130,246,0.2)]">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div className="relative w-full lg:w-1/3 aspect-square max-w-sm rounded-2xl overflow-hidden border border-border-subtle shadow-2xl group">
           <Image 
            src="https://picsum.photos/seed/event-mock/800/800" 
            alt="Event Calendar"
            fill
            className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
             <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-md">
                <div className="text-white font-black text-xs uppercase tracking-widest mb-1">GLOBAL CALENDAR</div>
                <p className="text-[9px] text-white/60 font-bold uppercase tracking-tight">Sync our institutional event schedule directly to your terminal.</p>
             </div>
          </div>
        </div>
      </div>

    </div>
  );
}
