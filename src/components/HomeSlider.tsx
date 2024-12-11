import { IoMdRefresh } from "react-icons/io";
import ImageSlider from "./ImageSlider";
import { AiOutlineLike } from "react-icons/ai";
import { TiMessage } from "react-icons/ti";
import { GrLocation } from "react-icons/gr";

const HomeSlider = () => {
  const images = [
    {
      src: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/slidershow/home-14/item-2.jpg",
      alt: "Image 1",
    },
    {
      src: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/slidershow/home-14/item-3.jpg",
      alt: "Image 2",
    },
    {
      src: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/slidershow/home-14/item-1.jpg",
      alt: "Image 3",
    },
  ];
  return (
    <div className="bg-white shadow-lg">
      <div className="">
        <div className="bg-white flex flex-row justify-center items-center text-lg text-gray-800 text-center px-4 py-3">
          <span className="font-semibold pr-3">Go quickly to:</span> Tattoo Kits Electronic Cigarettes Sexy Lingerie Eye
          Makeup iPad Mini Cases iPhone 5 Cases Tattoo Supplies RC Helicopters
        </div>
        <ImageSlider images={images} />
        <div className="bg-white flex flex-row justify-between items-center text-xl">
          <div className="flex flex-col text-center items-center hover:bg-gray-200 hover:border-b-blue-500 hover:border-4 hover:text-blue-500 cursor-pointer w-full py-5 gap-2 font-semibold text-gray-800">
            <GrLocation className="text-4xl font-bold" />
            FREE SHIPING WORLDWIDE
          </div>
          <div className="flex flex-col text-center items-center hover:bg-gray-200 hover:border-b-blue-500 hover:border-4 hover:text-blue-500 cursor-pointer w-full py-5 gap-2 font-semibold text-gray-800">
            <IoMdRefresh className="text-4xl font-bold" />
            MONEY BACK GUARANTEE
          </div>
          <div className="flex flex-col text-center items-center hover:bg-gray-200 hover:border-b-blue-500 hover:border-4 hover:text-blue-500 cursor-pointer w-full py-5 gap-2 font-semibold text-gray-800">
            <AiOutlineLike className="text-4xl font-bold" />
            LOW PRICE GUARANTEE
          </div>
          <div className="flex flex-col text-center items-center hover:bg-gray-200 hover:border-b-blue-500 hover:border-4 hover:text-blue-500 cursor-pointer w-full py-5 gap-2 font-semibold text-gray-800">
            <TiMessage className="text-4xl font-bold" />
            ONLINE SUPPORT 24/24
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
