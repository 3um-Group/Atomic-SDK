// Header.tsx
import React, { useState } from 'react';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <UI.Navbar className={`bg-white shadow-md ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <UI.Navbar.Start className='flex items-center space-x-5'>
        <Logo {...logoProps} />
        {/* <div > */}
        {showNavItems && (
          <nav className='hidden md:flex space-x-6'>
            <NavItem href="/" >Home</NavItem>
            <NavItem href="/about">About</NavItem>
            <NavItem href="/contact">Contact</NavItem>
          </nav>
        )}
        {/* </div> */}
      </UI.Navbar.Start>




      <UI.Navbar.End >
        {showAuthElements && (
          <div className='hidden md'>
            {isAuthenticated ? <LogoutButton theme={theme} /> : <LoginButton theme={theme} />}
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
                {isAuthenticated ? <LogoutButton theme={theme} /> : <LoginButton theme={theme} />}
              </>
            )}
          </div>
        </div>
      )}




    </UI.Navbar>
  );
};

export default Header;
