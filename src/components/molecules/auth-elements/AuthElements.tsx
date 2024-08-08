import React from 'react';
import Button, { ButtonProps } from '../../atoms/button/Button';

export interface AuthButtonProps extends Omit<ButtonProps, 'onClick' | 'children'> {
    onAuth: () => void;
    returnTo?: string;

}

export const LoginButton: React.FC<AuthButtonProps> = ({  theme, onAuth, ...props }) => {
    return (
        <Button theme={theme} {...props} onClick={onAuth}>
            Log In
        </Button>
    );
};

export const LogoutButton: React.FC<AuthButtonProps> = ({ theme, onAuth, returnTo, ...props }) => {
    const handleLogout = () => {
      onAuth();
      if (returnTo) {
        window.location.href = returnTo;
      }
    };
  
    return (
      <Button theme={theme} {...props} onClick={handleLogout}>
        Log out
      </Button>
    );
  };