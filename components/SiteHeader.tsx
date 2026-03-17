'use client';

import Link from 'next/link';
import { Search, Menu, X, Box, User, Bell } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const topLinks = [
    { name: 'ACCESS', href: '/access' },
    { name: 'CAMPUS', href: '/campus' },
    { name: 'HGM PRO', href: '/pro' },
    { name: 'HGM RESEARCH', href: '/research' },
    { name: 'HGM DATA', href: '/market' },
    { name: 'HGM EVENTS', href: '/events' },
    { name: 'HGM PODCASTS', href: '/podcasts' },
    { name: 'HGM NEWSLETTERS', href: '/newsletters' },
  ];

  const mainLinks = [
    { name: 'NEWS', href: '/news' },
    { name: 'DATA', href: '/market' },
    { name: 'RESEARCH', href: '/research' },
    { name: 'LEARN', href: '/learn' },
    { name: 'WEB3', href: '/web3' },
    { name: 'PRICES', href: '/prices' },
    { name: 'RATINGS', href: '/ratings' },
    { name: 'ABOUT', href: '/about' },
  ];

  return (
    <header className="w-full bg-background/80 backdrop-blur-md border-b border-border-subtle sticky top-0 z-50">
      {/* Top Tier */}
      <div className="hidden lg:flex items-center justify-center gap-6 px-6 py-2 border-b border-border-subtle bg-[#111]/90 backdrop-blur-sm">
        {topLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-[10px] font-semibold text-text-secondary hover:text-text-primary transition-colors tracking-wide"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Main Tier */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-black text-2xl tracking-tighter text-white group-hover:text-blue-light transition-colors">
              HGM Terminal
            </span>
            <div className="flex items-center gap-1.5 ml-1">
              <span className="w-2 h-2 rounded-sm bg-red-500 animate-pulse" />
              <span className="text-[9px] font-bold text-white/60 tracking-widest uppercase">Live</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {mainLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'text-xs font-semibold transition-all hover:text-blue-light tracking-wide relative group',
                  pathname === link.href ? 'text-blue-light' : 'text-text-primary'
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-6 left-0 w-full h-[2px] bg-blue-light transition-transform origin-left",
                  pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )} />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="p-2 text-text-primary hover:text-blue-light transition-all bg-white/5 hover:bg-white/10 rounded-md backdrop-blur-md border border-white/5">
              <Search className="w-4 h-4" />
            </button>
            <button className="hidden sm:block p-2 text-text-primary hover:text-blue-light transition-all bg-white/5 hover:bg-white/10 rounded-md backdrop-blur-md border border-white/5">
              <Bell className="w-4 h-4" />
            </button>
            <button className="hidden sm:block p-2 text-text-primary hover:text-blue-light transition-all bg-white/5 hover:bg-white/10 rounded-md backdrop-blur-md border border-white/5">
              <User className="w-4 h-4" />
            </button>
            <button className="hidden lg:block bg-blue-light hover:bg-blue-deep text-white text-xs font-semibold px-5 py-2.5 rounded-md tracking-wide transition-all border border-transparent hover:border-white/10 ml-2">
              SUBSCRIBE
            </button>
            <button
              className="lg:hidden p-2 text-text-primary hover:text-blue-light transition-all bg-white/5 hover:bg-white/10 rounded-md backdrop-blur-md border border-white/5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - CSS Only */}
      <div 
        className={`lg:hidden bg-background/95 backdrop-blur-xl border-b border-border-subtle overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-4">
          {mainLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                'text-lg font-semibold p-2 transition-colors tracking-wide rounded-md',
                pathname === link.href ? 'text-blue-light bg-white/5' : 'text-text-primary hover:text-blue-light hover:bg-white/5'
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="border-t border-border-subtle pt-4 mt-2 grid grid-cols-2 gap-4">
            {topLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs font-semibold text-text-secondary hover:text-text-primary transition-colors tracking-wide p-2 hover:bg-white/5 rounded-md"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
