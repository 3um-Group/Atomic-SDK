import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { LoginButton, LogoutButton, AuthButtonProps } from './AuthElements';
import { MockAuth0Provider } from '../../../utils/mockAuth0Context';



const meta: Meta = {
    title: '@3UM-SDK/AuthElements',
    tags: ['autodocs'],
    decorators: [
        (Story, context) => (
            <MockAuth0Provider mockProps={context.parameters.auth0}>
                <Story />
            </MockAuth0Provider>
        ),
    ],
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

