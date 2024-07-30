// Logo.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Logo, { LogoProps } from './Logo';

const meta: Meta<typeof Logo> = {
  title: '@3UM-SDK/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
    },
    width: { control: 'number' },
    height: { control: 'number' },
    customLightSrc: { control: 'text' },
    customDarkSrc: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

const defaultArgs: LogoProps = {
  alt: '3UM Logo',
  theme: 'light',
  width: 70,
  height: 50,
};

export const Default: Story = {
  args: defaultArgs,
};

export const DarkTheme: Story = {
  args: {
    ...defaultArgs,
    theme: 'dark',
  },
};

export const CustomSize: Story = {
  args: {
    ...defaultArgs,
    width: 200,
    height: 100,
  },
};

export const CustomLightLogo: Story = {
  args: {
    ...defaultArgs,
    customLightSrc: 'https://placeholder.com/custom-light-logo.png',
  },
};

export const CustomDarkLogo: Story = {
  args: {
    ...defaultArgs,
    theme: 'dark',
    customDarkSrc: 'https://placeholder.com/custom-dark-logo.png',
  },
};

export const CustomBothLogos: Story = {
  args: {
    ...defaultArgs,
    customLightSrc: 'https://placeholder.com/custom-light-logo.png',
    customDarkSrc: 'https://placeholder.com/custom-dark-logo.png',
  },
};