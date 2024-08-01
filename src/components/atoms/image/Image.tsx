import React from 'react';
import PropTypes from 'prop-types';


export interface ImageProps {
  src: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  zoomOnFocus?: boolean;
}

const Image: React.FC<ImageProps> = ({ src, alt, width, height, zoomOnFocus }) => {
  const styles = {
    image: {
      display: 'block',
      width: width,
      height: height,
      borderRadius: '8px',
      transition: 'transform 0.3s ease-in-out',
    },
    container: {
      display: 'inline-block',
      overflow: 'hidden',
    },
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLImageElement>) => {
    if (zoomOnFocus) e.currentTarget.style.transform = 'scale(1.1)';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLImageElement>) => {
    if (zoomOnFocus) e.currentTarget.style.transform = 'scale(1)';
  };

  const handleFocus = (e: React.FocusEvent<HTMLImageElement>) => {
    if (zoomOnFocus) e.currentTarget.style.transform = 'scale(1.1)';
  };

  const handleBlur = (e: React.FocusEvent<HTMLImageElement>) => {
    if (zoomOnFocus) e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <div style={styles.container}>
      <img
        src={src}
        alt={alt}
        style={styles.image}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  zoomOnFocus: PropTypes.bool,
};

Image.defaultProps = {
  alt: 'Image',
  width: '100%',
  height: 'auto',
  zoomOnFocus: false,
};

export default Image;
