"use client"
import { useContext } from "react"
import { Card } from "@/components/ui/card"
import { MoveRight } from "lucide-react"
import { colorMap, textColorMap } from "@/utils/constants"
import { ThemeColorContext } from "@/contexts/user-theme"
import { CarouselItem } from "@/components/ui/carousel"

export default function ArticleBox({ imageUrl, title, description }) {
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
        primaryHover:
            color === "red"
                ? "hover:bg-red-700"
                : color === "green"
                    ? "hover:bg-green-700"
                    : color === "purple"
                        ? "hover:bg-purple-700"
                        : "hover:bg-blue-700",
        primaryBg:
            color === "red"
                ? "bg-red-400"
                : color === "green"
                    ? "bg-green-400"
                    : color === "purple"
                        ? "bg-purple-400"
                        : "bg-blue-400",
        primaryBorder:
            color === "red"
                ? "border-red-400"
                : color === "green"
                    ? "border-green-400"
                    : color === "purple"
                        ? "border-purple-400"
                        : "border-blue-400",
        primaryBg100:
            color === "red"
                ? "bg-red-100"
                : color === "green"
                    ? "bg-green-100"
                    : color === "purple"
                        ? "bg-purple-100"
                        : "bg-blue-100",
        primaryText500:
            color === "red"
                ? "text-red-500"
                : color === "green"
                    ? "text-green-500"
                    : color === "purple"
                        ? "text-purple-500"
                        : "text-blue-500",
        primaryHoverText:
            color === "red"
                ? "hover:text-red-600"
                : color === "green"
                    ? "hover:text-green-600"
                    : color === "purple"
                        ? "hover:text-purple-600"
                        : "hover:text-blue-600",
    }

    return (
        <CarouselItem className="cursor-grab active:cursor-grabbing select-none">
            <div className="p-1">
                <Card className="w-full rounded-md overflow-hidden mt-8 pt-0 gap-2 bg-white dark:bg-gray-900 h-[380px] flex flex-col">
                    <div className="h-[160px] w-full flex-shrink-0">
                        <img
                            className="h-full w-full object-cover"
                            src={imageUrl}
                            alt="Team Collaboration"
                        />
                    </div>
                    <div className="flex flex-col flex-grow p-3">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h2>
                        <p className="text-sm leading-5 text-gray-600 dark:text-gray-300 flex-grow line-clamp-4">
                            {description}
                        </p>
                        <div
                            className={`group flex items-center gap-1 ${dynamicColors.primaryText500} mt-3 hover:underline transition`}
                        >
                            <p className="cursor-pointer text-sm">Read More</p>
                            <MoveRight className="size-4 group-hover:translate-x-1 transition cursor-pointer" />
                        </div>
                    </div>
                </Card>
            </div>
        </CarouselItem>
    )
}
