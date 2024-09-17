import React from 'react';
import * as UI from 'react-daisyui';
import Logo, { LogoProps } from '../../atoms/logo/Logo';
import { LoginButton, LogoutButton } from '../../molecules/auth-elements/AuthElements';
import { useAuth0 } from '@auth0/auth0-react';
import { Sidebar, SearchBar } from '../../molecules';

export interface UseAuthResult {
  isAuthenticated: boolean;
  loginWithRedirect: () => void;
  logout: () => void;
}

export const useAuth = (): UseAuthResult => {
  const auth0 = useAuth0();
  return {
    isAuthenticated: auth0.isAuthenticated,
    loginWithRedirect: auth0.loginWithRedirect,
    logout: auth0.logout,
  };
};

interface HeaderProps {
  showAuthElements?: boolean;
  logoProps: Omit<LogoProps, 'className'>;
  useAuth?: () => UseAuthResult;
}

const Header: React.FC<HeaderProps> = ({
  showAuthElements = true,
  logoProps,
  useAuth: useAuthProp = useAuth
}) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuthProp();


  return (
    <UI.Navbar className="shadow-md bg-base-100 relative">
      <UI.Navbar.Start className="flex items-center space-x-2 pl-2">
        <Sidebar children={undefined} />
        <Logo {...logoProps} className="ml-2" />
      </UI.Navbar.Start>

      <UI.Navbar.Center className="flex items-center space-x-5">
        <SearchBar
          value={''}
          onChange={() => { /* TODO: Implement onChange handler */ }}
          onSearch={() => { /* TODO: Implement onSearch handler */ }}
        />
        {showAuthElements && (
          <div>
            {isAuthenticated ? (
              <LogoutButton onAuth={logout} />
            ) : (
              <LoginButton onAuth={loginWithRedirect} />
            )}
          </div>
        )}
      </UI.Navbar.Center>
    </UI.Navbar>
  );
};

export default Header;
