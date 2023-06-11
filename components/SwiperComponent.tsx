"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../styles/swiper.css";

// import required modules
import { Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="min-h-[500px] bg-gray-100">
          <p className="">Slide 1</p>
        </SwiperSlide>
        <SwiperSlide className="min-h-[500px] bg-gray-200">
          <p className="">Slide 2</p>
        </SwiperSlide>
        <SwiperSlide className="min-h-[500px] bg-gray-300">
          <p className="">Slide 3</p>
        </SwiperSlide>
        <SwiperSlide className="min-h-[500px] bg-gray-400">
          <p className="">Slide 4</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
