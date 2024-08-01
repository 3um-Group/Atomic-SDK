import React, { useState, useEffect } from 'react';
import FormInput, { FormInputProps } from '../../atoms/forminput/FormInput';
import Label from '../../atoms/label/Label';

export interface FormFieldWithLabelProps extends FormInputProps {
  label: string;
  id: string; // Ensure id is always required and is a string
}

const FormFieldWithLabel: React.FC<FormFieldWithLabelProps> = ({ label, id, value, ...inputProps }) => {
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
    <div className="relative mb-6">
      <Label
        htmlFor={id}
        className={`absolute left-2 transition-all duration-200 transform  ${
          isFocused || value ? '-translate-y-6 scale-90 text-slate-800' : 'translate-y-2 text-gray-400'
        }`}
      >
        {label}
      </Label>
      <FormInput
        id={id}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...inputProps}
      />
    </div>
  );
};

export default FormFieldWithLabel;
