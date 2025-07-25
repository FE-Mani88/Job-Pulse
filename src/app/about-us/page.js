'use client'
import React from 'react'
import Header from '@/components/templates/Home/Header'
import Breadcrumb from '@/components/modules/Breadcrumb'
import OurPlans from '@/components/templates/Home/OurPlans'
import Footer from '@/components/templates/Home/Footer'

export default function Page() {
    return (
        <div className='dark:bg-blue-400/10'>
            <Header />
            <Breadcrumb routePath='About Us' />
            <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-18 mt-12">
                <div className="md:w-1/2 text-center mt-4">
                    <h2 className="text-center text-3xl font-bold mb-2">But Why Job Pulse?</h2>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed dark:text-zinc-200">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus cum laudantium eligendi sed optio, tempore beatae porro quis? Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit. Lorem, ipsum. Lorem. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sapiente amet dicta iure quas. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, a ipsa. Laboriosam, aspernatur praesentium voluptatibus quisquam reiciendis explicabo vero adipisci quaerat nostrum temporibus consequatur quo eaque pariatur fuga a nulla sapiente blanditiis officia quia quod eos, alias natus enim? Quasi?</p>
                </div>
                <div className="md:w-1/2">
                    <img src="/images/undraw_math_ldpv.svg" className="w-full max-h-[520px] mt-8" alt="Illustration" />
                </div>
            </div>
            <OurPlans />
            <Footer />
        </div>
    )
}
