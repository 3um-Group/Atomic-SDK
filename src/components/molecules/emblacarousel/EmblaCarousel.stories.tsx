import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import EmblaCarousel from './EmblaCarousel';

export default {
  title: '@3UM-SDK/EmblaCarousel',
  component: EmblaCarousel,
} as Meta<typeof EmblaCarousel>;

const Template: StoryFn<typeof EmblaCarousel> = (args) => <EmblaCarousel {...args} />;

const imageSlides = [
  {
    src: 'https://zillowstatic.com/bedrock/app/uploads/sites/15/2019/02/February-most-searched-Trulia-homes-Encinco-L.A-68204b.jpg',
    alt: 'Slide 1',
    address: 'Encino House',
    location: 'Encino, Los Angeles, CA',
    price: '$3,000,000',
    beds: 5,
    baths: 4,
    sqFeet: 3500,
  },
  {
    src: 'https://www.trulia.com/pictures/thumbs_4/zillowstatic/fp/efe7893488a9a835d3d3b6aff6b65b5e-full.jpg',
    alt: 'Slide 2',
    address: 'Beverly Hills Estate',
    location: 'Beverly Hills, CA',
    price: '$5,500,000',
    beds: 6,
    baths: 7,
    sqFeet: 4500,
  },
  {
    src: 'https://www.trulia.com/pictures/thumbs_5/zillowstatic/fp/fdcb4866ea77fdc0746eaa07f6cc8c1e-full.jpg',
    alt: 'Slide 3',
    address: 'Santa Monica Beach House',
    location: 'Santa Monica, CA',
    price: '$4,200,000',
    beds: 4,
    baths: 5,
    sqFeet: 3000,
  },
  {
    src: 'https://images.flyhomes.com/photos/2303444/863482521/original.jpg?tr=f-auto,w-640,h-360',
    alt: 'Slide 4',
    address: 'Hollywood Hills Modern',
    location: 'Hollywood Hills, Los Angeles, CA',
    price: '$6,800,000',
    beds: 5,
    baths: 6,
    sqFeet: 5000,
  },
  {
    src: 'https://www.trulia.com/pictures/thumbs_5/zillowstatic/fp/fe53d5d8c87e50feca56be9146316c6e-full.jpg',
    alt: 'Slide 5',
    address: 'Bel Air Luxury Home',
    location: 'Bel Air, Los Angeles, CA',
    price: '$8,000,000',
    beds: 7,
    baths: 8,
    sqFeet: 6500,
  },
  {
    src: 'https://www.trulia.com/pictures/thumbs_5/zillowstatic/fp/b3bf2c312f1d29524f7e79d6676712a7-full.jpg',
    alt: 'Slide 6',
    address: 'Malibu Cliffside Mansion',
    location: 'Malibu, CA',
    price: '$10,000,000',
    beds: 6,
    baths: 7,
    sqFeet: 7000,
  },
];

// Default Carousel Story
export const Default = Template.bind({});
Default.args = {
  slides: imageSlides,
  options: { loop: false },
  showArrowButtons: true, // Show arrow buttons by default
  showDotButtons: true, // Show dot buttons by default
  showOverlay: true, // Show overlay by default
};

// Looping Carousel Story
export const LoopingCarousel = Template.bind({});
LoopingCarousel.args = {
  slides: imageSlides,
  options: { loop: true },
  showArrowButtons: true,
  showDotButtons: true,
  showOverlay: true, // Show overlay by default
};

// Autoplay Carousel with Dot Buttons Centered
export const AutoplayCarousel = Template.bind({});
AutoplayCarousel.args = {
  slides: imageSlides,
  options: { loop: true },
  autoplay: true,
  delay: 3000, // 3 seconds delay
  showArrowButtons: false, // Hide arrow buttons
  dotButtonAlignment: 'center',
  showDotButtons: true, // Show dot buttons
  showOverlay: true, // Show overlay by default
};

export const ArrowButtonsLeftDotButtonsRight = Template.bind({});
ArrowButtonsLeftDotButtonsRight.args = {
  slides: imageSlides,
  options: { loop: true },
  arrowButtonAlignment: 'left',
  dotButtonAlignment: 'right',
  showArrowButtons: true,
  showDotButtons: true,
  showOverlay: true, // Show overlay by default
};

export const CenterAlignedControls = Template.bind({});
CenterAlignedControls.args = {
  slides: imageSlides,
  options: { loop: true },
  showArrowButtons: false, // Hide arrow buttons
  dotButtonAlignment: 'center',
  showDotButtons: true, // Show dot buttons
  showOverlay: true, // Show overlay by default
};

export const NoArrowButtons = Template.bind({});
NoArrowButtons.args = {
  slides: imageSlides,
  options: { loop: true },
  dotButtonAlignment: 'center',
  showArrowButtons: false, // Hide arrow buttons
  showDotButtons: true, // Show dot buttons
  showOverlay: true, // Show overlay by default
};

export const NoDotButtons = Template.bind({});
NoDotButtons.args = {
  slides: imageSlides,
  options: { loop: true },
  showArrowButtons: true, // Show arrow buttons
  showDotButtons: false, // Hide dot buttons
  arrowButtonAlignment: 'center',
  showOverlay: true, // Show overlay by default
};



