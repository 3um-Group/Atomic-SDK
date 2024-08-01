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
  className: 'max-w-md mx-auto', // Default styling for the form
};
