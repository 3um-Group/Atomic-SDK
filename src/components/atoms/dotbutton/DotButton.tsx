import React from 'react';

type DotButtonProps = {
  selected: boolean;
  onClick: () => void;
};

export const DotButton: React.FC<DotButtonProps> = ({ selected, onClick }) => {
  return (
    <button
      className={`w-3 h-3 rounded-full ${
        selected ? 'bg-gray-800' : 'bg-gray-300'
      }`}
      onClick={onClick}
      aria-label="Select slide"
    />
  );
};


export default DotButton;