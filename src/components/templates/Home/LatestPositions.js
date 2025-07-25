'use client'
import React from 'react';
import { Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Keyboard, Autoplay } from "swiper/modules";
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function LatestPositions() {
    return (
        <div className="max-w-6xl mx-auto text-zinc-700 dark:text-zinc-200 mt-10">
            <div className="flex justify-between items-center mb-6">
                <div className="text-3xl flex gap-3 items-center">
                    <div
                        style={{ borderRadius: "72% 28% 40% 60% / 40% 46% 54% 60%" }}
                        className="bg-green-400 w-10 h-10"
                    ></div>
                    Latest Positions
                </div>
                <div className='flex items-center text-lg'>
                    <Link className='flex items-center' href='/positions'>
                        see more <ChevronRight />
                    </Link>
                </div>
            </div>

            <Swiper
                loop={true}
                freeMode={true}
                grabCursor={true}
                slidesPerView={3}
                spaceBetween={20}
                keyboard={{ enabled: true }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                modules={[FreeMode, Keyboard, Autoplay]}
                className="w-full h-64"
            >
                <SwiperSlide className="w-48 h-full bg-[#f6f6f8] dark:bg-gray-800/80 flex items-center justify-center rounded-lg text-white text-2xl">
                    <div className="p-3">
                        {/* Top */}
                        <div className="flex items-center gap-4">

                            <div className="rounded-xl overflow-hidden">
                                <img className="w-24 h-24" src="https://cdn-icons-png.flaticon.com/128/2853/2853452.png" alt="image" />
                            </div>

                            <div>
                                <h4 className="text-black dark:text-white">Full Stack Dev</h4>
                                <p className="text-zinc-500 dark:text-zinc-400 text-[18px]">Remote / Full Time</p>
                                <p className="text-zinc-400 dark:text-zinc-300 text-[16px]">Web Devs Company</p>
                            </div>

                        </div>
                        {/* End Top */}

                        <div className="bg-zinc-300 w-[95%] h-[1px] mx-auto mt-1.5"></div>

                        <div className="mt-2 flex flex-col gap-2">
                            <p className="text-[18px] text-zinc-700 w-[98%] mx-auto dark:text-zinc-200">we need a senior full stack web developer in our startup. you can send your resume for joining to our company.</p>

                            <div className="flex justify-between items-center">
                                <span className="text-[22px] text-emerald-500">300 - 400$</span>
                                <Button variant="contained" sx={{ backgroundColor: '#25ce7d' }}>Send Resume</Button>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide className="w-48 h-full bg-[#f6f6f8] dark:bg-gray-800/80 flex items-center justify-center rounded-lg text-white text-2xl">
                    <div className="p-3">
                        {/* Top */}
                        <div className="flex items-center gap-4">

                            <div className="rounded-xl overflow-hidden">
                                <img className="w-24 h-24" src="https://cdn-icons-png.flaticon.com/128/609/609134.png" alt="image" />
                            </div>

                            <div>
                                <h4 className="text-black dark:text-white">Full Stack Dev</h4>
                                <p className="text-zinc-500 text-[18px] dark:text-zinc-400">Remote / Full Time</p>
                                <p className="text-zinc-400 text-[16px] dark:text-zinc-300">Web Devs Company</p>
                            </div>

                        </div>
                        {/* End Top */}

                        <div className="bg-zinc-300 w-[95%] h-[1px] mx-auto mt-1.5"></div>

                        <div className="mt-2 flex flex-col gap-2">
                            <p className="text-[18px] text-zinc-700 w-[98%] mx-auto dark:text-zinc-200">we need a senior full stack web developer in our startup. you can send your resume for joining to our company.</p>

                            <div className="flex justify-between items-center">
                                <span className="text-[22px] text-[#EF5350]">300 - 400$</span>
                                <Button variant="contained" sx={{ backgroundColor: '#EF5350' }}>Send Resume</Button>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide className="w-48 h-full bg-[#f6f6f8] dark:bg-gray-800/80 flex items-center justify-center rounded-lg text-white text-2xl">
                    <div className="p-3">
                        {/* Top */}
                        <div className="flex items-center gap-4">

                            <div className="rounded-xl overflow-hidden">
                                <img className="w-24 h-24" src="https://cdn-icons-png.flaticon.com/128/8417/8417044.png" alt="image" />
                            </div>

                            <div>
                                <h4 className="text-black dark:text-white">Full Stack Dev</h4>
                                <p className="text-zinc-500 text-[18px] dark:text-zinc-400">Remote / Full Time</p>
                                <p className="text-zinc-400 text-[16px] dark:text-zinc-300">Web Devs Company</p>
                            </div>

                        </div>
                        {/* End Top */}

                        <div className="bg-zinc-300 w-[95%] h-[1px] mx-auto mt-1.5"></div>

                        <div className="mt-2 flex flex-col gap-2">
                            <p className="text-[18px] text-zinc-700 w-[98%] mx-auto dark:text-zinc-200">we need a senior full stack web developer in our startup. you can send your resume for joining to our company.</p>

                            <div className="flex justify-between items-center">
                                <span className="text-[22px] text-[#1E88E5]">300 - 400$</span>
                                <Button variant="contained" sx={{ backgroundColor: '#1E88E5' }}>Send Resume</Button>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide className="w-48 h-full bg-[#f6f6f8] dark:bg-gray-800/80 flex items-center justify-center rounded-lg text-white text-2xl">
                    <div className="p-3">
                        {/* Top */}
                        <div className="flex items-center gap-4">

                            <div className="rounded-xl overflow-hidden">
                                <img className="w-24 h-24" src="https://cdn-icons-png.flaticon.com/128/3850/3850285.png" alt="image" />
                            </div>

                            <div>
                                <h4 className="text-black dark:text-white">Full Stack Dev</h4>
                                <p className="text-zinc-500 text-[18px] dark:text-zinc-400">Remote / Full Time</p>
                                <p className="text-zinc-400 text-[16px] dark:text-zinc-300">Web Devs Company</p>
                            </div>

                        </div>
                        {/* End Top */}

                        <div className="bg-zinc-300 w-[95%] h-[1px] mx-auto mt-1.5"></div>

                        <div className="mt-2 flex flex-col gap-2">
                            <p className="text-[18px] text-zinc-700 w-[98%] mx-auto dark:text-zinc-200">we need a senior full stack web developer in our startup. you can send your resume for joining to our company.</p>

                            <div className="flex justify-between items-center">
                                <span className="text-[22px] text-[#FDD835]">300 - 400$</span>
                                <Button variant="contained" sx={{ backgroundColor: '#FDD835' }}>Send Resume</Button>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide className="w-48 h-full bg-[#f6f6f8] dark:bg-gray-800/80 flex items-center justify-center rounded-lg text-white text-2xl">
                    <div className="p-3">
                        {/* Top */}
                        <div className="flex items-center gap-4">

                            <div className="rounded-xl overflow-hidden">
                                <img className="w-24 h-24" src="https://cdn-icons-png.flaticon.com/128/3135/3135800.png" alt="image" />
                            </div>

                            <div>
                                <h4 className="text-black dark:text-white">Full Stack Dev</h4>
                                <p className="text-zinc-500 text-[18px] dark:text-zinc-400">Remote / Full Time</p>
                                <p className="text-zinc-400 text-[16px] dark:text-zinc-300">Web Devs Company</p>
                            </div>

                        </div>
                        {/* End Top */}

                        <div className="bg-zinc-300 w-[95%] h-[1px] mx-auto mt-1.5"></div>

                        <div className="mt-2 flex flex-col gap-2">
                            <p className="text-[18px] text-zinc-700 w-[98%] mx-auto dark:text-zinc-200">we need a senior full stack web developer in our startup. you can send your resume for joining to our company.</p>

                            <div className="flex justify-between items-center">
                                <span className="text-[22px] text-[#1E88E5]">300 - 400$</span>
                                <Button variant="contained" sx={{ backgroundColor: '#1E88E5' }}>Send Resume</Button>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
