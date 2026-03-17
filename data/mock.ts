export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  content: string;
  tags: string[];
}

export interface PredictionMarket {
  id: string;
  title: string;
  percentage: number;
  volume: string;
}

export interface TickerData {
  symbol: string;
  price: string;
  change: string;
  isUp: boolean;
}

export const mockArticles: Article[] = [
  {
    id: '1',
    slug: 'bitcoin-reaches-new-all-time-high-amidst-institutional-adoption',
    title: 'Bitcoin Reaches New All-Time High Amidst Institutional Adoption',
    excerpt: 'The world\'s largest cryptocurrency has surpassed its previous peak, driven by a surge in institutional interest and ETF inflows.',
    category: 'CRYPTO',
    author: 'Arya',
    date: '12 mins ago',
    image: 'https://picsum.photos/seed/btc/800/400',
    content: `
# Bitcoin Reaches New All-Time High

The world's largest cryptocurrency has surpassed its previous peak, driven by a surge in institutional interest and ETF inflows.

Bitcoin has officially entered a new era of price discovery. After months of consolidation, the digital asset broke through its previous all-time high, signaling strong bullish momentum in the broader crypto market.

## Institutional Drivers

Several factors have contributed to this recent surge:
1. **Spot ETFs:** The approval and subsequent success of spot Bitcoin ETFs in the US have provided a regulated and accessible vehicle for traditional investors.
2. **Corporate Treasuries:** More publicly traded companies are adding Bitcoin to their balance sheets as a hedge against inflation.
3. **Macroeconomic Factors:** A shifting macroeconomic landscape, including potential interest rate cuts, has made risk-on assets more attractive.

> "This is a watershed moment for the crypto industry. We are seeing unprecedented demand from institutional players who previously remained on the sidelines." - Industry Expert

As the market continues to evolve, all eyes will be on how Bitcoin sustains this momentum and whether it can establish a new, higher floor.
    `,
    tags: ['Bitcoin', 'Markets', 'ETF']
  },
  {
    id: '2',
    slug: 'ethereum-layer-2-solutions-see-record-tvl',
    title: 'Ethereum Layer 2 Solutions See Record TVL',
    excerpt: 'Total Value Locked across Ethereum L2s has hit a new milestone, highlighting the growing adoption of scaling solutions.',
    category: 'ECOSYSTEMS',
    author: 'Budi',
    date: '1 hour ago',
    image: 'https://picsum.photos/seed/eth/800/400',
    content: 'Content for Ethereum Layer 2...',
    tags: ['Ethereum', 'Layer 2', 'DeFi']
  },
  {
    id: '3',
    slug: 'global-markets-react-to-fed-rate-decision',
    title: 'Global Markets React to Fed Rate Decision',
    excerpt: 'Equities and crypto markets show mixed reactions following the Federal Reserve\'s latest announcement on interest rates.',
    category: 'MACRO',
    author: 'Citra',
    date: '3 hours ago',
    image: 'https://picsum.photos/seed/macro/800/400',
    content: 'Content for Global Markets...',
    tags: ['Macro', 'Fed', 'Equities']
  },
  {
    id: '4',
    slug: 'new-defi-protocol-launches-with-innovative-yield-mechanics',
    title: 'New DeFi Protocol Launches with Innovative Yield Mechanics',
    excerpt: 'A recently launched decentralized finance protocol is attracting attention with its novel approach to yield generation.',
    category: 'DEFI',
    author: 'Arya',
    date: '5 hours ago',
    image: 'https://picsum.photos/seed/defi/800/400',
    content: 'Content for DeFi Protocol...',
    tags: ['DeFi', 'Yield']
  },
  {
    id: '5',
    slug: 'regulatory-clarity-improves-in-asian-markets',
    title: 'Regulatory Clarity Improves in Asian Markets',
    excerpt: 'Several Asian countries have introduced new frameworks for digital assets, providing much-needed clarity for businesses.',
    category: 'POLICY',
    author: 'Budi',
    date: '1 day ago',
    image: 'https://picsum.photos/seed/policy/800/400',
    content: 'Content for Regulatory Clarity...',
    tags: ['Regulation', 'Asia']
  },
  {
    id: '6',
    slug: 'nft-trading-volume-shows-signs-of-recovery',
    title: 'NFT Trading Volume Shows Signs of Recovery',
    excerpt: 'After a prolonged slump, the non-fungible token market is experiencing a slight uptick in trading volume and active users.',
    category: 'NFT',
    author: 'Citra',
    date: '1 day ago',
    image: 'https://picsum.photos/seed/nft/800/400',
    content: 'Content for NFT Trading...',
    tags: ['NFT', 'Markets']
  }
];

export const mockPredictionMarkets: PredictionMarket[] = [
  { id: '1', title: 'Will ETH reach $4k by June 30?', percentage: 65, volume: '$1.2M' },
  { id: '2', title: 'US Election Winner 2024', percentage: 48, volume: '$5.4M' },
  { id: '3', title: 'Next Fed Rate Cut', percentage: 32, volume: '$800K' },
  { id: '4', title: 'BTC > $75k in Q3', percentage: 71, volume: '$2.1M' },
];

export const mockTickers: TickerData[] = [
  { symbol: 'BTC', price: '$67,890.00', change: '2.3%', isUp: true },
  { symbol: 'ETH', price: '$3,456.20', change: '1.2%', isUp: false },
  { symbol: 'SOL', price: '$145.50', change: '5.4%', isUp: true },
  { symbol: 'IHSG', price: '7,234.50', change: '0.5%', isUp: true },
  { symbol: 'USD/IDR', price: '16,250', change: '0.1%', isUp: false },
  { symbol: 'BNB', price: '$590.10', change: '0.8%', isUp: true },
  { symbol: 'XRP', price: '$0.52', change: '2.1%', isUp: false },
  { symbol: 'ADA', price: '$0.45', change: '1.5%', isUp: true },
];

export const mockCategories = [
  { id: 'fundamentals', name: 'Blockchain Fundamentals', description: 'The core concepts of decentralized ledgers and consensus mechanisms.' },
  { id: 'defi', name: 'Decentralized Finance', description: 'Mastering liquidity, yield, and protocol mechanics in the DeFi ecosystem.' },
  { id: 'development', name: 'Web3 Development', description: 'Building smart contracts and dApps on multiple blockchain networks.' },
  { id: 'security', name: 'Security & Auditing', description: 'Protecting assets and identifying protocol vulnerabilities through rigorous auditing.' },
  { id: 'macro', name: 'Macro Economics', description: 'Understanding the global financial context and its impact on digital assets.' },
  { id: 'trading', name: 'Technical Analysis', description: 'Advanced charting, indicators, and market psychology strategies for traders.' },
  { id: 'layer1', name: 'Layer 1', description: 'Base blockchain networks like Bitcoin and Ethereum.' },
  { id: 'markets', name: 'Markets', description: 'Trading, prices, and market analysis.' },
  { id: 'consensus', name: 'Consensus', description: 'Mechanisms that secure blockchain networks.' },
  { id: 'custody', name: 'Custody', description: 'Secure storage solutions for digital assets.' },
  { id: 'gaming', name: 'Gaming', description: 'Blockchain-based games and virtual worlds.' },
  { id: 'layer2', name: 'Layer 2', description: 'Scaling solutions built on top of Layer 1s.' },
  { id: 'web3', name: 'Web3', description: 'The decentralized web and its applications.' },
];
