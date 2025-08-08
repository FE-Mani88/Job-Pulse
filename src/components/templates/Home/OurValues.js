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

export default function OurValues() {

    const { color } = useContext(ThemeColorContext)

    return (
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
    )
}
