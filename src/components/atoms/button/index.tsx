import React from 'react';
import * as UI from 'react-daisyui';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
  theme?: string;
  children?: string;
  onClick?: () => void

  // Add other props as needed
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  theme,
  color,
  children,
  onClick,
  ...props
}) => {
  return (
    <>
      <UI.Button color={variant} size={size} dataTheme={theme} {...props}>{children}</UI.Button>
    </>
  )
};

export default Button;