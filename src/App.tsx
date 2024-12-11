import BestSmartphone from "./components/BestSmartphone";
import FashionJewelry from "./components/FashionJuwalary";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer1 from "./components/Footer1";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import HomeSlider from "./components/HomeSlider";
import NewsletterForm from "./components/NewsletterForm";
import ProductCard from "./components/ProductCard";
import Slider from "./components/Slider";
import Slider1 from "./components/Slider1";

function App() {
  return (
    <div className="bg-[#F2F3F7]">
      <Header />
      <Header2 />
      <div className="px-4 lg:px-9">
        <HomeSlider />
        <div className="bg-white  rounded-sm shadow-md mt-8">
          <div className="text-[33px] text-gray-800 px-10 py-5 font-semibold">
            Deal of the days
          </div>

          <div className="flex flex-col md:flex-row justify-center">
            <ProductCard
              image="https://magento2.magentech.com/themes/sm_marketnew/pub/media/catalog/product/cache/2d44a1f17456aeae0d58475a77739749/b/e/beat_crossfade_2_wireless_headphone_2.jpg"
              hoveredImage="https://magento2.magentech.com/themes/sm_marketnew/pub/media/catalog/product/cache/2d44a1f17456aeae0d58475a77739749/e/l/electrolux_efls61_washing_machine.jpg"
              title="Apple iWatch Sport Green"
              price="$85.00"
              discount={11}
              originalPrice="$95.00"
              daysLeft={330}
              hoursLeft={11}
              minsLeft={22}
              secsLeft={27}
            />

            <ProductCard
              image="https://magento2.magentech.com/themes/sm_marketnew/pub/media/catalog/product/cache/2d44a1f17456aeae0d58475a77739749/e/l/electrolux_efls61_washing_machine.jpg"
              hoveredImage="https://magento2.magentech.com/themes/sm_marketnew/pub/media/catalog/product/cache/2d44a1f17456aeae0d58475a77739749/b/e/beat_crossfade_2_wireless_headphone_2.jpg"
              title="Black Automatic Vacuum Cleaner"
              price="$220.00"
              discount={4}
              originalPrice="$230.00"
              daysLeft={330}
              hoursLeft={11}
              minsLeft={22}
              secsLeft={27}
            />
          </div>
        </div>
        <FeaturedProducts />
        <div className="bg-white  rounded-sm shadow-md mt-8 pb-4">
          <h1 className="text-[33px] text-gray-800 px-10 pt-5 font-semibold">
            Top Collections
          </h1>
          <Slider />
        </div>
        <BestSmartphone />
        <FashionJewelry />       
        <div className="bg-white  rounded-sm shadow-md mt-8 pb-4">
          <h1 className="text-[33px] text-gray-800 px-10 pt-5 font-semibold">
            Latest Blogs
          </h1>
          <Slider1 />
        </div>
      </div>
      <NewsletterForm/>
      <Footer1/>
    </div>
  );
}

export default App;
