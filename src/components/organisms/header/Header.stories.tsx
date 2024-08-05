import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Header from './Header';
import { MockAuth0Provider } from '../../../utils/mockAuth0Context'; // Adjust the import path as needed

const meta: Meta<typeof Header> = {
  title: '@3UM-SDK/Header',
  component: Header,
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      // Add theme class to the HTML or body element
      document.documentElement.className = context.args.theme || '';
      return (
        <MockAuth0Provider mockProps={context.parameters.auth0}>
          <Story />
        </MockAuth0Provider>
      );
    },
  ],
  argTypes: {
    logoProps: {
      theme: {
        control: 'radio',
        options: ['light', 'dark'],
      },
      width: { control: 'number' },
      height: { control: 'number' },
    },
    theme: {
      control: 'select',
      options: ['light', 'dark'], // Adjust to match DaisyUI themes
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

const defaultLogoProps = {
  alt: 'Company Logo',
  theme: 'light' as const,
  width: 50,
  height: 50,
};

export const LogoOnly: Story = {
  args: {
    logoProps: defaultLogoProps,
    showNavItems: false,
    showAuthElements: false,
    theme: 'light', // Pass the theme prop
  },
};

export const LogoOnlyDarkTheme: Story = {
  args: {
    logoProps: { ...defaultLogoProps, theme: 'dark' },
    showNavItems: false,
    showAuthElements: false,
    theme: 'dark', // Pass the theme prop
  },
};

export const LogoAndNavItems: Story = {
  args: {
    logoProps: defaultLogoProps,
    showNavItems: true,
    showAuthElements: false,
    theme: 'light', // Pass the theme prop
  },
};

export const FullHeaderLoggedOut: Story = {
  args: {
    logoProps: defaultLogoProps,
    showNavItems: true,
    showAuthElements: true,
    theme: 'light', // Pass the theme prop
  },
  parameters: {
    auth0: {
      isAuthenticated: false,
    },
  },
};

export const FullHeaderLoggedIn: Story = {
  args: {
    logoProps: defaultLogoProps,
    showNavItems: true,
    showAuthElements: true,
    theme: 'light', // Pass the theme prop
  },
  parameters: {
    auth0: {
      isAuthenticated: true,
    },
  },
};