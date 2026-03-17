import { Mail, MessageSquare, MapPin, Phone, Send, ArrowRight, Globe, Shield, Zap, Search, Filter, Headphones, Mic2 } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
      
      {/* Header - High Density */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 border-b border-border-subtle pb-10">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-blue-light font-black text-[10px] uppercase tracking-[0.2em]">
            <MessageSquare className="w-3 h-3" /> Communication Hub
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-none">
            Contact <span className="text-blue-light">HGM</span>
          </h1>
          <p className="text-xs text-white/50 font-bold max-w-2xl uppercase tracking-tight">
            Connect with our editorial, research, and partnership teams across the globe.
          </p>
        </div>
        <div className="flex items-center gap-4 text-[9px] font-black text-white/30 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-bullish rounded-full" /> SYSTEM STATUS: ONLINE
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-light rounded-full" /> AVG RESPONSE: 2.4H
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
        
        {/* Left Column - Contact Info - High Density */}
        <div className="lg:col-span-4 space-y-6">
          {[
            { icon: Mail, title: 'Editorial Desk', desc: 'Tips, pitches, and press releases.', info: 'editorial@hgmmedia.com', action: 'SEND TIP' },
            { icon: Zap, title: 'Research Inquiry', desc: 'Institutional data and custom reports.', info: 'research@hgmmedia.com', action: 'REQUEST DATA' },
            { icon: Shield, title: 'Partnerships', desc: 'Advertising and strategic alliances.', info: 'partners@hgmmedia.com', action: 'EXPLORE' },
            { icon: MapPin, title: 'Global HQ', desc: 'Main operations and administration.', info: '123 Crypto Ave, Suite 400\nNew York, NY 10001', action: 'DIRECTIONS' }
          ].map((item, i) => (
            <div key={i} className="bg-surface border border-border-subtle rounded-md p-6 group hover:border-blue-light/30 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-black border border-border-subtle rounded-md flex items-center justify-center group-hover:bg-blue-light/10 transition-colors">
                  <item.icon className="w-5 h-5 text-blue-light" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-sm font-black text-white uppercase tracking-tight group-hover:text-blue-light transition-colors">{item.title}</h3>
                  <p className="text-[9px] text-white/40 font-bold uppercase tracking-tighter">{item.desc}</p>
                </div>
              </div>
              <div className="text-[11px] font-black text-white uppercase tracking-tight mb-4 whitespace-pre-line leading-tight">
                {item.info}
              </div>
              <button className="text-[9px] font-black text-blue-light uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors">
                {item.action} <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>

        {/* Right Column - Contact Form - High Density */}
        <div className="lg:col-span-8 bg-surface border border-border-subtle rounded-md p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://picsum.photos/seed/contact-bg/1200/800')] opacity-5 pointer-events-none" />
          
          <div className="relative z-10 space-y-10">
            <div className="space-y-2">
              <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Direct Message Terminal</h2>
              <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Fill out the parameters below to initiate a secure communication channel.</p>
            </div>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[9px] font-black text-white/30 uppercase tracking-widest ml-1">FULL NAME</label>
                <input 
                  type="text" 
                  className="w-full bg-black border border-border-subtle rounded-md px-4 py-3 text-[11px] font-black text-white uppercase tracking-widest focus:outline-none focus:border-blue-light/50 transition-all placeholder:text-white/10"
                  placeholder="ENTER NAME..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-black text-white/30 uppercase tracking-widest ml-1">EMAIL ADDRESS</label>
                <input 
                  type="email" 
                  className="w-full bg-black border border-border-subtle rounded-md px-4 py-3 text-[11px] font-black text-white uppercase tracking-widest focus:outline-none focus:border-blue-light/50 transition-all placeholder:text-white/10"
                  placeholder="ENTER EMAIL..."
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[9px] font-black text-white/30 uppercase tracking-widest ml-1">SUBJECT / DEPARTMENT</label>
                <select className="w-full bg-black border border-border-subtle rounded-md px-4 py-3 text-[11px] font-black text-white uppercase tracking-widest focus:outline-none focus:border-blue-light/50 transition-all appearance-none cursor-pointer">
                  <option value="general">GENERAL INQUIRY</option>
                  <option value="editorial">EDITORIAL / TIPS</option>
                  <option value="research">RESEARCH / DATA</option>
                  <option value="partners">PARTNERSHIPS</option>
                  <option value="support">TECHNICAL SUPPORT</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[9px] font-black text-white/30 uppercase tracking-widest ml-1">MESSAGE PAYLOAD</label>
                <textarea 
                  rows={6}
                  className="w-full bg-black border border-border-subtle rounded-md px-4 py-3 text-[11px] font-black text-white uppercase tracking-widest focus:outline-none focus:border-blue-light/50 transition-all placeholder:text-white/10 resize-none"
                  placeholder="ENTER MESSAGE..."
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button type="button" className="w-full bg-blue-light text-white font-black py-4 px-8 rounded-md text-[11px] uppercase tracking-[0.3em] hover:bg-blue-600 transition-all shadow-[0_0_30px_rgba(59,130,246,0.2)] flex items-center justify-center gap-3 group">
                  TRANSMIT MESSAGE <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Global Presence - High Density */}
      <div className="bg-surface border border-border-subtle rounded-md p-8 lg:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://picsum.photos/seed/map/1920/1080')] opacity-5 pointer-events-none" />
        <div className="relative z-10 space-y-10">
          <div className="space-y-2 text-center">
            <div className="text-blue-light font-black text-[10px] uppercase tracking-[0.2em]">GLOBAL NETWORK</div>
            <h2 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter">24/7 Coverage Across <span className="text-blue-light">5 Continents</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { city: 'NEW YORK', status: 'ACTIVE', time: 'EST' },
              { city: 'LONDON', status: 'ACTIVE', time: 'GMT' },
              { city: 'SINGAPORE', status: 'ACTIVE', time: 'SGT' },
              { city: 'BERLIN', status: 'ACTIVE', time: 'CET' },
              { city: 'DUBAI', status: 'ACTIVE', time: 'GST' }
            ].map((loc, i) => (
              <div key={i} className="bg-black border border-border-subtle rounded-md p-4 text-center space-y-2 group hover:border-blue-light/30 transition-all">
                <div className="text-[10px] font-black text-white uppercase tracking-widest group-hover:text-blue-light transition-colors">{loc.city}</div>
                <div className="flex items-center justify-center gap-2 text-[8px] font-bold text-white/30 uppercase tracking-tighter">
                  <span className="w-1 h-1 bg-emerald-bullish rounded-full" /> {loc.status} • {loc.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
