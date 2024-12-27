import { useState } from "react";
import { DropdownProps } from "../../types/dropdown.types";

const Dropdown: React.FC<DropdownProps> = ({ trigger, header, menuItems }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="relative">
            {/* Trigger */}
            <div onClick={toggleDropdown} className="cursor-pointer">
                {trigger}
            </div>

            {/* Content */}
            {isOpen && (
                <div
                    className="absolute right-0 z-50 mt-2 w-52 bg-white divide-y divide-gray-100 rounded-lg shadow"
                    onClick={() => setIsOpen(false)}
                >
                    {/* Header */}
                    {header && (
                        <div className="px-4 py-3">
                            <p className="block text-sm text-gray-900">{header.displayName}</p>
                            {header.email && (
                                <p className="block text-sm text-gray-500 truncate">
                                    {header.email}
                                </p>
                            )}
                        </div>
                    )}

                    {/* Menu Items */}
                    <ul className="py-2">
                        {menuItems.map((item, index) => (
                            <li
                                key={index}
                                onClick={item.onClick}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
