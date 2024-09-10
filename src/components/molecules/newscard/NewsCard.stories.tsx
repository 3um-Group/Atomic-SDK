import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import NewsCard, { NewsCardProps } from './NewsCard'; 

const meta: Meta<typeof NewsCard> = {
  title: '@3UM-SDK/NewsCard',
  component: NewsCard,        
  tags: ['autodocs'],         
  argTypes: {
    imageSrc: { control: 'text' }, 
    title: { control: 'text' },
    description: { control: 'text' },
    date: { control: 'text' },
    linkUrl: { control: 'text' },
    className: { control: 'text' }, 
  },
};

export default meta; 

const Template: StoryFn<NewsCardProps> = (args) => <NewsCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageSrc: 'https://s.yimg.com/ny/api/res/1.2/WcYbld7xPRBhfuY6JgkjIQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02MDA-/https://media.zenfs.com/en/the_wall_street_journal_hosted_996/955b2ca1729c1eafea677bd5cf8d4ef1',
  title: 'The Wall Street Journal',
  description: 'U.S. job growth rebounded slightly in August after a midsummer scare, but a mixed reading provided little clarity as to how aggressively the Federal Reserve ...',
  date: '09 September 2024',
  linkUrl: 'https://www.wsj.com/economy/jobs/jobs-report-august-unemployment-economy-b869cf39',
  className: '', 
};

export const LongDescription = Template.bind({});
LongDescription.args = {
  imageSrc: 'https://www.pymnts.com/wp-content/uploads/2024/09/artificial-intelligence-AI-datasets.jpg',
  title: 'AI Explained: Inside the World of Datasets',
  description: 'Artificial intelligence datasets form the bedrock of modern systems. As tech giants and researchers push the boundaries of machine capabilities, the data they use quietly shapes the future of technology — for better or worse. The more relevant, high-quality i…',
  date: '09 September 2024',
  linkUrl: 'https://www.pymnts.com/news/artificial-intelligence/2024/ai-explained-inside-world-datasets/',
  className: 'border border-black-500', 
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  imageSrc: 'https://smartcdn.gprod.postmedia.digital/financialpost/wp-content/uploads/2024/09/china-consumer-prices-rise-less-than-expected-in-august-wea.jpg',
  title: 'Stocks Rise Before Trump-Harris Debate, Inflation: Markets Wrap',
  description: 'Stocks extended their rebound after last week’s selloff, with traders gearing up for the US Presidential debate and a key inflation reading.',
  date: '10 September 2024',
  linkUrl: 'https://financialpost.com/pmn/business-pmn/stocks-rise-before-trump-harris-debate-inflation-markets-wrap',
  className: 'bg-gray-100 p-3 rounded-lg', 
};
