import React, { ChangeEvent } from 'react';
import FormField from '../../molecules/formfieldwithlabel/FormFieldWithLabel';
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
}) => {
  return (
    <div className={`p-5 border border-gray-300 rounded-lg shadow-md ${className}`}>
      <FormField
        label="Phone"
        id="phone"
        type="tel"
        value={phone}
        onChange={onPhoneChange}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      <FormField
        label="Email"
        id="email"
        type="email"
        value={email}
        onChange={onEmailChange}
      />
      <FormField
        label="Message"
        id="message"
        multiline
        value={message}
        onChange={onMessageChange}
      />
     
      <Button className="w-full bg-blue-950 text-white py-2 px-4 rounded mt-4" onClick={onSubmit}>
        Request Info
      </Button>
    </div>
  );
};

export default ContactForm;
