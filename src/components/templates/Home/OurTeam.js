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
import { colorMap, textColorMap } from "@/utils/constants"
import Link from "next/link"


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

export default function OurTeam() {

    const { color } = useContext(ThemeColorContext)

    return (
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
    )
}
