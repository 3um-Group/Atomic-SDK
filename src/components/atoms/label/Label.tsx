import React from 'react';

export interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
  theme?: 'light' | 'dark'; // Add theme prop
}

const Label: React.FC<LabelProps> = ({ htmlFor, children, className, theme = 'light' }) => {
  return (
    <label htmlFor={htmlFor} className={`block text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-black'} ${className}`}>
      {children}
    </label>
  );
};

export default Label;
