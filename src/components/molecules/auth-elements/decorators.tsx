// decorators.tsx
import React from 'react';
import { AuthProvider } from '../../../utils/MockAuth0Provider';

export const LoggedInDecorator = (Story: React.FC) => (
  <AuthProvider value={{ isAuthenticated: true, loginWithRedirect: () => { }, logout: () => {}, user: { email: 'test@example.com' } }}>
    <Story />
  </AuthProvider>
);

export const LoggedOutDecorator = (Story: React.FC) => (
  <AuthProvider value={{ isAuthenticated: false, loginWithRedirect: () => {}, logout: () => {} }}>
    <Story />
  </AuthProvider>
);
