import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import NavItem, { NavItemProps } from './NavItem';

const meta: Meta<typeof NavItem> = {
  title: '@3UM-SDK/NavItem',
  component: NavItem,
  tags: ['autodocs'],
  argTypes: {
    href: { control: 'text' },
    children: { control: 'text' },
    isActive: { control: 'boolean' },
    variantType: { 
      control: 'select', 
      options: ['neutral', 'primary', 'secondary', 'accent', 'success', 'info', 'warning', 'error'] 
    },
    hover: { control: 'boolean' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof NavItem>;

export const Default: Story = {
  args: {
    href: '/',
    children: 'Home',
  },
};

export const Active: Story = {
  args: {
    href: '/about',
    children: 'About',
    isActive: true,
  },
};

export const CustomVariants: Story = {
  args: {
    href: '/contact',
    children: 'Contact',
    variantType: 'accent',
  },
};

export const NoHover: Story = {
  args: {
    href: '/services',
    children: 'Services',
    hover: false,
  },
};

export const WithCustomClass: Story = {
  args: {
    href: '/blog',
    children: 'Blog',
    className: 'custom-nav-item',
  },
};

