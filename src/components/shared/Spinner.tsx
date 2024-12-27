import React from 'react';

type SpinnerProps = {
    size?: 'extraSmall' | 'small' | 'medium' | 'large';
    color?: 'blue' | 'red' | 'green' | 'gray';
};

const Spinner: React.FC<SpinnerProps> = ({ size = 'medium', color = 'blue' }) => {
    const sizeClasses: Record<string, string> = {
        extraSmall: 'w-5 h-5',
        small: 'w-6 h-6',
        medium: 'w-8 h-8',
        large: 'w-12 h-12',
    };

    const colorClasses: Record<string, string> = {
        blue: 'border-t-blue-500',
        red: 'border-t-red-500',
        green: 'border-t-green-500',
        gray: 'border-t-gray-500',
    };

    return (
        <div
            className={`border-4 border-t-4 border-transparent rounded-full animate-spin ${sizeClasses[size]} ${colorClasses[color]}`}
            role="status"
        >
            <span className="sr-only">Loading...</span>
        </div>
    );
};

export default Spinner;