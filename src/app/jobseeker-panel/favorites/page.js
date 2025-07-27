'use client'
import React, { useContext } from 'react'
import { FilterSelectBox } from '@/components/templates/JobSeekerPanel/FilterSelectBox'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { DisplayFilterInput } from '@/components/templates/JobSeekerPanel/DisplayFilter'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Heart } from 'lucide-react'
import { ThemeColorContext } from '@/contexts/user-theme'
import { colorMap, strokeColorMap } from '@/utils/constants'

export default function page() {

  const { color } = useContext(ThemeColorContext)

  return (
    <div className='px-4'>
      <p>Favorite Positions (128) Found</p>
      <div className='mt-6 flex gap-2 flex-wrap'>
        <FilterSelectBox />
        <DisplayFilterInput />
        <div className="flex w-full max-w-sm items-center gap-2">
          <Input type="search" placeholder="Search..." />
          <Button type="submit" variant="outline">
            Search
          </Button>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4'>
        <Card>
          <CardHeader>
            <CardTitle>Full Time Developer</CardTitle>
            <CardDescription>We need to a frontend developer in Test company</CardDescription>
            <CardAction><Heart className='w-5 h-5' fill={strokeColorMap[color]} strokeWidth={0} /></CardAction>
          </CardHeader>
          <CardContent>
            <p>Full Time</p>
          </CardContent>
          <CardFooter>
            <p>Pay: 220 - 250$</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Full Time Developer</CardTitle>
            <CardDescription>We need to a frontend developer in Test company</CardDescription>
            <CardAction><Heart className='w-5 h-5' fill={strokeColorMap[color]} strokeWidth={0} /></CardAction>
          </CardHeader>
          <CardContent>
            <p>Full Time</p>
          </CardContent>
          <CardFooter>
            <p>Pay: 220 - 250$</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Full Time Developer</CardTitle>
            <CardDescription>We need to a frontend developer in Test company</CardDescription>
            <CardAction><Heart className='w-5 h-5' fill={strokeColorMap[color]} strokeWidth={0} /></CardAction>
          </CardHeader>
          <CardContent>
            <p>Full Time</p>
          </CardContent>
          <CardFooter>
            <p>Pay: 220 - 250$</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Full Time Developer</CardTitle>
            <CardDescription>We need to a frontend developer in Test company</CardDescription>
            <CardAction><Heart className='w-5 h-5' fill={strokeColorMap[color]} strokeWidth={0} /></CardAction>
          </CardHeader>
          <CardContent>
            <p>Full Time</p>
          </CardContent>
          <CardFooter>
            <p>Pay: 220 - 250$</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Full Time Developer</CardTitle>
            <CardDescription>We need to a frontend developer in Test company</CardDescription>
            <CardAction><Heart className='w-5 h-5' fill={strokeColorMap[color]} strokeWidth={0} /></CardAction>
          </CardHeader>
          <CardContent>
            <p>Full Time</p>
          </CardContent>
          <CardFooter>
            <p>Pay: 220 - 250$</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Full Time Developer</CardTitle>
            <CardDescription>We need to a frontend developer in Test company</CardDescription>
            <CardAction><Heart className='w-5 h-5' fill={strokeColorMap[color]} strokeWidth={0} /></CardAction>
          </CardHeader>
          <CardContent>
            <p>Full Time</p>
          </CardContent>
          <CardFooter>
            <p>Pay: 220 - 250$</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Full Time Developer</CardTitle>
            <CardDescription>We need to a frontend developer in Test company</CardDescription>
            <CardAction><Heart className='w-5 h-5' fill={strokeColorMap[color]} strokeWidth={0} /></CardAction>
          </CardHeader>
          <CardContent>
            <p>Full Time</p>
          </CardContent>
          <CardFooter>
            <p>Pay: 220 - 250$</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Full Time Developer</CardTitle>
            <CardDescription>We need to a frontend developer in Test company</CardDescription>
            <CardAction><Heart className='w-5 h-5' fill={strokeColorMap[color]} strokeWidth={0} /></CardAction>
          </CardHeader>
          <CardContent>
            <p>Full Time</p>
          </CardContent>
          <CardFooter>
            <p>Pay: 220 - 250$</p>
          </CardFooter>
        </Card>
      </div>

    </div>
  )
}
