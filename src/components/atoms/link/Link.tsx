import React from 'react';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'success' | 'info' | 'warning' | 'error';
  hover?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Link: React.FC<LinkProps> = ({
  variant,
  hover,
  children,
  className,
  ...props
}) => {
  const linkClass = `
    link 
    ${variant ? `link-${variant}` : ''} 
    ${hover ? 'link-hover' : ''} 
    ${className || ''}
  `;

  return (
    <a className={linkClass.trim()} {...props}>
      {children}
    </a>
  );
};

export default Link;
