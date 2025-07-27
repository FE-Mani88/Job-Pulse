'use client'
import React, { useContext } from 'react'
import { CardsChat } from '@/components/templates/JobSeekerPanel/Chat'
import { DataTableDemo } from '@/components/templates/JobSeekerPanel/Tickets'
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
            <CardTitle className='text-lg'>All Tickets</CardTitle>
            <CardAction className={`${colorMap[color]} text-white py-1.5 px-1.5 rounded-sm`}>
              <DollarSign className='w-6 h-6' />
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className='text-3xl font-semibold'>17</p>
          </CardContent>
          <CardFooter>
            <p className='text-gray-500'>+21% from the last year</p>
          </CardFooter>
        </Card>

        <Card className='gap-4 rounded-sm'>
          <CardHeader>
            <CardTitle className='text-lg'>Open Tickets</CardTitle>
            <CardAction className={`${colorMap[color]} text-white py-1.5 px-1.5 rounded-sm`}>
              <Users className='w-6 h-6' />
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className='text-3xl font-semibold'>5</p>
          </CardContent>
          <CardFooter>
            <p className='text-gray-500'>+37% from the last month</p>
          </CardFooter>
        </Card>

        <Card className='gap-4 rounded-sm'>
          <CardHeader>
            <CardTitle className='text-lg'>Closed Tickets</CardTitle>
            <CardAction className={`${colorMap[color]} text-white py-1.5 px-1.5 rounded-sm`}>
              <CalendarRange className='w-6 h-6' />
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className='text-3xl font-semibold'>12</p>
          </CardContent>
          <CardFooter>
            <p className='text-gray-500'>+61% from the last week</p>
          </CardFooter>
        </Card>

        <Card className='gap-4 rounded-sm'>
          <CardHeader>
            <CardTitle className='text-lg'>Unanswered Tickets</CardTitle>
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

      <div className='flex justify-between items-center flex-col lg:flex-row gap-4 px-4'>
        <CardsChat />
        <DataTableDemo />
      </div>
    </>
  )
}
