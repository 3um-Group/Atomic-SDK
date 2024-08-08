import React, { useState, useEffect } from 'react';
import FormInput, { FormInputProps } from '../../atoms/forminput/FormInput';
import Label from '../../atoms/label/Label';

export interface FormFieldWithLabelProps extends FormInputProps {
  label: string;
  id: string; // Ensure id is always required and is a string
  theme?: 'light' | 'dark'; // Add theme prop
  className?: string; // Add className prop to customize styles
}

const FormFieldWithLabel: React.FC<FormFieldWithLabelProps> = ({
  label,
  id,
  value,
  placeholder,
  theme = 'light', // Default to light theme
  className,
  ...inputProps
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (value === '') {
      setIsFocused(false);
    }
  };

  useEffect(() => {
    if (value !== '') {
      setIsFocused(true);
    }
  }, [value]);

  return (
    <div className="relative mb-3">
      <FormInput
        id={id}
        value={value}
        placeholder={isFocused || value ? '' : placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        theme = {theme}
        {...inputProps}
        className={`pt-6 ${className}`} 
      />
      <Label
        htmlFor={id}
        theme = {theme}
        className={`absolute left-2 top-1 transition-all duration-200 transform px-1 ${
          isFocused || value ? 'scale-90 -translate-y-1 text-xs' : ''
        }`} 
      >
        {label}
      </Label>
    </div>
  );
};

export default FormFieldWithLabel;
