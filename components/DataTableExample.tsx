/**
 * DataTable Integration Example - Market Prices Page
 * 
 * This shows how to use the new DataTable component with the HGM design system.
 */

'use client';

import { DataTable, Column } from '@/components/DataTable';
import { ArrowUpRight, ArrowDownRight, TrendingUp, Search, Filter } from 'lucide-react';
import { useState } from 'react';

interface Coin {
  id: string;
  rank: number;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  marketCap: string;
  volume: string;
  trend: 'up' | 'down';
}

const coins: Coin[] = [
  { id: '1', rank: 1, name: 'Bitcoin', symbol: 'BTC', price: 67890.50, change24h: 2.34, marketCap: '$1.34T', volume: '$34.5B', trend: 'up' },
  { id: '2', rank: 2, name: 'Ethereum', symbol: 'ETH', price: 3456.20, change24h: -1.12, marketCap: '$295B', volume: '$15.2B', trend: 'down' },
  { id: '3', rank: 3, name: 'Solana', symbol: 'SOL', price: 145.60, change24h: 5.21, marketCap: '$67B', volume: '$4.2B', trend: 'up' },
  { id: '4', rank: 4, name: 'Tether', symbol: 'USDT', price: 1.00, change24h: 0.01, marketCap: '$112B', volume: '$45.1B', trend: 'up' },
  { id: '5', rank: 5, name: 'BNB', symbol: 'BNB', price: 580.40, change24h: -0.54, marketCap: '$86B', volume: '$1.8B', trend: 'down' },
  { id: '6', rank: 6, name: 'XRP', symbol: 'XRP', price: 0.58, change24h: 0.23, marketCap: '$32B', volume: '$1.1B', trend: 'up' },
  { id: '7', rank: 7, name: 'USDC', symbol: 'USDC', price: 1.00, change24h: 0.00, marketCap: '$34B', volume: '$4.5B', trend: 'up' },
  { id: '8', rank: 8, name: 'Cardano', symbol: 'ADA', price: 0.35, change24h: -2.45, marketCap: '$12B', volume: '$450M', trend: 'down' },
  { id: '9', rank: 9, name: 'Avalanche', symbol: 'AVAX', price: 28.20, change24h: 3.12, marketCap: '$11B', volume: '$650M', trend: 'up' },
  { id: '10', rank: 10, name: 'Dogecoin', symbol: 'DOGE', price: 0.12, change24h: -2.41, marketCap: '$18B', volume: '$1.2B', trend: 'down' },
];

const columns: Column<Coin>[] = [
  {
    key: 'rank',
    header: '#',
    width: '60px',
    align: 'center',
    render: (coin) => (
      <span className="font-mono text-xs font-bold text-white/30">{coin.rank}</span>
    )
  },
  {
    key: 'name',
    header: 'Asset',
    sortable: true,
    render: (coin) => (
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-black border border-border-subtle rounded-md flex items-center justify-center text-[10px] font-black text-white">
          {coin.symbol[0]}
        </div>
        <div>
          <div className="text-xs font-black text-white uppercase tracking-tight">{coin.name}</div>
          <div className="text-[9px] font-bold text-white/40 uppercase tracking-tighter">{coin.symbol}</div>
        </div>
      </div>
    )
  },
  {
    key: 'price',
    header: 'Price',
    sortable: true,
    align: 'right',
    render: (coin) => (
      <span className="font-mono font-bold text-white tabular-nums">
        ${coin.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </span>
    )
  },
  {
    key: 'change24h',
    header: '24h Change',
    sortable: true,
    align: 'right',
    render: (coin) => (
      <div className="flex items-center justify-end gap-1">
        {coin.change24h >= 0 
          ? <ArrowUpRight className="w-3 h-3 text-green-bullish" />
          : <ArrowDownRight className="w-3 h-3 text-red-bearish" />
        }
        <span className={coin.change24h >= 0 ? 'text-green-bullish' : 'text-red-bearish'}>
          {coin.change24h >= 0 ? '+' : ''}{coin.change24h.toFixed(2)}%
        </span>
      </div>
    )
  },
  {
    key: 'marketCap',
    header: 'Market Cap',
    sortable: true,
    align: 'right',
    render: (coin) => (
      <span className="font-mono text-white/60">{coin.marketCap}</span>
    )
  },
  {
    key: 'volume',
    header: 'Volume (24h)',
    sortable: true,
    align: 'right',
    render: (coin) => (
      <span className="font-mono text-white/60">{coin.volume}</span>
    )
  },
  {
    key: 'trend',
    header: '7d Trend',
    align: 'center',
    width: '100px',
    render: (coin) => (
      <div className="w-16 h-6 mx-auto bg-black border border-border-subtle rounded-md flex items-center justify-center">
        <TrendingUp className={`w-3.5 h-3.5 ${coin.trend === 'up' ? 'text-green-bullish/50' : 'text-red-bearish/50'}`} />
      </div>
    )
  },
];

export default function MarketPricesWithDataTable() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = coins.filter(coin => 
    coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10 border-b border-border-subtle pb-8">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-blue-light font-black text-[10px] uppercase tracking-[0.2em]">
            <TrendingUp className="w-3 h-3" /> Real-Time Ticker
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tighter uppercase">
            Asset <span className="text-blue-light">Pricing</span>
          </h1>
          <p className="text-xs text-white/50 font-bold max-w-xl uppercase tracking-tight">
            Institutional-grade price feeds across 500+ digital assets and cross-chain liquidity pools.
          </p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/30" />
            <input 
              type="text" 
              placeholder="SEARCH ASSETS..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface border border-border-subtle rounded-md py-2.5 pl-9 pr-4 text-[10px] font-black text-white placeholder:text-white/20 focus:outline-none focus:border-blue-light/50 transition-colors uppercase tracking-widest"
            />
          </div>
          <button className="bg-surface border border-border-subtle p-2.5 rounded-md hover:bg-white/5 transition-colors">
            <Filter className="w-4 h-4 text-white/60" />
          </button>
        </div>
      </div>

      {/* Market Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 mb-10">
        {[
          { label: 'Market Cap', value: '$2.45T', change: '+1.2%' },
          { label: '24h Volume', value: '$84.2B', change: '-5.4%' },
          { label: 'BTC Dominance', value: '56.2%', change: '+0.1%' },
          { label: 'ETH Dominance', value: '18.4%', change: '-0.2%' },
          { label: 'Stablecoin Cap', value: '$165B', change: '+0.5%' },
          { label: 'Fear & Greed', value: '65', change: 'Greed' }
        ].map((stat, i) => (
          <div key={i} className="bg-surface border border-border-subtle p-4 rounded-md">
            <div className="text-[9px] font-black text-white/40 uppercase tracking-widest mb-1">{stat.label}</div>
            <div className="text-sm font-black text-white tracking-tight">{stat.value}</div>
            <div className={`text-[8px] font-black ${stat.change.startsWith('+') || stat.change === 'Greed' ? 'text-green-bullish' : 'text-red-bearish'}`}>
              {stat.change}
            </div>
          </div>
        ))}
      </div>

      {/* Data Table */}
      <DataTable 
        data={filteredData}
        columns={columns}
        keyField="id"
        sortable={true}
        hoverable={true}
        striped={true}
        emptyMessage="No assets found matching your search."
      />
    </div>
  );
}
