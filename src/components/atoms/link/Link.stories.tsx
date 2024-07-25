import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Link, { LinkProps } from './Link';

const meta: Meta<typeof Link> = {
  title: '@3UM-SDK/Link',
  component: Link,
  argTypes: {
    variant: {
      control: 'select',
      options: ['neutral', 'primary', 'secondary', 'accent', 'success', 'info', 'warning', 'error'],
    },
    hover: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
    className: {
      control: 'text',
      description: 'Custom daisy UI classes',
    },
    href: {
      control: 'text',
    }
  },
};

export default meta;

const Template: StoryFn<LinkProps> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Link',
  href: '#',
};

export const Neutral = Template.bind({});
Neutral.args = {
  children: 'Neutral Link',
  href: '#',
  variant: 'neutral',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Link',
  href: '#',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Link',
  href: '#',
  variant: 'secondary',
};

export const Accent = Template.bind({});
Accent.args = {
  children: 'Accent Link',
  href: '#',
  variant: 'accent',
};

export const Success = Template.bind({});
Success.args = {
  children: 'Success Link',
  href: '#',
  variant: 'success',
};

export const Info = Template.bind({});
Info.args = {
  children: 'Info Link',
  href: '#',
  variant: 'info',
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'Warning Link',
  href: '#',
  variant: 'warning',
};

export const Error = Template.bind({});
Error.args = {
  children: 'Error Link',
  href: '#',
  variant: 'error',
};

export const Hover = Template.bind({});
Hover.args = {
  children: 'Hover Link',
  href: '#',
  hover: true,
};
