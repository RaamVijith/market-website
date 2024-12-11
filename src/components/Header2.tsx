import React from "react";

const Header2: React.FC = () => {
  return (
      <div className="px-10 bg-[#2557AA] text-white w-[100vw] z-20">
        {/* Top Navigation */}
        <nav className="flex justify-start items-center pt-4 whitespace-nowrap ">
          {/* Left Side - All Categories */}
          <div className="relative group">
            <button className="flex items-center bg-yellow-400 text-gray-800 font-bold text-lg px-5 gap-2 mr-20 py-3 w-[18vw] rounded-sm whitespace-nowrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              ALL CATEGORIES
            </button>
            {/* Dropdown */}
            <div className="absolute z-10 left-0 top-full hidden group-hover:block bg-white text-black shadow-md w-[18vw]">
              <ul className="py-2 text-gray-500 text-lg ">
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer ">
                  Electronics
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Fashion
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Home & Kitchen
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer ">
                  Electronics
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Fashion
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Home & Kitchen
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer ">
                  Electronics
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Fashion
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Home & Kitchen
                </li>
              </ul>
            </div>
          </div>

          {/* Center - Navbar Links */}
          <div className="flex items-center space-x-6 gap-8 text-xl font-semibold">
            {/* Home Dropdown */}
            <div className="relative group z-10">
              <button className="flex items-center space-x-1 hover:text-yellow-400 ">
                HOME
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
              {/* Dropdown */}
              <div className="absolute left-0 top-full hidden group-hover:block bg-white text-black shadow-md rounded-md w-[600px]">
                <div className="grid grid-cols-3 p-4 gap-4">
                  <div>
                    <h3 className="font-bold mb-2">LAYOUTS</h3>
                    <ul>
                      <li className="text-sm py-1 hover:bg-gray-200 cursor-pointer">
                        Demo Shop 1 <span className="text-red-500">Hot</span>
                      </li>
                      <li className="text-sm py-1 hover:bg-gray-200 cursor-pointer">
                        Demo Shop 2
                      </li>
                      <li className="text-sm py-1 hover:bg-gray-200 cursor-pointer">
                        Demo Shop 3 <span className="text-yellow-500">Featured</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">CATEGORIES</h3>
                    <ul>
                      <li className="text-sm py-1 hover:bg-gray-200 cursor-pointer">
                        Demo Fashion 1
                      </li>
                      <li className="text-sm py-1 hover:bg-gray-200 cursor-pointer">
                        Demo Sport <span className="text-blue-500">New</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">OTHERS</h3>
                    <ul>
                      <li className="text-sm py-1 hover:bg-gray-200 cursor-pointer">
                        Demo Furniture 1
                      </li>
                      <li className="text-sm py-1 hover:bg-gray-200 cursor-pointer">
                        Demo Medicine
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Dropdown */}
            <div className="relative group z-10">
              <button className="flex items-center space-x-1 hover:text-yellow-400">
                FEATURES
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
              {/* Dropdown */}
              <div className="absolute left-0 top-full hidden group-hover:block bg-white text-black shadow-md rounded-md w-64">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Feature 1
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Feature 2
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Feature 3
                  </li>
                </ul>
              </div>
            </div>

            {/* Other Links */}
            <a href="#" className="hover:text-yellow-400">
              UNDER $100
            </a>
            <a href="#" className="hover:text-yellow-400">
              NEW ARRIVALS
            </a>
            <a href="#" className="hover:text-yellow-400">
              DEALS
            </a>
            <a href="#" className="hover:text-yellow-400">
              ABOUT US
            </a>
            <a href="#" className="hover:text-yellow-400">
              CONTACT US
            </a>
          </div>
        </nav>
      </div>
      );
};

export default Header2;
