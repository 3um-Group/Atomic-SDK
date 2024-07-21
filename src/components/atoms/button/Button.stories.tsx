import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from './index';

const meta: Meta<typeof Button> = {
  title: '@3UM-SDK/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: ['primary', 'secondary', 'ghost'],
      },
    },
    size: {
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large'],
      },
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
  size: 'medium',
  children: 'Default Button',
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'medium',
  children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'medium',
  children: 'Secondary Button',
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: 'ghost',
  size: 'medium',
  children: 'Ghost Button',
};

export const Sizes = () => (
  <div className="flex flex-col space-y-4">
    <Button variant="primary" size="small">Small Button</Button>
    <Button variant="primary" size="medium">Medium Button</Button>
    <Button variant="primary" size="large">Large Button</Button>
  </div>
);

// Add this story to demonstrate Tailwind classes are working
export const TailwindTest = () => (
  <div className="p-4 bg-gray-100 rounded-lg">
    <Button className="m-2 text-white bg-purple-500 hover:bg-purple-700">
      Custom Tailwind Button
    </Button>
    <p className="mt-4 text-lg font-bold text-green-600">
      This text should be green and bold if Tailwind is working.
    </p>
  </div>
);