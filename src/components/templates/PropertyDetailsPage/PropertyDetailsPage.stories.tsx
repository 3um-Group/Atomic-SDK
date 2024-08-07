import React from 'react';
import { StoryFn, Meta } from '@storybook/react/types-6-0';
import PropertyDetailsPage, { PropertyDetailsPageProps } from './PropertyDetailsPage';

export default {
  title: '@3UM-SDK/PropertyDetailsPage',
  component: PropertyDetailsPage,
} as Meta;

const Template: StoryFn<PropertyDetailsPageProps> = (args) => <PropertyDetailsPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: 'https://www.trulia.com/pictures/thumbs_4/zillowstatic/fp/022942f9126bfb9be244c725d388a2a2-full.jpg',
  address: '1668 Barfield Run NW',
  price: '$506,990',
  originalPrice: '',
  mortgage: 'Est. Mortgage $2,892/mo*',
  beds: 3,
  baths: 4,
  sqft: 2890,
  description: 'Gorgeous renovated craftsman in Dupont Commons swim community. This home has so many valuable upgrades making it perfectly move in ready! You are welcomed in by the covered front porch offering privacy among the trees. The main floor boasts gleaming hardwood floors, tons of windows with nature light pouring in, built in surround sound and a cozy fireside living room. The updated white kitchen with eat in breakfast room features new appliances and opens to the huge back deck and a flat and fully fenced backyard. Upstairs offers an oversized primary suite with a huge two-sided closet and separate vanities in the bathroom. The spacious laundry room is conveniently upstairs. The newly finished basement features a full bath, bedroom and convenient access to outside. The oversized two car garage features two additional storage bump outs and a storage closet - a special feature to this home! Extra upgrades include: new roof, new interior & exterior paint, replaced carpet upstairs & new light fixtures throughout. Dupont Commons is a swim community with a playground, fitness center, green spaces and dog park. Unbeatable location that is less than 1 mile to Westside Village with restaurants, shops and fitness that you can access by The Path/Whetstone Creek Trail just outside the neighborhood. Enjoy Westside Provisions, Scofflaw Brewery, Top Golf, and The Works Food Hall close by. The Westside park is just down the road. Enjoy all that the Upper Westside Living has to offer!',
  propertyLink: '#',
  location: 'Atlanta, GA 30318 English Avenue',
  initialPhone: '',
  initialEmail: '',
  initialMessage: '',
  theme: 'light', // Add theme prop
};

export const WithCustomData = Template.bind({});
WithCustomData.args = {
  imageUrl: 'https://via.placeholder.com/300x200.png?text=Sample+Image',
  address: '123 Main Street',
  price: '$999,999',
  originalPrice: '$1,200,000',
  mortgage: 'Est. Mortgage $4,000/mo*',
  beds: 5,
  baths: 3,
  sqft: 3500,
  description: 'A beautiful property located in the heart of the city with all modern amenities. This home has so many valuable upgrades making it perfectly move in ready! You are welcomed in by the covered front porch offering privacy among the trees. The main floor boasts gleaming hardwood floors, tons of windows with nature light pouring in, built in surround sound and a cozy fireside living room. The updated white kitchen with eat in breakfast room features new appliances and opens to the huge back deck and a flat and fully fenced backyard. Upstairs offers an oversized primary suite with a huge two-sided closet and separate vanities in the bathroom. The spacious laundry room is conveniently upstairs. The newly finished basement features a full bath, bedroom and convenient access to outside. The oversized two car garage features two additional storage bump outs and a storage closet - a special feature to this home! Extra upgrades include: new roof, new interior & exterior paint, replaced carpet upstairs & new light fixtures throughout. Dupont Commons is a swim community with a playground, fitness center, green spaces and dog park. Unbeatable location that is less than 1 mile to Westside Village with restaurants, shops and fitness that you can access by The Path/Whetstone Creek Trail just outside the neighborhood. Enjoy Westside Provisions, Scofflaw Brewery, Top Golf, and The Works Food Hall close by. The Westside park is just down the road. Enjoy all that the Upper Westside Living has to offer!',
  propertyLink: '#',
  location: 'San Francisco, CA 94101',
  initialPhone: '123-456-7890',
  initialEmail: 'example@example.com',
  initialMessage: 'I am interested in this property.',
  theme: 'light', // Add theme prop
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  ...Default.args,
  theme: 'dark', // Dark theme
};

export const DarkThemeWithCustomData = Template.bind({});
DarkThemeWithCustomData.args = {
  ...WithCustomData.args,
  theme: 'dark', // Dark theme
};
