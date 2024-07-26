// Logo.tsx
import React from 'react';
import defaultLightLogo from '../../../assets/images/3UM-light-theme-logo.png';
import defaultDarkLogo from '../../../assets/images/3UM-dark-theme-logo.png';

export interface LogoProps {
  customLightSrc?: string;
  customDarkSrc?: string;
  alt: string;
  theme: 'light' | 'dark';
  width?: number;
  height?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  customLightSrc,
  customDarkSrc,
  alt,
  theme,
  width = 100,
  height = 50,
  className = ''
}) => {
  const lightSrc = customLightSrc || defaultLightLogo;
  const darkSrc = customDarkSrc || defaultDarkLogo;

  return (
    <img
      src={theme === 'light' ? lightSrc : darkSrc}
      alt={alt}
      width={width}
      height={height}
      className={`logo ${className}`.trim()}
    />
  );
};

export default Logo;