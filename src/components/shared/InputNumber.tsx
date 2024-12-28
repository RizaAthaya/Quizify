import React from "react";

interface IInputNumberProps {
  id: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min: number;
  max: number;
  className?: string;
  label: string;
}

const InputNumber: React.FC<IInputNumberProps> = ({
  id,
  value,
  onChange,
  min,
  max,
  className,
  label,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="text-base lg:text-lg text-gray-700 block mb-2">
        {label}
      </label>
      <input
        type="number"
        id={id}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        className={`w-full h-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-gray-300 active:border-none ${className}`}
      />
    </div>
  );
};

export default InputNumber;
