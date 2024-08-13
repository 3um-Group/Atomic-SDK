// Logo.tsx
import React, { useEffect, useState } from 'react';
import defaultLightLogo from '../../../assets/images/3UM-light-theme-logo.png';
import defaultDarkLogo from '../../../assets/images/3UM-dark-theme-logo.png';

export interface LogoProps {
  customLightSrc?: string;
  customDarkSrc?: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  customLightSrc,
  customDarkSrc,
  alt,
  width = 100,
  height = 50,
  className = ''
}) => {
  const lightSrc = customLightSrc || defaultLightLogo;
  const darkSrc = customDarkSrc || defaultDarkLogo;
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    // Function to update theme based on data-theme attribute
    const updateTheme = () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      setTheme(currentTheme || 'light');
    };

    // Initial theme setting
    updateTheme();

    // Add a listener for changes to the data-theme attribute
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  const logoSrc = theme === 'dark' ? darkSrc : lightSrc;
  return (
    <img
      alt={alt}
      src={logoSrc}
      width={width}
      height={height}
      className={`logo ${className}`.trim()}
    />
  );
};

export default Logo;