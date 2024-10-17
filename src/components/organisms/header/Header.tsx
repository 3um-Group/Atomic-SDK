import React, { useState } from 'react';
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
  sidebarProps?: React.ComponentProps<typeof Sidebar> & {
    children?: React.ReactNode;
  };
}

const Header: React.FC<HeaderProps> = ({
  showAuthElements = true,
  logoProps,
  useAuth: useAuthProp = useAuth,
  sidebarProps,
}) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuthProp();
  const { children: sidebarChildren, ...restSidebarProps } = sidebarProps || {};
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredResults, setFilteredResults] = useState<any[]>([]);

  const data = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
    { id: 4, name: 'Date' },
    { id: 5, name: 'Elderberry' }
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    const results = data.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredResults(results);
  };

  const handleSearch = () => {
    console.log('Search triggered for:', searchQuery);
    // TODO: add extra logic here for submitting or finalizing the search
  };

  return (
    <UI.Navbar className="shadow-md bg-base-100 relative z-1 flex items-center p-2">
      <UI.Navbar.Start className="flex items-center space-x-4 w-20"> 
        <Sidebar {...restSidebarProps}>
          {sidebarChildren}
          {showAuthElements && (
            <div>
              {isAuthenticated ? (
                <LogoutButton onAuth={logout} />
              ) : (
                <LoginButton onAuth={loginWithRedirect} />
              )}
            </div>
          )}
        </Sidebar>
        <div className="flex-shrink-0">
          <Logo {...logoProps} />
        </div>
      </UI.Navbar.Start>

      <UI.Navbar.Center className="flex-grow ml-5">
        <SearchBar
          value={searchQuery}
          onChange={handleSearchChange}
          onSearch={handleSearch}
          className="w-full"
        />
      </UI.Navbar.Center>

      <div className="search-results">
        <ul>
          {filteredResults.map(result => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
      </div>
    </UI.Navbar>
  );
};

export default Header;