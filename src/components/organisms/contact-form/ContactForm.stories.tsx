import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ContactForm, { ContactFormProps } from './ContactForm';

export default {
  title: '@3UM-SDK/ContactForm',
  component: ContactForm,
} as Meta<typeof ContactForm>;

const Template: StoryFn<ContactFormProps> = (args) => <ContactForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  phone: '',
  email: '',
  message: '',
  onPhoneChange: () => {},
  onEmailChange: () => {},
  onMessageChange: () => {},
  onSubmit: () => {},
  className: 'max-w-md mx-auto',
  theme: 'light', // Default to light theme
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  phone: '',
  email: '',
  message: '',
  onPhoneChange: () => {},
  onEmailChange: () => {},
  onMessageChange: () => {},
  onSubmit: () => {},
  className: 'max-w-md mx-auto',
  theme: 'dark', // Set to dark theme
};
