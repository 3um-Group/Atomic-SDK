import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ArrowButton } from './ArrowButton';

export default {
  title: '@3UM-SDK/ArrowButton',
  component: ArrowButton,
} as Meta<typeof ArrowButton>;

const Template: StoryFn<typeof ArrowButton> = (args) => <ArrowButton {...args} />;

export const PrevButton = Template.bind({});
PrevButton.args = {
  direction: 'prev',
  disabled: false,
};

export const NextButton = Template.bind({});
NextButton.args = {
  direction: 'next',
  disabled: false,
};

export const DisabledPrevButton = Template.bind({});
DisabledPrevButton.args = {
  direction: 'prev',
  disabled: true,
};

export const DisabledNextButton = Template.bind({});
DisabledNextButton.args = {
  direction: 'next',
  disabled: true,
};
