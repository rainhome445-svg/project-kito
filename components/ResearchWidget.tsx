import Image from 'next/image';
import Link from 'next/link';
import { FileText, Download } from 'lucide-react';

export function ResearchWidget() {
  return (
    <div className="flex flex-col bg-white/5 backdrop-blur-md border border-white/10 rounded-md p-6 shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative group overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="flex items-center justify-between mb-6 relative z-10">
        <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
          RESEARCH
        </h2>
        <span className="text-[10px] text-purple-400 font-bold uppercase tracking-wider border border-purple-500/30 bg-purple-500/10 px-2 py-0.5 rounded-full flex items-center gap-1">
          <FileText className="w-3 h-3" /> Report
        </span>
      </div>

      <Link href="#" className="relative w-full aspect-[16/9] mb-5 overflow-hidden bg-black/50 rounded-md border border-white/10 block z-10">
        <Image
          src="https://picsum.photos/seed/research-new/400/225"
          alt="Research"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
          sizes="(max-width: 1024px) 100vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        <div className="absolute bottom-3 right-3 w-8 h-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <Download className="w-4 h-4 text-white" />
        </div>
      </Link>

      <div className="flex flex-col gap-2 relative z-10">
        <span className="text-[10px] text-purple-400 font-bold uppercase tracking-wider bg-purple-500/10 w-fit px-2 py-0.5 rounded">
          By HGM Research Team
        </span>
        <Link href="#">
          <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors leading-snug">
            The State of Crypto 2024: Institutional Adoption & Market Trends
          </h3>
        </Link>
        <p className="text-sm text-text-secondary line-clamp-2 mt-1">
          A comprehensive 150-page analysis of the digital asset ecosystem, covering DeFi, NFTs, and regulatory shifts.
        </p>
      </div>
    </div>
  );
}
