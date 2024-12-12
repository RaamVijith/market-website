import { useState } from "react";
import { BiUser } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { LuShoppingBag } from "react-icons/lu";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <div className="bg-[#2557AA] text-white border-b border-gray-500 w-[100vw] flex flex-row items-center justify-between px-7 py-2">
        <div className="flex flex-row gap-4 items-center text-lg">
          <button className="flex flex-row gap-1 items-center space-x-1 hover:text-yellow-400 ">
            English
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          | 
          <button className="flex flex-row gap-1 items-center space-x-1 hover:text-yellow-400 ">
            USD
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-row gap-4 items-center text-lg">
          <button className="flex flex-row gap-1 items-center space-x-1 hover:text-yellow-400 pr-5">
          <GrLocation/>

            Store Location
            
          </button>

          <button className="flex flex-row gap-1 items-center space-x-1 hover:text-yellow-400">
          <BiUser/>

            Login
            
          </button>
          | 
          <button className="flex flex-row gap-1 items-center space-x-1 hover:text-yellow-400 ">
            Register
          </button>
        </div>
      </div>

      <div className="bg-[#2557AA] text-white w-[100vw] flex flex-row items-center justify-between px-7 py-10">
        {/* Logo */}
        <div className="flex items-center gap-4 space-x-2 ">
            <img className="h-14" src="https://magento2.magentech.com/themes/sm_marketnew/pub/media/logo/stores/63/logo14_1.png"/>
         
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center flex-grow w-[50vw] ml-40 mr-20 text-lg">
          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-gray-100 text-gray-700 px-3 h-12 flex items-center whitespace-nowrap"
            >
              All Categories
              <svg
                className="ml-2 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-md w-full">
                <ul className="py-1">
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Electronics
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Fashion
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Home & Kitchen
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Toys
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Enter keywords to search..."
            className="flex-grow px-4 h-12"
          />
          <button className="bg-yellow-400 text-blue-600 px-4 h-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16l-4-4m0 0l4-4m-4 4h16"
              />
            </svg>
          </button>
        </div>

        {/* Cart */}
        <div className="flex items-center shadow-lg rounded-md">
          <button className="bg-[#3174E3] pr-4  h-12 flex items-center space-x-2">
            <div className="bg-[#2C68CC] flex items-center px-5 h-full py-2">
             
              <LuShoppingBag className="text-3xl"/>
            </div>
            <div className="flex flex-col py-2 px-3">
            <span className="font-semibold">SHOPING CART</span>
            <span className="ml-1">0 items - $0.000</span>
            </div>
           
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
