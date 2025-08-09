'use client'
import React, { useEffect, useState, useContext } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Search
} from 'lucide-react'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { textColorMap, colorMap } from '@/utils/constants'
import { useTheme } from "next-themes"
import { ThemeColorContext } from "@/contexts/user-theme"
import { Skeleton } from '@/components/ui/skeleton'
import Swal from 'sweetalert2'
import Header from '@/components/modules/Header'
import Footer from '@/components/modules/Footer'

const imageUrls = [
  "https://www.coursesonline.co.uk/wp-content/uploads/Subject-Programming.jpeg?height=485&dpr=2",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg/1200px-M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg",
  "https://www.wework.com/ideas/wp-content/uploads/sites/4/2017/06/Web_150DPI-20190927_10th_Floor_Conference_Room_2_v1.jpg?fit=1120%2C630",
  "https://dcgulf.com/wp-content/uploads/2024/10/pexels-pixabay-269077.jpg",
  "https://data.si/en/wp-content/uploads/2018/05/business-address-slovenia-europe-800x445.jpg",
  "https://img.etimg.com/thumb/width-420,height-315,imgsize-187595,resizemode-75,msid-121369346/news/company/corporate-trends/april-sees-march-of-new-companies-company-llp-registrations-hit-new-high-in-april-on-investor-optimism/indias-modern-office-growth-and-innovation.jpg",
  "https://youthincmag.com/wp-content/uploads/2018/06/company-building-min.jpg",
  "https://officeservicecompany.com/wp-content/uploads/2021/01/MobileHero.jpg",
  "https://www.smallbusiness.nsw.gov.au/sites/default/files/styles/1280/public/2023-07/iStock-1492719618.jpg?itok=T1vG28Cx",
  "https://builtin.com/sites/www.builtin.com/files/2024-02/technology-companies-india.jpg",
  "https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg",
  "https://workplaceinsight.net/wp-content/uploads/2019/07/Google-London.jpg",
]

export default function Page() {
  const [positions, setPositions] = useState([])
  const [visibleCount, setVisibleCount] = useState(12)
  const [searchBoxValue, setSearchBoxValue] = useState('')
  const [error, setError] = useState(null)

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 12)
  }

  useEffect(() => {
    const getPositionsHandler = async () => {
      try {
        const positionsRes = await fetch('http://localhost:3000/position/allpositions')
        const positionsData = await positionsRes.json()
        console.log(positionsData)
        // Ensure result is an array, default to empty array if not
        setPositions(Array.isArray(positionsData.result) ? positionsData.result : [])
        setError(null)
      } catch (error) {
        console.error('Error fetching positions:', error)
        setPositions([])
        setError('Failed to load positions. Please try again later.')
      }
    }

    getPositionsHandler()
  }, [])

  const searchHandler = async () => {
    try {
      const searchResponse = await fetch(`http://localhost:3000/position/search?query=${searchBoxValue}`)
      const searchData = await searchResponse.json()
      // Ensure result is an array, default to empty array if not
      setPositions(Array.isArray(searchData.result) ? searchData.result : [])
      setError(null)
    } catch (error) {
      console.error('Error searching positions:', error)
      setPositions([])
      setError('Failed to search positions. Please try again later.')
    }
  }

  useEffect(() => {
    if (searchBoxValue) {
      searchHandler()
    } else {
      const getPositionsHandler = async () => {
        try {
          const positionsRes = await fetch('http://localhost:3000/position/allpositions')
          const positionsData = await positionsRes.json()
          // Ensure result is an array, default to empty array if not
          setPositions(Array.isArray(positionsData.result) ? positionsData.result : [])
          setError(null)
        } catch (error) {
          console.error('Error fetching positions:', error)
          setPositions([])
          setError('Failed to load positions. Please try again later.')
        }
      }
      getPositionsHandler()
    }
  }, [searchBoxValue])

  const applyHandler = async (positionSlug) => {
    try {
      const applyResponse = await fetch(`http://localhost:3000/jobseeker/${positionSlug}/makerequest`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })

      if (applyResponse.status == 401) {
        const refreshTokenResponse = await fetch('http://localhost:3000/auth/refresh', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        })

        if (!refreshTokenResponse.ok) {
          return Swal.fire({
            icon: 'error',
            title: 'You Must Be Register For Apply'
          }).then((result) => {
            if (result.isConfirmed) {
              router.push('signin')
            }
          })
        }

        const retryApplyResponse = await fetch(`http://localhost:3000/jobseeker/${positionSlug}/makerequest`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        })

        console.log('RETRY => ', retryApplyResponse)

      }

      console.log(applyResponse)
      console.log(await applyResponse.json())

    } catch (error) {
      throw error
    }
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-black">
      <Header />

      {/* Filter Bar */}
      <div className="bg-white dark:bg-zinc-900 px-7 py-4 flex justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="flex w-full max-w-sm items-center gap-2">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={20} />
              <Input
                type="search"
                placeholder="Search For Positions"
                className="h-12 rounded-[4px] pl-10 w-full"
                value={searchBoxValue}
                onChange={(e) => setSearchBoxValue(e.target.value)}
              />
            </div>
          </div>

          <Select>
            <SelectTrigger className="w-[240px] !h-12 rounded-[4px]">
              <SelectValue placeholder="Select Your Country" />
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

          <Select>
            <SelectTrigger className="w-[240px] !h-12 rounded-[4px]">
              <SelectValue placeholder="Select the Required Certificate" />
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
        </div>

        <Button className='h-12 px-4 rounded-sm' onClick={searchHandler}>Search In Jobs</Button>
      </div>
      {/* End Filter Bar */}

      <div className="sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1440px] mx-auto my-6 bg-white dark:bg-zinc-900 p-4 rounded-sm">
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          {error ? (
            <div className="col-span-full text-center py-8">
              <p className="text-lg text-red-600 dark:text-red-400">{error}</p>
            </div>
          ) : positions.length ? (
            positions.slice(0, visibleCount).map((position, index) => (
              <Card className="overflow-hidden pt-0 pb-3 bg-white dark:bg-zinc-800 rounded-lg shadow dark:shadow-md" key={position.id}>
                <img
                  src={imageUrls[index % imageUrls.length]}
                  alt="Position Image"
                  className="w-full h-[180px] object-cover"
                />
                <CardHeader className="pt-4 pb-2">
                  <CardTitle className="text-lg text-zinc-900 dark:text-zinc-100">{position.name}</CardTitle>
                  <CardDescription className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">{position.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0 text-zinc-800 dark:text-zinc-300">
                  <p>Pay: {position.salary} - {Number(position.salary) + 30}$</p>
                </CardContent>
                <CardFooter className="text-zinc-600 dark:text-zinc-400">
                  <Button className='w-full' onClick={() => applyHandler(position.slug)}>Apply</Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            [1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
              <div key={index} className="flex flex-col space-y-3">
                <Skeleton className="h-[225px] rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            ))
          )}
        </div>

        {positions.length > 0 && visibleCount < positions.length && (
          <div className="flex justify-center mt-6 mb-3">
            <Button variant='outline' onClick={handleShowMore}>
              Show More
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}