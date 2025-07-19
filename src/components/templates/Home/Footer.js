import React from 'react';
import { Users } from 'lucide-react';
import { IconButton, Stack } from '@mui/material';
import { FaInstagram, FaTelegramPlane, FaLinkedin, FaDiscord } from 'react-icons/fa';

export default function Footer() {
    return (
        <>
            <footer id='footer' className="bg-gray-100 w-full py-10 mt-18">
                <div className="w-full px-4 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] mx-auto">
                    
                    {/* Top Row - Logo & Socials */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
                        {/* Logo */}
                        <div className="text-xl flex items-center gap-2">
                            <Users className="text-emerald-400 w-8 h-8" />
                            <div className="text-3xl font-bold">
                                <span className="text-violet-950">Job</span> - <span className="text-emerald-400">Pulse</span>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <Stack direction="row" spacing={2}>
                            <IconButton
                                component="a"
                                href="https://instagram.com"
                                target="_blank"
                                sx={{
                                    backgroundColor: "#E1306C",
                                    color: "white",
                                    "&:hover": {
                                        backgroundColor: "#c72c60",
                                    },
                                }}
                            >
                                <FaInstagram />
                            </IconButton>
                            <IconButton
                                component="a"
                                href="https://t.me"
                                target="_blank"
                                sx={{
                                    backgroundColor: "#0088cc",
                                    color: "white",
                                    "&:hover": {
                                        backgroundColor: "#007bb5",
                                    },
                                }}
                            >
                                <FaTelegramPlane />
                            </IconButton>
                            <IconButton
                                component="a"
                                href="https://linkedin.com"
                                target="_blank"
                                sx={{
                                    backgroundColor: "#0A66C2",
                                    color: "white",
                                    "&:hover": {
                                        backgroundColor: "#004182",
                                    },
                                }}
                            >
                                <FaLinkedin />
                            </IconButton>
                            <IconButton
                                component="a"
                                href="https://discord.com"
                                target="_blank"
                                sx={{
                                    backgroundColor: "#5865F2",
                                    color: "white",
                                    "&:hover": {
                                        backgroundColor: "#4752c4",
                                    },
                                }}
                            >
                                <FaDiscord />
                            </IconButton>
                        </Stack>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-gray-300 mb-8" />

                    {/* Content Columns */}
                    <div className="flex flex-col md:flex-row gap-8">
                        {Array(4).fill(0).map((_, i) => (
                            <div key={i} className="w-full md:w-1/4">
                                <h2 className="text-lg md:text-xl font-semibold mb-2">About Job Pulse</h2>
                                <p className="text-neutral-500 text-sm leading-relaxed">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptatum dolor reiciendis vel! Tempora ratione sint voluptas nihil.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </footer>

            {/* Footer Bottom Bar */}
            <div className="bg-gray-300 py-3 text-center text-sm md:text-base text-gray-700">
                Job Pulse, Created By <span className="font-semibold">Dev Mani</span> & <span className="font-semibold">Soroush GH</span>
            </div>
        </>
    );
}
