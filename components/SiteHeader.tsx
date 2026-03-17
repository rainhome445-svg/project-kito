'use client';

import Link from 'next/link';
import { Search, Menu, X, Box, User, Bell } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const mainLinks = [
    { name: 'NEWS', href: '/news' },
    { name: 'RESEARCH', href: '/research' },
    { name: 'LEARNS', href: '/learns' },
    { name: 'PEOPLE', href: '/people' },
  ];

  return (
    <header className="w-full bg-background/80 backdrop-blur-md border-b border-border-subtle sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="font-heading font-bold uppercase text-2xl tracking-tighter text-text-primary group-hover:text-blue-light transition-colors">
              HGM TERMINAL
            </span>
            <div className="flex items-center gap-1.5 bg-surface border border-border-subtle px-2 py-0.5 rounded-sm">
              <span className="w-2 h-2 rounded-full bg-red-bearish animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
              <span className="font-mono text-[10px] font-bold text-text-secondary tracking-widest uppercase">Live</span>
            </div>
          </Link>

          {/* Center: Links */}
          <nav className="hidden md:flex items-center gap-8">
            {mainLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'font-mono uppercase text-xs tracking-widest transition-colors',
                  pathname === link.href ? 'text-white' : 'text-text-muted hover:text-white'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right: Action */}
          <div className="flex items-center gap-4">
            <Link
              href="/about"
              className="hidden sm:block font-mono uppercase text-xs tracking-widest text-text-muted hover:text-white transition-colors"
            >
              ABOUT ME
            </Link>
            <button
              className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-background border-b border-border-subtle overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-64' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-4">
          {mainLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-mono uppercase text-sm tracking-widest text-text-secondary hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="border-t border-border-subtle pt-4 mt-2">
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-mono uppercase text-sm tracking-widest text-text-secondary hover:text-white transition-colors"
            >
              ABOUT ME
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
