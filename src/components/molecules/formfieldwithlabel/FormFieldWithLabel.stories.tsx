import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FormFieldWithLabel, { FormFieldWithLabelProps } from './FormFieldWithLabel';

export default {
  title: '@3UM-SDK/FormFieldWithLabel',
  component: FormFieldWithLabel,
} as Meta<typeof FormFieldWithLabel>;

const Template: StoryFn<FormFieldWithLabelProps> = (args) => <FormFieldWithLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Name',
  id: 'name-input',
  type: 'text',
  value: '',
  onChange: () => {},
  theme: 'light', // Provide theme prop
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  label: 'Name',
  id: 'name-input-dark',
  type: 'text',
  value: '',
  onChange: () => {},
  theme: 'dark', // Provide dark theme
};


export const Message = Template.bind({});
Message.args = {
  label: 'Message',
  id: 'message-input',
  multiline: true,
  value: '',
  onChange: () => {},
  theme: 'light',
};

export const MessageDark = Template.bind({});
MessageDark.args = {
  label: 'Message',
  id: 'message-input-dark',
  multiline: true,
  value: '',
  onChange: () => {},
  theme: 'dark',
};
