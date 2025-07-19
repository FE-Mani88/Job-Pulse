'use client'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Banner() {
    return (
        <Swiper
            rewind={true}
            navigation={true}
            loop={true}
            autoplay={{ delay: 4500 }}
            modules={[Navigation, Autoplay]}
            className="mySwiper home-slider max-h-[93vh]"
        >
            <SwiperSlide>
                <img
                    className="w-full h-full object-cover"
                    src="https://cultivate-pro.com/wp-content/uploads/2022/12/3-Most-Important-Job-Search-Tools-1800-%C3%97-1200-px-1024x683.png"
                    alt="Slide"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    className="w-full h-full object-cover"
                    src="https://newsroom.iza.org/wp-content/uploads/2018/09/iStock-615738494.jpg"
                    alt="Slide"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    className="w-full h-full object-cover"
                    src="https://c8.alamy.com/comp/MKP0T8/find-job-drawn-on-white-brickwall-MKP0T8.jpg"
                    alt="Slide"
                />
            </SwiperSlide>
        </Swiper>
    )
}
