'use client';

import { mockTickers } from '@/data/mock';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function LiveTicker() {
  const [tickers, setTickers] = useState(mockTickers);

  // Simulate price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTickers((current) =>
        current.map((ticker) => {
          // Randomly update some tickers
          if (Math.random() > 0.7) {
            const isUp = Math.random() > 0.5;
            return { ...ticker, isUp };
          }
          return ticker;
        })
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black/40 backdrop-blur-md border-b border-white/10 py-2 overflow-hidden flex whitespace-nowrap items-center sticky top-16 z-40 shadow-sm">
      {/* Brand Section */}
      <div className="flex items-center gap-2 px-4 border-r border-white/10 z-10 bg-black/60 backdrop-blur-xl shrink-0 h-full shadow-[4px_0_10px_rgba(0,0,0,0.2)]">
        <span className="font-heading font-black text-white text-sm tracking-tighter">HGM</span>
        <span className="text-white/30 text-sm font-mono">|</span>
        <span className="font-body text-text-secondary text-sm font-normal">Markets</span>
        <div className="flex items-center gap-1.5 ml-2 px-2 py-0.5 rounded-full bg-blue-light/10 border border-blue-light/20">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-light animate-pulse" />
          <span className="text-blue-light text-[10px] font-heading font-bold uppercase tracking-widest">Live</span>
        </div>
      </div>
      
      {/* Ticker Data Section - Monospace for tabular alignment */}
      <div className="animate-marquee flex gap-8 px-4">
        {/* Render twice for seamless loop */}
        {[...tickers, ...tickers].map((ticker, i) => (
          <div key={`${ticker.symbol}-${i}`} className="flex items-center gap-2 font-mono text-xs hover:bg-white/5 px-2 py-1 rounded transition-colors cursor-default">
            {/* Symbol: Monospace, Medium weight */}
            <span className="font-mono font-medium text-slate-300">{ticker.symbol}</span>
            {/* Price: Monospace, Bold - essential for data clarity */}
            <span className="font-mono font-bold text-slate-100">
              {ticker.price}
            </span>
            {/* Change: Monospace with color indicator */}
            <span
              className={cn(
                'font-mono font-medium flex items-center gap-0.5',
                ticker.isUp ? 'text-green-400' : 'text-red-400'
              )}
            >
              {ticker.isUp ? '▲' : '▼'} {ticker.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
