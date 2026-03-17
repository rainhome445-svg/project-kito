'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '00:00', price: 65000 },
  { time: '04:00', price: 65500 },
  { time: '08:00', price: 64800 },
  { time: '12:00', price: 66200 },
  { time: '16:00', price: 67100 },
  { time: '20:00', price: 66900 },
  { time: '24:00', price: 67890 },
];

export function MarketChart() {
  return (
    <div className="bg-black border border-border-subtle rounded-md p-4 h-[300px] w-full">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xs font-black text-white uppercase tracking-widest flex items-center gap-2">
            BTC/USD
            <span className="text-[10px] font-bold text-green-bullish">
              +2.3%
            </span>
          </h2>
          <p className="text-xl font-black text-white mt-0.5 tracking-tighter">$67,890.00</p>
        </div>
        <div className="flex gap-1">
          {['1D', '1W', '1M', '1Y'].map((range) => (
            <button 
              key={range}
              className={`px-2 py-0.5 rounded text-[9px] font-black transition-all ${
                range === '1D' 
                  ? 'bg-white text-black' 
                  : 'bg-white/5 text-text-secondary hover:text-white'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>
      
      <div className="h-[200px] w-full relative">
        <div className="absolute inset-0">
          <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
            <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f1f1f" vertical={false} />
            <XAxis 
              dataKey="time" 
              stroke="#525252" 
              tick={{ fill: '#525252', fontSize: 9, fontWeight: 900 }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              domain={['dataMin - 1000', 'dataMax + 1000']} 
              stroke="#525252"
              tick={{ fill: '#525252', fontSize: 9, fontWeight: 900 }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value.toLocaleString()}`}
              orientation="right"
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#000000', borderColor: '#1f1f1f', borderRadius: '4px', fontSize: '10px' }}
              itemStyle={{ color: '#059669', fontWeight: 900 }}
              labelStyle={{ color: '#525252', fontWeight: 900 }}
            />
            <Line 
              type="monotone" 
              dataKey="price" 
              stroke="#ffffff" 
              strokeWidth={1.5}
              dot={false}
              activeDot={{ r: 4, fill: '#ffffff', stroke: '#000000', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
  );
}
