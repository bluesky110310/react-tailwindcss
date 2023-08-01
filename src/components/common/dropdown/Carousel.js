// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Item1 from "./Item1";
import Item2 from "./Item2";
import Item3 from "./Item3";
import Item4 from "./Item4";
import { useEffect, useState } from "react";

const items = [Item1, Item2, Item3, Item4];

const Carousel = ({ menu }) => {
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (swiper) swiper.slideTo(menu, 500);
  }, [menu, swiper]);

  return (
    <Swiper
      onSwiper={setSwiper}
      spaceBetween={50}
      slidesPerView={1}
      allowTouchMove={false}
    >
      {items.map((item, index) => {
        return <SwiperSlide key={index + 1}>{item}</SwiperSlide>;
      })}
    </Swiper>
  );
};

export default Carousel;
