import React from 'react';
import { useAuth0, LogoutOptions } from '@auth0/auth0-react';
import Button, { ButtonProps } from '../../atoms/button/Button';

export interface AuthButtonProps extends Omit<ButtonProps, 'onClick' | 'children'> {

}

export const LoginButton: React.FC<AuthButtonProps> = ({ color, theme, ...props }) => {
    const { loginWithRedirect } = useAuth0();
    return (
        <Button theme={theme} {...props} onClick={() => loginWithRedirect()}>
            Log In
        </Button>
    );
};

export const LogoutButton: React.FC<AuthButtonProps> = ({ color, theme, ...props }) => {
    const { logout } = useAuth0();
    type LogoutOptionsWithReturnTo = LogoutOptions & { returnTo?: string };
    return (
        <Button theme={theme} {...props} onClick={() => logout({ returnTo: window.location.origin } as LogoutOptionsWithReturnTo)}>
            Log out
        </Button>
    )

}