import { mockPredictionMarkets } from '@/data/mock';
import { Flame } from 'lucide-react';

export function PredictionMarketWidget() {
  return (
    <div className="bg-surface border border-border-subtle rounded-md p-5">
      <div className="flex items-center gap-2 mb-4">
        <Flame className="w-4 h-4 text-warning" />
        <h3 className="text-[10px] font-bold tracking-[0.05em] uppercase text-text-tertiary">
          Trending Prediction Markets
        </h3>
      </div>
      
      <div className="space-y-4">
        {mockPredictionMarkets.map((market) => (
          <div key={market.id} className="group border border-border-subtle rounded-md p-3 hover:border-blue-deep transition-colors bg-surface">
            <h4 className="text-text-primary text-sm font-medium mb-2 group-hover:text-blue-deep transition-colors">{market.title}</h4>
            <div className="flex items-center justify-between mb-2">
              <div className="flex-grow mr-4 bg-border-subtle rounded-full h-1.5 overflow-hidden">
                <div 
                  className="bg-blue-deep h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${market.percentage}%` }}
                />
              </div>
              <span className="font-mono text-text-primary font-bold text-sm">{market.percentage}%</span>
            </div>
            <div className="flex items-center justify-between mt-3">
              <span className="text-xs text-text-tertiary font-mono">Vol: {market.volume}</span>
              <button className="text-xs font-medium text-blue-deep hover:text-blue-deep/80 transition-colors">
                View Polymarket
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
