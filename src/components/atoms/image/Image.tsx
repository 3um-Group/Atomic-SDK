import React from 'react';
import PropTypes from 'prop-types';

export interface ImageProps {
  src: string;
  alt?: string;
  zoomOnFocus?: boolean;
  className?: string;
  style?: React.CSSProperties; // Allow inline styles
  zoomScale?: number; // Allow customization of the zoom scale
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  zoomOnFocus,
  className,
  style,
  zoomScale = 1.1, // Default zoom scale
}) => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (zoomOnFocus) {
      const imageDiv = e.currentTarget.querySelector('div');
      if (imageDiv) {
        imageDiv.style.transform = `scale(${zoomScale})`;
      }
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (zoomOnFocus) {
      const imageDiv = e.currentTarget.querySelector('div');
      if (imageDiv) {
        imageDiv.style.transform = 'scale(1)';
      }
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLDivElement>) => {
    if (zoomOnFocus) {
      const imageDiv = e.currentTarget.querySelector('div');
      if (imageDiv) {
        imageDiv.style.transform = `scale(${zoomScale})`;
      }
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (zoomOnFocus) {
      const imageDiv = e.currentTarget.querySelector('div');
      if (imageDiv) {
        imageDiv.style.transform = 'scale(1)';
      }
    }
  };

  return (
    <div
      aria-label={alt}
      role="img"
      className={`relative w-full pb-[50%] overflow-hidden rounded-lg ${className}`}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-transform duration-300 ease-in-out"
        style={{ backgroundImage: `url(${src})` }}
      />
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  zoomOnFocus: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object, // Define style prop type
  zoomScale: PropTypes.number, // Define zoomScale prop type
};

Image.defaultProps = {
  alt: 'Image',
  zoomOnFocus: false,
  className: '',
  style: {},
  zoomScale: 1.1,
};

export default Image;
