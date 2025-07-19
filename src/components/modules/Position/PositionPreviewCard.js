import React from 'react'
import { Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function PositionPreviewCard() {
    return (
        <div className='bg-white rounded-sm w-full py-4 px-3 space-y-2'>
            <div className='flex gap-3'>
                {/* Image */}
                <div className='min-w-14 min-h-14 max-w-14 max-h-14 border border-gray-200 rounded-md'>
                    <img
                        className='w-full h-full object-contain'
                        src="https://img.freepik.com/free-vector/man-search-hiring-job-online-from-laptop_1150-52728.jpg?semt=ais_hybrid&w=740"
                        alt="Job Search"
                    />
                </div>

                {/* Details */}
                <div className='mt-[2px] w-full space-y-1'>
                    <div className='flex justify-between items-center'>
                        <p className='text-md font-medium'>Position Title (Example)</p>
                        <Heart className='w-5 h-5' />
                    </div>

                    <div className='text-gray-700 text-sm'>
                        Company Name
                    </div>

                    <div className='text-sm text-gray-500'>
                        USA, California, Nemed Street
                    </div>
                </div>
            </div>

            <Button className='bg-teal-400 hover:bg-teal-500 cursor-pointer w-full'>
                Send Resume
            </Button>
        </div>
    )
}
