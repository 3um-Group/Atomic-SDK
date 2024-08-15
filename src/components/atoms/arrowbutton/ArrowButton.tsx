import React from 'react';
import Button from '../../atoms/button/Button'; 

type ArrowButtonProps = {
  onClick: () => void;
  disabled: boolean;
  direction: 'prev' | 'next';
};

export const ArrowButton: React.FC<ArrowButtonProps> = ({ onClick, disabled, direction }) => {
  const icon = direction === 'prev' ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-black"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-black"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );

  return (
    <Button
      variant="ghost"
      size="md"
      className="p-2 bg-white rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'prev' ? 'Previous slide' : 'Next slide'}
    >
      {icon}
    </Button>
  );
};

export default ArrowButton;
