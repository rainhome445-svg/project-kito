import { Article } from '@/data/mock';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface ArticleCardProps {
  article: Article;
  className?: string;
}

export function ArticleCard({ article, className }: ArticleCardProps) {
  return (
    <article className={cn("flex flex-col gap-3 group", className)}>
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#1a1a1a] rounded-md border border-border-subtle">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02] opacity-90"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-2 text-xs text-text-secondary mb-1">
          <span className="font-heading uppercase tracking-widest text-[10px]">{article.category}</span>
          <span className="text-white/20">•</span>
          <span>By {article.author}</span>
        </div>
        <Link href={`/article/${article.slug}`}>
          <h3 className="text-lg font-semibold text-slate-100 group-hover:text-blue-light transition-colors leading-snug">
            {article.title}
          </h3>
        </Link>
      </div>
    </article>
  );
}
