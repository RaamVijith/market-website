import React, { useState } from "react";

interface Slide {
  title: string;
  image: string;
}

const slides: Slide[] = [
  {
    title: "HEALTH & BEAUTY",
    image: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/catalog/category/cat-3.png",
  },
  {
    title: "HOLIDAY SUPPLIES & GIFTS",
    image: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/catalog/category/cat-4.png",
  },
  {
    title: "JEWELRY & WATCHES",
    image: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/catalog/category/cat-5.png",
  },
  {
    title: "SMARTPHONES & TABLETS",
    image: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/catalog/category/cat-6.png",
  },
];

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full mx-auto">
      {/* Slider Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="flex-none w-full sm:w-1/2 md:w-1/4 p-4">
              <div className="text-center  border-[1px] border-gray-300 border-t-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full  object-cover "
                />
                <h3 className="my-4 text-lg font-bold text-gray-800">{slide.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev Button */}
      <button
        className="absolute top-1/2 -translate-y-1/2 left-2 bg-white p-6 shadow-lg hover:bg-gray-200"
        onClick={handlePrev}
      >
        &larr;
      </button>

      {/* Next Button */}
      <button
        className="absolute top-1/2 -translate-y-1/2 right-2 bg-white p-6 shadow-lg hover:bg-gray-200"
        onClick={handleNext}
      >
        &rarr;
      </button>
    </div>
  );
};

export default Slider;
