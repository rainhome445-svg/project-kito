import { User, Target, Eye, Code, Globe, Linkedin, Twitter, Github, ArrowRight, Shield } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
          <div className="relative w-48 h-48 lg:w-64 lg:h-64 shrink-0 overflow-hidden rounded-md border border-border-subtle bg-surface">
            <Image 
              src="https://picsum.photos/seed/harven/512/512" 
              alt="Harven"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-none">
                HARVEN GLOBAL
              </h1>
              <p className="text-xl lg:text-2xl font-bold text-blue-light uppercase tracking-widest">
                Lead Architect & Visionary
              </p>
            </div>
            <p className="text-lg text-white/70 leading-relaxed font-medium">
              Dedicated to redefining digital media through high-density data visualization and institutional-grade reporting. My vision is to build a transparent, decentralized information hub that empowers the global Web3 community.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Github, href: '#' },
                { icon: Globe, href: '#' }
              ].map((social, i) => (
                <Link key={i} href={social.href} className="p-3 bg-surface border border-border-subtle rounded-md text-white/50 hover:text-blue-light hover:border-blue-light/50 transition-all">
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-20">
        <div className="bg-surface border border-border-subtle p-8 rounded-md space-y-4">
          <div className="w-12 h-12 bg-blue-light/10 rounded-md flex items-center justify-center border border-blue-light/20">
            <Target className="w-6 h-6 text-blue-light" />
          </div>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight">The Mission</h2>
          <p className="text-white/60 leading-relaxed">
            To provide the most accurate, high-density, and actionable data in the digital asset space. We eliminate noise and focus on the signals that matter for institutional and retail participants alike.
          </p>
        </div>
        <div className="bg-surface border border-border-subtle p-8 rounded-md space-y-4">
          <div className="w-12 h-12 bg-blue-light/10 rounded-md flex items-center justify-center border border-blue-light/20">
            <Eye className="w-6 h-6 text-blue-light" />
          </div>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight">The Vision</h2>
          <p className="text-white/60 leading-relaxed">
            A world where information is not just consumed but verified. HGM Media aims to be the primary terminal for the decentralized economy, bridging the gap between raw data and human understanding.
          </p>
        </div>
      </div>

      {/* Core Values - High Density */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-sm font-black text-white uppercase tracking-[0.3em] mb-10 text-center">Core Principles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Shield, title: 'Integrity', desc: 'Unbiased reporting and verified data sources.' },
            { icon: Code, title: 'Innovation', desc: 'Cutting-edge UI/UX for complex data.' },
            { icon: Globe, title: 'Global', desc: '24/7 coverage of the worldwide markets.' },
            { icon: Target, title: 'Precision', desc: 'Institutional-grade depth in every piece.' }
          ].map((value, i) => (
            <div key={i} className="bg-surface border border-border-subtle p-6 rounded-md hover:border-blue-light/30 transition-all group">
              <value.icon className="w-8 h-8 text-blue-light mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-black text-white mb-2 uppercase tracking-tight">{value.title}</h3>
              <p className="text-xs text-white/50 leading-relaxed font-medium">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience/Timeline - Dense */}
      <div className="max-w-4xl mx-auto border-t border-border-subtle pt-20">
        <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-12">The Journey</h2>
        <div className="space-y-12">
          {[
            { year: '2024', title: 'HGM Media Launch', desc: 'Established the foundation for a high-density media terminal.' },
            { year: '2022', title: 'Web3 Architecture', desc: 'Designed decentralized protocols for data transparency.' },
            { year: '2020', title: 'Data Visualization', desc: 'Focused on institutional-grade UI for complex financial systems.' }
          ].map((item, i) => (
            <div key={i} className="flex gap-8 group">
              <div className="text-2xl font-black text-blue-light/30 group-hover:text-blue-light transition-colors shrink-0 pt-1">
                {item.year}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-black text-white uppercase tracking-tight">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
