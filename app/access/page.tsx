import { Key, Unlock, Users, Zap, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function AccessPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
      
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-light/10 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-md bg-white/5 border border-white/10 mb-8 backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.05)]">
          <Key className="w-8 h-8 text-blue-light" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
          Unlock the Full Power of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">HGM Media</span>
        </h1>
        <p className="text-xl text-text-secondary mb-10 leading-relaxed max-w-3xl mx-auto">
          HGM Access is your passport to exclusive research, private community channels, early event registration, and premium data tools.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-blue-light hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] flex items-center justify-center gap-2">
            Get Access Now <ArrowRight className="w-4 h-4" />
          </button>
          <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 backdrop-blur-sm">
            Learn More
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {[
          { icon: Unlock, title: 'Premium Research', desc: 'Full access to all deep-dive reports, market analysis, and token evaluations.' },
          { icon: Users, title: 'Private Community', desc: 'Join our exclusive Discord server to network with analysts and other members.' },
          { icon: Zap, title: 'Early Alpha', desc: 'Get early notifications on breaking news, market movements, and new trends.' },
          { icon: Shield, title: 'Ad-Free Experience', desc: 'Enjoy a clean, uninterrupted reading experience across the entire HGM platform.' }
        ].map((feature, i) => (
          <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-md p-6 hover:bg-white/10 transition-colors group">
            <div className="w-12 h-12 rounded-md bg-blue-light/10 flex items-center justify-center mb-6 border border-blue-light/20 group-hover:scale-110 transition-transform">
              <feature.icon className="w-6 h-6 text-blue-light" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-text-secondary text-sm leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Membership Tiers */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Choose Your Access Level</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Standard Tier */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-white/20 transition-colors">
            <h3 className="text-2xl font-bold text-white mb-2">HGM Access</h3>
            <p className="text-text-secondary mb-6">For individual investors and enthusiasts.</p>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-5xl font-bold text-white">$29</span>
              <span className="text-text-secondary">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                'Unlimited articles and news',
                'Weekly market recap newsletter',
                'Access to standard research reports',
                'Ad-free reading experience'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-blue-light shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <button className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-md transition-colors border border-white/10">
              Subscribe Monthly
            </button>
          </div>

          {/* Pro Tier */}
          <div className="bg-gradient-to-b from-blue-900/40 to-black backdrop-blur-md border border-blue-light/30 rounded-3xl p-8 relative overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.15)] transform md:-translate-y-4">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-light/20 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
            <div className="absolute top-4 right-4 bg-blue-light text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              Most Popular
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">HGM Access Pro</h3>
            <p className="text-blue-light/80 mb-6">For professionals and active traders.</p>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-5xl font-bold text-white">$99</span>
              <span className="text-text-secondary">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                'Everything in Standard',
                'Full access to all Pro research reports',
                'Private Discord community access',
                'Early access to event tickets',
                'Exclusive monthly AMA with analysts'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/90">
                  <CheckCircle2 className="w-5 h-5 text-blue-light shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <button className="w-full bg-blue-light hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.4)]">
              Subscribe Pro
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
