'use client'
import React, { useEffect, useState, useContext } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from "@/components/ui/badge" // Corrected typo from 'bedge' to 'badge'
import {
  ChevronDown,
  Heart,
  Search,
  Zap,
  Sun,
  Moon,
  Twitter,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card" // Removed unused CardAction
import { textColorMap, colorMap } from '@/utils/constants'
import { useTheme } from "next-themes"
import { ThemeColorContext } from "@/contexts/user-theme"
import { HomeNavigationMenu } from '@/components/templates/CompanyPanel/NavigationMenu'
import Link from 'next/link'

// Array of 12 image URLs for sequential selection
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
  const { setTheme } = useTheme()
  const { color, changeColor } = useContext(ThemeColorContext)
  const [positions, setPositions] = useState([])

  // Dynamic color classes based on selected theme
  const dynamicColors = {
    primary: colorMap[color],
    primaryText: textColorMap[color],
    primaryLight:
      color === "red"
        ? "bg-red-50 dark:bg-red-950"
        : color === "green"
          ? "bg-green-50 dark:bg-green-950"
          : color === "purple"
            ? "bg-purple-50 dark:bg-purple-950"
            : "bg-blue-50 dark:bg-blue-950",
    primaryTextLight:
      color === "red"
        ? "text-red-700 dark:text-red-300"
        : color === "green"
          ? "text-green-700 dark:text-green-300"
          : color === "purple"
            ? "text-purple-700 dark:text-purple-300"
            : "text-blue-700 dark:text-blue-300",
    primaryBorder:
      color === "red"
        ? "border-red-200 dark:border-red-800"
        : color === "green"
          ? "border-green-200 dark:border-green-800"
          : color === "purple"
            ? "border-purple-200 dark:border-purple-800"
            : "border-blue-200 dark:border-blue-800",
    primaryHover:
      color === "red"
        ? "hover:bg-red-700"
        : color === "green"
          ? "hover:bg-green-700"
          : color === "purple"
            ? "hover:bg-purple-700"
            : "hover:bg-blue-700",
    primaryIcon:
      color === "red"
        ? "text-red-600 dark:text-red-400"
        : color === "green"
          ? "text-green-600 dark:text-green-400"
          : color === "purple"
            ? "text-purple-600 dark:text-purple-400"
            : "text-blue-600 dark:text-blue-400",
    primaryBg:
      color === "red"
        ? "bg-red-100 dark:bg-red-950"
        : color === "green"
          ? "bg-green-100 dark:bg-green-950"
          : color === "purple"
            ? "bg-purple-100 dark:bg-purple-950"
            : "bg-blue-100 dark:bg-blue-950",
    primarySolid:
      color === "red"
        ? "bg-red-600"
        : color === "green"
          ? "bg-green-600"
          : color === "purple"
            ? "bg-purple-600"
            : "bg-blue-600",
    primaryTextDark:
      color === "red"
        ? "text-red-600 dark:text-red-400"
        : color === "green"
          ? "text-green-600 dark:text-green-400"
          : color === "purple"
            ? "text-purple-600 dark:text-purple-400"
            : "text-blue-600 dark:text-blue-400",
    primaryTextLight100:
      color === "red"
        ? "text-red-100"
        : color === "green"
          ? "text-green-100"
          : color === "purple"
            ? "text-purple-100"
            : "text-blue-100",
    primaryBorder2:
      color === "red"
        ? "border-red-600"
        : color === "green"
          ? "border-green-600"
          : color === "purple"
            ? "border-purple-600"
            : "border-blue-600",
    primaryHoverText:
      color === "red"
        ? "hover:text-red-600"
        : color === "green"
          ? "hover:text-green-600"
          : color === "purple"
            ? "hover:text-purple-600"
            : "hover:text-blue-600",
    primaryHoverBg:
      color === "red"
        ? "hover:bg-red-100"
        : color === "green"
          ? "hover:bg-green-100"
          : color === "purple"
            ? "hover:bg-purple-100"
            : "hover:bg-blue-100",
    primaryHoverText300:
      color === "red"
        ? "hover:text-red-300"
        : color === "green"
          ? "hover:text-green-300"
          : color === "purple"
            ? "hover:text-purple-300"
            : "hover:text-blue-300",
  }

  useEffect(() => {
    const getPositionsHandler = async () => {
      try {
        const positionsRes = await fetch('http://localhost:3000/position/allpositions')
        const positionsData = await positionsRes.json()
        console.log(positionsData)
        setPositions(positionsData.result)
      } catch (error) {
        throw error
      }
    }

    getPositionsHandler()
  }, [])

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-black">
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-900 bg-white/80 dark:bg-black/60 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <Zap className={`h-8 w-8 ${textColorMap[color]}`} />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">Job Pulse</span>
          </div>
          <HomeNavigationMenu />
          <div className="flex items-center space-x-2">
            <Select value={color} onValueChange={changeColor}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Themes</SelectLabel>
                  <SelectItem value="red">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-4 h-4 rounded-full"
                        style={{ background: "linear-gradient(to right, #F44336 50%, #FF9800 50%)" }}
                      ></span>
                      Red & Orange
                    </div>
                  </SelectItem>
                  <SelectItem value="green">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-4 h-4 rounded-full"
                        style={{ background: "linear-gradient(to right, #76FF03 50%, yellow 50%)" }}
                      ></span>
                      Green & Yellow
                    </div>
                  </SelectItem>
                  <SelectItem value="purple">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-4 h-4 rounded-full"
                        style={{ background: "linear-gradient(to right, #E040FB 50%, #EC407A 50%)" }}
                      ></span>
                      Purple & Pink
                    </div>
                  </SelectItem>
                  <SelectItem value="blue">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-4 h-4 rounded-full"
                        style={{ background: "linear-gradient(to right, #2196F3 50%, #81D4FA 50%)" }}
                      ></span>
                      Blue & Sky
                    </div>
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button
              variant="ghost"
              className="cursor-pointer bg-gray-100 dark:bg-inherit hidden sm:inline-flex text-gray-700 hover:bg-gray-150 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-900"
            >
              <Link href="/signin">Sign In</Link>
            </Button>
            <Button className={`cursor-pointer text-white ${colorMap[color]}`}>
              <Link href="/signup">Sign Up</Link>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Search bar */}
      <div className="bg-white dark:bg-zinc-900 px-7 py-4 flex justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="flex w-full max-w-sm items-center gap-2">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={20} />
              <Input
                type="search"
                placeholder="Search For Positions"
                className="h-12 rounded-[4px] pl-10 w-full"
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

        <Button className='h-12 px-4 rounded-sm'>Search In Jobs</Button>
      </div>
      {/* End Search bar */}

      {/* Main Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1440px] mx-auto my-6 bg-white dark:bg-zinc-900 p-4 gap-4 rounded-sm">
        {positions.length ? positions.map((position, index) => (
          <Card className="overflow-hidden pt-0 pb-3 bg-white dark:bg-zinc-800 rounded-lg shadow dark:shadow-md" key={position.id}>
            {/* Card Image */}
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
              <Button className='w-full'>Apply</Button>
            </CardFooter>
          </Card>
        )) : 'No Position'}
      </div>
      {/* End Main Content */}

      <footer id="contact" className="bg-zinc-900 text-white py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Zap
                  className={`h-8 w-8 ${dynamicColors.primaryIcon.replace("dark:text-", "text-").replace("text-", "text-").replace("-600", "-400").replace("-400", "-400")}`}
                />
                <span className="text-2xl font-bold">StreamLine</span>
              </div>
              <p className="text-gray-300 max-w-xs">
                Streamline your workflow and boost productivity with our intelligent automation platform.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className={`text-gray-300 ${dynamicColors.primaryHoverText300} transition-colors`}>
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className={`text-gray-300 ${dynamicColors.primaryHoverText300} transition-colors`}>
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className={`text-gray-300 ${dynamicColors.primaryHoverText300} transition-colors`}>
                  <Github className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Product</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className={`${dynamicColors.primaryHoverText300} transition-colors`}>
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className={`${dynamicColors.primaryHoverText300} transition-colors`}>
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className={`${dynamicColors.primaryHoverText300} transition-colors`}>
                    API
                  </Link>
                </li>
                <li>
                  <Link href="#" className={`${dynamicColors.primaryHoverText300} transition-colors`}>
                    Security
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className={`${dynamicColors.primaryHoverText300} transition-colors`}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className={`${dynamicColors.primaryHoverText300} transition-colors`}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className={`${dynamicColors.primaryHoverText300} transition-colors`}>
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className={`${dynamicColors.primaryHoverText300} transition-colors`}>
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>hello@streamline.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">© {new Date().getFullYear()} StreamLine. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className={`text-gray-300 ${dynamicColors.primaryHoverText300} text-sm transition-colors`}>
                Privacy Policy
              </Link>
              <Link href="#" className={`text-gray-300 ${dynamicColors.primaryHoverText300} text-sm transition-colors`}>
                Terms of Service
              </Link>
              <Link href="#" className={`text-gray-300 ${dynamicColors.primaryHoverText300} text-sm transition-colors`}>
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}