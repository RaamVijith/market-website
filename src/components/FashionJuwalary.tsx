import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosHeartEmpty } from "react-icons/io";
import { TbRefresh } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  rating: number;
}

const products: Product[] = [
  {
    id: 1,
    image:"https://magento2.magentech.com/themes/sm_marketnew/pub/media/catalog/product/cache/2d44a1f17456aeae0d58475a77739749/s/-/s-6_1.jpg",
    title: "Google Pixel Android 8.1 OPM",
    price: 95.0,
    rating: 5,
  },
  {
    id: 2,
    image:
      "https://magento2.magentech.com/themes/sm_marketnew/pub/media/catalog/product/cache/2d44a1f17456aeae0d58475a77739749/s/-/s-6.jpg",
    title: "iPhone 7 Plus 64GB Silver",
    price: 88.0,
    rating: 3,
  },
  {
    id: 3,
    image:
      "https://magento2.magentech.com/themes/sm_marketnew/pub/media/catalog/product/cache/2d44a1f17456aeae0d58475a77739749/s/-/s-4_1.jpg",
    title: "Samsung Galaxy A7 Pro",
    price: 99.0,
    rating: 5,
  },
  {
    id: 4,
    image:
      "https://magento2.magentech.com/themes/sm_marketnew/pub/media/catalog/product/cache/2d44a1f17456aeae0d58475a77739749/s/-/s-4.jpg",
    title: "Samsung Galaxy J7 Prime 64GB",
    price: 250.0,
    rating: 4,
  },
];

const FashionJewelry: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full  bg-white mt-8 shadow-md">
      <div className="flex flex-row w-full">
        <div className="hidden xl:flex bg-[#FD7B7B] w-[22vw] flex-col gap-[30%] justify-center items-center text-center">
          <div className="text-white text-4xl font-semibold">
            Fashion <br/> & <br/>Jewelry
          </div>
          <div className="cursor-pointer shadow-md bg-white py-4 px-10 text-lg whitespace-nowrap font-bold text-gray-700">
            VIEW ALL
          </div>
        </div>
        <div className="w-full xl:max-w-[78vw] overflow-hidden">
          <Slider {...settings}>
            {products.map((product) => (
              <div
                key={product.id}
                className="p-4 relative text-center w-full "
              >
                <div className="relative group">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-auto object-cover"
                  />
                  <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-full py-2.5 rounded-sm bg-blue-600 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    QUICK VIEW
                  </button>
                </div>
                <h3 className="mt-4 text-xl text-gray-800 font-medium">
                  {product.title}
                </h3>
                <div className="flex w-full justify-center items-center space-x-2 text-yellow-500 text-2xl mt-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className={
                        index < product.rating
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-xl text-red-500 mt-2">
                  ${product.price.toFixed(2)}
                </p>
                <div className="flex flex-row justify-center gap-2 my-4">
                  <IoIosHeartEmpty className="p-2 text-5xl border border-gray-300 text-gray-500 font-semibold " />
                  <div className="flex p-2 flex-row border border-gray-300 items-center text-gray-600 font-semibold gap-2">
                    <TiShoppingCart className=" text-xl" />
                    ADD TO CART
                  </div>
                  <TbRefresh className="p-2 text-5xl text-gray-500 font-semibold border border-gray-300 " />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default FashionJewelry;
