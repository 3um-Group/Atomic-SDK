import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import dayjs from 'dayjs';

export interface MarketPriceChartProps {
  data: { date: string; value: number }[]; 
  className?: string;
}

const MarketPriceChart: React.FC<MarketPriceChartProps> = ({ data, className }) => {
  return (
    <div className={`card shadow-lg rounded-lg bg-white ${className}`}>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-1">Market History</h3>
      </div>

      <div className="h-64 w-full p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickFormatter={(date) => dayjs(date).format('YYYY')} 
              ticks={data
                .filter((entry, index, self) => {
                  return self.findIndex(d => dayjs(d.date).format('YYYY') === dayjs(entry.date).format('YYYY')) === index;
                })
                .map((entry) => entry.date)}
            />
            <YAxis
              orientation="right"
              tickFormatter={(value) => {
                if (value === 0) return '';
                return value >= 1000 ? `${(value / 1000).toFixed(value % 1000 === 0 ? 0 : 1)}K` : value;
              }}
            />
            <Tooltip
              labelFormatter={(date) => dayjs(date).format('MMM YYYY')} 
              formatter={(value) => {
                const formattedValue = (value as number) >= 1000
                  ? `${(value as number / 1000).toFixed((value as number) % 1000 === 0 ? 0 : 1)}K`
                  : value.toString();
                return [`$${formattedValue}`, 'Price'];
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#008000"
              strokeWidth={3}
              dot={false} 
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MarketPriceChart;
