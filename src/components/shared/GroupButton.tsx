import React from "react";
import Button from "./Button";

interface IOption {
  name: string;
  icon?: React.ReactNode;
}

interface IGroupButtonProps<T> {
  options: IOption[];
  selectedValue: T;
  setSelectedValue: React.Dispatch<React.SetStateAction<T>>;
  label: string;
}

const GroupButton = <T,>({
  options,
  selectedValue,
  setSelectedValue,
  label,
}: IGroupButtonProps<T>) => {
  return (
    <div className="mb-4 flex flex-col">
      {/* label  */}
      <label className="text-base lg:text-lg text-gray-700">{label}</label>

      {/* options */}
      <div className="inline-flex rounded-md shadow-sm mt-2 lg:gap-2 border border-gray-200 w-fit max-w-full lg:w-full overflow-auto">
        {options.map(({ name, icon }) => (
          <Button
            key={name}
            type="button"
            variant="text"
            className={`inline-flex items-center px-4 py-2 text-sm font-medium ${selectedValue === name
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-900 border border-gray-200 hover:bg-gray-100"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            onClick={() => setSelectedValue(name as T)}
          >
            {icon && <span className="mr-2">{icon}</span>}
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default GroupButton;
