import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faRulerCombined } from '@fortawesome/free-solid-svg-icons';
import Image from '../../atoms/image/Image';
import Badge from '../../atoms/badge/Badge';
import Button from '../../atoms/button/Button';

export interface PropertyListCardProps {
  imageSrc: string;
  imageAlt: string;
  price: string;
  description: string;
  location: string;
  badges: { label: string }[];
  beds: number;
  baths: number;
  sqft: number;
  onRegister: () => void;
  badgeColors?: Record<string, string>;
  className?: string;
}

const PropertyListCard: React.FC<PropertyListCardProps> = ({
  imageSrc,
  imageAlt,
  price,
  description,
  location,
  badges,
  beds,
  baths,
  sqft,
  onRegister,
  badgeColors = {},
  className = '',
}) => {

  const getBadgeClass = (label: string) => {
    return badgeColors[label] || 'bg-transparent text-gray-500 border border-gray-500';
  };

  return (
    <div className={`border rounded-lg shadow-md p-2 bg-white max-w-full ${className}`}>
      <div className="flex flex-col sm:flex-row sm:flex-nowrap">
        {/* Image Section */}
        <div className="w-full sm:w-1/3 pr-4 mb-2 sm:mb-0 flex-shrink-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="rounded-lg w-full h-32 sm:h-full object-cover"
          />
        </div>

        {/* Title and Location Section */}
        <div className="w-full sm:w-2/3 flex flex-col justify-between">
          <div>
            <h2 className="text-md sm:text-lg font-bold text-gray-800 mb-1">{price}</h2>
            <p className="text-xs sm:text-sm text-gray-600 mb-1">{description}</p>
            <p className="text-xs sm:text-sm font-bold text-gray-500 mb-2">{location}</p>

            {/* Badges */}
            <div className="flex flex-wrap mb-2">
              {badges.map((badge, index) => (
                <Badge key={index} className={`text-xs py-0.5 px-2 mr-2 mb-2 ${getBadgeClass(badge.label)}`}>
                  {badge.label}
                </Badge>
              ))}
            </div>

            {/* Property Features */}
            <div className="flex flex-wrap items-center text-xs sm:text-sm text-gray-600 mb-2">
              <span className="flex items-center mr-2 mb-2">
                <FontAwesomeIcon icon={faBed} />
                <span className="ml-1">{beds} Beds</span>
              </span>
              <span className="flex items-center mr-2 mb-2">
                <FontAwesomeIcon icon={faBath} />
                <span className="ml-1">{baths} Baths</span>
              </span>
              <span className="flex items-center mb-2">
                <FontAwesomeIcon icon={faRulerCombined} />
                <span className="ml-1">{sqft} Sq. Ft</span>
              </span>
            </div>
          </div>

          {/* Register Button */}
          <div className="flex justify-end mt-2">
            <Button
              className="bg-blue-950 hover:bg-blue-950 text-white font-bold py-1 sm:py-2 px-4 rounded"
              onClick={onRegister}
            >
              REGISTER
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyListCard;
