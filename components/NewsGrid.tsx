// NewsGrid.tsx
import React from 'react';
import {
  TrendingUpIcon,
  ZapIcon,
  RadioIcon,
  ShieldCheckIcon,
  NewspaperIcon,
  ClockIcon,
} from 'lucide-react';

type NewsItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  badge: 'Breaking' | 'Live' | 'Analysis' | 'Report' | 'Alert';
  hashtags: string[];
  timestamp: string;
  isFeatured?: boolean;
};

const newsData: NewsItem[] = [
  {
    id: '1',
    title: 'Bitcoin Surges Past $95K as Institutional Adoption Accelerates',
    description: 'Major banks announce expanded crypto services as BTC breaks key resistance levels.',
    category: 'Markets',
    badge: 'Breaking',
    hashtags: ['#Bitcoin', '#BTC', '#Crypto'],
    timestamp: '2h ago',
    isFeatured: true,
  },
  {
    id: '2',
    title: 'Ethereum Layer 2TVL Hits Record $50 Billion',
    description: 'Arbitrum and Optimism lead the scaling revolution with unprecedented growth.',
    category: 'Research',
    badge: 'Live',
    hashtags: ['#Ethereum', '#L2', '#DeFi'],
    timestamp: '4h ago',
  },
  {
    id: '3',
    title: 'SEC Approves Multiple Spot Ethereum ETFs',
    description: 'Landmark decision opens floodgates for institutional capital into ETH.',
    category: 'Markets',
    badge: 'Breaking',
    hashtags: ['#ETH', '#ETF', '#Regulation'],
    timestamp: '1h ago',
  },
  {
    id: '4',
    title: 'DeFi Protocol exploit nets $12M in Flash Loan Attack',
    description: 'Security researchers dissect the vulnerability that led to the exploit.',
    category: 'Security',
    badge: 'Alert',
    hashtags: ['#DeFi', '#Security', '#Hacks'],
    timestamp: '6h ago',
  },
  {
    id: '5',
    title: 'Solana Processing 3,000 TPS During Peak Traffic',
    description: 'Network demonstrates scalability as meme coin season drives activity.',
    category: 'Tech',
    badge: 'Analysis',
    hashtags: ['#Solana', '#Scaling', '#Web3'],
    timestamp: '3h ago',
  },
  {
    id: '6',
    title: 'BlackRock Tokenized Fund Reaches $500M AUM',
    description: 'Traditional finance giant sees massive uptake in digital asset products.',
    category: 'Markets',
    badge: 'Report',
    hashtags: ['#BlackRock', '#Tokenization', '#TradFi'],
    timestamp: '8h ago',
  },
  {
    id: '7',
    title: 'New Bitcoin ETF Options Trading Volume Hits $2B',
    description: 'Wall Street firms ramp up crypto derivatives offerings.',
    category: 'Markets',
    badge: 'Analysis',
    hashtags: ['#ETF', '#Options', '#Trading'],
    timestamp: '5h ago',
  },
  {
    id: '8',
    title: 'Major Protocol Launches Cross-Chain Bridge Protocol',
    description: 'Seamless asset transfer between 15+ blockchains now possible.',
    category: 'Tech',
    badge: 'Live',
    hashtags: ['#Bridge', '#CrossChain', '#Web3'],
    timestamp: '12h ago',
  },
];

const categoryIcons: Record<string, React.ElementType> = {
  Markets: TrendingUpIcon,
  Research: ZapIcon,
  Security: ShieldCheckIcon,
  Tech: RadioIcon,
};

const badgeStyles: Record<string, string> = {
  Breaking: 'bg-red-500/20 text-red-400 border-red-500/30',
  Live: 'bg-green-500/20 text-green-400 border-green-500/30',
  Analysis: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  Report: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  Alert: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
};

function NewsCard({ item, className = '' }: { item: NewsItem; className?: string }) {
  const Icon = categoryIcons[item.category] || NewspaperIcon;

  return (
    <article
      className={`
        group relative flex flex-col rounded-md border border-white/10 bg-[#11141D] 
        p-5 transition-all duration-300 hover:border-white/20 hover:transform hover:-translate-y-1
        ${className}
      `}
    >
      {/* Background grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-md"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4 text-white/60" />
          <span className="text-xs font-medium text-white/60 uppercase tracking-wider">
            {item.category}
          </span>
        </div>
        <span
          className={`
            inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider
            ${badgeStyles[item.badge]}
          `}
        >
          {item.badge}
        </span>
      </div>

      {/* Body */}
      <div className="relative z-10 flex-1 mb-4">
        <h3 className="mb-2 text-lg font-bold text-white leading-tight group-hover:text-blue-400 transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-white/50 line-clamp-2">
          {item.description}
        </p>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex items-center justify-between border-t border-white/5 pt-4">
        <div className="flex flex-wrap gap-2">
          {item.hashtags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-blue-400/80 hover:text-blue-400 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1 text-xs text-white/40">
          <ClockIcon className="h-3 w-3" />
          <span>{item.timestamp}</span>
        </div>
      </div>
    </article>
  );
}

export function NewsGrid() {
  const featured = newsData.find((n) => n.isFeatured);
  const regular = newsData.filter((n) => !n.isFeatured);

  return (
    <section className="w-full px-4 py-8 md:px-8 lg:px-12">
      {/* Section Header */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Latest News
        </h2>
        <a
          href="/news"
          className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
        >
          View All →
        </a>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Featured Card - Spans 2 columns and 2 rows on large screens */}
        {featured && (
          <NewsCard
            item={featured}
            className="md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2"
          />
        )}

        {/* Regular Cards */}
        {regular.slice(0, 4).map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}

        {/* Additional cards if needed */}
        {regular.slice(4).map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default NewsGrid;
