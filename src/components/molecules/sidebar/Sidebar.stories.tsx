import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Sidebar, { SidebarProps } from './Sidebar';
import { Button } from '../../atoms/button';

const meta: Meta<typeof Sidebar> = {
    title: '@3UM-SDK/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
    argTypes: {
        children: {
            control: 'text',
            description: 'Content displayed inside the sidebar',
        },
        isOpen: {
            control: 'boolean',
            description: 'Controls whether the sidebar is open or closed',
        },
        onClose: {
            action: 'closed',
            description: 'Function called when the sidebar requests to be closed',
        },
    }
}

export default meta;

const Template: StoryFn<SidebarProps> = (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
  
    const handleClose = () => setIsOpen(false);
    const handleOpen = () => setIsOpen(true);
  
    return (
      <>
        <Sidebar {...args} isOpen={isOpen} onClose={handleClose} />
      </>
    );
  };

export const Default = Template.bind({})
Default.args = {
  children: (
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      <li><a>Sidebar Item 1</a></li><li><a>Sidebar Item 2</a></li>
    </ul>
  )
}

export const OpenDrawer = Template.bind({});
OpenDrawer.args = {
  isOpen: true,
};

export const ClosedDrawer = Template.bind({});
ClosedDrawer.args = {
  isOpen: false,
};

