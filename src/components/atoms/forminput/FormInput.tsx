import React, { ChangeEvent } from 'react';
import * as UI from 'react-daisyui';

export interface FormInputProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  className?: string;
  disabled?: boolean;
  name?: string;
  id?: string;
  multiline?: boolean; // Prop to determine if the input should be a textarea
  onFocus?: () => void; // Add onFocus prop
  onBlur?: () => void; // Add onBlur prop
}

const FormInput: React.FC<FormInputProps> = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  className = '',
  disabled,
  name,
  id,
  multiline = false, // Default to false
  onFocus, // Add onFocus prop
  onBlur, // Add onBlur prop
}) => {
  const baseClass = 'w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder-gray-500';
  const combinedClassName = `${baseClass} ${className}`;

  return multiline ? (
    <UI.Textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={combinedClassName}
      disabled={disabled}
      name={name}
      id={id}
      onFocus={onFocus} // Add onFocus
      onBlur={onBlur} // Add onBlur
    />
  ) : (
    <UI.Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={combinedClassName}
      disabled={disabled}
      name={name}
      id={id}
      onFocus={onFocus} // Add onFocus
      onBlur={onBlur} // Add onBlur
    />
  );
};

export default FormInput;
