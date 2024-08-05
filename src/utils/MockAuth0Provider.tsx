import React, { createContext, useContext, ReactNode } from 'react';

interface Auth0ContextProps {
  isAuthenticated: boolean;
  loginWithRedirect: () => void;
  logout: (options?: any) => void;
  user?: { email: string };
}

const defaultContext: Auth0ContextProps = {
  isAuthenticated: false,
  loginWithRedirect: () => { console.log("sgdgsdgsdgsd")},
  logout: () => {},
};

const Auth0Context = createContext<Auth0ContextProps>(defaultContext);
interface AuthProviderProps {
  children: ReactNode;
  value: Auth0ContextProps;
}
export const AuthProvider: React.FC<AuthProviderProps> = ({ children, value }) => (
  <Auth0Context.Provider value={value}>
    {children}
  </Auth0Context.Provider>
);

export const useAuth0 = () => useContext(Auth0Context);

