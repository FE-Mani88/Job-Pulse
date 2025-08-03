"use client"
import { useContext } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Zap, Star, Twitter, Linkedin, Github, Mail, Phone, MapPin, Copy, MoveRight, Share2 } from "lucide-react"
import Link from "next/link"
import { HomeNavigationMenu } from "@/components/templates/CompanyPanel/NavigationMenu"
import { colorMap, textColorMap } from "@/utils/constants"
import { useTheme } from "next-themes"
import { ThemeColorContext } from "@/contexts/user-theme"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Moon, Sun } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function LandingPageDynamic() {
  const { setTheme } = useTheme()
  const { color, changeColor } = useContext(ThemeColorContext)

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
    primaryHover:
      color === "red"
        ? "hover:bg-red-700"
        : color === "green"
          ? "hover:bg-green-700"
          : color === "purple"
            ? "hover:bg-purple-700"
            : "hover:bg-blue-700",
    primaryBg:
      color === "red"
        ? "bg-red-400"
        : color === "green"
          ? "bg-green-400"
          : color === "purple"
            ? "bg-purple-400"
            : "bg-blue-400",
    primaryBorder:
      color === "red"
        ? "border-red-400"
        : color === "green"
          ? "border-green-400"
          : color === "purple"
            ? "border-purple-400"
            : "border-blue-400",
    primaryBg100:
      color === "red"
        ? "bg-red-100"
        : color === "green"
          ? "bg-green-100"
          : color === "purple"
            ? "bg-purple-100"
            : "bg-blue-100",
    primaryText500:
      color === "red"
        ? "text-red-500"
        : color === "green"
          ? "text-green-500"
          : color === "purple"
            ? "text-purple-500"
            : "text-blue-500",
    primaryHoverText:
      color === "red"
        ? "hover:text-red-600"
        : color === "green"
          ? "hover:text-green-600"
          : color === "purple"
            ? "hover:text-purple-600"
            : "hover:text-blue-600",
  }

  const linkCopyHandler = () => {
    try {
      navigator.clipboard.writeText("job-pulse.com/streamline-workflow")
      // You can add toast notification here if needed
      console.log("Link Copied Successfully")
    } catch (error) {
      console.error("Copy failed")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      {/* Header */}
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

      {/* Main Content */}
      <div className="min-h-screen grid grid-cols-12 gap-6 mt-1 mx-auto w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]">
        {/* Left Column - Main Content */}
        <div className="col-span-12 md:col-span-8 mt-8 bg-white dark:bg-gray-900 rounded-md">
          <div className="py-8 px-4">
            {/* Hero Section */}
            <div className="flex items-center gap-2">
              <div
                style={{ borderRadius: "30% 70% 70% 30% / 30% 32% 68% 70%" }}
                className={`${dynamicColors.primaryBg} w-10 h-10`}
              ></div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Streamline Your Workflow</h2>
            </div>
            <p className="px-10 mt-2 text-gray-600 dark:text-gray-300">
              Boost productivity by 300% with our intelligent automation platform. Connect your tools, automate
              repetitive tasks, and focus on what matters most. Our AI-powered workflows learn from your patterns and
              help you achieve more in less time. Join thousands of teams who have already transformed their
              productivity with our comprehensive solution.
            </p>
            <div className="px-10 mt-6 overflow-hidden">
              <img
                className="rounded-lg w-full"
                src="https://i0.wp.com/picjumbo.com/wp-content/uploads/job-search-im-unemployed-free-photo.jpg?w=600&quality=80"
                alt="Workflow automation dashboard"
              />
            </div>

            {/* Features Section */}
            <div className="flex items-center gap-2 mt-8">
              <div
                style={{ borderRadius: "30% 70% 70% 30% / 30% 32% 68% 70%" }}
                className={`${dynamicColors.primaryBg} w-10 h-10`}
              ></div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Powerful Features</h2>
            </div>
            <p className="px-10 mt-2 text-gray-600 dark:text-gray-300">
              Our platform offers everything you need to succeed. From smart automation that learns your patterns to
              enterprise-grade security that protects your data, we've built a comprehensive solution for modern teams.
              Advanced analytics provide insights into your workflow performance, while seamless integrations connect
              all your favorite tools. Real-time collaboration features ensure your team stays synchronized and
              productive, no matter where they work from.
            </p>
            <div className="px-10 mt-6 overflow-hidden">
              <img
                className="rounded-lg w-full"
                src="/placeholder.svg?height=400&width=800"
                alt="Analytics dashboard"
              />
            </div>

            {/* Benefits Section */}
            <div className="flex items-center gap-2 mt-8">
              <div
                style={{ borderRadius: "30% 70% 70% 30% / 30% 32% 68% 70%" }}
                className={`${dynamicColors.primaryBg} w-10 h-10`}
              ></div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Why Choose StreamLine?</h2>
            </div>
            <p className="px-10 mt-2 text-gray-600 dark:text-gray-300">
              Transform your business operations with our intelligent automation platform. Reduce manual tasks by 80%,
              improve team collaboration, and scale your operations effortlessly. Our customers see positive ROI within
              the first month, with comprehensive support and training to ensure your success. Whether you're a small
              startup or a large enterprise, our flexible pricing and scalable features grow with your business needs.
            </p>

            {/* CTA Section */}
            <div className="px-10 mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Ready to Get Started?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Join thousands of teams who have already transformed their productivity. Start your free trial today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className={`text-white ${dynamicColors.primarySolid} ${dynamicColors.primaryHover} text-lg px-8 py-6`}
                >
                  Start Free Trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900 dark:hover:text-white bg-white dark:bg-transparent"
                >
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-gray-600 dark:text-gray-300 mt-4">
                <div className="flex items-center space-x-2">
                  <Check className={`h-4 w-4 ${dynamicColors.primaryTextDark}`} />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className={`h-4 w-4 ${dynamicColors.primaryTextDark}`} />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="col-span-12 md:col-span-4 mt-8 px-2 md:px-0">
          {/* Page Information Accordion */}
          <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
            <AccordionItem className="px-4 bg-white dark:bg-gray-900 px-4 py-3 rounded-sm" value="item-1">
              <AccordionTrigger className="hover:!no-underline">
                <div className="flex items-center gap-3 text-[18px] text-gray-900 dark:text-white">
                  <Share2 className="w-6 h-6" />
                  Page Information
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <div
                  className={`text-lg ${dynamicColors.primaryBg100} ${dynamicColors.primaryText500} flex justify-between rounded-sm border-2 ${dynamicColors.primaryBorder} border-dotted mt-2 px-3 py-3`}
                >
                  <p>job-pulse.com/streamline-workflow</p>
                  <Copy className="w-6 h-6 cursor-pointer" onClick={() => linkCopyHandler()} />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Related Articles Carousel */}
          <Carousel className="w-full max-w-xs mx-auto my-2">
            <CarouselContent>
              {/* Article 1 */}
              <CarouselItem className="cursor-grab active:cursor-grabbing select-none">
                <div className="p-1">
                  <Card className="w-full rounded-md overflow-hidden mt-8 pt-0 gap-2 bg-white dark:bg-gray-900 h-[380px] flex flex-col">
                    <div className="h-[160px] w-full flex-shrink-0">
                      <img
                        className="h-full w-full object-cover"
                        src="https://static.vecteezy.com/system/resources/thumbnails/007/448/146/small_2x/digital-transformation-technology-strategy-the-transformation-of-ideas-and-the-adoption-of-technology-in-business-in-the-digital-age-enhancing-global-business-capabilities-ai-photo.jpg"
                        alt="Team Collaboration"
                      />
                    </div>
                    <div className="flex flex-col flex-grow p-3">
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Team Collaboration</h2>
                      <p className="text-sm leading-5 text-gray-600 dark:text-gray-300 flex-grow line-clamp-4">
                        Discover how real-time collaboration tools can transform your team's productivity and streamline
                        communication across all projects and departments.
                      </p>
                      <div
                        className={`group flex items-center gap-1 ${dynamicColors.primaryText500} mt-3 hover:underline transition`}
                      >
                        <p className="cursor-pointer text-sm">Read More</p>
                        <MoveRight className="size-4 group-hover:translate-x-1 transition cursor-pointer" />
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>

              {/* Article 2 */}
              <CarouselItem className="cursor-grab active:cursor-grabbing select-none">
                <div className="p-1">
                  <Card className="w-full rounded-md overflow-hidden mt-8 pt-0 gap-2 bg-white dark:bg-gray-900 h-[380px] flex flex-col">
                    <div className="h-[160px] w-full flex-shrink-0">
                      <img
                        className="h-full w-full object-cover"
                        src="https://www.undp.org/sites/g/files/zskgke326/files/styles/scaled_image_large/public/2024-01/undp_digital_2.jpg?itok=ASXd4Xwq"
                        alt="Automation Workflow"
                      />
                    </div>
                    <div className="flex flex-col flex-grow p-3">
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Smart Automation</h2>
                      <p className="text-sm leading-5 text-gray-600 dark:text-gray-300 flex-grow line-clamp-4">
                        Learn how AI-powered automation can reduce manual tasks by 80% and help your team focus on
                        high-value strategic work that drives business growth.
                      </p>
                      <div
                        className={`group flex items-center gap-1 ${dynamicColors.primaryText500} mt-3 hover:underline transition`}
                      >
                        <p className="cursor-pointer text-sm">Read More</p>
                        <MoveRight className="size-4 group-hover:translate-x-1 transition cursor-pointer" />
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>

              {/* Article 3 */}
              <CarouselItem className="cursor-grab active:cursor-grabbing select-none">
                <div className="p-1">
                  <Card className="w-full rounded-md overflow-hidden mt-8 pt-0 gap-2 bg-white dark:bg-gray-900 h-[380px] flex flex-col">
                    <div className="h-[160px] w-full flex-shrink-0">
                      <img
                        className="h-full w-full object-cover"
                        src="https://lumenci.com/wp-content/uploads/2024/04/digital-image.webp"
                        alt="Enterprise Security"
                      />
                    </div>
                    <div className="flex flex-col flex-grow p-3">
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Enterprise Security</h2>
                      <p className="text-sm leading-5 text-gray-600 dark:text-gray-300 flex-grow line-clamp-4">
                        Understand our comprehensive security measures including bank-level encryption, SOC 2
                        compliance, and advanced threat protection for your business data.
                      </p>
                      <div
                        className={`group flex items-center gap-1 ${dynamicColors.primaryText500} mt-3 hover:underline transition`}
                      >
                        <p className="cursor-pointer text-sm">Read More</p>
                        <MoveRight className="size-4 group-hover:translate-x-1 transition cursor-pointer" />
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

        </div>
      </div>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16 mt-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Zap
                  className={`h-8 w-8 ${dynamicColors.primaryTextDark.replace("dark:text-", "text-").replace("text-", "text-").replace("-600", "-400").replace("-400", "-400")}`}
                />
                <span className="text-2xl font-bold">StreamLine</span>
              </div>
              <p className="text-gray-300 max-w-xs">
                Streamline your workflow and boost productivity with our intelligent automation platform.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-300 hover:text-blue-300 transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-blue-300 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-blue-300 transition-colors">
                  <Github className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Product</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className={`${dynamicColors.primaryHoverText} transition-colors`}>
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className={`${dynamicColors.primaryHoverText} transition-colors`}>
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className={`${dynamicColors.primaryHoverText} transition-colors`}>
                    API
                  </Link>
                </li>
                <li>
                  <Link href="#" className={`${dynamicColors.primaryHoverText} transition-colors`}>
                    Security
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className={`${dynamicColors.primaryHoverText} transition-colors`}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className={`${dynamicColors.primaryHoverText} transition-colors`}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className={`${dynamicColors.primaryHoverText} transition-colors`}>
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className={`${dynamicColors.primaryHoverText} transition-colors`}>
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
              <Link href="#" className={`text-gray-300 ${dynamicColors.primaryHoverText} text-sm transition-colors`}>
                Privacy Policy
              </Link>
              <Link href="#" className={`text-gray-300 ${dynamicColors.primaryHoverText} text-sm transition-colors`}>
                Terms of Service
              </Link>
              <Link href="#" className={`text-gray-300 ${dynamicColors.primaryHoverText} text-sm transition-colors`}>
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
