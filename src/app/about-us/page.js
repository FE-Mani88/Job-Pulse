"use client"
import { useContext } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  Zap,
  Shield,
  Users,
  BarChart3,
  Star,
  Twitter,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import Image from "next/image"
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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      {/* Hero Section */}
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
      {/* End Header */}

      {/* Hero Section */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-white dark:bg-black">
        <div className="container px-4 md:px-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className={`py-1 ${dynamicColors.primaryLight} ${dynamicColors.primaryTextLight} ${dynamicColors.primaryBorder} dark:hover:${dynamicColors.primaryLight}`}
                >
                  🚀 New: AI-Powered Automation
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white">
                  Streamline Your
                  <span className={`${dynamicColors.primaryTextDark}`}> Workflow</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-200 max-w-[600px]">
                  Boost productivity by 300% with our intelligent automation platform. Connect your tools, automate
                  repetitive tasks, and focus on what matters most.
                </p>
              </div>
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
              <div className="flex items-center space-x-8 text-sm text-gray-600 dark:text-gray-300">
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
            <div className="relative">
              <img
                src="https://i0.wp.com/picjumbo.com/wp-content/uploads/job-search-im-unemployed-free-photo.jpg?w=600&quality=80"
                alt="StreamLine Dashboard"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="border-t border-gray-200 dark:border-gray-300 py-20 bg-gray-50 dark:bg-gray-950"
      >
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-gray-900 dark:text-white text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Everything you need to succeed
            </h2>
            <p className="text-gray-600 dark:text-gray-200 text-xl max-w-[800px] mx-auto">
              Powerful features designed to transform how you work and collaborate with your team.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div
                  className={`w-12 h-12 ${dynamicColors.primaryBg} rounded-lg flex items-center justify-center mb-4`}
                >
                  <Zap className={`h-6 w-6 ${dynamicColors.primaryTextDark}`} />
                </div>
                <CardTitle className="text-gray-900 dark:text-white">Smart Automation</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  AI-powered workflows that learn from your patterns and automate repetitive tasks.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div
                  className={`w-12 h-12 ${dynamicColors.primaryBg} rounded-lg flex items-center justify-center mb-4`}
                >
                  <Shield className={`h-6 w-6 ${dynamicColors.primaryTextDark}`} />
                </div>
                <CardTitle className="text-gray-900 dark:text-white">Enterprise Security</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA standards.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div
                  className={`w-12 h-12 ${dynamicColors.primaryBg} rounded-lg flex items-center justify-center mb-4`}
                >
                  <Users className={`h-6 w-6 ${dynamicColors.primaryTextDark}`} />
                </div>
                <CardTitle className="text-gray-900 dark:text-white">Team Collaboration</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Real-time collaboration tools with advanced permission controls and team insights.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div
                  className={`w-12 h-12 ${dynamicColors.primaryBg} rounded-lg flex items-center justify-center mb-4`}
                >
                  <BarChart3 className={`h-6 w-6 ${dynamicColors.primaryTextDark}`} />
                </div>
                <CardTitle className="text-gray-900 dark:text-white">Advanced Analytics</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Comprehensive reporting and analytics to track performance and optimize workflows.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white dark:bg-black">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className={`${dynamicColors.primaryLight} ${dynamicColors.primaryTextLight}`}>
              Testimonials
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
              Loved by thousands of teams
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-200 max-w-[800px] mx-auto">
              See what our customers have to say about their experience with StreamLine.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-base text-gray-700 dark:text-gray-200">
                  "StreamLine has completely transformed our workflow. We've reduced manual tasks by 80% and our team is
                  more productive than ever."
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Sarah Johnson"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Sarah Johnson</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">CEO, TechCorp</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card className="border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-base text-gray-700 dark:text-gray-200">
                  "The automation features are incredible. What used to take hours now happens automatically. Our ROI
                  was positive within the first month."
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Michael Chen"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Michael Chen</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">CTO, StartupXYZ</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card className="border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-base text-gray-700 dark:text-gray-200">
                  "Outstanding customer support and a platform that actually delivers on its promises. StreamLine is a
                  game-changer for our operations."
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Emily Rodriguez"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Emily Rodriguez</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Operations Director, GrowthCo</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className={`${dynamicColors.primaryLight} ${dynamicColors.primaryTextLight}`}>
              Pricing
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-200 max-w-[800px] mx-auto">
              Choose the perfect plan for your team. All plans include a 14-day free trial.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">Starter</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Perfect for small teams getting started
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">$29</span>
                  <span className="text-gray-600 dark:text-gray-300">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Check className={`h-4 w-4 ${dynamicColors.primaryTextDark}`} />
                    <span className="text-gray-600 dark:text-gray-300">Up to 5 team members</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className={`h-4 w-4 ${dynamicColors.primaryTextDark}`} />
                    <span className="text-gray-600 dark:text-gray-300">100 automation runs/month</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className={`h-4 w-4 ${dynamicColors.primaryTextDark}`} />
                    <span className="text-gray-600 dark:text-gray-300">Basic integrations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className={`h-4 w-4 ${dynamicColors.primaryTextDark}`} />
                    <span className="text-gray-600 dark:text-gray-300">Email support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900 dark:hover:text-white bg-white dark:bg-transparent"
                  variant="outline"
                >
                  Start Free Trial
                </Button>
              </CardFooter>
            </Card>
            <Card className={`border-2 ${dynamicColors.primaryBorder2} bg-white dark:bg-black shadow-xl relative`}>
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className={`${dynamicColors.primarySolid} text-white`}>Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">Professional</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Best for growing teams and businesses
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">$99</span>
                  <span className="text-gray-600 dark:text-gray-300">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Check className={`h-4 w-4 ${dynamicColors.primaryTextDark}`} />
                    <span className="text-gray-600 dark:text-gray-300">Up to 25 team members</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className={`h-4 w-4 ${dynamicColors.primaryTextDark}`} />
                    <span className="text-gray-600 dark:text-gray-300">1,000 automation runs/month</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className={`h-4 w-4 ${dynamicColors.primaryTextDark}`} />
                    <span className="text-gray-600 dark:text-gray-300">Advanced integrations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className={`h-4 w-4 ${dynamicColors.primaryTextDark}`} />
                    <span className="text-gray-600 dark:text-gray-300">Priority support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className={`h-4 w-4 ${dynamicColors.primaryTextDark}`} />
                    <span className="text-gray-600 dark:text-gray-300">Advanced analytics</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className={`w-full ${dynamicColors.primarySolid} ${dynamicColors.primaryHover} text-white`}>
                  Start Free Trial
                </Button>
              </CardFooter>
            </Card>
            <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">Enterprise</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  For large organizations with custom needs
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">Custom</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Check className={`h-4 w-4 ${dynamicColors.primaryTextDark}`} />
                    <span className="text-gray-600 dark:text-gray-300">Unlimited team members</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className={`h-4 w-4 ${dynamicColors.primaryTextDark}`} />
                    <span className="text-gray-600 dark:text-gray-300">Unlimited automation runs</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className={`h-4 w-4 ${dynamicColors.primaryTextDark}`} />
                    <span className="text-gray-600 dark:text-gray-300">Custom integrations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className={`h-4 w-4 ${dynamicColors.primaryTextDark}`} />
                    <span className="text-gray-600 dark:text-gray-300">24/7 dedicated support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className={`h-4 w-4 ${dynamicColors.primaryTextDark}`} />
                    <span className="text-gray-600 dark:text-gray-300">Custom reporting</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900 dark:hover:text-white bg-white dark:bg-transparent"
                  variant="outline"
                >
                  Contact Sales
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={`py-20 ${dynamicColors.primarySolid}`}>
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
              Ready to streamline your workflow?
            </h2>
            <p className={`text-xl ${dynamicColors.primaryTextLight100}`}>
              Join thousands of teams who have already transformed their productivity with StreamLine. Start your free
              trial today and see the difference in just 14 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className={`bg-white ${dynamicColors.primaryHoverText} ${dynamicColors.primaryHoverBg} text-lg px-8 py-6`}
              >
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={`border-white text-white hover:bg-white ${dynamicColors.primaryHoverText} text-lg px-8 py-6 bg-transparent`}
              >
                Schedule Demo
              </Button>
            </div>
            <div className={`flex items-center justify-center space-x-8 text-sm ${dynamicColors.primaryTextLight100}`}>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4" />
                <span>24/7 support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
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
