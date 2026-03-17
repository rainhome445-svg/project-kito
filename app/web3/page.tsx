import { WalletConnector } from '@/components/WalletConnector';
import Image from 'next/image';
import { Lock, Hexagon, Fingerprint, ShieldCheck, ArrowRight, Globe, Cpu, Database, Share2, Activity, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Web3Page() {
  const ecosystems = [
    { name: 'Ethereum', status: 'Active', tps: '14.2', gas: '12 Gwei', tvl: '$45.2B' },
    { name: 'Solana', status: 'Congested', tps: '2,450', gas: '0.0002 SOL', tvl: '$4.8B' },
    { name: 'Arbitrum', status: 'Active', tps: '18.5', gas: '0.1 Gwei', tvl: '$3.2B' },
    { name: 'Base', status: 'Active', tps: '32.1', gas: '0.05 Gwei', tvl: '$1.5B' },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
      
      {/* Header - High Density */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10 border-b border-border-subtle pb-8">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-blue-light font-black text-[10px] uppercase tracking-[0.2em]">
            <Globe className="w-3 h-3" /> Decentralized Intelligence
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tighter uppercase">
            Web3 <span className="text-blue-light">Ecosystem</span>
          </h1>
          <p className="text-xs text-white/50 font-bold max-w-xl uppercase tracking-tight">
            Cross-chain analytics, governance tracking, and institutional-grade on-chain forensics.
          </p>
        </div>
        <div className="w-full md:w-auto">
          <WalletConnector />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Main Content (65%) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Ecosystem Grid - High Density */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ecosystems.map((eco, i) => (
              <div key={i} className="bg-surface border border-border-subtle p-5 rounded-md group hover:border-blue-light/30 transition-all cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-black border border-border-subtle rounded flex items-center justify-center text-[10px] font-black text-white">
                      {eco.name[0]}
                    </div>
                    <h3 className="text-sm font-black text-white uppercase tracking-tight">{eco.name}</h3>
                  </div>
                  <div className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded border ${eco.status === 'Active' ? 'text-green-bullish border-green-bullish/20 bg-green-bullish/5' : 'text-yellow-500 border-yellow-500/20 bg-yellow-500/5'}`}>
                    {eco.status}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-[8px] font-black text-white/30 uppercase tracking-widest mb-1">TPS</div>
                    <div className="text-xs font-black text-white">{eco.tps}</div>
                  </div>
                  <div>
                    <div className="text-[8px] font-black text-white/30 uppercase tracking-widest mb-1">GAS</div>
                    <div className="text-xs font-black text-white">{eco.gas}</div>
                  </div>
                  <div>
                    <div className="text-[8px] font-black text-white/30 uppercase tracking-widest mb-1">TVL</div>
                    <div className="text-xs font-black text-white">{eco.tvl}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Token-Gated Section - High Density */}
          <div className="bg-black border border-border-subtle rounded-md p-8 relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://picsum.photos/seed/web3-pattern/1000/1000')] opacity-5 pointer-events-none" />
            <div className="relative z-10 flex-1 space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-blue-light font-black text-[9px] uppercase tracking-widest bg-blue-light/5 border border-blue-light/20 px-3 py-1 rounded-full">
                <Lock className="w-3 h-3" /> Token-Gated Access
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter leading-none">
                Unlock Institutional <span className="text-blue-light">Forensics</span>
              </h2>
              <p className="text-xs text-white/50 font-bold uppercase tracking-tight leading-relaxed max-w-lg">
                Connect your wallet holding an HGM Genesis NFT to access deep-dive on-chain analysis, whale tracking, and proprietary smart contract audits.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
                <button className="w-full sm:w-auto bg-white text-black font-black py-3 px-8 rounded-md text-[10px] uppercase tracking-[0.2em] hover:bg-white/90 transition-colors">
                  VERIFY OWNERSHIP
                </button>
                <Link href="#" className="text-[10px] font-black text-white/40 uppercase tracking-widest hover:text-white transition-colors">
                  LEARN ABOUT GENESIS NFT
                </Link>
              </div>
            </div>
            <div className="relative w-48 h-48 shrink-0">
               <div className="absolute inset-0 bg-blue-light/10 rounded-full blur-[40px]" />
               <div className="relative w-full h-full bg-surface border border-border-subtle rounded-2xl p-4 rotate-6 group-hover:rotate-0 transition-transform duration-500">
                  <div className="w-full h-full bg-black rounded-md overflow-hidden border border-border-subtle">
                    <Image 
                      src="https://picsum.photos/seed/nft-preview/400/400" 
                      alt="NFT Preview"
                      fill
                      className="object-cover opacity-60"
                    />
                  </div>
               </div>
            </div>
          </div>

          {/* Governance - High Density */}
          <div className="bg-surface border border-border-subtle rounded-md overflow-hidden">
            <div className="p-4 border-b border-border-subtle flex items-center justify-between">
              <h2 className="text-xs font-black text-white uppercase tracking-widest">Active Governance Proposals</h2>
              <button className="text-[9px] font-black text-blue-light uppercase tracking-widest hover:text-white transition-colors">View All</button>
            </div>
            <div className="divide-y divide-border-subtle">
              {[
                { protocol: 'Uniswap', title: 'Deploy Uniswap v3 on Base', status: 'Voting', quorum: '85%', time: '2d left' },
                { protocol: 'Aave', title: 'Increase GHO Borrow Cap', status: 'Passed', quorum: '92%', time: 'Ended' },
                { protocol: 'MakerDAO', title: 'Adjust Stability Fee for USDC-A', status: 'Voting', quorum: '45%', time: '12h left' }
              ].map((prop, i) => (
                <div key={i} className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-black text-blue-light uppercase tracking-widest">{prop.protocol}</span>
                      <span className="w-1 h-1 bg-white/20 rounded-full" />
                      <span className="text-[9px] font-bold text-white/40 uppercase">{prop.time}</span>
                    </div>
                    <h4 className="text-xs font-black text-white uppercase tracking-tight">{prop.title}</h4>
                  </div>
                  <div className="text-right space-y-1">
                    <div className={`text-[9px] font-black uppercase tracking-widest ${prop.status === 'Voting' ? 'text-yellow-500' : 'text-green-bullish'}`}>{prop.status}</div>
                    <div className="text-[8px] font-bold text-white/30 uppercase">Quorum: {prop.quorum}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar (35%) */}
        <div className="lg:col-span-4 space-y-6">
          
          <div className="bg-surface border border-border-subtle rounded-md p-5 space-y-6">
            <h2 className="text-xs font-black text-white uppercase tracking-widest flex items-center gap-2 border-b border-border-subtle pb-3">
              <Zap className="w-3 h-3 text-blue-light" />
              On-Chain Activity
            </h2>
            <div className="space-y-4">
              {[
                { label: 'Whale Movements', value: 'High', color: 'text-red-bearish' },
                { label: 'Smart Contract Deploys', value: '1,240', color: 'text-white' },
                { label: 'DEX Volume (24h)', value: '$4.2B', color: 'text-green-bullish' },
                { label: 'Bridge Inflows', value: '$850M', color: 'text-blue-light' }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0">
                  <span className="text-[10px] font-bold text-white/60 uppercase tracking-tight">{item.label}</span>
                  <span className={`text-[10px] font-black uppercase tracking-widest ${item.color}`}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface border border-border-subtle rounded-md p-5 space-y-4">
             <h2 className="text-xs font-black text-white uppercase tracking-widest flex items-center gap-2">
              <ShieldCheck className="w-3 h-3 text-blue-light" />
              Security Alerts
            </h2>
            <div className="space-y-3">
              {[
                { type: 'Critical', msg: 'Potential exploit detected in DeFi protocol X', time: '5m ago' },
                { type: 'Warning', msg: 'Large stablecoin minting on Ethereum', time: '45m ago' },
                { type: 'Info', msg: 'New governance proposal on Aave', time: '2h ago' }
              ].map((alert, i) => (
                <div key={i} className="p-3 bg-black rounded-md border border-border-subtle space-y-1">
                  <div className="flex items-center justify-between">
                    <span className={`text-[8px] font-black uppercase tracking-widest ${alert.type === 'Critical' ? 'text-red-bearish' : alert.type === 'Warning' ? 'text-yellow-500' : 'text-blue-light'}`}>
                      {alert.type}
                    </span>
                    <span className="text-[8px] font-bold text-white/20 uppercase">{alert.time}</span>
                  </div>
                  <p className="text-[10px] font-bold text-white/80 leading-tight uppercase tracking-tight">{alert.msg}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface border border-border-subtle rounded-md p-6 flex flex-col items-center text-center space-y-4">
            <div className="w-12 h-12 bg-black border border-border-subtle rounded-md flex items-center justify-center">
              <Share2 className="w-6 h-6 text-blue-light" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-black text-white uppercase tracking-tight">Ecosystem Map</h3>
              <p className="text-[10px] text-white/50 font-bold uppercase tracking-tight">
                Explore the interconnected landscape of Web3 protocols and infrastructure.
              </p>
            </div>
            <button className="w-full bg-white/5 border border-border-subtle text-white font-black py-2.5 rounded-md text-[9px] uppercase tracking-[0.2em] hover:bg-white/10 transition-colors">
              VIEW INTERACTIVE MAP
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
