import React from "react";
import { BiPhone } from "react-icons/bi";
import { BsMailbox, BsPrinter, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

const Footer1: React.FC = () => {
    const brands = [
        "Tom Lee",
        "Honda SH",
        "Durex",
        "Apple Pen",
        "Jacket Men",
        "Kotex Style",
        "LG TV",
        "Dolce Gabbana",
        "Onida TV",
        "Toshiba TV",
        "Philips TV",
        "Micromax TV",
        "LED TV",
        "LCD TV",
        "Plasma TV",
        "3D TV",
        "Smart TV",
        "Samsung Mobile",
        "Asus Zenphone",
        "Sony Camera",
        "Point shoot camera",
        "Camera Lens",
        "Camera Tripod",
        "Camera Bag",
        "Apple Laptop",
        "Acer Laptop",
        "Samsung Laptop",
        "Lenovo Tablet",
        "Sony Laptop",
        "Accessories",
        "Ipad",
        "LG Tablet",
        "Notebook",
        "Sony TV",
        "Panasonic TV",
        "Xiaomi",
        "Dresses",
        "Nokia 7610",
        "Honda SH",
      ];
  return (
    <>
    <footer className="bg-white py-8 border-b border-gray-300 px-[2vw]">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Us Section */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-700">CONTACT US</h4>
            <ul className="space-y-3 text-gray-500">
              <li className="flex items-center ">
                <div className="bg-gray-300  p-3 rounded-sm mr-3">
                  <GrLocation/>
                </div>
                <span>Address: No 40 Baria Street 133/2, NewYork City, NY, United States</span>
              </li>
              <li className="flex items-center">
                <div className="bg-gray-300 p-3 rounded-sm mr-3">
                 <BsMailbox/>
                </div>
                <span>Email: contact@market.com</span>
              </li>
              <li className="flex items-center">
                <div className="bg-gray-300 p-3 rounded-sm mr-3">
                <BiPhone/>

                </div>
                <span>Phone 1: 0123456789</span>
              </li>
              <li className="flex items-center">
                <div className="bg-gray-300 p-3 rounded-sm mr-3">
                <BiPhone/>

                </div>
                <span>Phone 2: 0123456789</span>
              </li>
            </ul>
          </div>

          {/* About Market Section */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-700">ABOUT MARKET</h4>
            <ul className="space-y-3 text-gray-500">
              <li>About Us</li>
              <li>Market Reviews</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Site Map</li>
            </ul>
          </div>

          {/* Customer Service Section */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-700">CUSTOMER SERVICE</h4>
            <ul className="space-y-3 text-gray-500">
              <li>Shipping Policy</li>
              <li>Compensation First</li>
              <li>My Account</li>
              <li>Return Policy</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Payment & Shipping Section */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-700">PAYMENT & SHIPPING</h4>
            <ul className="space-y-3 text-gray-500">
              <li>Terms of Use</li>
              <li>Payment Methods</li>
              <li>Shipping Guide</li>
              <li>Locations We Ship To</li>
              <li>Estimated Delivery Time</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

    <div className="hidden lg:flex flex-row justify-between px-[2vw] py-10 bg-white border-b border-gray-300">
        <div className="flex flex-row items-center text-xl font-semibold text-gray-800 gap-2">
            DOWNLOAD APP:
            <img className="h-11" src="https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/app/app-1.png"/>
            <img className="h-11" src="https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/app/app-2.png"/>
        </div>
        <div className="flex flex-row items-center text-xl font-semibold text-gray-800 gap-2">
            DOWNLOAD APP:
                 <FaFacebook className="bg-gray-500 p-3 rounded-full text-5xl text-white font-bold"/>
                 <BsYoutube className="bg-gray-500 p-3 rounded-full text-5xl text-white font-bold"/>
                 <BsTwitter className="bg-gray-500 p-3 rounded-full text-5xl text-white font-bold"/>
                 <BsPrinter className="bg-gray-500 p-3 rounded-full text-5xl text-white font-bold"/>

        </div>
    </div>

    <div className="py-4 text-center border-b bg-white">
        <div className="container mx-auto px-4 py-6 text-lg text-gray-500 flex flex-wrap justify-center gap-3">
          {brands.map((brand, index) => (
            <span key={index} className="inline-block">
              {brand}
              {index !== brands.length - 1 && " | "}
            </span>
          ))}
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#3174E3] text-white text-lg py-6">
        <div className=" px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            SM Market © 2021 Demo Store. All Rights Reserved. Designed by
            MagenTech.Com
          </div>
          {/* Payment Icons */}
          <div className="flex justify-center md:justify-end mt-4 md:mt-0 space-x-4">
            <img
              src="https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/payment/payment-3.png"
              alt="Visa"
              className="h-6"
            />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer1;
