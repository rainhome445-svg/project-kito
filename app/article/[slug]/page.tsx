import { mockArticles } from '@/data/mock';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ReadingProgress } from '@/components/ReadingProgress';
import { FloatingShareBar } from '@/components/FloatingShareBar';
import { PopularNewsList } from '@/components/PopularNewsList';
import { PredictionMarketWidget } from '@/components/PredictionMarketWidget';
import Markdown from 'react-markdown';

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = mockArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <ReadingProgress />
      <FloatingShareBar />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Article Content (70%) */}
          <div className="lg:col-span-8">
            <header className="mb-8 relative">
              <span className="inline-block px-3 py-1 bg-blue-light/10 border border-blue-light/20 text-blue-light text-[10px] font-bold tracking-[0.05em] uppercase mb-6 rounded-md backdrop-blur-sm">
                {article.category}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {article.title}
              </h1>
              <div className="flex items-center gap-4 text-text-tertiary text-sm border-y border-white/10 py-4 mb-8 bg-white/5 backdrop-blur-sm px-4 rounded-md">
                <span className="font-medium text-white">By {article.author}</span>
                <span className="text-white/30">•</span>
                <span className="text-white/70">{article.date}</span>
              </div>
            </header>

            <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden mb-10 border border-white/10">
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div className="prose prose-lg prose-invert max-w-none prose-headings:text-white prose-a:text-blue-light hover:prose-a:text-blue-400 prose-blockquote:border-l-blue-light prose-blockquote:text-white/80 prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:backdrop-blur-sm prose-strong:text-white prose-p:text-white/80 prose-li:text-white/80">
              <Markdown>{article.content}</Markdown>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-2">
              {article.tags.map(tag => (
                <span key={tag} className="px-4 py-1.5 bg-white/5 backdrop-blur-sm rounded-md text-xs font-medium text-white/80 border border-white/10 hover:bg-white/10 hover:text-white transition-colors cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Sidebar (30%) */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24 h-fit">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-md p-6">
              <PredictionMarketWidget />
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-md p-6">
              <PopularNewsList />
            </div>
          </aside>

        </div>
      </div>
    </>
  );
}
