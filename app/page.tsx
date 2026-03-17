import Image from 'next/image';
import Link from 'next/link';
import { mockArticles } from '@/data/mock';
// Keep other imports if used later, removed unused ones for the hero implementation

export default function Home() {
  const mainArticle = mockArticles[0] || {
    id: '1',
    title: 'Binance founder Changpeng Zhao released from US custody',
    category: 'Regulation',
    author: 'Tim Copeland',
    date: 'Sept 27, 2024',
    slug: 'cz-released',
    image: 'https://picsum.photos/seed/cz-binance/1200/600'
  };

  const sideArticles = [
    {
      id: '2',
      title: 'SEC delays Bitcoin ETF options decision',
      category: 'Markets',
      author: 'James Seyffart',
      date: 'Sept 27',
      slug: 'sec-delays-etf',
      image: 'https://picsum.photos/seed/sec-etf/600/400'
    },
    {
      id: '3',
      title: 'Solana network hits new TPS record during meme coin frenzy',
      category: 'Tech',
      author: 'Sarah Wood',
      date: 'Sept 26',
      slug: 'solana-tps-record',
      image: 'https://picsum.photos/seed/solana/600/400'
    },
    {
      id: '4',
      title: 'Major DeFi protocol announces V3 upgrade with concentrated liquidity',
      category: 'DeFi',
      author: 'Defi Ignas',
      date: 'Sept 26',
      slug: 'defi-v3-upgrade',
      image: 'https://picsum.photos/seed/defi/600/400'
    }
  ];

  // Institutional Research mock data (4 reports)
  const researchReports = [
    {
      id: 'res-1',
      title: 'Q3 2024 Market Structure Report: The Impact of Institutional Spot ETFs',
      tag: 'MARKET REPORT',
      excerpt: 'An in-depth analysis of liquidity shifts, trading volume distribution, and order book depth following the approval and listing of major spot cryptocurrency ETFs.',
      image: 'https://images.unsplash.com/photo-1640161704729-cbe966a08476?auto=format&fit=crop&q=80&w=800',
      readTime: '45 MIN READ',
      slug: 'q3-2024-market-structure'
    },
    {
      id: 'res-2',
      title: 'State of Ethereum Rollups: Analyzing L2 Value Accrual',
      tag: 'ON-CHAIN DATA',
      excerpt: 'Evaluating the revenue models, sequencer fees, and overall value capture mechanisms of top Ethereum Layer 2 scaling solutions post-Dencun upgrade.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
      readTime: '30 MIN READ',
      slug: 'state-of-ethereum-rollups'
    },
    {
      id: 'res-3',
      title: 'Regulatory Landscape: Global Stablecoin Frameworks',
      tag: 'DEEP DIVE',
      excerpt: 'A comprehensive comparative study of emerging stablecoin regulations across the US, EU (MiCA), UK, and major Asian financial hubs.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
      readTime: '60 MIN READ',
      slug: 'global-stablecoin-frameworks'
    },
    {
      id: 'res-4',
      title: 'Decentralized Physical Infrastructure Networks (DePIN)',
      tag: 'SECTOR OVERVIEW',
      excerpt: 'Exploring the intersection of blockchain technology and real-world infrastructure, from decentralized wireless networks to compute and energy grids.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
      readTime: '55 MIN READ',
      slug: 'depin-sector-overview'
    }
  ];

  // Flash News mock data (8 articles)
  const flashNewsArticles = Array.from({ length: 8 }).map((_, i) => ({
    id: `flash-${i}`,
    title: [
      'Federal Reserve hints at potential rate cuts in Q4 following inflation report',
      'Ethereum layer-2 TVL hits all-time high as gas fees drop to record lows',
      'New European crypto regulations spark debate among major exchange operators',
      'Institutional crypto investment products see 5th consecutive week of inflows',
      'Bitcoin mining difficulty adjusts upwards by 3.5% as hash rate climbs',
      'Major tech firm announces integration of stablecoin payments for global vendors',
      'NFT market shows signs of revival with blue-chip collections rallying',
      'Central bank digital currency pilot expands to include cross-border transactions'
    ][i],
    category: ['MACRO', 'TECH', 'REGULATION', 'MARKETS', 'MINING', 'ADOPTION', 'NFTS', 'CBDC'][i],
    excerpt: [
      'The latest CPI print came in slightly lower than expected, prompting markets to price in a higher probability of aggressive monetary easing by year-end.',
      'Optimism and Arbitrum lead the charge as the Dencun upgrade continues to drive users toward more cost-effective scaling solutions.',
      'MiCA implementation approaches, leading to a wave of compliance updates and strategic shifts from global trading platforms operating in the EU.',
      'Digital asset funds saw $400M in net inflows this week, heavily skewed towards Bitcoin but with growing interest in multi-asset products.',
      'Miners continue to deploy more efficient rigs ahead of the halving, pushing the network security to unprecedented levels despite margin pressures.',
      'The payment giant will now settle invoices using USDC, citing speed and reduced friction in international wire transfers.',
      'Pudgy Penguins and BAYC floor prices have seen a 15% uptick over the past 72 hours, accompanied by a surge in trading volume across major marketplaces.',
      'Three central banks have joined the collaborative project testing atomic settlement capabilities for wholesale CBDCs.'
    ][i],
    timeAgo: [`2 HOURS AGO`, `4 HOURS AGO`, `5 HOURS AGO`, `7 HOURS AGO`, `8 HOURS AGO`, `12 HOURS AGO`, `14 HOURS AGO`, `16 HOURS AGO`][i],
    slug: `flash-article-${i}`
  }));

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
      {/* HERO SECTION - The Bento Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-8">
        
        {/* Main Featured Card (Span 8 cols) */}
        <Link
          href={`/article/${mainArticle.slug}`}
          className="lg:col-span-8 h-[500px] lg:h-[600px] rounded-sm border border-border-subtle overflow-hidden relative group block bg-surface"
        >
          <Image
            src={mainArticle.image}
            alt={mainArticle.title}
            fill
            priority
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 1024px) 100vw, 66vw"
          />
          {/* Heavy gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
          
          {/* Content (Absolute Bottom Left) */}
          <div className="absolute bottom-0 left-0 p-6 sm:p-8 flex flex-col gap-3 w-full">
            <span className="font-mono text-[10px] uppercase tracking-widest font-bold text-blue-light bg-blue-light/10 w-fit px-2 py-1 rounded-sm border border-blue-light/20">
              {mainArticle.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary leading-[1.1] tracking-tighter group-hover:text-blue-light transition-colors duration-300">
              {mainArticle.title}
            </h1>
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-text-tertiary mt-2">
              <span className="font-semibold text-text-secondary">{mainArticle.author}</span>
              <span>{"//"}</span>
              <span>{mainArticle.date}</span>
            </div>
          </div>
        </Link>

        {/* Sidebar Stack (Span 4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-4 h-[500px] lg:h-[600px]">
          {sideArticles.map((article) => (
            <Link
              key={article.id}
              href={`/article/${article.slug}`}
              className="flex-1 rounded-sm border border-border-subtle relative overflow-hidden group block bg-surface"
            >
              <Image 
                src={article.image}
                alt={article.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Content (Absolute Bottom Left) */}
              <div className="absolute bottom-0 left-0 p-4 sm:p-5 flex flex-col gap-2 w-full">
                <span className="font-mono text-[9px] uppercase tracking-widest font-bold text-blue-light">
                  {article.category}
                </span>
                <h2 className="text-lg sm:text-xl font-heading font-bold text-text-primary leading-[1.1] tracking-tight group-hover:text-blue-light transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PHASE 3 - FLASH NEWS SECTION */}
      <section className="border-t border-border-subtle pt-8 mt-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl sm:text-3xl uppercase font-bold font-heading">
            FLASH NEWS
          </h2>
          <Link
            href="/archive"
            className="text-xs uppercase tracking-widest font-mono text-muted-foreground hover:text-foreground transition-colors"
          >
            VIEW ARCHIVE &rarr;
          </Link>
        </div>

        {/* 4-Column Dense Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {flashNewsArticles.map((article) => (
            <Link
              key={article.id}
              href={`/article/${article.slug}`}
              className="flex flex-col p-5 rounded-sm border border-border-subtle group hover:bg-white/5 transition-colors cursor-pointer"
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
                {article.category}
              </span>
              <h3 className="font-heading text-lg font-bold leading-snug mb-3 group-hover:underline text-foreground">
                {article.title}
              </h3>
              <p className="text-xs text-muted-foreground line-clamp-3 mb-4 flex-grow">
                {article.excerpt}
              </p>
              <div className="font-mono text-[10px] uppercase text-muted-foreground border-t border-border-subtle pt-3">
                {article.timeAgo}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PHASE 4 - INSTITUTIONAL RESEARCH SECTION */}
      <section className="mt-16 pt-8 border-t border-border-subtle mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl uppercase font-bold font-heading">
            INSTITUTIONAL RESEARCH
          </h2>
          <Link
            href="/research"
            className="text-xs uppercase tracking-widest font-mono text-muted-foreground hover:text-foreground transition-colors"
          >
            VIEW PDF LIBRARY &rarr;
          </Link>
        </div>

        {/* 2-Column Horizontal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {researchReports.map((report) => (
            <Link
              key={report.id}
              href={`/research/${report.slug}`}
              className="flex flex-col sm:flex-row border border-border-subtle rounded-sm overflow-hidden group hover:bg-white/5 transition-colors cursor-pointer h-full"
            >
              {/* Image Area */}
              <div className="w-full sm:w-2/5 h-48 sm:h-auto relative overflow-hidden shrink-0">
                <Image
                  src={report.image}
                  alt={report.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
              </div>

              {/* Content Area */}
              <div className="p-6 sm:w-3/5 flex flex-col justify-center">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3 border border-border-subtle w-max px-2 py-0.5 rounded-sm">
                  {report.tag}
                </span>
                <h3 className="font-heading text-xl font-bold leading-snug mb-3 group-hover:text-muted-foreground text-foreground transition-colors duration-300 line-clamp-2">
                  {report.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                  {report.excerpt}
                </p>
                <div className="font-mono text-[10px] uppercase text-muted-foreground">
                  {report.readTime} &bull; FULL REPORT
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
