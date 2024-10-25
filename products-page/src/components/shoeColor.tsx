import React from 'react';

type ShoeColorProps = {
  colors: string[];
};

const ShoeColors: React.FC<ShoeColorProps> = ({ colors }) => {
  return (
    <>
      <h2 className="text-sm font-medium text-gray-800">COLOR</h2>
      <div className="flex space-x-2 mt-2">
        {colors.map((color) => (
          <button
            key={color}
            className="w-8 h-8 rounded-full cursor-pointer border border-gray-300 hover:border-gray-400"
            style={{ backgroundColor: color }}
          ></button>
        ))}
      </div>
    </>
  );
};

export default ShoeColors;
