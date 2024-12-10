import BestSmartphone from "./components/BestSmartphone";
import FeaturedProducts from "./components/FeaturedProducts";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import HomeSlider from "./components/HomeSlider";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="bg-[#F2F3F7] mb-52">
      <Header />
      <Header2 />
      <div className="px-4 lg:px-9">
        <HomeSlider />
        <div className="bg-white  rounded-sm shadow-md mt-8">
          <div className="text-[33px] text-gray-800 px-10 py-5 font-semibold">Deal of the days</div>
          
          <div className="flex flex-col md:flex-row justify-center">
            <ProductCard
              image="https://magento2.magentech.com/themes/sm_marketnew/pub/media/catalog/product/cache/2d44a1f17456aeae0d58475a77739749/b/e/beat_crossfade_2_wireless_headphone_2.jpg"
              hoveredImage="/path/to/hovered-image.jpg"
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
        <FeaturedProducts/>
        <BestSmartphone/>
      </div>
    </div>
  );
}

export default App;
