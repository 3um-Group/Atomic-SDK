import React, { useEffect, useState, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  LineController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import dayjs from 'dayjs';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  LineController
);

export interface MarketPriceChartProps {
  data: { date: string; volume: number; averagePrice: number }[];
  className?: string;
}

const MarketPriceChart: React.FC<MarketPriceChartProps> = ({ data, className }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const chartRef = useRef<any>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const labels = data.map((item) => dayjs(item.date).format('MMM DD, YYYY'));

  const chartData = {
    labels,
    datasets: [
      {
        type: 'line' as const,
        label: 'Volume',
        data: data.map((item) => item.volume),
        borderColor: 'blue',
        borderWidth: 2,
        fill: false,
        tension: 0.4,
        pointRadius: 0, 
        pointHoverRadius: 0, 
        yAxisID: 'y1',
      },
      {
        type: 'line' as const,
        label: 'Average Price',
        data: data.map((item) => item.averagePrice),
        borderColor: 'green',
        borderWidth: 2,
        fill: false,
        tension: 0.4,
        pointRadius: 0, 
        pointHoverRadius: 0, 
        yAxisID: 'y2',
      },
    ],
  };

  const chartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      tooltip: {
        mode: 'index', 
        intersect: false, 
        callbacks: {
          label: (context: any) => {
            const label = context.dataset.label || '';
            const value = context.raw as number;
            return `${label}: ${value.toFixed(4)} ETH`;
          },
        },
      },
      legend: {
        display: false, 
      },
    },
    scales: {
      x: {
        type: 'category',
        ticks: {
          maxRotation: 0,
          font: {
            size: 12,
          },
        },
        grid: {
          display: false,
        },
      },
      y1: {
        type: 'linear',
        position: 'left',
        title: {
          display: !isSmallScreen,
          text: 'Volume',
        },
        ticks: {
          font: {
            size: 10,
          },
          padding: 5,
        },
        grid: {
          borderColor: '#ccc',
        },
      },
      y2: {
        type: 'linear',
        position: 'right',
        title: {
          display: !isSmallScreen,
          text: 'Average Price',
        },
        ticks: {
          font: {
            size: 10,
          },
          padding: 5,
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  return (
    <div className={`card rounded-lg text-black ${className} bg-gray-100 p-4`}>
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold mb-1">Price History</h3>
      </div>
      <div className="w-full h-64">
        <Chart ref={chartRef} type="line" data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default MarketPriceChart;
