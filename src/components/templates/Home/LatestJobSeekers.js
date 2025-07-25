'use client'
import React from 'react'
import { Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Keyboard, Autoplay } from "swiper/modules";
import { ChevronRight } from 'lucide-react';

export default function LatestJobSeekers() {
    return (
        <div className="max-w-6xl mx-auto text-zinc-700 dark:text-zinc-200 mt-12" id='latest-jobseekers'>
            <div className="flex justify-between items-center mb-6">
                <div className="text-3xl flex gap-3 items-center">
                    <div
                        style={{ borderRadius: "72% 28% 40% 60% / 40% 46% 54% 60%" }}
                        className="bg-green-400 w-10 h-10"
                    ></div>
                    Latest Job Seekers
                </div>
                <div className='flex items-center text-lg'>see more <ChevronRight /></div>
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
                                <img className="w-24 h-24" src="https://cdn-icons-png.flaticon.com/128/2942/2942821.png" alt="image" />
                            </div>

                            <div>
                                <h4 className="text-black dark:text-white">React.js Dev</h4>
                                <p className="text-zinc-500 text-[18px] dark:text-zinc-400">Remote / Full Time</p>
                                <p className="text-zinc-400 text-[16px] dark:text-zinc-300">Searching for a job</p>
                            </div>

                        </div>
                        {/* End Top */}

                        <div className="bg-zinc-300 w-[95%] h-[1px] mx-auto mt-1.5"></div>

                        <div className="mt-2 flex flex-col gap-2">
                            <p className="text-[18px] text-zinc-700 dark:text-zinc-200 w-[98%] mx-auto">I am a mid-level frontend web developer. I live in Tehren and I am searching for a good job now.</p>

                            <div className="flex justify-between items-center">
                                <span className="text-[22px] text-emerald-500">300 - 400$ PM</span>
                                <Button variant="contained" sx={{ backgroundColor: '#25ce7d' }}>See Profile</Button>
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
                            <p className="text-[18px] text-zinc-700 dark:text-zinc-200 w-[98%] mx-auto">I am a mid-level frontend web developer. I live in Tehren and I am searching for a good job now.</p>

                            <div className="flex justify-between items-center">
                                <span className="text-[22px] text-[#EF5350]">300 - 400$ PM</span>
                                <Button variant="contained" sx={{ backgroundColor: '#EF5350' }}>See Profile</Button>
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
                            <p className="text-[18px] text-zinc-700 dark:text-zinc-200 w-[98%] mx-auto">I am a mid-level frontend web developer. I live in Tehren and I am searching for a good job now.</p>

                            <div className="flex justify-between items-center">
                                <span className="text-[22px] text-[#1E88E5]">300 - 400$ PM</span>
                                <Button variant="contained" sx={{ backgroundColor: '#1E88E5' }}>See Profile</Button>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide className="w-48 h-full bg-[#f6f6f8] dark:bg-gray-800/80 flex items-center justify-center rounded-lg text-white text-2xl">
                    <div className="p-3">
                        {/* Top */}
                        <div className="flex items-center gap-4">

                            <div className="rounded-xl overflow-hidden">
                                <img className="w-24 h-24" src="https://cdn-icons-png.flaticon.com/128/2942/2942821.png" alt="image" />
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
                            <p className="text-[18px] text-zinc-700 dark:text-zinc-200 w-[98%] mx-auto">I am a mid-level frontend web developer. I live in Tehren and I am searching for a good job now.</p>

                            <div className="flex justify-between items-center">
                                <span className="text-[22px] text-[#FDD835]">300 - 400$ PM</span>
                                <Button variant="contained" sx={{ backgroundColor: '#FDD835' }}>See Profile</Button>
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
                            <p className="text-[18px] text-zinc-700 dark:text-zinc-200 w-[98%] mx-auto">I am a mid-level frontend web developer. I live in Tehren and I am searching for a good job now.</p>

                            <div className="flex justify-between items-center">
                                <span className="text-[22px] text-[#1E88E5]">300 - 400$ PM</span>
                                <Button variant="contained" sx={{ backgroundColor: '#1E88E5' }}>See Profile</Button>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
