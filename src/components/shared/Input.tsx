import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  required?: boolean;
  register?: UseFormRegisterReturn;
}

const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ label, errorMessage, required = false, register, ...rest }, ref) => {
    return (
      <div className="w-full">
        {/* Label */}
        {label &&
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
            {required && <span className="text-red-500">*</span>}
          </label>
        }

        {/* Input Field */}
        <input
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ref={ref}
          {...register}
          {...rest}
        />

        {/* Error Message */}
        {errorMessage && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
      </div>
    );
  }
);

export default Input;
