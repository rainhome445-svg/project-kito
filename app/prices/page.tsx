"use client";
import { ArrowUpRight, ArrowDownRight, Activity, TrendingUp, Search, Filter, Globe, Zap, Database } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { DataTable, Column } from '@/components/DataTable';

interface CoinRow {
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

export default function PricesPage() {
  const coins: CoinRow[] = [
    { rank: 1, name: 'Bitcoin', symbol: 'BTC', price: '$67,890.50', change24h: '+2.4%', isPositive: true, marketCap: '$1.34T', volume: '$34.5B', icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png' },
    { rank: 2, name: 'Ethereum', symbol: 'ETH', price: '$2,450.20', change24h: '-1.1%', isPositive: false, marketCap: '$295B', volume: '$12.2B', icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
    { rank: 3, name: 'Solana', symbol: 'SOL', price: '$145.60', change24h: '+5.2%', isPositive: true, marketCap: '$67B', volume: '$4.2B', icon: 'https://cryptologos.cc/logos/solana-sol-logo.png' },
    { rank: 4, name: 'Tether', symbol: 'USDT', price: '$1.00', change24h: '0.0%', isPositive: true, marketCap: '$112B', volume: '$45.1B', icon: 'https://cryptologos.cc/logos/tether-usdt-logo.png' },
    { rank: 5, name: 'BNB', symbol: 'BNB', price: '$580.40', change24h: '-0.5%', isPositive: false, marketCap: '$86B', volume: '$1.8B', icon: 'https://cryptologos.cc/logos/bnb-bnb-logo.png' },
    { rank: 6, name: 'XRP', symbol: 'XRP', price: '$0.58', change24h: '+0.2%', isPositive: true, marketCap: '$32B', volume: '$1.1B', icon: 'https://cryptologos.cc/logos/xrp-xrp-logo.png' },
    { rank: 7, name: 'USDC', symbol: 'USDC', price: '$1.00', change24h: '0.0%', isPositive: true, marketCap: '$34B', volume: '$4.5B', icon: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png' },
    { rank: 8, name: 'Cardano', symbol: 'ADA', price: '$0.35', change24h: '-2.5%', isPositive: false, marketCap: '$12B', volume: '$450M', icon: 'https://cryptologos.cc/logos/cardano-ada-logo.png' },
    { rank: 9, name: 'Avalanche', symbol: 'AVAX', price: '$28.20', change24h: '+3.1%', isPositive: true, marketCap: '$11B', volume: '$650M', icon: 'https://cryptologos.cc/logos/avalanche-avax-logo.png' },
    { rank: 10, name: 'Dogecoin', symbol: 'DOGE', price: '$0.12', change24h: '-2.4%', isPositive: false, marketCap: '$18B', volume: '$1.2B', icon: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png' },
  ];

  const columns: Array<Column<CoinRow>> = [
    {
      key: 'rank', header: '#', align: 'center', sortable: true,
    },
    {
      key: 'name', header: 'Asset', align: 'left', sortable: false, render: (item) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-black border border-border-subtle rounded-md p-1.5 flex items-center justify-center">
            <Image src={item.icon} alt={item.name} width={20} height={20} className="rounded" unoptimized />
          </div>
          <div>
            <div className="text-xs font-black text-white leading-none uppercase tracking-tight">{item.name}</div>
            <div className="text-[9px] font-bold text-white/40 uppercase tracking-tighter mt-0.5">{item.symbol}</div>
          </div>
        </div>
      )
    },
    {
      key: 'price', header: 'Price', align: 'right', sortable: true,
    },
    {
      key: 'change24h', header: '24h Change', align: 'right', sortable: true, render: (item) => (
        <div className={item.isPositive ? 'text-green-bullish' : 'text-red-bearish'}>
          <div className="flex items-center justify-end gap-1">
            {item.isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
            <span className="font-bold">{item.change24h}</span>
          </div>
        </div>
      ),
    },
    {
      key: 'marketCap', header: 'Market Cap', align: 'right', sortable: true,
    },
    {
      key: 'volume', header: 'Volume (24h)', align: 'right', sortable: true,
    },
    {
      key: 'trend', header: '7d Trend', align: 'center', sortable: false, render: (item) => (
        <div className="w-20 h-6 mx-auto bg-black border border-border-subtle rounded flex items-center justify-center">
          <Activity className={`w-3.5 h-3.5 ${item.isPositive ? 'text-green-bullish/50' : 'text-red-bearish/50'}`} />
        </div>
      ),
    },
    {
      key: 'action', header: 'Action', align: 'center', sortable: false, render: (item) => (
        <button className="text-[9px] font-black text-white/40 uppercase tracking-widest hover:text-blue-light transition-colors">Trade</button>
      ),
    },
  ];

  return (
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
      
      {/* Header - High Density */}
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
              className="w-full bg-surface border border-border-subtle rounded-md py-2.5 pl-9 pr-4 text-[10px] font-black text-white placeholder:text-white/20 focus:outline-none focus:border-blue-light/50 transition-colors uppercase tracking-widest"
            />
          </div>
          <button className="bg-surface border border-border-subtle p-2.5 rounded-md hover:bg-white/5 transition-colors">
            <Filter className="w-4 h-4 text-white/60" />
          </button>
        </div>
      </div>

      {/* Market Stats - High Density */}
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

      {/* Main Table - Integrated DataTable (data dense) */}
      <div>
        <DataTable<CoinRow> data={coins} columns={columns} keyField="rank" />
      </div>

      {/* Footer Info - High Density */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface border border-border-subtle p-5 rounded-md flex items-center gap-4">
          <div className="w-10 h-10 bg-black border border-border-subtle rounded-md flex items-center justify-center">
            <Globe className="w-5 h-5 text-blue-light" />
          </div>
          <div className="space-y-0.5">
            <div className="text-[10px] font-black text-white uppercase tracking-tight">Global Coverage</div>
            <p className="text-[9px] text-white/40 font-bold uppercase tracking-tighter">Aggregated from 150+ exchanges worldwide.</p>
          </div>
        </div>
        <div className="bg-surface border border-border-subtle p-5 rounded-md flex items-center gap-4">
          <div className="w-10 h-10 bg-black border border-border-subtle rounded-md flex items-center justify-center">
            <Zap className="w-5 h-5 text-blue-light" />
          </div>
          <div className="space-y-0.5">
            <div className="text-[10px] font-black text-white uppercase tracking-tight">Real-Time Refresh</div>
            <p className="text-[9px] text-white/40 font-bold uppercase tracking-tighter">Prices update every 500ms for maximum precision.</p>
          </div>
        </div>
        <div className="bg-surface border border-border-subtle p-5 rounded-md flex items-center gap-4">
          <div className="w-10 h-10 bg-black border border-border-subtle rounded-md flex items-center justify-center">
            <Database className="w-5 h-5 text-blue-light" />
          </div>
          <div className="space-y-0.5">
            <div className="text-[10px] font-black text-white uppercase tracking-tight">API Access</div>
            <p className="text-[9px] text-white/40 font-bold uppercase tracking-tighter">Institutional-grade endpoints for developers.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
