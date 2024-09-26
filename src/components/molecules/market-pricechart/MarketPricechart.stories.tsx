import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import MarketPriceChart, { MarketPriceChartProps } from './MarketPriceChart';

const meta: Meta<typeof MarketPriceChart> = {
  title: '@3UM-SDK/MarketPriceChart',
  component: MarketPriceChart,
  tags: ['autodocs'],
  argTypes: {
    data: { control: 'object' },
    className: { control: 'text' },
  },
};

export default meta;

const Template: StoryFn<MarketPriceChartProps> = (args) => <MarketPriceChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [

    { date: '2024-07-15', volume: 0.010, averagePrice: 0.008 },
    { date: '2024-08-14', volume: 0.012, averagePrice: 0.011 },
    { date: '2024-09-10', volume: 0.017, averagePrice: 0.012 },
  ],
  className: 'bg-gray-100 p-4 rounded-lg',
};
