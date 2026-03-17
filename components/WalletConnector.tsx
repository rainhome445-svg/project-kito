'use client';

import { useAppStore } from '@/lib/store';
import { Wallet, ArrowRightLeft, History, LogOut } from 'lucide-react';

export function WalletConnector() {
  const { isWalletConnected, connectWallet, disconnectWallet, walletAddress, walletBalance } = useAppStore();

  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-md p-6 shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-light/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
      
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xs font-bold tracking-wider uppercase text-text-secondary flex items-center gap-2">
          <Wallet className="w-4 h-4 text-blue-light" />
          Wallet Connect
        </h3>
        {isWalletConnected && (
          <span className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-medium text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Connected
          </span>
        )}
      </div>
      
      {!isWalletConnected ? (
        <div className="text-center py-6 relative z-10">
          <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
            <Wallet className="w-8 h-8 text-text-secondary" />
          </div>
          <p className="text-text-secondary text-sm mb-6 leading-relaxed">
            Connect your wallet to access premium features, view your portfolio, and interact with Web3 content.
          </p>
          <button 
            onClick={connectWallet}
            className="w-full bg-blue-light hover:bg-blue-light/90 text-white font-medium py-3 px-4 rounded-md transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
          >
            Connect Wallet
          </button>
        </div>
      ) : (
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6 bg-black/20 p-3 rounded-md border border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-light to-purple-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              <div>
                <p className="text-[10px] text-text-tertiary uppercase tracking-wider mb-0.5">Address</p>
                <p className="font-mono text-sm text-text-primary font-medium">
                  {walletAddress?.slice(0, 6)}...{walletAddress?.slice(-4)}
                </p>
              </div>
            </div>
            <button 
              onClick={disconnectWallet}
              className="p-2 text-text-tertiary hover:text-red-400 hover:bg-red-400/10 rounded-md transition-colors"
              title="Disconnect"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-white/5 to-transparent rounded-md p-5 mb-6 border border-white/10 relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-light/10 rounded-full blur-xl" />
            <p className="text-xs text-text-secondary mb-1">Total Balance</p>
            <p className="text-3xl font-mono font-bold text-text-primary tracking-tight">{walletBalance}</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-text-primary py-2.5 rounded-md transition-all duration-300 text-sm font-medium hover:border-blue-light/30">
              <ArrowRightLeft className="w-4 h-4 text-blue-light" /> Swap
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-text-primary py-2.5 rounded-md transition-all duration-300 text-sm font-medium hover:border-blue-light/30">
              <History className="w-4 h-4 text-blue-light" /> History
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
