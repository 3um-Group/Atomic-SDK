import React from 'react';
import { 
  Auth0ContextInterface, 
  GetTokenSilentlyOptions, 
  IdToken, 
  User 
} from '@auth0/auth0-react';


type Auth0ContextUserType = User & { sub: string };
export const mockAuth0Context: Auth0ContextInterface<Auth0ContextUserType> = {
    isAuthenticated: false,
    user: undefined,
    isLoading: false,
    loginWithRedirect: async () => {},
    logout: async () => {},
    getAccessTokenSilently: async () => {
      throw new Error("getAccessTokenSilently has been called");
    },
    getAccessTokenWithPopup: async () => '',
    getIdTokenClaims: async () => undefined as IdToken | undefined,
    loginWithPopup: async () => {},
    handleRedirectCallback: async () => ({ appState: undefined }),
  };
  


export const MockAuth0Provider: React.FC<{
  children: React.ReactNode;
  mockProps?: Partial<Auth0ContextInterface<Auth0ContextUserType>>;
}> = ({ children, mockProps = {} }) => {
  const value = { ...mockAuth0Context, ...mockProps };
  return (
    <Auth0Context.Provider value={value}>
      {children}
    </Auth0Context.Provider>
  );
};

// You'll need to create this context yourself as it's not exported from auth0-react
export const Auth0Context = React.createContext<Auth0ContextInterface<Auth0ContextUserType>>(mockAuth0Context);
