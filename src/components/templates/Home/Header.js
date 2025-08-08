"use client"
import React, { useContext } from "react"
import { ThemeColorContext } from "@/contexts/user-theme"
import { Button } from "@/components/ui/button"
import {
  Zap
} from "lucide-react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { HomeNavigationMenu } from "@/components/templates/CompanyPanel/NavigationMenu"
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectGroup,
  SelectLabel,
  SelectItem
} from '@/components/ui/select'
import { colorMap, textColorMap } from "@/utils/constants"
import Link from "next/link"

export default function Header() {

    const { setTheme } = useTheme()
    const { color, changeColor } = useContext(ThemeColorContext)

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-900 bg-white/80 dark:bg-black/60 backdrop-blur">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <div className="flex items-center space-x-2">
                    <Zap className={`h-8 w-8 ${textColorMap[color]}`} />
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">Job Pulse</span>
                </div>
                <HomeNavigationMenu />
                <div className="flex items-center space-x-2">

                    <Select value={color} onValueChange={changeColor}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select a theme" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Themes</SelectLabel>
                                <SelectItem value="red">
                                    <div className="flex items-center gap-2">
                                        <span
                                            className="w-4 h-4 rounded-full"
                                            style={{ background: 'linear-gradient(to right, #F44336 50%, #FF9800 50%)' }}
                                        ></span>
                                        Red & Orange
                                    </div>
                                </SelectItem>
                                <SelectItem value="green">
                                    <div className="flex items-center gap-2">
                                        <span
                                            className="w-4 h-4 rounded-full"
                                            style={{ background: 'linear-gradient(to right, #76FF03 50%, yellow 50%)' }}
                                        ></span>
                                        Green & Yellow
                                    </div>
                                </SelectItem>
                                <SelectItem value="purple">
                                    <div className="flex items-center gap-2">
                                        <span
                                            className="w-4 h-4 rounded-full"
                                            style={{ background: 'linear-gradient(to right, #E040FB 50%, #EC407A 50%)' }}
                                        ></span>
                                        Purple & Pink
                                    </div>
                                </SelectItem>
                                <SelectItem value="blue">
                                    <div className="flex items-center gap-2">
                                        <span
                                            className="w-4 h-4 rounded-full"
                                            style={{ background: 'linear-gradient(to right, #2196F3 50%, #81D4FA 50%)' }}
                                        ></span>
                                        Blue & Sky
                                    </div>
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <Button
                        variant="ghost"
                        className="cursor-pointer bg-gray-100 dark:bg-inherit hidden sm:inline-flex text-gray-700 hover:bg-gray-150 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-900"
                    >
                        <Link href="/signin">Sign In</Link>
                    </Button>
                    <Button className={`cursor-pointer text-white ${colorMap[color]}`}>
                        <Link href="/signup">Sign Up</Link>
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}
