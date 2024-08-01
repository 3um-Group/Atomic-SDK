import React from 'react';


export interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ htmlFor, children, className }) => {
  return (
    <label htmlFor={htmlFor} className={`block text-gray-700 text-sm font-bold ${className}`}>
      {children}
    </label>
  );
};

export default Label;
