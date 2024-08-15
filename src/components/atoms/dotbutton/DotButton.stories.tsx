import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { DotButton } from './DotButton';

export default {
  title: '@3UM-SDK/DotButton',
  component: DotButton,
} as Meta<typeof DotButton>;

const Template: StoryFn<typeof DotButton> = (args) => <DotButton {...args} />;

export const SelectedDot = Template.bind({});
SelectedDot.args = {
  selected: true,
  onClick: () => alert('Dot button clicked'),
};

export const UnselectedDot = Template.bind({});
UnselectedDot.args = {
  selected: false,
  onClick: () => alert('Dot button clicked'),
};
