'use client'
import React, { useContext } from 'react'
import { SentRequestsTable } from '@/components/templates/JobSeekerPanel/SentRequestsTable'
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardAction } from '@/components/ui/card'
import { ThemeColorContext } from '@/contexts/user-theme'
import { colorMap } from '@/utils/constants'
import { CalendarRange, ChartNoAxesCombined, DollarSign, Users } from 'lucide-react'

export default function page() {

    const { color } = useContext(ThemeColorContext)

    return (
        <>
            <div className={`${colorMap[color]} transition-colors grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-5 py-6`}>
                <Card className='gap-4 rounded-sm'>
                    <CardHeader>
                        <CardTitle className='text-lg'>All Applies</CardTitle>
                        <CardAction className={`${colorMap[color]} text-white py-1.5 px-1.5 rounded-sm`}>
                            <DollarSign className='w-6 h-6' />
                        </CardAction>
                    </CardHeader>
                    <CardContent>
                        <p className='text-3xl font-semibold'>12</p>
                    </CardContent>
                    <CardFooter>
                        <p className='text-gray-500'>+21% from the last year</p>
                    </CardFooter>
                </Card>

                <Card className='gap-4 rounded-sm'>
                    <CardHeader>
                        <CardTitle className='text-lg'>Accepted Applies</CardTitle>
                        <CardAction className={`${colorMap[color]} text-white py-1.5 px-1.5 rounded-sm`}>
                            <Users className='w-6 h-6' />
                        </CardAction>
                    </CardHeader>
                    <CardContent>
                        <p className='text-3xl font-semibold'>3</p>
                    </CardContent>
                    <CardFooter>
                        <p className='text-gray-500'>+37% from the last month</p>
                    </CardFooter>
                </Card>

                <Card className='gap-4 rounded-sm'>
                    <CardHeader>
                        <CardTitle className='text-lg'>Rejected Applies</CardTitle>
                        <CardAction className={`${colorMap[color]} text-white py-1.5 px-1.5 rounded-sm`}>
                            <CalendarRange className='w-6 h-6' />
                        </CardAction>
                    </CardHeader>
                    <CardContent>
                        <p className='text-3xl font-semibold'>7</p>
                    </CardContent>
                    <CardFooter>
                        <p className='text-gray-500'>+61% from the last week</p>
                    </CardFooter>
                </Card>

                <Card className='gap-4 rounded-sm'>
                    <CardHeader>
                        <CardTitle className='text-lg'>Open Applies</CardTitle>
                        <CardAction className={`${colorMap[color]} text-white py-1.5 px-1.5 rounded-sm`}>
                            <ChartNoAxesCombined className='w-6 h-6' />
                        </CardAction>
                    </CardHeader>
                    <CardContent>
                        <p className='text-3xl font-semibold'>2</p>
                    </CardContent>
                    <CardFooter>
                        <p className='text-gray-500'>+17% from the last year</p>
                    </CardFooter>
                </Card>
            </div>

            <div className='px-5 py-4'>
                <SentRequestsTable />
            </div>
        </>
    )
}
