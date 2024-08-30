import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SearchBar from './SearchBar';

export default {
  title: '@3UM-SDK/SearchBar',
  component: SearchBar,
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
  },
} as Meta<typeof SearchBar>;

const Template: StoryFn<typeof SearchBar> = (args) => {
  const [searchValue, setSearchValue] = useState(args.value);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    alert(`Searching for: ${searchValue}`);
  };

  return (
    <SearchBar
      {...args}
      value={searchValue}
      onChange={handleSearchChange}
      onSearch={handleSearch}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter to search',
  value: '',
};

export const WithValue = Template.bind({});
WithValue.args = {
  placeholder: 'Search something...',
  value: 'Initial search value',
};

export const CustomPlaceholder = Template.bind({});
CustomPlaceholder.args = {
  placeholder: 'Custom placeholder',
  value: '',
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
  placeholder: 'Search with custom width...',
  value: '',
  className: 'w-1/2', 
};

