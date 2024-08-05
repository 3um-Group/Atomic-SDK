import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Header, { UseAuthResult } from './Header';

const meta: Meta<typeof Header> = {
  title: '@3UM-SDK/Header',
  component: Header,
  tags: ['autodocs'],
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
      options: ['light', 'dark'],
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

// Create mock auth hooks
const createMockUseAuth = (isAuthenticated: boolean): () => UseAuthResult => {
  return () => ({
    isAuthenticated,
    loginWithRedirect: () => console.log('Login clicked'),
    logout: () => console.log('Logout clicked'),
  });
};

export const LogoOnly: Story = {
  args: {
    logoProps: defaultLogoProps,
    showNavItems: false,
    showAuthElements: false,
    theme: 'light',
    useAuth: createMockUseAuth(false),
  },
};

export const LogoOnlyDarkTheme: Story = {
  args: {
    logoProps: { ...defaultLogoProps, theme: 'dark' },
    showNavItems: false,
    showAuthElements: false,
    theme: 'dark',
    useAuth: createMockUseAuth(false),
  },
};

export const LogoAndNavItems: Story = {
  args: {
    logoProps: defaultLogoProps,
    showNavItems: true,
    showAuthElements: false,
    theme: 'light',
    useAuth: createMockUseAuth(false),
  },
};

export const FullHeaderLoggedOut: Story = {
  args: {
    logoProps: defaultLogoProps,
    showNavItems: true,
    showAuthElements: true,
    theme: 'light',
    useAuth: createMockUseAuth(false),
  },
};

export const FullHeaderLoggedIn: Story = {
  args: {
    logoProps: defaultLogoProps,
    showNavItems: true,
    showAuthElements: true,
    theme: 'light',
    useAuth: createMockUseAuth(true),
  },
};
