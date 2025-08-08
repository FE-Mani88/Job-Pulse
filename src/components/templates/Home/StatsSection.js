"use client"
import React, { useContext } from "react"
import { ThemeColorContext } from "@/contexts/user-theme"
import {
    Users,
    Globe,
    TrendingUp,
    Shield
} from "lucide-react"
import { colorMap } from "@/utils/constants"

const stats = [
    { number: "50K+", label: "Active Users", icon: Users },
    { number: "99.9%", label: "Uptime", icon: TrendingUp },
    { number: "150+", label: "Countries", icon: Globe },
    { number: "24/7", label: "Support", icon: Shield },
]

export default function StatsSection() {

    const { color } = useContext(ThemeColorContext)

    return (
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
    )
}
