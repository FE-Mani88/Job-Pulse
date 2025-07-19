'use client'
import React, { useEffect, useState } from 'react'
import Header from '@/components/templates/Home/Header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from "@/components/ui/bedge"
import { ChevronDown, Heart, Search } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { NotificationAddOutlined } from '@mui/icons-material'
import { ScrollArea } from '@/components/ui/scrollarea'
import Footer from '@/components/templates/Home/Footer'
import PositionPreviewCard from '@/components/modules/Position/PositionPreviewCard'

export default function Page() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,flags,cca2')
      .then(res => res.json())
      .then(data => {
        // Sort Contries By Their Names
        const sorted = data.slice(0, 12).map(c => ({
          name: c.name.common,
          code: c.cca2,
          flag: c.flags.svg
        })).sort((a, b) => a.name.localeCompare(b.name))

        setCountries(sorted)
      })
      .catch(err => console.error('Error fetching countries:', err))
  }, [])

  return (
    <>
      <Header shouldBeFullWidth={true} />

      <div>
        {/* Filters */}
        <div id='filters' className='h-max w-full py-4 bg-[#ffffff] mt-[104.8px] md:mt-[88.8px] border-b'>
          <section className='mx-auto w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] flex flex-col gap-6'>
            {/* Top Section START */}
            <div className="flex justify-between items-center flex-wrap gap-4">
              <div className='flex items-center gap-4'>
                {/* Search Input */}
                <div className="flex w-full max-w-sm items-center gap-1">
                  <Input type="text" placeholder="Search..." className='min-h-[45px]' />
                  <Button type="submit" variant="outline" className='min-h-[45px]'>
                    <Search />
                  </Button>
                </div>

                {/* Positions Select */}
                <Select >
                  <SelectTrigger className="w-[180px] min-h-full">
                    <SelectValue placeholder="Select a position" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Positions</SelectLabel>
                      <SelectItem value="seller">Sellers</SelectItem>
                      <SelectItem value="employer">Employers</SelectItem>
                      <SelectItem value="manager">Managers</SelectItem>
                      <SelectItem value="visitor">Visitors</SelectItem>
                      <SelectItem value="developer">Developers</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                {/* Countries Select with Flags */}
                <Select>
                  <SelectTrigger className="min-w-[300px] max-w-[400px] min-h-[100%]">
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px] overflow-y-auto">
                    <SelectGroup>
                      <SelectLabel>Countries</SelectLabel>
                      {countries.map((country) => (
                        <SelectItem key={country.code} value={country.code}>
                          <div className="flex items-center gap-2">
                            <img src={country.flag} alt={country.name} className="w-5 h-4 object-cover rounded-sm" />
                            <span>{country.name}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* Search Button */}
              <Button className='bg-green-500 hover:bg-green-600 cursor-pointer rounded-[4px]'>
                Search In Jobs
              </Button>
            </div>
            {/* Top Section END */}

            <div className='flex gap-3 flex-wrap'>
              {/* Item */}
              <div className='border border-gray-300 px-3 py-2 cursor-pointer rounded-lg hover:bg-[#fafafa] transition'>
                <p className=''>
                  Remote
                </p>
              </div>
              {/* Item */}
              <div className='border border-gray-300 px-3 py-2 cursor-pointer rounded-lg hover:bg-[#fafafa] transition'>
                <p className=''>
                  International
                </p>
              </div>
              {/* Item */}
              <Select>
                <SelectTrigger className="w-[180px] border-gray-300">
                  <SelectValue className='' placeholder="Select Work Time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Times</SelectLabel>
                    <SelectItem value="Full Time">Full Time</SelectItem>
                    <SelectItem value="Part Time">Part Time</SelectItem>
                    <SelectItem value="Freelance">Freelance</SelectItem>
                    <SelectItem value="Contract">Contract</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Item */}
              {/* Item */}
              <Select>
                <SelectTrigger className="w-[180px] border-gray-300">
                  <SelectValue className='' placeholder="Select Work Time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Times</SelectLabel>
                    <SelectItem value="Full Time">Full Time</SelectItem>
                    <SelectItem value="Part Time">Part Time</SelectItem>
                    <SelectItem value="Freelance">Freelance</SelectItem>
                    <SelectItem value="Contract">Contract</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Item */}
              <div className='border border-gray-300 px-3 py-2 cursor-pointer rounded-lg hover:bg-[#fafafa] transition'>
                <p className=''>
                  Folan
                </p>
              </div>
              {/* Item */}
              <div className='border border-gray-300 px-3 py-2 cursor-pointer rounded-lg hover:bg-[#fafafa] transition'>
                <p className=''>
                  Bahman
                </p>
              </div>
              {/* Item */}
              {/* Item */}
              <div className='border border-gray-300 px-3 py-2 cursor-pointer rounded-lg hover:bg-[#fafafa] transition'>
                <p className=''>
                  System
                </p>
              </div>
              {/* Item */}
              {/* Item */}
              <div className='border border-gray-300 px-3 py-2 cursor-pointer rounded-lg hover:bg-[#fafafa] transition'>
                <p className=''>
                  Computers
                </p>
              </div>
              {/* Item */}
              {/* Item */}
              <div className='border border-gray-300 px-3 py-2 cursor-pointer rounded-lg hover:bg-[#fafafa] transition'>
                <p className=''>
                  Devices
                </p>
              </div>
              {/* Item */}
              {/* Item */}
              <div className='border border-gray-300 px-3 py-2 cursor-pointer rounded-lg hover:bg-[#fafafa] transition'>
                <p className=''>
                  Devices
                </p>
              </div>
              {/* Item */}
              {/* Item */}
              <div className='border border-gray-300 px-3 py-2 cursor-pointer rounded-lg hover:bg-[#fafafa] transition'>
                <p className=''>
                  Devices
                </p>
              </div>
              {/* Item */}
              {/* Item */}
              <div className='border border-gray-300 px-3 py-2 cursor-pointer rounded-lg hover:bg-[#fafafa] transition'>
                <p className=''>
                  Devices
                </p>
              </div>
              {/* Item */}
              {/* Item */}
              <div className='border border-gray-300 px-3 py-2 cursor-pointer rounded-lg hover:bg-[#fafafa] transition'>
                <p className=''>
                  Devices
                </p>
              </div>
              {/* Item */}
              {/* Item */}
              <div className='border border-gray-300 px-3 py-2 cursor-pointer rounded-lg hover:bg-[#fafafa] transition'>
                <p className=''>
                  Devices
                </p>
              </div>
              {/* Item */}
              {/* Item */}
              <Select>
                <SelectTrigger className="w-[280px]">
                  <SelectValue placeholder="Select a timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>North America</SelectLabel>
                    <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                    <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                    <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                    <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                    <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                    <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Europe & Africa</SelectLabel>
                    <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                    <SelectItem value="cet">Central European Time (CET)</SelectItem>
                    <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
                    <SelectItem value="west">
                      Western European Summer Time (WEST)
                    </SelectItem>
                    <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
                    <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Asia</SelectLabel>
                    <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                    <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                    <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
                    <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                    <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
                    <SelectItem value="ist_indonesia">
                      Indonesia Central Standard Time (WITA)
                    </SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Australia & Pacific</SelectLabel>
                    <SelectItem value="awst">
                      Australian Western Standard Time (AWST)
                    </SelectItem>
                    <SelectItem value="acst">
                      Australian Central Standard Time (ACST)
                    </SelectItem>
                    <SelectItem value="aest">
                      Australian Eastern Standard Time (AEST)
                    </SelectItem>
                    <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
                    <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>South America</SelectLabel>
                    <SelectItem value="art">Argentina Time (ART)</SelectItem>
                    <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
                    <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
                    <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Item */}
            </div>

          </section>
        </div>
        {/* End Filters */}

        {/* Main */}
        <section
          className="mx-auto w-full grid grid-cols-12 gap-6 mt-6
             sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]">

          {/* فرم اطلاع‌رسانی (سمت چپ در RTL) */}
          <aside
            id='notifications'
            className="col-span-12 lg:col-span-7 space-y-4 bg-white py-12 rounded-md">
            {/* اینجا فرم ساده‌ات یا کارت اطلاع‌رسانی… */}
            <Card className="w-full max-w-sm mx-auto">
              <CardHeader>
                <CardTitle className='text-center text-lg text-emerald-500'>Job Notification</CardTitle>
                <CardDescription className='text-center'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Job Title</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Job Title"
                        required
                      />
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Your City" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <div className="flex items-center">
                        <Label htmlFor="password">Email</Label>
                      </div>
                      <Input id="password" type="password" placeholder='Email' required />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex-col gap-2">
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-3">
                    <Checkbox id="terms-2" className='data-[state=checked]:bg-blue-600 data-[state=checked]:border-gray-300' defaultChecked />
                    <div className="grid gap-2">
                      <Label htmlFor="terms-2">Accept terms and conditions</Label>
                      <p className="text-muted-foreground text-sm">
                        By clicking this checkbox, you agree to the terms and conditions.
                      </p>
                    </div>
                  </div>
                  <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                    <Checkbox
                      id="toggle-2"
                      defaultChecked
                      className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                    />
                    <div className="grid gap-1.5 font-normal">
                      <p className="text-sm leading-none font-medium">
                        Enable notifications
                      </p>
                      <p className="text-muted-foreground text-sm">
                        You can enable or disable notifications at any time.
                      </p>
                    </div>
                  </Label>
                </div>
                <Button type="submit" className="w-full bg-emerald-400 hover:bg-emerald-500 cursor-pointer">
                  Register
                </Button>
                {/* <Button variant="outline" className="w-full">
                  Login with Google
                </Button> */}
              </CardFooter>
            </Card>
          </aside>

          {/* لیست آگهی‌ها */}
          <main
            className="col-span-12 lg:col-span-5 space-y-6">
            {/* کارت‌های آگهی، هر کدام یک کامپوننت JobCard جداگانه */}
            <div className='px-2 md:px-0'>
              <button className='bg-green-500 text-white w-full px-2 py-4 rounded-[2px] flex justify-center items-center gap-1 hover:bg-green-600 cursor-pointer transition'>Active Job Pulse Notification <NotificationAddOutlined /> </button>
            </div>

            <div className='flex justify-between items-center px-[2px]'>
              <p>38234 Position Found</p> <span className='flex items-center'>Newest <ChevronDown /></span>
            </div>

            <ScrollArea className="h-[550px] w-full rounded-md border p-4">
              <PositionPreviewCard />
              <PositionPreviewCard />
              <PositionPreviewCard />
              <PositionPreviewCard />
              <PositionPreviewCard />
              <PositionPreviewCard />
              <PositionPreviewCard />
            </ScrollArea>

          </main>
        </section>
        {/* End Main */}
      </div>

      <Footer />
    </>
  )
}
