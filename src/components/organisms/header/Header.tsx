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
  theme?: string;
  useAuth?: () => UseAuthResult; 
}

const Header: React.FC<HeaderProps> = ({
  showNavItems = true,
  showAuthElements = true,
  logoProps,
  theme,
  useAuth: useAuthProp = useAuth // Use the prop if provided, otherwise use the default
}) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuthProp();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <UI.Navbar className={`bg-white shadow-md ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <UI.Navbar.Start className='flex items-center space-x-5'>
        <Logo {...logoProps} />
        {/* <div > */}
        {showNavItems && (
          <nav className='hidden md:flex space-x-6'>
            <NavItem href="/" >Buy</NavItem>
            <NavItem href="/about">Stake</NavItem>
            <NavItem href="/contact">Farm</NavItem>
          </nav>
        )}
        {/* </div> */}
      </UI.Navbar.Start>




      <UI.Navbar.End >
        {showAuthElements && (
          <div>
            {isAuthenticated ? <LogoutButton theme={theme} onAuth={logout}  /> : <LoginButton theme={theme} onAuth={loginWithRedirect} />}
          </div>
        )}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </UI.Navbar.End>

      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <nav className="flex flex-col space-y-2">
            <NavItem href="/" >Home</NavItem>
            <NavItem href="/about">About</NavItem>
            <NavItem href="/contact">Contact</NavItem>
          </nav>
          <div className="mt-4">
            {showAuthElements && (
              <>
                {isAuthenticated ? <LogoutButton theme={theme} onAuth={logout} /> : <LoginButton theme={theme} onAuth={loginWithRedirect} />}
              </>
            )}
          </div>
        </div>
      )}




    </UI.Navbar>
  );
};

export default Header;