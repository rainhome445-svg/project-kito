/**
 * DataTable Usage Example
 * 
 * Import the DataTable component and define your columns:
 * 
 * import { DataTable, Column } from '@/components/DataTable';
 * 
 * interface Coin {
 *   id: string;
 *   name: string;
 *   symbol: string;
 *   price: number;
 *   change24h: number;
 *   marketCap: string;
 * }
 * 
 * const columns: Column<Coin>[] = [
 *   {
 *     key: 'name',
 *     header: 'Asset',
 *     sortable: true,
 *     render: (coin) => (
 *       <div className="flex items-center gap-3">
 *         <div className="w-8 h-8 bg-white/5 rounded-md flex items-center justify-center text-xs font-black text-white border border-border-subtle">
 *           {coin.symbol[0]}
 *         </div>
 *         <div>
 *           <div className="text-xs font-black text-white">{coin.name}</div>
 *           <div className="text-[9px] font-bold text-white/40 uppercase">{coin.symbol}</div>
 *         </div>
 *       </div>
 *     )
 *   },
 *   {
 *     key: 'price',
 *     header: 'Price',
 *     sortable: true,
 *     align: 'right',
 *     render: (coin) => (
 *       <span className="font-mono font-bold text-white">${coin.price.toLocaleString()}</span>
 *     )
 *   },
 *   {
 *     key: 'change24h',
 *     header: '24h Change',
 *     sortable: true,
 *     align: 'right',
 *     render: (coin) => (
 *       <span className={coin.change24h >= 0 ? 'text-green-bullish' : 'text-red-bearish'}>
 *         {coin.change24h >= 0 ? '+' : ''}{coin.change24h}%
 *       </span>
 *     )
 *   },
 *   {
 *     key: 'marketCap',
 *     header: 'Market Cap',
 *     sortable: true,
 *     align: 'right',
 *   }
 * ];
 * 
 * const coins: Coin[] = [
 *   { id: '1', name: 'Bitcoin', symbol: 'BTC', price: 67890, change24h: 2.3, marketCap: '$1.34T' },
 *   { id: '2', name: 'Ethereum', symbol: 'ETH', price: 3456, change24h: -1.2, marketCap: '$295B' },
 *   // ... more data
 * ];
 * 
 * // Usage in component:
 * <DataTable 
 *   data={coins} 
 *   columns={columns}
 *   keyField="id"
 *   sortable={true}
 *   hoverable={true}
 *   striped={true}
 * />
 */

export {};
