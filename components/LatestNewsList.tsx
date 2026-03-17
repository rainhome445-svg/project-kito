import Link from 'next/link';
import { mockArticles } from '@/data/mock';
import { Clock } from 'lucide-react';

export function LatestNewsList() {
  const latestNews = [
    { id: '1', time: '08:35 AM EDT', title: 'Binance founder Changpeng Zhao released from US custody', category: 'POLICY' },
    { id: '2', time: '08:15 AM EDT', title: 'Bitcoin price drops below $65,000 as spot ETFs see net outflows', category: 'MARKETS' },
    { id: '3', time: '07:45 AM EDT', title: 'Ethereum Foundation researcher Justin Drake proposes new consensus mechanism', category: 'CRYPTO ECOSYSTEMS' },
    { id: '4', time: '07:10 AM EDT', title: 'Solana-based DEX Jupiter announces airdrop details for early users', category: 'DEFI' },
    { id: '5', time: '06:30 AM EDT', title: 'UK regulator FCA issues warning against unauthorized crypto exchanges', category: 'POLICY' },
  ];

  return (
    <div className="flex flex-col bg-white/5 backdrop-blur-md border border-white/10 rounded-md p-6 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
      <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
        <div className="w-2 h-2 rounded-full bg-blue-light animate-pulse" />
        <h2 className="text-lg font-semibold text-white tracking-wide">
          Latest News
        </h2>
      </div>
      <div className="flex flex-col gap-5">
        {latestNews.map((article) => (
          <article key={article.id} className="group flex flex-col gap-2 border-b border-white/5 pb-5 last:border-0 last:pb-0 relative">
            <div className="absolute -left-3 top-0 bottom-0 w-1 bg-blue-light/0 group-hover:bg-blue-light/50 transition-colors rounded-r" />
            <div className="flex items-center gap-1.5 text-xs text-text-secondary font-mono font-medium">
              <Clock className="w-3 h-3" />
              <span>{article.time}</span>
            </div>
            <Link href={`/article/${article.id}`}>
              <h3 className="text-base font-bold text-white group-hover:text-blue-light transition-colors leading-snug">
                {article.title}
              </h3>
            </Link>
            <Link href={`/category/${article.category.toLowerCase()}`} className="font-heading uppercase text-blue-light hover:text-white transition-colors tracking-widest mt-1 inline-block w-fit bg-blue-light/10 px-2 py-0.5 rounded text-[10px] font-semibold">
              {article.category}
            </Link>
          </article>
        ))}
      </div>
      <Link href="/news" className="text-xs font-semibold text-white hover:text-blue-light transition-colors tracking-wide flex items-center justify-center gap-2 mt-6 pt-4 border-t border-white/10 bg-white/5 hover:bg-white/10 py-3 rounded-md">
        <span>See More Latest News</span>
        <span>→</span>
      </Link>
    </div>
  );
}
