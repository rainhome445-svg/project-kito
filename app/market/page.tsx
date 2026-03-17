"use client";

import Image from 'next/image';
import { DataTable, type Column } from '@/components/DataTable';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface MarketRow {
  rank: number;
  name: string;
  symbol: string;
  price: string;
  change24h: string;
  isPositive: boolean;
  marketCap: string;
  volume: string;
  icon: string;
}

// Asset renderer used by both DataTable instances
const AssetCell = (item: MarketRow) => (
  <div className="flex items-center gap-3">
    <div className="w-8 h-8 bg-black border border-border-subtle rounded-md p-1.5 flex items-center justify-center">
      <Image src={item.icon} alt={item.name} width={20} height={20} className="rounded" unoptimized />
    </div>
    <div>
      <div className="text-xs font-black text-white leading-none uppercase tracking-tight">{item.name}</div>
      <div className="text-[9px] font-bold text-white/40 uppercase tracking-tighter mt-0.5">{item.symbol}</div>
    </div>
  </div>
);

const marketColumns = <T extends MarketRow>(): Array<Column<T>> => {
  // Define a reusable set of columns for all market tables
  // Note: use a function to capture item type for TS friendliness
  // @ts-ignore - we cast later when used
  return [
    {
      key: 'rank', header: '#', align: 'center' as const,
    },
    {
      key: 'name', header: 'Asset', align: 'left' as const, render: (item: MarketRow, _index: number) => AssetCell(item),
    },
    {
      key: 'price', header: 'Price', align: 'right' as const,
    },
    {
      key: 'change24h', header: '24h Change', align: 'right' as const, render: (item: MarketRow, _index: number) => (
        <div className={item.isPositive ? 'text-green-bullish' : 'text-red-bearish'}>
          <div className="flex items-center justify-end gap-1">
            {item.isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
            <span className="font-bold">{item.change24h}</span>
          </div>
        </div>
      ),
    },
    {
      key: 'marketCap', header: 'Market Cap', align: 'right' as const,
    },
    {
      key: 'volume', header: 'Volume (24h)', align: 'right' as const,
    },
    {
      key: 'action', header: 'Action', align: 'center' as const, render: (_item: MarketRow) => (
        <button className="text-[9px] font-black text-white/40 uppercase tracking-widest hover:text-blue-light transition-colors">Trade</button>
      ),
    },
  ] as unknown as Array<Column<any>>;
};

// Mock data for market sections
const gainers: MarketRow[] = [
  { rank: 1, name: 'Polygon', symbol: 'MATIC', price: '$1.25', change24h: '+4.2%', isPositive: true, marketCap: '$10B', volume: '$1.2B', icon: 'https://cryptologos.cc/logos/polygon-matic-logo.png' },
  { rank: 2, name: 'Cosmos', symbol: 'ATOM', price: '$12.34', change24h: '+3.8%', isPositive: true, marketCap: '$3B', volume: '$300M', icon: 'https://cryptologos.cc/logos/cosmos-atom-logo.png' },
  { rank: 3, name: 'Near', symbol: 'NEAR', price: '$4.90', change24h: '+2.1%', isPositive: true, marketCap: '$3.7B', volume: '$200M', icon: 'https://cryptologos.cc/logos/near-near-logo.png' },
];

const losers: MarketRow[] = [
  { rank: 1, name: 'Solana', symbol: 'SOL', price: '$140.00', change24h: '-2.8%', isPositive: false, marketCap: '$60B', volume: '$3.5B', icon: 'https://cryptologos.cc/logos/solana-sol-logo.png' },
  { rank: 2, name: 'Avalanche', symbol: 'AVAX', price: '$27.50', change24h: '-2.2%', isPositive: false, marketCap: '$10B', volume: '$900M', icon: 'https://cryptologos.cc/logos/avalanche-avax-logo.png' },
  { rank: 3, name: 'Algorand', symbol: 'ALGO', price: '$0.95', change24h: '-1.5%', isPositive: false, marketCap: '$7B', volume: '$150M', icon: 'https://cryptologos.cc/logos/algorand-algo-logo.png' },
];

const trending: MarketRow[] = [
  { rank: 1, name: 'The Graph', symbol: 'GRT', price: '$0.55', change24h: '+6.1%', isPositive: true, marketCap: '$2B', volume: '$120M', icon: 'https://cryptologos.cc/logos/the-graph-grt-logo.png' },
  { rank: 2, name: 'Filecoin', symbol: 'FIL', price: '$4.10', change24h: '+3.0%', isPositive: true, marketCap: '$4B', volume: '$220M', icon: 'https://cryptologos.cc/logos/filecoin-fil-logo.png' },
];

const recentlyAdded: MarketRow[] = [
  { rank: 1, name: 'Arbitrum', symbol: 'ARB', price: '$1.50', change24h: '+1.2%', isPositive: true, marketCap: '$11B', volume: '$500M', icon: 'https://cryptologos.cc/logos/arbitrum-arb-logo.png' },
  { rank: 2, name: 'Optimism', symbol: 'OP', price: '$1.75', change24h: '+0.8%', isPositive: true, marketCap: '$8B', volume: '$300M', icon: 'https://cryptologos.cc/logos/optimism-op-logo.png' },
];

const MarketSection: React.FC<{ title: string; data: MarketRow[] }> = ({ title, data }) => {
  const cols = marketColumns<MarketRow>();
  return (
    <section className="space-y-2">
      <div className="text-xs font-black text-white/40 uppercase tracking-widest">{title}</div>
      <DataTable<MarketRow> data={data} columns={cols} keyField="rank" />
    </section>
  );
};

export default function MarketPage() {
  // Grid: 60/40 layout on desktop using 12-column grid
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
      <div className="mb-6 border-b border-border-subtle pb-4">
        <h1 className="text-2xl font-black text-white tracking-tight">Market Dashboard</h1>
        <p className="text-xs text-white/60">Dense, terminal-style market tables for rapid scanning</p>
      </div>
      <div className="grid grid-cols-12 gap-6">
        {/* Left column ~60% */}
        <div className="col-span-12 md:col-span-7 space-y-6">
          <MarketSection title="Top Gainers" data={gainers} />
          <MarketSection title="Trending Tokens" data={trending} />
        </div>
        {/* Right column ~40% */}
        <div className="col-span-12 md:col-span-5 space-y-6">
          <MarketSection title="Top Losers" data={losers} />
          <MarketSection title="Recently Added" data={recentlyAdded} />
        </div>
      </div>
    </div>
  );
}
