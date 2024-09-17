import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Sidebar, { SidebarProps } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: '@3UM-SDK/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Content displayed inside the sidebar',
    }
  }
}

export default meta;

const Template: StoryFn<SidebarProps> = (args) => {
  
  return (
    <React.Fragment>
      <Sidebar {...args} />
    </React.Fragment>
  );
};

export const Default = Template.bind({})
Default.args = {
  children: 'Sidebar content goes here'
}

