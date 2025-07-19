import React from 'react';
import Link from 'next/link';
import Header from '@/components/templates/Home/Header';
import Footer from '@/components/templates/Home/Footer';

export default function NotFound() {
    return (
        <>
            <Header shouldBeFullWidth={true} />
            <div className="flex flex-col md:flex-row justify-around items-center min-h-screen max-w-7xl mx-auto px-4 md:px-8 pt-10 gap-10">
                {/* Illustration */}
                <div className="w-full md:w-1/2 mt-18">
                    <img
                        src="/images/Group 2.png"
                        alt="Signup Illustration"
                        className="w-full h-auto md:min-h-[60vh] object-cover rounded-lg"
                    />
                </div>

                {/* Text Section */}
                <div className="flex flex-col gap-6 text-center md:text-left">
                    <div>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                            Go Home,
                        </h2>
                        <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                            You Are Drunk!
                        </h3>
                    </div>
                    <Link href="/">
                        <button className="bg-[#92E3A9] hover:bg-green-300 cursor-pointer transition text-white py-3 px-8 sm:px-10 md:px-16 rounded-full text-lg font-semibold">
                            BACK TO HOME
                        </button>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}
