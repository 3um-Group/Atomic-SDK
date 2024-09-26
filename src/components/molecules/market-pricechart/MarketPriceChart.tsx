import React from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import dayjs from 'dayjs';

export interface MarketPriceChartProps {
  data: { date: string; volume: number; averagePrice: number }[];
  className?: string;
}

const MarketPriceChart: React.FC<MarketPriceChartProps> = ({ data, className }) => {
  return (
    <div className={`card shadow-lg rounded-lg text-black ${className}`}>
      {/* Chart header */}
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold mb-1">Price History</h3>
      </div>

      <div className="w-full h-48 sm:h-64 md:h-96 lg:h-128 p-2 md:p-4">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" /> 
            
            <XAxis
              dataKey="date"
              tickFormatter={(date) => dayjs(date).format('MMM DD, YYYY')} 
              stroke="#000000"
              tick={{ fontSize: 12, className: 'text-xs md:text-sm' }} 
            />

            <YAxis
              yAxisId="left"
              orientation="left"
              tickFormatter={(value) => value.toFixed(4)}
              stroke="#000000"
              tick={{ fontSize: 12, className: 'text-xs md:text-sm' }} 
              label={{ 
                value: 'Volume (ETH)', 
                angle: -90, 
                position: 'insideLeft', 
                offset: 15, 
                dx: -10, 
                fill: '#000000',
                style: { textAnchor: 'middle' },
                className: 'hidden md:block' 
              }}
            />

            <YAxis
              yAxisId="right"
              orientation="right"
              tickFormatter={(value) => value.toFixed(4)}
              stroke="#000000"
              tick={{ fontSize: 12, className: 'text-xs md:text-sm' }} 
              label={{ 
                value: 'Average Price (ETH)', 
                angle: -90, 
                position: 'insideRight', 
                offset: 15, 
                dx: 10, 
                fill: '#000000',
                style: { textAnchor: 'middle' },
                className: 'hidden md:block' 
              }}
            />

            <Tooltip
              labelFormatter={(date) => dayjs(date).format('MMM DD, YYYY')}
              formatter={(value, name) => [`${value} ETH`, name === 'volume' ? 'Volume' : 'Average Price']}
              contentStyle={{ backgroundColor: '#ffffff', borderColor: '#cccccc', color: '#000000' }} 
            />

            <Bar
              yAxisId="left"
              dataKey="volume"
              fill="#000000"
              barSize={20}
            />

            <Line
              yAxisId="right"
              type="monotone"
              dataKey="averagePrice"
              stroke="#008000"
              strokeWidth={2}
              dot={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MarketPriceChart;
