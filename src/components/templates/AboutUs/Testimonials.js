"use client"
import React, { useContext } from "react"
import { Card, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Star
} from "lucide-react"
import Image from "next/image"
import { colorMap, textColorMap } from "@/utils/constants"
import { ThemeColorContext } from "@/contexts/user-theme"

export default function Testimonials() {
    const { color } = useContext(ThemeColorContext)

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
    )
}
