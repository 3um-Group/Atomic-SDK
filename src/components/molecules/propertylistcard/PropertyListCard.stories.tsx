import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import PropertyListCard, { PropertyListCardProps } from './PropertyListCard'; 

export default {
  title: '@3UM-SDK/PropertyListCard',
  component: PropertyListCard,
} as Meta;

const Template: StoryFn<PropertyListCardProps> = (args) => <PropertyListCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageSrc: 'https://media-cdn.trulia-local.com/neighborhood-media-service-prod/ma/boston/hyde-park/1269-ma_bos_hyde_park_154775_23_500x_cfit.jpg',
  imageAlt: 'Property Image',
  price: '$170,700',
  description: '1941 Lenox Rd NE',
  location: 'Atlanta, GA 30306',
  badges: [
    { label: 'Cash Only' },
    { label: 'Reported Vacant' },
    { label: 'No Buyers Premium' },
    { label: 'Open House' },
  ],
  beds: 3,
  baths: 2,
  sqft: 1560,
  onRegister: () => alert('Registered!'),
  badgeColors: {
    'Cash Only': 'bg-transparent text-red-500 border border-red-500',
    'Reported Vacant': 'bg-transparent text-black border border-black',
    'No Buyers Premium': 'bg-transparent text-blue-500 border border-blue-500',
    'Open House': 'bg-transparent text-orange-500 border border-orange-500',
  },
};

export const WithDifferentData = Template.bind({});
WithDifferentData.args = {
  imageSrc: 'https://media-cdn.trulia-local.com/neighborhood-media-service-prod/ma/boston/hyde-park/1269-ma_bos_hyde_park_154775_23_500x_cfit.jpg',
  imageAlt: 'Different Property',
  price: '$175,000',
  description: '2121 Rustic Oak Ln',
  location: 'Rio Vista, CA 94571',
  badges: [
    { label: 'Reserve $120,000' },
    { label: 'Financing Available' },
  ],
  beds: 4,
  baths: 3,
  sqft: 2000,

  onRegister: () => alert('Registered for Different Property!'),
  badgeColors: {
    'Reserve $120,000': 'bg-transparent text-green-500 border border-green-500',
    'Financing Available': 'bg-transparent text-purple-500 border border-purple-500',
  },
};


export const CenterAlignedReducedWidthCard = Template.bind({});
CenterAlignedReducedWidthCard.args = {
  imageSrc: 'https://media-cdn.trulia-local.com/neighborhood-media-service-prod/ma/boston/hyde-park/1269-ma_bos_hyde_park_154775_23_500x_cfit.jpg',
  imageAlt: 'Center Aligned Property',
  price: '$160,000',
  description: '2121 Rustic Oak Ln',
  location: 'Springfield, IL,45875',
  badges: [
    { label: 'Financing Available' },
  ],
  beds: 3,
  baths: 2,
  sqft: 1200,
  onRegister: () => alert('Registered for Center Aligned Property!'),
  badgeColors: {
    'Financing Available': 'bg-transparent text-blue-500 border border-blue-500',
  },
  className: 'w-9/12 mx-auto', 
};



