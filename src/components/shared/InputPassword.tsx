import { useState, forwardRef } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import Button from './Button';
import { IInputProps } from './Input';

const InputPassword = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, errorMessage, required = false, ...rest }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const toggleVisibility = () => {
      setIsPasswordVisible((prev) => !prev);
    };

    return (
      <div className="relative">
        {/* Label */}
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>

        {/* Input */}
        <input
          type={isPasswordVisible ? 'text' : 'password'}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ref={ref} 
          {...rest} 
        />

        {/* Visibility Button */}
        <Button
          type="button"
          onClick={toggleVisibility}
          variant="text"
          size="small"
          aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
          className="absolute right-2 top-9 transform"
        >
          {isPasswordVisible ? (
            <EyeSlashIcon className="w-5 h-5" />
          ) : (
            <EyeIcon className="w-5 h-5" />
          )}
        </Button>

        {/* Error Message */}
        {errorMessage && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
      </div>
    );
  }
);

export default InputPassword;
