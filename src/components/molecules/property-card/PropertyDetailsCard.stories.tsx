import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import PropertyDetailsCard, { PropertyDetailsCardProps } from './PropertyDetailsCard';

export default {
  title: '@3UM-SDK/PropertyDetailsCard',
  component: PropertyDetailsCard,
} as Meta<typeof PropertyDetailsCard>;

const Template: StoryFn<PropertyDetailsCardProps> = (args) => <PropertyDetailsCard {...args} />;

export const LightTheme = Template.bind({});
LightTheme.args = {
  address: 'Hutton Plan in Altus at The Quarter by Pulte Homes',
  price: '$506,990',
  originalPrice: '$556,990',
  mortgage: 'Est. Mortgage $2,892/mo*',
  beds: 3,
  baths: 4,
  sqft: 2890,
  description: 'Gorgeous renovated craftsman in Dupont Commons swim community. This home has so many valuable upgrades making it perfectly move in ready! You are welcomed in by the covered front porch offering privacy among the trees. The main floor boasts gleaming hardwood floors, tons of windows with nature light pouring in, built in surround sound and a cozy fireside living room. The updated white kitchen with eat in breakfast room features new appliances and opens to the huge back deck and a flat and fully fenced backyard. Upstairs offers an oversized primary suite with a huge two-sided closet and separate vanities in the bathroom. The spacious laundry room is conveniently upstairs. The newly finished basement features a full bath, bedroom and convenient access to outside. The oversized two car garage features two additional storage bump outs and a storage closet - a special feature to this home! Extra upgrades include: new roof, new interior & exterior paint, replaced carpet upstairs & new light fixtures throughout. Dupont Commons is a swim community with a playground, fitness center, green spaces and dog park. Unbeatable location that is less than 1 mile to Westside Village with restaurants, shops and fitness that you can access by The Path/Whetstone Creek Trail just outside the neighborhood. Enjoy Westside Provisions, Scofflaw Brewery, Top Golf, and The Works Food Hall close by. The Westside park is just down the road. Enjoy all that the Upper Westside Living has to offer!',
  propertyLink: '#',
  location: 'Atlanta, GA 30318 English Avenue',
  theme: 'light', // Light theme
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  address: 'Hutton Plan in Altus at The Quarter by Pulte Homes',
  price: '$506,990',
  originalPrice: '$556,990',
  mortgage: 'Est. Mortgage $2,892/mo*',
  beds: 3,
  baths: 4,
  sqft: 2890,
  description: 'Gorgeous renovated craftsman in Dupont Commons swim community. This home has so many valuable upgrades making it perfectly move in ready! You are welcomed in by the covered front porch offering privacy among the trees. The main floor boasts gleaming hardwood floors, tons of windows with nature light pouring in, built in surround sound and a cozy fireside living room. The updated white kitchen with eat in breakfast room features new appliances and opens to the huge back deck and a flat and fully fenced backyard. Upstairs offers an oversized primary suite with a huge two-sided closet and separate vanities in the bathroom. The spacious laundry room is conveniently upstairs. The newly finished basement features a full bath, bedroom and convenient access to outside. The oversized two car garage features two additional storage bump outs and a storage closet - a special feature to this home! Extra upgrades include: new roof, new interior & exterior paint, replaced carpet upstairs & new light fixtures throughout. Dupont Commons is a swim community with a playground, fitness center, green spaces and dog park. Unbeatable location that is less than 1 mile to Westside Village with restaurants, shops and fitness that you can access by The Path/Whetstone Creek Trail just outside the neighborhood. Enjoy Westside Provisions, Scofflaw Brewery, Top Golf, and The Works Food Hall close by. The Westside park is just down the road. Enjoy all that the Upper Westside Living has to offer!',
  propertyLink: '#',
  location: 'Atlanta, GA 30318 English Avenue',
  theme: 'dark', // Dark theme
};
