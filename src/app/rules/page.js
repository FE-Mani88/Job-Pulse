'use client'
import React from 'react'
import Header from '@/components/templates/Home/Header'
import Footer from '@/components/templates/Home/Footer'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Copy, MoveRight, Share2 } from 'lucide-react'
import { toast, ToastContainer } from 'react-toastify'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function page() {

    const linkCopyHandler = () => {
        try {
            navigator.clipboard.writeText('job-pulse.com/blogs/noi3he931d')

            return toast.success('Link Copied Successfully', {
                theme: 'light'
            })
        } catch (error) {
            return toast.error('Unknown Error')
        }
    }

    return (
        <>
            <Header shouldBeFullWidth={true} />
            <div className='min-h-screen grid grid-cols-12 gap-6 mt-[104.8px] md:mt-[88.8px] mx-auto w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]'>

                <div className='col-span-12 md:col-span-8 mt-8 bg-white rounded-md'>
                    <div className='py-8 px-4'>
                        <div className='flex items-center gap-2'>
                            <div style={{ borderRadius: '30% 70% 70% 30% / 30% 32% 68% 70% ' }} className='bg-green-400 w-10 h-10' ></div>
                            <h2 className='text-2xl font-semibold'>Terms of services</h2>
                        </div>
                        <p className='px-10 mt-2'>
                            Lorem, ipsum dolor sit amet consectum quod explicabo laboriosam similique sint! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo aperiam numquam aliquam nihil odit dignissimos dolorem veritatis modi nulla laboriosam. Laboriosam illum, voluptatibus quia temporibus, laudantium maxime optio deserunt voluptatum perspiciatis ducimus id fuga officiis adipisci, quasi aut quo tempore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consectetur delectus maxime ipsum quidem aspernatur impedit expedita quo provident possimus!
                        </p>
                        <div className='px-10 mt-6 overflow-hidden'>
                            <img className='rounded-lg' src="https://sabzlearn.ir/wp-content/uploads/2025/07/ui-ai1.webp" alt="image" />
                        </div>

                        <div className='flex items-center gap-2 mt-8'>
                            <div style={{ borderRadius: '30% 70% 70% 30% / 30% 32% 68% 70% ' }} className='bg-green-400 w-10 h-10' ></div>
                            <h2 className='text-2xl font-semibold'>Regular Rules</h2>
                        </div>
                        <p className='px-10 mt-2'>
                            Lorem, ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur, adipisicing elit. A itaque quaerat beatae nobis magni temporibus hic cum dignissimos dolorum. Voluptas omnis, adipisci hic ducimus quo quis, illo laudantium reprehenderit ullam quaerat accusantium nihil voluptatum perspiciatis modi sequi labore at, quas optio? Dolor fuga alias sapiente impedit quam doloribus tenetur numquam officiis sed quae provident ab placeat reprehenderit veritatis fugiat rem magnam nisi, nemo exercitationem eaque id. Qui, pariatur iste. Facilis consequatur aliquam nemo placeat obcaecati earum vel natus omnis dolore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium provident eius inventore in nisi magni praesentium perspiciatis tenetur unde doloremque. consectum quod explicabo laboriosam similique sint! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo aperiam numquam aliquam nihil odit dignissimos dolorem veritatis modi nulla laboriosam. Laboriosam illum, voluptatibus quia temporibus, laudantium maxime optio deserunt voluptatum perspiciatis ducimus id fuga officiis adipisci, quasi aut quo tempore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consectetur delectus maxime ipsum quidem aspernatur impedit expedita quo provident possimus!
                        </p>

                        <div className='px-10 mt-6 overflow-hidden'>
                            <img className='rounded-lg' src="https://sabzlearn.ir/wp-content/uploads/2025/07/ai-block1.webp" alt="image" />
                        </div>

                        <p className='px-10 mt-8'>
                            Lorem, ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur, adipisicing elit. A itaque quaerat beatae nobis magni temporibus hic cum dignissimos dolorum. Voluptas omnis, adipisci hic ducimus quo quis, illo laudantium reprehenderit ullam quaerat accusantium nihil voluptatum perspiciatis modi sequi labore at, quas optio? Dolor fuga alias sapiente impedit quam doloribus tenetur numquam officiis sed quae provident ab placeat reprehenderit veritatis fugiat rem magnam nisi, nemo exercitationem eaque id. Qui, pariatur iste. Facilis consequatur aliquam nemo placeat obcaecati earum vel natus omnis dolore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium provident eius inventore in nisi magni praesentium perspiciatis tenetur unde doloremque. consectum quod explicabo laboriosam similique sint! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo aperiam numquam aliquam nihil odit dignissimos dolorem veritatis modi nulla laboriosam. Laboriosam illum, voluptatibus quia temporibus, laudantium maxime optio deserunt voluptatum perspiciatis ducimus id fuga officiis adipisci, quasi aut quo tempore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consectetur delectus maxime ipsum quidem aspernatur impedit expedita quo provident possimus!
                        </p>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-4 mt-8 px-2 md:px-0">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                        defaultValue="item-1"
                    >
                        <AccordionItem className='px- bg-white px-4 py-3 rounded-sm' value="item-1">
                            <AccordionTrigger className='hover:!no-underline'><div className='flex items-center gap-3 text-[18px]'><Share2 className='w-6 h-6' />Page Information</div></AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <div className='text-lg bg-green-100 text-green-500 flex justify-between rounded-sm border-2 border-green-400 border-dotted mt-2 px-3 py-3'>
                                    <p>job-pulse.com/blogs/noi3he931d</p>
                                    <Copy className='w-6 h-6 cursor-pointer' onClick={() => linkCopyHandler()} />
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <Carousel className="w-full max-w-xs mx-auto my-2">
                        <CarouselContent>
                            {/* Item */}
                            <CarouselItem className='cursor-grab active:cursor-grabbing select-none'>
                                <div className="p-1">
                                    <Card className="w-full rounded-md overflow-hidden mt-8 pt-0 gap-2">
                                        <div className='h-42 w-full'>
                                            <img className='h-full w-full' src="https://sabzlearn.ir/wp-content/uploads/2025/07/go1-768x403.webp" alt="#" />
                                        </div>
                                        <h2 className='mt-1 px-3 text-2xl'>Lorem ipsum</h2>
                                        <p className='px-3 leading-5 line-clamp-5'>Lorem ipsum, dolor sit ametg elit. Voluptatum labore id, blanditiis earum omnis quaerat enim atque consequatur minus quibusdam tempore mollitia velit tempora, corporis beatae. Fuga.</p>
                                        <div className='group flex items-center gap-1 px-3 text-green-500 mt-1 hover:underline transition'>
                                            <p className='cursor-pointer'>Read More</p> <MoveRight className='size-5 group-hover:translate-x-1 transition cursor-pointer' />
                                        </div>
                                    </Card>
                                </div>
                            </CarouselItem>
                            {/* End Item */}
                            {/* Item */}
                            <CarouselItem className='cursor-grab active:cursor-grabbing select-none'>
                                <div className="p-1">
                                    <Card className="w-full rounded-md overflow-hidden mt-8 pt-0 gap-2">
                                        <div className='h-42 w-full'>
                                            <img className='h-full w-full' src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?t=st=1742561806~exp=1742565406~hmac=f2bc8e5c681821728fbf21d674b448266b0b9afdba955bbd1c79f5b1beb8e09d" alt="#" />
                                        </div>
                                        <h2 className='mt-1 px-3 text-2xl'>Lorem ipsum</h2>
                                        <p className='px-3 leading-5 line-clamp-5'>Lorem, ipsum dolor. Lorem ipsum, dolor sit amet Voluptatum labore id, blanditiis earum omnis quaerat enim atqueres consequatur minus quibusdam sitna nemik mollitia velit tempora, corporis beatae. Fuga.</p>
                                        <div className='group flex items-center gap-1 px-3 text-green-500 mt-1 hover:underline transition'>
                                            <p className='cursor-pointer'>Read More</p> <MoveRight className='size-5 group-hover:translate-x-1 transition cursor-pointer' />
                                        </div>
                                    </Card>
                                </div>
                            </CarouselItem>
                            {/* End Item */}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>

            </div>

            <Footer />

            <ToastContainer />
        </>
    )
}
