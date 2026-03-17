'use client';

import { useAppStore } from '@/lib/store';
import Link from 'next/link';
import { Twitter, Linkedin, Github, Youtube, Instagram } from 'lucide-react';

export function Footer() {
  const { setCookieConsentOpen } = useAppStore();

  return (
    <footer className="bg-background-secondary border-t border-border-subtle mt-12 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 bg-white text-black rounded-md flex items-center justify-center font-semibold text-sm group-hover:bg-blue-light group-hover:text-white transition-all">
                H
              </div>
              <span className="font-bold text-2xl tracking-tight text-text-primary group-hover:text-blue-light transition-colors">
                HGM MEDIA
              </span>
            </Link>
            <p className="text-text-secondary text-sm max-w-md mb-6 leading-relaxed">
              HGM Terminal is an institutional-grade Web3 media and real-time cryptocurrency data platform delivering breaking news and market analytics.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-md text-text-tertiary hover:text-blue-light transition-all border border-white/5">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-md text-text-tertiary hover:text-blue-light transition-all border border-white/5">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-md text-text-tertiary hover:text-blue-light transition-all border border-white/5">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-md text-text-tertiary hover:text-blue-light transition-all border border-white/5">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-md text-text-tertiary hover:text-blue-light transition-all border border-white/5">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-text-primary font-semibold mb-4 text-xs tracking-wide">Platform</h4>
            <ul className="space-y-3">
              <li><Link href="/news" className="text-text-secondary hover:text-blue-light text-sm transition-colors">News</Link></li>
              <li><Link href="/market" className="text-text-secondary hover:text-blue-light text-sm transition-colors">Markets</Link></li>
              <li><Link href="/research" className="text-text-secondary hover:text-blue-light text-sm transition-colors">Research</Link></li>
              <li><Link href="/learn" className="text-text-secondary hover:text-blue-light text-sm transition-colors">Learn</Link></li>
              <li><Link href="/web3" className="text-text-secondary hover:text-blue-light text-sm transition-colors">Web3 Hub</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-text-primary font-semibold mb-4 text-xs tracking-wide">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="/podcasts" className="text-text-secondary hover:text-blue-light text-sm transition-colors">Podcasts</Link></li>
              <li><Link href="/events" className="text-text-secondary hover:text-blue-light text-sm transition-colors">Events</Link></li>
              <li><Link href="/newsletters" className="text-text-secondary hover:text-blue-light text-sm transition-colors">Newsletters</Link></li>
              <li><Link href="/prices" className="text-text-secondary hover:text-blue-light text-sm transition-colors">Prices</Link></li>
              <li><Link href="/ratings" className="text-text-secondary hover:text-blue-light text-sm transition-colors">Ratings</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-text-primary font-semibold mb-4 text-xs tracking-wide">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-text-secondary hover:text-blue-light text-sm transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-text-secondary hover:text-blue-light text-sm transition-colors">Contact</Link></li>
              <li><Link href="/pro" className="text-text-secondary hover:text-blue-light text-sm transition-colors">Pro Access</Link></li>
              <li>
                <button 
                  onClick={() => setCookieConsentOpen(true)}
                  className="text-text-secondary hover:text-blue-light text-sm transition-colors"
                >
                  Your Privacy
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-tertiary text-xs">
            © {new Date().getFullYear()} Harven Global Media. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-text-tertiary hover:text-blue-light text-xs transition-colors">Terms of Service</Link>
            <Link href="#" className="text-text-tertiary hover:text-blue-light text-xs transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
