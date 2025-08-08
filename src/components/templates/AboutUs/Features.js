"use client"
import React, { useContext } from "react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Zap,
    Shield,
    Users,
    BarChart3
} from "lucide-react"
import { colorMap, textColorMap } from "@/utils/constants"
import { ThemeColorContext } from "@/contexts/user-theme"

export default function Features() {
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
    )
}
