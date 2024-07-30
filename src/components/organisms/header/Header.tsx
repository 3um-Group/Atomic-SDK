// Header.tsx
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import * as UI from 'react-daisyui';
import Logo, { LogoProps } from '../../atoms/logo/Logo';
import NavItem from '../../molecules/nav-item/NavItem';
import { LoginButton, LogoutButton } from '../../molecules/auth-elements/AuthElements';

interface HeaderProps {
  showNavItems?: boolean;
  showAuthElements?: boolean;
  logoProps: Omit<LogoProps, 'className'>;
  theme?: string; // Add a theme prop
}

const Header: React.FC<HeaderProps> = ({
  showNavItems = true,
  showAuthElements = true,
  logoProps,
  theme
}) => {
  const { isAuthenticated } = useAuth0();
  console.log("Header isAuthenticated:", isAuthenticated);

  return (
    <UI.Navbar className={`bg-white shadow-md ${theme}`}>
      <UI.Navbar.Start>
        <Logo {...logoProps} />
      </UI.Navbar.Start>

      {showNavItems && (
        <UI.Navbar.Center>
          <NavItem href="/" isActive>Home</NavItem>
          <NavItem href="/about">About</NavItem>
          <NavItem href="/contact">Contact</NavItem>
        </UI.Navbar.Center>
      )}

      {showAuthElements && (
        <UI.Navbar.End>
          {isAuthenticated ? <LogoutButton theme={theme} /> : <LoginButton theme={theme} />}
        </UI.Navbar.End>
      )}
    </UI.Navbar>
  );
};

export default Header;
