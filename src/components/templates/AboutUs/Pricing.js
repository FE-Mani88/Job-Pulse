"use client"
import { useContext } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check
} from "lucide-react"
import { colorMap, textColorMap } from "@/utils/constants"
import { ThemeColorContext } from "@/contexts/user-theme"

export default function Pricing() {

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
    )
}
