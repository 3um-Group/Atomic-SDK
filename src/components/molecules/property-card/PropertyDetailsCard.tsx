import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faRulerCombined } from '@fortawesome/free-solid-svg-icons';

export interface PropertyDetailsCardProps {
  address: string;
  price: string;
  originalPrice: string;
  mortgage: string;
  beds: number;
  baths: number;
  sqft: number;
  description: string;
  propertyLink: string;
  location: string;
  theme?: 'light' | 'dark'; // Add theme prop
}

const PropertyDetailsCard: React.FC<PropertyDetailsCardProps> = ({
  address,
  price,
  originalPrice,
  mortgage,
  beds,
  baths,
  sqft,
  description,
  location,
  theme = 'light', // Default theme to light
}) => {
  const textClass = theme === 'dark' ? 'text-white' : 'text-black';
  const subTextClass = theme === 'dark' ? 'text-gray-400' : 'text-gray-700';
  const iconClass = theme === 'dark' ? 'text-white' : 'text-black';

  return (
    <div>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h1 className={`text-xl font-semibold mb-1 ${textClass}`}>{address}</h1>
          <p className={`mb-3 text-sm ${subTextClass}`}>{location}</p> 
          <div className={`flex items-center ${textClass} space-x-4 mb-2 lg:mb-0`}>
            <span className="text-sm"><FontAwesomeIcon icon={faBed} className={iconClass} /> {beds} Beds</span>
            <span className="text-sm"><FontAwesomeIcon icon={faBath} className={iconClass} /> {baths} Baths</span>
            <span className="text-sm"><FontAwesomeIcon icon={faRulerCombined} className={iconClass} /> {sqft} sqft</span>
          </div>
        </div>
        <div className="text-right">
          <h2 className={`text-xl font-bold mb-1 ${textClass}`}>{price}</h2>
          <p className={`line-through ${subTextClass}`}>{originalPrice}</p>
          <p className={`text-sm ${subTextClass}`}>{mortgage}</p>
        </div>
      </div>
      <h2 className={`text-lg font-semibold mb-2 ${textClass}`}>Description</h2>
      <p className={`mb-4 text-sm text-justify ${subTextClass}`}>{description}</p>
    </div>
  );
};

export default PropertyDetailsCard;
