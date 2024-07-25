import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from './Button';

const meta: Meta<typeof Button> = {
  title: '@3UM-SDK/Button',
  component: Button,
  tags:['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    theme: {
      control: 'select',
      options: ['light', 'dark'],
    },
    children: {
      control: 'text',
    },
    onClick: { action: 'clicked' },
    className: {
      control: 'text',
      description: 'Custom daisy UI classes',
    }
    // onClick: { action: 'clicked' },
  },
};

export default meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Button',
};


export const WithAction = Template.bind({});
WithAction.args = {
  children: 'Click Me',
  onClick: () => alert('Button clicked!'),
};



// export const Sizes = () => (
//   <div className="flex flex-col space-y-4">
//     <Button variant="primary" size="sm">Small Button</Button>
//     <Button variant="primary" size="md">Medium Button</Button>
//     <Button variant="primary" size="lg">Large Button</Button>
//   </div>
// );

// Add this story to demonstrate Tailwind classes are working
// export const TailwindTest = () => (
//   <div className="p-4 bg-gray-100 rounded-lg">
//     <Button className="m-2 text-white bg-purple-500 hover:bg-purple-700">
//       Custom Tailwind Button
//     </Button>
//     <p className="mt-4 text-lg font-bold text-green-600">
//       This text should be green and bold if Tailwind is working.
//     </p>
//   </div>
// );