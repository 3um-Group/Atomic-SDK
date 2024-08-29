import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Badge, { BadgeProps } from './Badge'; 

export default {
  title: '@3UM-SDK/Badge',
  component: Badge,
} as Meta;

const Template: StoryFn<BadgeProps> = (args) => <Badge {...args} />;

export const SampleBadge = Template.bind({});
SampleBadge.args = {
  color: 'neutral', 
  children: 'Badge',
  className: 'border border-orange-500 text-orange-500',
};

export const CashOnly = Template.bind({});
CashOnly.args = {
  color: 'neutral', 
  children: 'Cash Only',
  className: 'border border-red-400 text-red-400',
};

export const ReportedVacant = Template.bind({});
ReportedVacant.args = {
  color: 'neutral', 
  children: 'Reported Vacant',
  className: 'border border-black text-black',
};

export const NoBuyersPremium = Template.bind({});
NoBuyersPremium.args = {
  color: 'neutral', 
  children: 'No Buyers Premium',
  className: 'border border-blue-400 text-blue-400',
};


export const LargeBadge = Template.bind({});
LargeBadge.args = {
  children: 'badge',
  className: 'badge badge-lg',
};

export const MediumBadge = Template.bind({});
MediumBadge.args = {
  children: 'badge',
  className: 'badge badge-md',
};

export const SmallBadge = Template.bind({});
SmallBadge.args = {
  children: 'badge',
  className: 'badge badge-sm',
};

export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
  children: 'primary',
  className: 'badge badge-primary badge-outline',
};

export const SecondaryOutline = Template.bind({});
SecondaryOutline.args = {
  children: 'secondary',
  className: 'badge badge-secondary badge-outline',
};

export const AccentOutline = Template.bind({});
AccentOutline.args = {
  children: 'accent',
  className: 'badge badge-accent badge-outline',
};