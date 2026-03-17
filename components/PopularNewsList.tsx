import { mockArticles } from '@/data/mock';
import Link from 'next/link';

export function PopularNewsList() {
  const popularArticles = mockArticles.slice(0, 5);

  return (
    <div className="bg-surface border border-border-subtle rounded-md p-5">
      <h3 className="text-[10px] font-semibold font-heading uppercase tracking-widest text-text-tertiary mb-4">
        Popular News
      </h3>
      <div className="space-y-4">
        {popularArticles.map((article, index) => (
          <Link href={`/article/${article.slug}`} key={article.id} className="flex gap-4 group">
            <span className="text-2xl font-mono font-bold text-text-tertiary group-hover:text-blue-deep transition-colors">
              {index + 1}
            </span>
            <div>
              <h4 className="text-sm font-medium text-text-primary group-hover:text-blue-deep transition-colors line-clamp-2 leading-snug">
                {article.title}
              </h4>
              <span className="font-heading uppercase tracking-widest text-[10px] font-semibold text-text-tertiary mt-1 block">{article.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
