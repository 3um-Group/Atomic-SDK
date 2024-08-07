import React, { useState } from "react";
import PropertyDetailsCard from "../../molecules/property-card/PropertyDetailsCard";
import ContactForm from "../../organisms/contact-form/ContactForm";
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
  initialPhone: string;
  initialEmail: string;
  initialMessage: string;
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
  initialPhone,
  initialEmail,
  initialMessage,
  theme = "light", // Default theme to light
}) => {
  const [phone, setPhone] = useState(initialPhone);
  const [email, setEmail] = useState(initialEmail);
  const [message, setMessage] = useState(initialMessage);

  const handlePhoneChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {};


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
            <div className="lg:w-1/4 lg:pl-4 lg:mt-0 mt-4">
              <ContactForm
                onSubmit={handleSubmit}
                onPhoneChange={handlePhoneChange}
                onEmailChange={handleEmailChange}
                onMessageChange={handleMessageChange}
                phone={phone}
                email={email}
                message={message}
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
