import React from 'react';
import Link, { LinkProps } from '../../atoms/link/Link'; // Adjust the import path as needed

export interface NavItemProps extends Omit<LinkProps, 'variant'> {
  isActive?: boolean;
  variantType?: LinkProps['variant'];
}

const NavItem: React.FC<NavItemProps> = ({
  isActive = false,
  // activeVariant = 'primary',
  // inactiveVariant = 'neutral',
  variantType,
  hover = true,
  className = '',
  children,
  ...props
}) => {
  const baseClasses = 'nav-item';
  const activeClasses = isActive ? 'active' : '';

  return (
    <Link
      variant={variantType}
      hover={hover}
      className={`${baseClasses} ${activeClasses} ${className}`.trim()}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavItem;