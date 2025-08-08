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

export default function JoinUs() {

    const { color } = useContext(ThemeColorContext)

    return (
        <section className={`py-20 ${colorMap[color]} transition-colors my-10 sm:my-14 md:my-16`}>
            <div className="container px-4 md:px-6 text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
                        Ready to join our mission?
                    </h2>
                    <p className="text-xl text-emerald-100">
                        We're always looking for talented individuals who share our passion for building the future of work. Come
                        help us make workflow automation accessible to everyone.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-6">
                            View Open Positions
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className={`border-white text-white hover:bg-white hover:text-black dark:hover:text-white text-lg px-8 py-6 bg-transparent`}
                        >
                            Get in Touch
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
