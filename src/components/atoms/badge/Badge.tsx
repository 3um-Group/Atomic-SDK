import React from 'react';
import * as UI from 'react-daisyui';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'info' | 'success' | 'warning' | 'error' | 'neutral';
  className?: string;
  children?: React.ReactNode;
}


const Badge: React.FC<BadgeProps> = ({
  color = 'primary',
  className = '',
  children,
  ...props
}) => {
  return (
    <UI.Badge
      color={color}
      className={`py-1 px-3 rounded-md ${className}`}
      {...props}
    >
      {children}
    </UI.Badge>
  );
};

export default Badge;
