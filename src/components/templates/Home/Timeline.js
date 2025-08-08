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

export default function Timeline() {

    const { color } = useContext(ThemeColorContext)

    return (
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
    )
}
