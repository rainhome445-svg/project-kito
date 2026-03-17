import { mockArticles } from '@/data/mock';
import { notFound } from 'next/navigation';
import { Newspaper, ArrowLeft, Search, Filter, ArrowRight, Clock, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default async function NewsCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params;
  
  // Map slug back to display name (simple version)
  const categoryName = categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1).replace(/-/g, ' ');
  
  const articles = mockArticles.filter(
    (a) => a.category.toLowerCase() === categorySlug.toLowerCase() || 
           categorySlug.toLowerCase() === 'all'
  );

  // If no articles found and it's not a known category, we could 404, 
  // but for demo let's just show what we have or mock it.
  const displayCategory = articles.length > 0 ? articles[0].category : categoryName.toUpperCase();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <Link href="/news" className="inline-flex items-center gap-2 text-blue-light hover:text-white transition-colors text-xs font-black uppercase tracking-widest mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to News Protocol
      </Link>

      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 border-b border-border-subtle pb-10">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-blue-light font-black text-[10px] uppercase tracking-[0.2em]">
            <Newspaper className="w-3 h-3" /> Domain Intelligence
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-none">
            {displayCategory} <span className="text-blue-light">Archive</span>
          </h1>
          <p className="text-xs text-white/50 font-bold max-w-2xl uppercase tracking-tight">
            Comprehensive coverage and deep-dive analysis of {displayCategory.toLowerCase()} developments within the digital asset ecosystem.
          </p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/30" />
            <input 
              type="text" 
              placeholder={`SEARCH ${displayCategory}...`} 
              className="w-full bg-surface border border-border-subtle rounded-md py-2.5 pl-9 pr-4 text-[10px] font-black text-white placeholder:text-white/20 focus:outline-none focus:border-blue-light/50 transition-colors uppercase tracking-widest"
            />
          </div>
        </div>
      </div>

      {articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="bg-surface border border-border-subtle rounded-md overflow-hidden group hover:border-white/20 transition-all flex flex-col">
              <Link href={`/article/${article.slug}`} className="relative aspect-video overflow-hidden block">
                <Image 
                  src={article.image} 
                  alt={article.title}
                  fill
                  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </Link>
              <div className="p-6 flex flex-col flex-grow space-y-4">
                <div className="flex items-center justify-between text-[9px] font-black text-white/40 uppercase tracking-widest">
                  <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {article.date}</span>
                  <span className="flex items-center gap-1.5"><User className="w-3 h-3" /> {article.author}</span>
                </div>
                <Link href={`/article/${article.slug}`}>
                  <h3 className="text-xl font-black text-white uppercase tracking-tighter leading-tight group-hover:text-blue-light transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                </Link>
                <p className="text-[11px] text-white/50 font-bold uppercase tracking-tight leading-relaxed line-clamp-3 flex-grow">
                  {article.excerpt}
                </p>
                <div className="pt-6 border-t border-border-subtle flex items-center justify-between">
                  <div className="flex gap-2">
                    {article.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[8px] font-black text-white/20 uppercase tracking-widest border border-white/10 px-1.5 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <Link href={`/article/${article.slug}`} className="text-[10px] font-black text-blue-light uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors">
                    READ MORE <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="bg-surface border border-border-subtle rounded-md p-20 text-center space-y-6">
          <div className="w-20 h-20 bg-black border border-border-subtle rounded-full flex items-center justify-center mx-auto">
            <Newspaper className="w-10 h-10 text-white/20" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-black text-white uppercase tracking-tighter">No Articles Found</h3>
            <p className="text-xs text-white/40 font-bold uppercase tracking-tight">We couldn&apos;t find any articles in the {displayCategory} domain at this time.</p>
          </div>
          <Link href="/news" className="inline-block bg-white text-black font-black py-3 px-8 rounded-md text-[10px] uppercase tracking-[0.2em] hover:bg-white/90 transition-colors">
            RETURN TO NEWS PROTOCOL
          </Link>
        </div>
      )}
    </div>
  );
}
