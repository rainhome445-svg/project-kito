'use client';

import { useState } from 'react';
import { ArrowUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CoinData {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  volume: string;
}

const initialData: CoinData[] = [
  { id: '1', name: 'Bitcoin', symbol: 'BTC', price: 67890.00, change24h: 2.3, volume: '$32.5B' },
  { id: '2', name: 'Ethereum', symbol: 'ETH', price: 3456.20, change24h: -1.2, volume: '$15.2B' },
  { id: '3', name: 'Solana', symbol: 'SOL', price: 145.50, change24h: 5.4, volume: '$3.1B' },
  { id: '4', name: 'Binance Coin', symbol: 'BNB', price: 590.10, change24h: 0.8, volume: '$1.8B' },
  { id: '5', name: 'Ripple', symbol: 'XRP', price: 0.52, change24h: -2.1, volume: '$900M' },
];

export function SortableTable() {
  const [data, setData] = useState(initialData);
  const [sortConfig, setSortConfig] = useState<{ key: keyof CoinData; direction: 'asc' | 'desc' } | null>(null);

  const handleSort = (key: keyof CoinData) => {
    let direction: 'asc' | 'desc' = 'desc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'desc') {
      direction = 'asc';
    }
    setSortConfig({ key, direction });

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });
    setData(sortedData);
  };

  return (
    <div className="bg-surface border border-border-subtle rounded-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border-subtle bg-surface-hover/30">
              <th className="p-4 text-xs font-medium text-text-tertiary uppercase tracking-wider">
                Asset
              </th>
              <th 
                className="p-4 text-xs font-medium text-text-tertiary uppercase tracking-wider cursor-pointer hover:text-text-primary transition-colors"
                onClick={() => handleSort('price')}
              >
                <div className="flex items-center gap-1">
                  Price <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th 
                className="p-4 text-xs font-medium text-text-tertiary uppercase tracking-wider cursor-pointer hover:text-text-primary transition-colors"
                onClick={() => handleSort('change24h')}
              >
                <div className="flex items-center gap-1">
                  24h Change <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th 
                className="p-4 text-xs font-medium text-text-tertiary uppercase tracking-wider cursor-pointer hover:text-text-primary transition-colors"
                onClick={() => handleSort('volume')}
              >
                <div className="flex items-center gap-1">
                  Volume <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-subtle/50">
            {data.map((coin) => (
              <tr key={coin.id} className="hover:bg-surface-hover/50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface-hover flex items-center justify-center text-xs font-bold text-text-secondary">
                      {coin.symbol[0]}
                    </div>
                    <div>
                      <div className="font-medium text-text-primary">{coin.name}</div>
                      <div className="text-xs text-text-tertiary">{coin.symbol}</div>
                    </div>
                  </div>
                </td>
                <td className="p-4 font-mono text-text-primary">
                  ${coin.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
                <td className={cn(
                  "p-4 font-mono",
                  coin.change24h >= 0 ? "text-green-bullish" : "text-red-bearish"
                )}>
                  {coin.change24h >= 0 ? '+' : ''}{coin.change24h}%
                </td>
                <td className="p-4 font-mono text-text-secondary">
                  {coin.volume}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
