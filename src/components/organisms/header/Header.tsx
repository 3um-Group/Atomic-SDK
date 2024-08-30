// Header.tsx
import React, { useState } from 'react';
import * as UI from 'react-daisyui';
import Logo, { LogoProps } from '../../atoms/logo/Logo';
import NavItem from '../../molecules/nav-item/NavItem';
import { LoginButton, LogoutButton } from '../../molecules/auth-elements/AuthElements';
import { useAuth0 } from '@auth0/auth0-react'; // Use the real Auth0 hook




// Define a custom hook interface
export interface UseAuthResult {
  isAuthenticated: boolean;
  loginWithRedirect: () => void;
  logout: () => void;
}

// Create a default implementation that uses the real Auth0 hook
export const useAuth = (): UseAuthResult => {
  const auth0 = useAuth0();
  return {
    isAuthenticated: auth0.isAuthenticated,
    loginWithRedirect: auth0.loginWithRedirect,
    logout: auth0.logout,
  };
};

interface HeaderProps {
  showNavItems?: boolean;
  showAuthElements?: boolean;
  logoProps: Omit<LogoProps, 'className'>;
  useAuth?: () => UseAuthResult;
}

const Header: React.FC<HeaderProps> = ({
  showNavItems = true,
  showAuthElements = true,
  logoProps,
  useAuth: useAuthProp = useAuth // Use the prop if provided, otherwise use the default
}) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuthProp();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <UI.Navbar className="shadow-md relative">
      <UI.Navbar.Start className="flex items-center space-x-5">
        <Logo {...logoProps} />
        {showNavItems && (
          <nav className="hidden md:flex space-x-6">
            <NavItem href="/">Buy</NavItem>
            <NavItem href="/about">Stake</NavItem>
            <NavItem href="/contact">Farm</NavItem>
          </nav>
        )}
      </UI.Navbar.Start>




      <UI.Navbar.End className="flex items-center space-x-4">
        {showAuthElements && (
          <div className="hidden md:block">
            {isAuthenticated ? (
              <LogoutButton onAuth={logout} />
            ) : (
              <LoginButton onAuth={loginWithRedirect} />
            )}
          </div>
        )}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {isMenuOpen && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            <nav className="flex flex-col space-y-2 p-2">
              <NavItem href="/" onClick={closeMenu}>Home</NavItem>
              <NavItem href="/about" onClick={closeMenu}>About</NavItem>
              <NavItem href="/contact" onClick={closeMenu}>Contact</NavItem>
            </nav>
            {showAuthElements && (
              <div className="mt-2 border-t border-gray-200 pt-2">
                {isAuthenticated ? (
                  <LogoutButton onAuth={logout} />
                ) : (
                  <LoginButton onAuth={loginWithRedirect} />
                )}
              </div>
            )}
          </div>
        )}
      </UI.Navbar.End>



    </UI.Navbar>
  );
};

export default Header;