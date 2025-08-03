"use client"
import React, { useContext } from "react"
import { ThemeColorContext } from "@/contexts/user-theme"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Target,
  Heart,
  Lightbulb,
  Award,
  Globe,
  TrendingUp,
  Shield,
  Mail,
  Linkedin,
  Twitter,
  Github,
  Building,
  Rocket,
  Zap,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { HomeNavigationMenu } from "@/components/templates/CompanyPanel/NavigationMenu"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem
} from '@/components/ui/select'
import { colorMap, textColorMap } from "@/utils/constants"

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Co-Founder",
    image:
      "https://www.workingparentsconnect.com.au/wp-content/uploads/2024/09/resume-genius-dWsnpwAxbHM-unsplash-840x430.jpg",
    bio: "Former VP at TechCorp with 15+ years in automation and AI. Passionate about building tools that empower teams.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah@jobpulse.com",
    },
  },
  {
    name: "Michael Chen",
    role: "CTO & Co-Founder",
    image: "https://www.medallia.com/wp-content/uploads/2024/08/iStock-1356386941-1024x683-1.jpg",
    bio: "Ex-Google engineer specializing in distributed systems and machine learning. Loves solving complex technical challenges.",
    social: {
      linkedin: "#",
      github: "#",
      email: "michael@jobpulse.com",
    },
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Product",
    image:
      "https://blog.benify.co.uk/hs-fs/hubfs/English-COM-and-UK/Blog%20images/Harnessing_API_1.jpg?width=680&height=453&name=Harnessing_API_1.jpg",
    bio: "Product strategist with a background in UX design. Focused on creating intuitive experiences that users love.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "emily@jobpulse.com",
    },
  },
  {
    name: "David Kim",
    role: "Head of Engineering",
    image: "https://cdn.unifrog.org/image/3/30847/4.jpg",
    bio: "Full-stack architect with expertise in scalable systems. Believes in clean code and continuous innovation.",
    social: {
      linkedin: "#",
      github: "#",
      email: "david@jobpulse.com",
    },
  },
]

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description:
      "Every decision we make starts with our customers. Their success is our success, and we're committed to delivering exceptional value.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace new technologies and creative solutions. Innovation isn't just what we do—it's who we are.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Great things happen when talented people work together. We foster an environment of trust, respect, and shared purpose.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We do the right thing, even when no one is watching. Transparency and honesty guide everything we do.",
  },
]

const stats = [
  { number: "50K+", label: "Active Users", icon: Users },
  { number: "99.9%", label: "Uptime", icon: TrendingUp },
  { number: "150+", label: "Countries", icon: Globe },
  { number: "24/7", label: "Support", icon: Shield },
]

const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description: "Started with a simple idea: make workflow automation accessible to everyone.",
  },
  {
    year: "2021",
    title: "First 1K Users",
    description: "Reached our first milestone with early adopters who believed in our vision.",
  },
  {
    year: "2022",
    title: "Series A Funding",
    description: "Raised $10M to accelerate product development and team growth.",
  },
  {
    year: "2023",
    title: "AI Integration",
    description: "Launched AI-powered automation features, revolutionizing how teams work.",
  },
  {
    year: "2024",
    title: "Global Expansion",
    description: "Expanded to serve customers in over 150 countries worldwide.",
  },
]

export default function AboutPage() {
  const { setTheme } = useTheme()
  const { color, changeColor } = useContext(ThemeColorContext)

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
                        style={{ background: 'linear-gradient(to right, #F44336 50%, #FF9800 50%)' }}
                      ></span>
                      Red & Orange
                    </div>
                  </SelectItem>
                  <SelectItem value="green">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-4 h-4 rounded-full"
                        style={{ background: 'linear-gradient(to right, #76FF03 50%, yellow 50%)' }}
                      ></span>
                      Green & Yellow
                    </div>
                  </SelectItem>
                  <SelectItem value="purple">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-4 h-4 rounded-full"
                        style={{ background: 'linear-gradient(to right, #E040FB 50%, #EC407A 50%)' }}
                      ></span>
                      Purple & Pink
                    </div>
                  </SelectItem>
                  <SelectItem value="blue">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-4 h-4 rounded-full"
                        style={{ background: 'linear-gradient(to right, #2196F3 50%, #81D4FA 50%)' }}
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

      {/* Hero Section with Beautiful Background */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/illustration12.png')",
            }}
          />
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-white/90 to-white/85 dark:from-black/95 dark:via-black/90 dark:to-black/85" />
          {/* Additional subtle pattern overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/20 via-transparent to-blue-50/20 dark:from-emerald-950/20 dark:via-transparent dark:to-blue-950/20" />
        </div>

        {/* Content */}
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge
              variant="secondary"
              className={`${colorMap[color]} dark:${colorMap[color]} text-white shadow-sm`}
            >
              About Job Pulse
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900 dark:text-white">
              We're building the future of
              <span className={`${textColorMap[color]}`}> workflow automation</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Founded in 2020, Job Pulse has grown from a simple idea to a platform trusted by over 50,000 teams
              worldwide. We believe that technology should empower people, not replace them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className={`${colorMap[color]} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                Join Our Team
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 bg-white/80 dark:bg-black/80 backdrop-blur-sm hover:bg-white dark:hover:bg-black shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Our Story
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200/30 dark:bg-emerald-800/30 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200/30 dark:bg-blue-800/30 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-200/30 dark:bg-purple-800/30 rounded-full blur-xl" />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className={`w-12 h-12 ${colorMap[color]} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`h-6 w-6 text-white`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">{stat.number}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container px-4 md:px-12">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className={`${colorMap[color]} text-white`}
                >
                  Our Mission
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-white">
                  Empowering teams to focus on what matters most
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-200 leading-relaxed">
                  We believe that every team deserves access to powerful automation tools that can transform how they
                  work. Our mission is to democratize workflow automation, making it simple, accessible, and incredibly
                  powerful.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className={`w-8 h-8 ${colorMap[color]} rounded-lg flex items-center justify-center flex-shrink-0 mt-1`}>
                    <Target className={`h-4 w-4 text-white`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Vision</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      A world where every team can achieve more by automating the mundane and focusing on innovation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                <div className={`w-8 h-8 ${colorMap[color]} rounded-lg flex items-center justify-center flex-shrink-0 mt-1`}>
                <Rocket className={`h-4 w-4 text-white`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Purpose</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      To eliminate repetitive work and unlock human potential through intelligent automation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1867035079/photo/analytics-and-data-management-systems-business-analytics-and-data-management-systems-to-make.jpg?s=612x612&w=0&k=20&c=tFcJnBIWlkPhIumrPtkSJwFRNDMtdVfJ1CYbfUlx5fE="
                alt="Team collaboration"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="secondary"
              className={`${colorMap[color]} text-white`}
            >
              Our Values
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-white">
              What drives us every day
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto">
              Our values aren't just words on a wall—they're the principles that guide every decision we make.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${colorMap[color]} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-gray-900 dark:text-white">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-center">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="secondary"
              className={`${colorMap[color]} text-white`}
            >
              Our Journey
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-white">
              Milestones that shaped us
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${colorMap[color]} dark:bg-white`}></div>
              <div className="flex">
                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="relative flex items-start space-x-8">
                      <div className={`w-16 h-16 ${colorMap[color]} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 relative z-10`}>
                        {milestone.year}
                      </div>
                      <div className="flex-1 space-y-2 pb-8">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{milestone.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="secondary"
              className={`${colorMap[color]} text-white`}
            >
              Our Team
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-white">
              Meet the people behind Job Pulse
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto">
              We're a diverse team of builders, dreamers, and problem-solvers united by our passion for creating amazing
              products.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="rounded-full object-cover w-24 h-24"
                    />
                  </div>
                  <CardTitle className="text-gray-900 dark:text-white">{member.name}</CardTitle>
                  <CardDescription className={`${textColorMap[color]} font-medium`}>
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300 text-center">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    {member.social.linkedin && (
                      <Link
                        href={member.social.linkedin}
                        className="text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                      </Link>
                    )}
                    {member.social.twitter && (
                      <Link
                        href={member.social.twitter}
                        className="text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                      >
                        <Twitter className="h-4 w-4" />
                      </Link>
                    )}
                    {member.social.github && (
                      <Link
                        href={member.social.github}
                        className="text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </Link>
                    )}
                    {member.social.email && (
                      <Link
                        href={`mailto:${member.social.email}`}
                        className="text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container px-4 md:px-6">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div className="relative">
              <img
                src="https://rizing.com/wp-content/uploads/2022/09/job-profile-builder.jpg"
                alt="Team culture"
                width={800}
                className="rounded-2xl shadow-2xl h-[440px]"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className={`${colorMap[color]} text-white`}
                >
                  Our Culture
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-white">
                  Where great minds thrive
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-200 leading-relaxed">
                  We've built a culture that celebrates curiosity, embraces failure as learning, and rewards bold
                  thinking. Our team is our greatest asset, and we invest in their growth every day.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Building className={`h-5 w-5 ${textColorMap[color]}`} />
                    <span className="font-semibold text-gray-900 dark:text-white">Remote-First</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Work from anywhere with flexible hours and unlimited PTO.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Award className={`h-5 w-5 ${textColorMap[color]}`} />
                    <span className="font-semibold text-gray-900 dark:text-white">Growth Focused</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    $5K annual learning budget and mentorship programs.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Heart className={`h-5 w-5 ${textColorMap[color]}`} />
                    <span className="font-semibold text-gray-900 dark:text-white">Health & Wellness</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Comprehensive health coverage and wellness stipends.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Users className={`h-5 w-5 ${textColorMap[color]}`} />
                    <span className="font-semibold text-gray-900 dark:text-white">Inclusive</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Diverse team with equal opportunities for everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${colorMap[color]} transition-colors my-10 sm:my-14 md:my-16`}>
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
              Ready to join our mission?
            </h2>
            <p className="text-xl text-emerald-100">
              We're always looking for talented individuals who share our passion for building the future of work. Come
              help us make workflow automation accessible to everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-6">
                View Open Positions
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={`border-white text-white hover:bg-white hover:text-black dark:hover:text-white text-lg px-8 py-6 bg-transparent`}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white">
        <div className="container px-4 md:px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Zap className={`h-8 w-8 ${textColorMap[color]}`} />
                <span className="text-2xl font-bold">Job Pulse</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Empowering teams worldwide with intelligent workflow automation. Making complex processes simple and
                accessible for everyone.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors" aria-label="YouTube">
                  <Youtube className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Product Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Product</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-300 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                <Link href="#" className="text-gray-300 transition-colors">
                Integrations
                  </Link>
                </li>
                <li>
                <Link href="#" className="text-gray-300 transition-colors">
                API Documentation
                  </Link>
                </li>
                <li>
                <Link href="#" className="text-gray-300 transition-colors">
                Pricing
                  </Link>
                </li>
                <li>
                <Link href="#" className="text-gray-300 transition-colors">
                    Enterprise
                  </Link>
                </li>
                <li>
                <Link href="#" className="text-gray-300 transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-3">
                <li>
                <Link href="#" className="text-gray-300 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                <Link href="#" className="text-gray-300 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                <Link href="#" className="text-gray-300 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                <Link href="#" className="text-gray-300 transition-colors">
                    Press
                  </Link>
                </li>
                <li>
                <Link href="#" className="text-gray-300 transition-colors">
                    Partners
                  </Link>
                </li>
                <li>
                <Link href="#" className="text-gray-300 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className={`h-5 w-5 ${textColorMap[color]} mt-0.5 flex-shrink-0`} />
                  <div className="text-gray-300">
                    <p>123 Innovation Drive</p>
                    <p>San Francisco, CA 94105</p>
                    <p>United States</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                <Phone className={`h-5 w-5 ${textColorMap[color]} mt-0.5 flex-shrink-0`} />
                  <Link href="tel:+1-555-123-4567" className="text-gray-300 transition-colors">
                    +1 (555) 123-4567
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                <Mail className={`h-5 w-5 ${textColorMap[color]} mt-0.5 flex-shrink-0`} />
                  <Link
                    href="mailto:hello@jobpulse.com"
                    className="text-gray-300 transition-colors"
                  >
                    hello@jobpulse.com
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">© 2024 Job Pulse. All rights reserved.</div>
              <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
                <Link href="#" className="text-gray-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-gray-400 transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="text-gray-400 transition-colors">
                  Cookie Policy
                </Link>
                <Link href="#" className="text-gray-400 transition-colors">
                  GDPR
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
