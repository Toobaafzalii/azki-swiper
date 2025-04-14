"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, EffectFade, Navigation, Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slidesArray = Array.from({ length: 3 }, (_, i) => i + 1);

const AppSwiper: React.FC = () => {
  return (
      <Swiper
        navigation
        mousewheel={{
            forceToAxis: true, 
            releaseOnEdges: true, 
          }}
        className="h-[338px] md:h-[394px] lg:h-[406px] w-full max-w-[720px]"
        modules={[Navigation, Pagination, Autoplay, EffectFade, Mousewheel]}
        spaceBetween={10}
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        speed={400}
      >
        {slidesArray.map((item: number) => (
          <SwiperSlide key={item}>
            <div className="relative w-full h-full mx-auto">
              <Image 
                src={"/azki-banner.webp"} 
                alt={`slide-${item}`} 
                fill 
                className="h-full w-full md:h-[80%] md:w-[80%] rounded-xl p-20" 
                priority={item === 1}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
  );
};

export default AppSwiper;