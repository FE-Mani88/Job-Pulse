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

export default function OurCulture() {

    const { color } = useContext(ThemeColorContext)

    return (
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
    )
}
