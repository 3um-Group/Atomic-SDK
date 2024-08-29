import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  className?: string;  
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Enter to search',
  value,
  onChange,
  onSearch,
  className = '', 
}) => {
  return (
    <div className={`flex items-center border rounded-lg p-2 ${className}`}>
      <input
        type="text"
        className="flex-1 outline-none bg-transparent text-gray-700"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <FontAwesomeIcon 
        icon={faSearch} 
        onClick={onSearch} 
        className="cursor-pointer text-blue-900 hover:text-blue-700 focus:outline-none ml-2"
      />
    </div>
  );
};

export default SearchBar;
