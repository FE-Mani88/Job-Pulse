'use client'
import React, { useState, useEffect, useContext } from 'react'
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger
} from "@/components/ui/sidebar"
import { Moon, Sun, DollarSign, Users } from "lucide-react"
import { CalendarRange, ChartNoAxesCombined } from 'lucide-react'
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem
} from '@/components/ui/select'
import { ChartRadarLinesOnly, ChartTooltipAdvanced } from '@/components/templates/JobSeekerPanel/PieChart'
import {
  Card,
  CardHeader,
  CardTitle,
  CardAction,
  CardContent,
  CardFooter
} from '@/components/ui/card'
import { colorMap } from '@/utils/constants'
import { LastTickets } from '@/components/templates/JobSeekerPanel/LastTickets'
import { ThemeColorContext } from '@/contexts/user-theme'

export default function Page() {

  const { color, changeColor } = useContext(ThemeColorContext)

  console.log('CONETEXT PAGE.JS => ', color)

  const { setTheme } = useTheme()

  return (
    <SidebarProvider>
      <AppSidebar themeColor={color} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="w-full flex justify-between items-center pr-2 sm:pr-6">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      Building Your Application
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <div className='flex gap-2'>
              <Select value={color} onValueChange={(value) => {
                changeColor(value)
              }}>
                <SelectTrigger className="">
                  <SelectValue placeholder="Select a theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Themes</SelectLabel>
                    <SelectItem value="red" className='flex items-center'>
                      <div
                        className="w-5 h-5 rotate-30 rounded-full"
                        style={{ background: "linear-gradient(to right, #F44336 50%, #FF9800 50%)" }}
                      ></div>
                      Red & Orange
                    </SelectItem>
                    <SelectItem value="green" className='flex items-center'>
                      <div
                        className="w-5 h-5 rotate-30 rounded-full"
                        style={{ background: "linear-gradient(to right, #76FF03 50%, yellow 50%)" }}
                      ></div>
                      Green & Yellow
                    </SelectItem>
                    <SelectItem value="purple" className='flex items-center'>
                      <div
                        className="w-5 h-5 rotate-30 rounded-full"
                        style={{ background: "linear-gradient(to right, #E040FB 50%, #EC407A 50%)" }}
                      ></div>
                      Purple & Pink
                    </SelectItem>
                    <SelectItem value="blue" className='flex items-center'>
                      <div
                        className="w-5 h-5 rotate-30 rounded-full"
                        style={{ background: "linear-gradient(to right, #2196F3 50%, #81D4FA 50%)" }}
                      ></div>
                      Blue & Sky
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Dark & Light Mode Toggle Button */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        <div className={`${colorMap[color]} transition-colors grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-5 py-6`}>
          <Card className='gap-4 rounded-sm'>
            <CardHeader>
              <CardTitle className='text-lg'>Total Revenue</CardTitle>
              {/* <CardDescription>Card Description</CardDescription> */}
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
              <CardTitle className='text-lg'>Subscribtions</CardTitle>
              {/* <CardDescription>Card Description</CardDescription> */}
              <CardAction className={`${colorMap[color]} text-white py-1.5 px-1.5 rounded-sm`}><Users className='w-6 h-6' /></CardAction>
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
              {/* <CardDescription>Card Description</CardDescription> */}
              <CardAction className={`${colorMap[color]} text-white py-1.5 px-1.5 rounded-sm`}><CalendarRange className='w-6 h-6' /></CardAction>
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
              {/* <CardDescription>Card Description</CardDescription> */}
              <CardAction className={`${colorMap[color]} text-white py-1.5 px-1.5 rounded-sm`}><ChartNoAxesCombined className='w-6 h-6' /></CardAction>
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

      </SidebarInset>
    </SidebarProvider>
  )
}
