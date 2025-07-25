import React from 'react'

export default function WhyUs() {
    return (
        <div id='why-us' className="flex flex-col md:flex-row justify-between items-center px-4 md:px-18 mt-12 gap-2">
            <div className="md:w-1/2 py-16">
                <img src="/images/undraw_text-messages_978a.svg" className="w-full max-h-[450px] mt-8" alt="Illustration" />
            </div>
            <div className="md:w-1/2 text-center mt-4">
                <h2 className="text-center text-3xl font-bold mb-2 dark:text-zinc-300">But Why Job Pulse?</h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed dark:text-zinc-200">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sapiente amet dicta iure quas. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, a ipsa. Laboriosam, aspernatur praesentium voluptatibus quisquam reiciendis explicabo vero adipisci quaerat nostrum temporibus consequatur quo eaque pariatur fuga a nulla sapiente blanditiis officia quia quod eos, alias natus enim? Quasi?</p>
            </div>
        </div>
    )
}
