import Image from 'next/image';
import Link from 'next/link';
import { User, ArrowRight } from 'lucide-react';

export function AboutMeWidget() {
  return (
    <div className="flex flex-col bg-surface rounded-md p-5 border border-border-subtle relative group overflow-hidden">
      <div className="flex items-center justify-between mb-4 relative z-10">
        <h2 className="text-[10px] font-black text-white uppercase tracking-widest flex items-center gap-2">
          <User className="w-3 h-3 text-blue-light" />
          Developer Profile
        </h2>
      </div>

      <div className="relative w-16 h-16 mb-4 overflow-hidden rounded-full border-2 border-blue-light/20 group-hover:border-blue-light transition-colors">
        <Image
          src="https://picsum.photos/seed/developer/128/128"
          alt="Developer"
          fill
          className="object-cover"
          sizes="64px"
        />
      </div>

      <div className="flex flex-col gap-1 relative z-10">
        <h3 className="text-sm font-black text-white leading-none tracking-tight">
          Harven Global
        </h3>
        <p className="text-[10px] text-text-secondary font-bold uppercase tracking-tighter mb-2">
          Lead Architect & Visionary
        </p>
        <p className="text-[11px] text-white/60 leading-tight mb-4">
          Building the next generation of institutional-grade media terminals. Focused on high-density data visualization and blockchain transparency.
        </p>
        <Link href="/about" className="text-[10px] font-black text-blue-light hover:text-white uppercase tracking-widest flex items-center gap-1 transition-colors">
          View Vision <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}
