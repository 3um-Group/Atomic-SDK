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
  color?: string;
  /** Additional CSS classes */
  className?: string;
  /** The theme of the button */
  theme?: string;
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