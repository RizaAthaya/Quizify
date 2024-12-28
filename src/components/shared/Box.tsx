import React from 'react';

interface IBoxProps {
  title: string;
  value: string | number;
  color: string; 
  textColor: string;  
}

const Box: React.FC<IBoxProps> = ({ title, value, color, textColor }) => {
  return (
    <div className={`p-4 rounded-lg text-center ${color} ${textColor}`}>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-lg lg:text-2xl">{value}</p>
    </div>
  );
};

export default Box;
