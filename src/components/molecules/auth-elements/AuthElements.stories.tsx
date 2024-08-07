import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { LoginButton, LogoutButton, AuthButtonProps } from './AuthElements';
import { LoggedInDecorator, LoggedOutDecorator } from './decorators';



const meta: Meta = {
    title: '@3UM-SDK/AuthElements',
    tags: ['autodocs']
};

export default meta;


const LoginTemplate: StoryFn<AuthButtonProps> = (args) => <LoginButton {...args} />;


// type Story = StoryObj;
export const Login = LoginTemplate.bind({});
Login.args = {
    theme: 'dark'
}
Login.argTypes = {
    theme: {
        control: 'select',
        options: ['light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate', 'synthwave', 'retro', 'cyberpunk'],
    },
}
Login.decorators = [LoggedOutDecorator]

const LogoutTemplate: StoryFn<AuthButtonProps> = (args) => <LogoutButton {...args} />;
export const Logout = LogoutTemplate.bind({});
Logout.args = {
    theme: 'dark',
}

Logout.argTypes = {
    theme: {
        control: 'select',
        options: ['light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate', 'synthwave', 'retro', 'cyberpunk'],
    },
}
Logout.decorators = [LoggedInDecorator]

