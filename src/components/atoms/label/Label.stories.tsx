import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Label, { LabelProps } from './Label';

export default {
  title: '@3UM-SDK/Label',
  component: Label,
} as Meta<typeof Label>;

const Template: StoryFn<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  htmlFor: 'input-id',
  children: 'Label Text'
};

