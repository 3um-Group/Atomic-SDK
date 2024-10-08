import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Modal, { ModalProps } from './Modal';
import { Button } from '../button';



const meta: Meta<typeof Modal> = {
    title: '@3UM-SDK/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {
        children: {
            control: 'text',
            description: 'Content displayed inside the modal',
        },
        isOpen: {
            control: 'boolean',
            description: 'Controls whether the modal is open or closed',
        },
        onClose: {
            action: 'closed',
            description: 'Function called when the modal requests to be closed',
        },
    }
}

export default meta;

const Template: StoryFn<ModalProps> = (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
  
    const handleClose = () => setIsOpen(false);
    const handleOpen = () => setIsOpen(true);
  
    return (
      <>
        <Button onClick={handleOpen} >
          Open Modal
        </Button>
        <Modal {...args} isOpen={isOpen} onClose={handleClose} />
      </>
    );
  };

export const Default = Template.bind({})
Default.args = {
    children: 'Dialog content goes here'
}



export const SaveCancel = Template.bind({});
SaveCancel.args = {
  children: 'Do you want to save the changes?',
  actions: (
    <>
      <Button  onClick={() => alert('Save clicked')}>
        Save
      </Button>
      <Button  className= "btn btn-outline btn-error" onClick={() => alert('Cancel clicked')}>
        Cancel
      </Button>
    </>
  ),
};

export const YesNo = Template.bind({});
YesNo.args = {
    children: 'Are you sure you want to proceed?',
  actions: (
    <>
      <Button  onClick={() => alert('Yes clicked')}>
        Yes
      </Button>
      <Button  className= "btn btn-outline btn-error" onClick={() => alert('No clicked')}>
        No
      </Button>
    </>
  ),
};


export const Ok = Template.bind({});
Ok.args = {
  children: 'Operation completed successfully.',
  actions: (
    <Button className="btn btn-outline btn-info" onClick={() => alert('Ok clicked')}>
        Ok
      </Button>
  ),
};


