import React, { ChangeEvent } from 'react';
import FormFieldWithLabel from '../../molecules/formfieldwithlabel/FormFieldWithLabel';
import Button from '../../atoms/button/Button';

export interface ContactFormProps {
  onSubmit: () => void;
  onPhoneChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onEmailChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onMessageChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  phone: string;
  email: string;
  message: string;
  error?: string;
  className?: string; // Add className prop to customize styles
  theme?: 'light' | 'dark'; // Add theme prop
}

const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  onPhoneChange,
  onEmailChange,
  onMessageChange,
  phone,
  email,
  message,
  error,
  className,
  theme = 'light', // Default to light theme
}) => {
  return (
    <div className={`p-5 rounded-lg shadow-md border ${className}`}>
      <FormFieldWithLabel
        label="Phone"
        id="phone"
        type="tel"
        value={phone}
        onChange={onPhoneChange}
        theme={theme} // Pass theme prop
        className={`rounded-lg ${className}`}
      />
      <FormFieldWithLabel
        label="Email"
        id="email"
        type="email"
        value={email}
        onChange={onEmailChange}
        theme={theme} // Pass theme prop  
        className={`rounded-lg ${className}`}
      />
      <FormFieldWithLabel
        label="Message"
        id="message"
        multiline
        value={message}
        onChange={onMessageChange}
        theme={theme} 
        className={`rounded-lg ${className}`}
      />
     
     <Button
        className={`w-full text-white py-2 px-4 rounded mt-1 ${theme === 'light' ? 'bg-blue-950' : 'bg-gray-200 text-black'}`}
        onClick={onSubmit}
        size="sm"
        >
        Request Info
      </Button>
    </div>
  );
};

export default ContactForm;
