"use client"
import React, { useContext } from "react"
import { ThemeColorContext } from "@/contexts/user-theme"
import { Badge } from "@/components/ui/badge"
import {
    Target,
    Rocket,
} from "lucide-react"
import { colorMap } from "@/utils/constants"

export default function OurMissions() {

    const { color } = useContext(ThemeColorContext)

    return (
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
                            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/68dpuWv73JOSk0ef4nNOv/dede5b79471b509a2abf43b2d30df0f4/GettyImages-1186079153.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000"
                            alt="Team collaboration"
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
