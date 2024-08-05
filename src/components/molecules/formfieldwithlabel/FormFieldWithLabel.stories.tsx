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
  id: 'name-input', // Provide id
  type: 'text',
  value: '',
  onChange: () => {},
};


export const Email = Template.bind({});
Email.args = {
  label: 'Email',
  id: 'email-input', // Provide id
  type: 'email',
  value: '',
  onChange: () => {},
};

export const Message = Template.bind({});
Message.args = {
  label: 'Message',
  id: 'message-input', // Provide id
  multiline: true,
  value: '',
  onChange: () => {},
};
