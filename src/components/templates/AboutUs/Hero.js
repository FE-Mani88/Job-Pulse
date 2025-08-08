"use client"
import { useContext } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    Check
} from "lucide-react"
import { colorMap, textColorMap } from "@/utils/constants"
import { ThemeColorContext } from "@/contexts/user-theme"

export default function Hero() {

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
    )
}
