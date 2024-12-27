import React, { ButtonHTMLAttributes, ReactNode } from 'react';

const VARIANT_CLASSES = {
    primary: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300',
    secondary: 'text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300',
    outline: 'text-blue-700 border border-blue-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300',
    danger: 'text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300',
    text: 'text-blue-700 border-none outline-none',
};

const SIZE_CLASSES = {
    none: 'px-0 py-0 text-xs',
    extraSmall: 'px-3 py-2 text-xs',
    small: 'px-3 py-2 text-sm',
    medium: 'px-5 py-2 text-sm',
    large: 'px-5 py-3 text-base',
    extraLarge: 'px-6 py-3.5 text-base',
};

type ButtonProps = {
    variant?: keyof typeof VARIANT_CLASSES;
    size?: keyof typeof SIZE_CLASSES;
    children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
    type = 'button',
    variant = 'primary',
    size = 'medium',
    children,
    className = '',
    ...props
}) => {
    const buttonClasses = `${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} rounded-lg focus:outline-none flex-shrink-0 flex-grow-0 ${className}`;

    return (
        <button type={type} className={buttonClasses} {...props}>
            {children}
        </button>
    );
};

export default Button;
