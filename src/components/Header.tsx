import { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
      <div className="bg-[#2557AA] text-white w-[100vw] flex flex-row items-center justify-between px-7 py-10">
        {/* Logo */}
        <div className="flex items-center gap-4 space-x-2">
          <div className="bg-yellow-400 rounded-full w-12 h-12 flex justify-center items-center">
            <svg
              className="w-10 h-10 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-4 8m4-8l-2.4-6M1 1h4m0 0L3.4 7"
              />
            </svg>
          </div>
          <div>
            <h1 className="font-bold text-3xl">MARKET</h1>
            <p className="text-base font-semibold">Shop all you want</p>
          </div>
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
        <div className="flex items-center">
          <button className="bg-blue-500 pr-4  h-12 rounded-md flex items-center space-x-2">
            <div className="bg-blue-800 h-full py-2">
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-4 8m4-8l-2.4-6M1 1h4m0 0L3.4 7"
              />
            </svg>
            </div>
            
            <span>Shopping Cart</span>
            <span className="ml-1">(0 items - $0.00)</span>
          </button>
        </div>
      </div>
  );
};

export default Header;
