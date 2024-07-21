import React from 'react';

// Define the types for the Button component props
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
}

// Create the Button component with default parameter values
const Button: React.FC<ButtonProps> = ({
  variant = 'primary', 
  size = 'medium', 
  className, 
  ...props 
}) => {
  const baseClasses = 'font-bold rounded';
  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-700',
    secondary: 'bg-gray-500 text-white hover:bg-gray-700',
    ghost: 'bg-transparent text-blue-500 hover:bg-blue-100',
  };
  const sizeClasses = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg',
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className || ''}`;

  return <button className={buttonClasses} {...props} />;
};

export default Button;
