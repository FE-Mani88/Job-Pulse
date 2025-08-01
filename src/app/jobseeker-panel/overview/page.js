// app/jobseeker-panel/overview/page.js
'use client'
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardAction } from '@/components/ui/card'
import { ChartRadarLinesOnly } from '@/components/templates/JobSeekerPanel/RadarChart'
import { LastTickets } from '@/components/templates/JobSeekerPanel/LastTickets'
import { CalendarRange, ChartNoAxesCombined, DollarSign, Users } from 'lucide-react'
import { useContext } from 'react'
import { ThemeColorContext } from '@/contexts/user-theme'
import { colorMap } from '@/utils/constants'

export default function OverviewPage() {
  const { color } = useContext(ThemeColorContext)

  return (
    <>
      <div className={`${colorMap[color]} transition-colors grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-5 py-6`}>
        <Card className='gap-4 rounded-sm'>
          <CardHeader>
            <CardTitle className='text-lg'>Total Revenue</CardTitle>
            <CardAction className={`${colorMap[color]} text-white py-1.5 px-1.5 rounded-sm`}>
              <DollarSign className='w-6 h-6' />
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className='text-3xl font-semibold'>$45,123.89</p>
          </CardContent>
          <CardFooter>
            <p className='text-gray-500'>+21% from the last year</p>
          </CardFooter>
        </Card>

        <Card className='gap-4 rounded-sm'>
          <CardHeader>
            <CardTitle className='text-lg'>Subscriptions</CardTitle>
            <CardAction className={`${colorMap[color]} text-white py-1.5 px-1.5 rounded-sm`}>
              <Users className='w-6 h-6' />
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className='text-3xl font-semibold'>+2350</p>
          </CardContent>
          <CardFooter>
            <p className='text-gray-500'>+37% from the last month</p>
          </CardFooter>
        </Card>

        <Card className='gap-4 rounded-sm'>
          <CardHeader>
            <CardTitle className='text-lg'>Sales</CardTitle>
            <CardAction className={`${colorMap[color]} text-white py-1.5 px-1.5 rounded-sm`}>
              <CalendarRange className='w-6 h-6' />
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className='text-3xl font-semibold'>+12874</p>
          </CardContent>
          <CardFooter>
            <p className='text-gray-500'>+61% from the last week</p>
          </CardFooter>
        </Card>

        <Card className='gap-4 rounded-sm'>
          <CardHeader>
            <CardTitle className='text-lg'>Active Now</CardTitle>
            <CardAction className={`${colorMap[color]} text-white py-1.5 px-1.5 rounded-sm`}>
              <ChartNoAxesCombined className='w-6 h-6' />
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className='text-3xl font-semibold'>+578</p>
          </CardContent>
          <CardFooter>
            <p className='text-gray-500'>+17% from the last year</p>
          </CardFooter>
        </Card>
      </div>

      <div className='flex justify-between items-center gap-8 px-6 py-4'>
        <ChartRadarLinesOnly />
        <LastTickets />
      </div>
    </>
  )
}
