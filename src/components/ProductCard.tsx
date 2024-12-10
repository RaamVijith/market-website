import React, { useState } from 'react';
import { IoMdStar } from 'react-icons/io';
import { IoSearchCircleOutline } from 'react-icons/io5';

interface ProductCardProps {
  image: string;
  hoveredImage: string;
  title: string;
  price: string;
  discount?: number;
  originalPrice?: string;
  daysLeft: number;
  hoursLeft: number;
  minsLeft: number;
  secsLeft: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  hoveredImage,
  title,
  price,
  discount,
  originalPrice,
  daysLeft,
  hoursLeft,
  minsLeft,
  secsLeft,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex flex-row w-full bg-white rounded-sm overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex w-[40%]">
        <img
          src={isHovered ? hoveredImage : image}
          alt={title}
          className="w-full object-cover"
        />
        {isHovered && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
            <IoSearchCircleOutline className="w-20 h-20 text-gray-700 bg-white p-4 rounded-full shadow-lg" />
          </div>
        )}
      </div>
      <div className="p-4  w-[60%] flex flex-col justify-center">
        <h3 className="text-xl font-medium text-gray-900 truncate">{title}</h3>
        <div className='text-2xl flex flex-row gap-0.5 pt-3'>
          <IoMdStar className=' text-orange-400'/>
          <IoMdStar className=' text-orange-400'/>
          <IoMdStar className=' text-orange-400'/>
          <IoMdStar className=' text-orange-400'/>
          <IoMdStar className=' text-gray-400'/>

        </div>
        <div className="flex flex-col mt-2">
          <div className="flex items-center">
            <span className="text-3xl font-bold text-orange-500">
              {price}
            </span>
            {discount && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                {originalPrice}
              </span>
            )}
          </div>
          <div className="bg-blue-500 text-white px-2 py-1 rounded-md text-sm">
            {daysLeft}d {hoursLeft}h {minsLeft}m {secsLeft}s
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;