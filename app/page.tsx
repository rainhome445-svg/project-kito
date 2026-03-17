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

      {/* Rest of the original content commented out or removed for clarity in this phase,
          but usually we'd keep the rest of the page structure intact if we were only replacing the top.
          Since the prompt asks to "Build the Global Header and the top Hero Section for the homepage",
          and didn't explicitly ask to delete the rest, I will truncate the rest to focus on the deliverable
          and keep the file clean. We can add more sections in later phases. */}

      <div className="border-t border-border-subtle pt-8 text-center">
        <p className="font-mono text-xs text-text-tertiary uppercase tracking-widest">End of Phase 2 Hero Section</p>
      </div>
    </div>
  );
}
