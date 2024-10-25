import React from 'react';

type ShoeSizesProps = {
  sizes: number[];
};

const ShoeSizes: React.FC<ShoeSizesProps> = ({ sizes }) => {
  return (
    <>
    <h2 className="text-sm font-medium text-gray-800" >SIZE</h2>
    <div className="flex space-x-2 mt-2">
      {sizes.map((size) => (
        <span
          key={size}
          className="border border-none space-y-12 px-3 py-1 rounded-lg cursor-pointer font-bold hover:bg-gray-200 bg-gray-300"
        >
          {size}
        </span>
      ))}
    </div>
    </>
  );
};

export default ShoeSizes;
