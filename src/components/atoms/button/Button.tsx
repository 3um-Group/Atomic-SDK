import React from 'react';
import * as UI from 'react-daisyui';


/**
 * A customizable button component
 */

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The visual style of the button */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** The size of the button */
  size?: 'sm' | 'md' | 'lg';
  /** The color of the button (if applicable) */
  className?: string;
  /** The content of the button */
  children?: string;
  /** Function to call when the button is clicked */
  onClick?: () => void

  // Add other props as needed
}

/**
 * Button component for user interactions
 */
const Button: React.FC<ButtonProps> = ({
  variant = 'ghost',
  size = 'md',
  color,
  children,
  onClick,
  ...props
}) => {
  return (
    <>
      <UI.Button color={variant} size={size}  onClick={(e) => {
        if (onClick) onClick();
      }} {...props}>{children}</UI.Button>
    </>
  )
};

export default Button;