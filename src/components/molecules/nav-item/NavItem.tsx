import React from 'react';
import Link, { LinkProps } from '../../atoms/link/Link'; // Adjust the import path as needed

export interface NavItemProps extends Omit<LinkProps, 'variant'> {
  isActive?: boolean;
  activeVariant?: LinkProps['variant'];
  inactiveVariant?: LinkProps['variant'];
}

const NavItem: React.FC<NavItemProps> = ({
  isActive = false,
  activeVariant = 'primary',
  inactiveVariant = 'neutral',
  hover = true,
  className = '',
  children,
  ...props
}) => {
  const baseClasses = 'nav-item';
  const activeClasses = isActive ? 'active' : '';
  const variant = isActive ? activeVariant : inactiveVariant;
  
  return (
    <Link 
      variant={variant}
      hover={hover}
      className={`${baseClasses} ${activeClasses} ${className}`.trim()}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavItem;