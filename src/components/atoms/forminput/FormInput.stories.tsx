import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FormInput, { FormInputProps } from './FormInput';

export default {
  title: '@3UM-SDK/FormInput',
  component: FormInput,
} as Meta<typeof FormInput>;

const Template: StoryFn<FormInputProps> = (args) => <FormInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  placeholder: 'Enter text',
  value: '',
  onChange: () => {},
  id: 'default-input', // Provide id
};

export const TextArea = Template.bind({});
TextArea.args = {
  multiline: true,
  placeholder: 'Enter message',
  value: '',
  onChange: () => {},
  id: 'textarea-input', // Provide id
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  type: 'text',
  placeholder: 'Custom styled input',
  value: '',
  onChange: () => {},
  className: 'border-2 border-gray-800 rounded-lg p-3',
  id: 'custom-styled-input', // Provide id
};
