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
  sidebarProps?: React.ComponentProps<typeof Sidebar>;
}

const Header: React.FC<HeaderProps> = ({
  showAuthElements = true,
  logoProps,
  useAuth: useAuthProp = useAuth,
  sidebarProps,
}) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuthProp();
  const { children: sidebarChildren, ...restSidebarProps } = sidebarProps || {};

  return (
    <UI.Navbar className="shadow-md bg-base-100 relative">
      <UI.Navbar.Start className="flex items-center space-x-4 pl-2">
        <Sidebar {...restSidebarProps}>
          {sidebarChildren}
        </Sidebar>
        <div className="ml-2 mr-4">
          <Logo {...logoProps} />
        </div>
      </UI.Navbar.Start>
      <UI.Navbar.Center className="flex items-center space-x-4">
        <SearchBar
          value=""
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
