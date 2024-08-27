"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/swiper-bundle.css";

const Slider = () => {
  return (
    <div className="col-span-2">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img
            src="https://easycasse.fr/oc-content/uploads/banners/1681522838_image_2023-04-15_064029758.png"
            alt=""
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://easycasse.fr/oc-content/uploads/banners/1681522715_image_2023-04-15_063820902.png"
            alt=""
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://easycasse.fr/oc-content/uploads/banners/1681649663_image_2023-04-16_175404129.png"
            alt=""
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://easycasse.fr/oc-content/uploads/banners/1681650051_image_2023-04-16_180047451.png"
            alt=""
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://easycasse.fr/oc-content/uploads/banners/1681650071_image_2023-04-16_180108341.png"
            alt=""
            className="w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
