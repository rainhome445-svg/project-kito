import { create } from 'zustand';

interface AppState {
  isWalletConnected: boolean;
  walletAddress: string | null;
  walletBalance: string | null;
  connectWallet: () => void;
  disconnectWallet: () => void;
  savedArticles: string[];
  saveArticle: (id: string) => void;
  removeArticle: (id: string) => void;
  isCookieConsentOpen: boolean;
  setCookieConsentOpen: (open: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isWalletConnected: false,
  walletAddress: null,
  walletBalance: null,
  connectWallet: () => set({ isWalletConnected: true, walletAddress: '0x1234...5678', walletBalance: '1.5 ETH' }),
  disconnectWallet: () => set({ isWalletConnected: false, walletAddress: null, walletBalance: null }),
  savedArticles: [],
  saveArticle: (id) => set((state) => ({ savedArticles: [...state.savedArticles, id] })),
  removeArticle: (id) => set((state) => ({ savedArticles: state.savedArticles.filter((a) => a !== id) })),
  isCookieConsentOpen: false,
  setCookieConsentOpen: (open) => set({ isCookieConsentOpen: open }),
}));
