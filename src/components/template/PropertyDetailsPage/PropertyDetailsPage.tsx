import React, { useState } from "react";
import PropertyDetailsCard from "../../molecules/property-card/PropertyDetailsCard";
import Image from "../../atoms/image/Image";

export interface PropertyDetailsPageProps {
  imageUrl: string;
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
  theme?: "light" | "dark"; // Add theme prop
}

const PropertyDetailsPage: React.FC<PropertyDetailsPageProps> = ({
  imageUrl,
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
  theme = "light", // Default theme to light
}) => {
  return (
    <div className={`container mx-auto p-4`}>
      <div className="max-w-4xl mx-auto rounded-lg overflow-hidden">
        <div className="w-full">
          <Image
            src={imageUrl}
            alt="Property Image"
            zoomOnFocus={true}
          />
        </div>
        <div className="pt-5">
          <div className="lg:flex lg:space-x-4">
            <div className="lg:w-3/4 mb-0">
              <PropertyDetailsCard
                address={address}
                price={price}
                originalPrice={originalPrice}
                mortgage={mortgage}
                beds={beds}
                baths={baths}
                sqft={sqft}
                description={description}
                propertyLink={propertyLink}
                location={location}
                theme={theme}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
