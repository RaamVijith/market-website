import React, { useState } from "react";
import { IoIosHeartEmpty, IoMdStar } from "react-icons/io";
import { IoSearchCircleOutline } from "react-icons/io5";
import { TbRefresh } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";

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
      className="relative flex flex-row w-full bg-white rounded-sm overflow-hidden pb-5"
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
        <div className="text-xl flex flex-row gap-0.5 pt-3">
          <IoMdStar className=" text-orange-400" />
          <IoMdStar className=" text-orange-400" />
          <IoMdStar className=" text-orange-400" />
          <IoMdStar className=" text-orange-400" />
          <IoMdStar className=" text-gray-400" />
        </div>
        <div className="flex flex-col mt-2">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-orange-500">{price}</span>
            {discount && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                {originalPrice}
              </span>
            )}
          </div>
          <div className="text-gray-500 text-lg py-3">
            The perfect recipie for family game night! appleas to wide range of
            people. Created by National park...
          </div>
          <div className="flex flex-row justify-start gap-2 my-4 ">
            <div className="flex p-2 flex-row border border-gray-300 items-center text-gray-600 font-semibold gap-2">
              <TiShoppingCart className=" text-xl" />
              ADD TO CART
            </div>
            <IoIosHeartEmpty className="p-2 text-5xl border border-gray-300 text-gray-500 font-semibold " />

            <TbRefresh className="p-2 text-5xl text-gray-500 font-semibold border border-gray-300 " />
          </div>
          <div className="flex flex-row gap-2 font-semibold text-xl text-center text-white pt-3">
            <div className="bg-blue-500 rounded-sm py-2 px-4"> {daysLeft} <br/> days</div>
            <div className="bg-blue-500 rounded-sm py-2 px-4"> {hoursLeft} <br/> days</div>
            <div className="bg-blue-500 rounded-sm py-2 px-4"> {minsLeft} <br/> days</div>
            <div className="bg-blue-500 rounded-sm py-2 px-4"> {secsLeft} <br/> days</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
