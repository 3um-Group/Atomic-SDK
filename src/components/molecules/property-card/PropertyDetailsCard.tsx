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
  propertyLink,
  location,
}) => {
  return (
    <div>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h1 className="text-xl font-semibold mb-1">{address}</h1>
          <p className="text-gray-500 mb-3 text-sm">{location}</p> 
          <div className="flex items-center text-black space-x-4 mb-2 lg:mb-0">
            <span className="text-sm"><FontAwesomeIcon icon={faBed} /> {beds} Beds</span>
            <span className="text-sm"><FontAwesomeIcon icon={faBath} /> {baths} Baths</span>
            <span className="text-sm"><FontAwesomeIcon icon={faRulerCombined} /> {sqft} sqft</span>
          </div>
        </div>
        <div className="text-right">
          <h2 className="text-xl font-bold text-black mb-1">{price}</h2>
          <p className="text-gray-500 line-through">{originalPrice}</p>
          <p className="text-gray-500 text-sm">{mortgage}</p>
        </div>
      </div>
      <h2 className="text-lg font-semibold mb-2">Description</h2>
      <p className="mb-4 text-gray-700 text-sm text-justify">{description}</p>
    </div>
  );
};

export default PropertyDetailsCard;
