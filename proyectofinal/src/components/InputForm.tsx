// components/InputField.tsx
import React from "react";

interface InputFieldProps {
  type?: "text" | "number" | "email" | "password";
  name: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div className="mb-4">
        <label  >{placeholder}</label>
        <input

      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="border  rounded-lg p-4 w-full border-white"
    />
    </div>
    
  );
};

export default InputField;
