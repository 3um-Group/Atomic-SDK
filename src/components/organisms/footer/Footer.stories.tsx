import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Footer, { FooterProps } from './Footer';

const meta: Meta<typeof Footer> = {
    title: '@3UM-SDK/Footer',
    component: Footer,
    tags: ['autodocs'],
    argTypes: {
        // Define your argTypes here if needed
    }
};

export default meta;

const Template: StoryFn<FooterProps> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
    footerSections: [
        {
            name: 'Section 1',
            links: [
                { title: 'Link 1', href: '#' },
                { title: 'Link 2', href: '#' },
            ],
        },
        {
            name: 'Section 2',
            links: [
                { title: 'Link 3', href: '#' },
                { title: 'Link 4', href: '#' },
            ],
        },
        {
            name: 'Section 3',
            links: [
                { title: 'Link 5', href: '#' },
                { title: 'Link 6', href: '#' },
            ],
        },
    ],
};

export const WithLogo = Template.bind({});
WithLogo.args = {
    logoSrc: '',
    footerSections: [
        {
            name: 'Section 1',
            links: [
                { title: 'Link 1', href: '#' },
                { title: 'Link 2', href: '#' },
            ],
        },
        {
            name: 'Section 2',
            links: [
                { title: 'Link 3', href: '#' },
                { title: 'Link 4', href: '#' },
            ],
        },
    ],
};

export const WithCustomLogo = Template.bind({});
WithCustomLogo.args = {
    logoSrc: 'https://img.logoipsum.com/331.svg',
    footerSections: [
        {
            name: 'Section 1',
            links: [
                { title: 'Link 1', href: '#' },
                { title: 'Link 2', href: '#' },
            ],
        },
        {
            name: 'Section 2',
            links: [
                { title: 'Link 3', href: '#' },
                { title: 'Link 4', href: '#' },
            ],
        },
    ],
};

