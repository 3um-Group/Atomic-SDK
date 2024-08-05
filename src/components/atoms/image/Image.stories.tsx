import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Image, { ImageProps } from './Image';

const meta: Meta<typeof Image> = {
  title: '@3UM-SDK/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    zoomOnFocus: { control: 'boolean' },
    className: { control: 'text' },
    style: { control: 'object' },
    zoomScale: { control: 'number' },
  },
};

export default meta;

const Template: StoryFn<ImageProps> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/300x200.png?text=Sample+Image',
  alt: 'Default Image',
  zoomOnFocus: true,
  className: '',
  style: {},
  zoomScale: 1.1,
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  src: 'https://via.placeholder.com/500x300.png?text=Sample+Image',
  alt: 'Custom Size Image',
  zoomOnFocus: false,
  className: 'custom-class',
  style: { border: '2px solid black' },
  zoomScale: 1.2,
};
