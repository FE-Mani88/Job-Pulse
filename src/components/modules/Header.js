"use client"
import React, { useContext, useState, useEffect } from "react"
import { ThemeColorContext } from "@/contexts/user-theme"
import { Button } from "@/components/ui/button"
import { Zap, Moon, Sun, Menu, Home, FileQuestionMark, Paperclip, Building, LayoutDashboard } from "lucide-react"
import { useTheme } from "next-themes"
import { HomeNavigationMenu } from "@/components/modules/NavigationMenu"
import { colorMap, textColorMap } from "@/utils/constants"
import Link from "next/link"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectGroup,
    SelectLabel,
    SelectItem
} from '@/components/ui/select'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IconQuestionMark } from "@tabler/icons-react"

export default function Header() {
    const { setTheme } = useTheme()
    const { color, changeColor } = useContext(ThemeColorContext)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const getUserHandler = async () => {
            try {
                const userResponse = await fetch('http://localhost:3000/jobseeker/getme', {
                    method: 'POST',
                    credentials: 'include'
                })

                if (userResponse.ok) {
                    const userData = await userResponse.json()
                    setUser(userData.user)
                } else {
                    setUser(null)
                }
            } catch (error) {
                console.error(error)
                setUser(null)
            }
        }

        getUserHandler()
    }, [])

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-900 bg-white/80 dark:bg-black/60 backdrop-blur">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">

                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <Zap className={`h-8 w-8 ${textColorMap[color]}`} />
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">Job Pulse</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:block">
                    <HomeNavigationMenu />
                </div>

                {/* Right actions */}
                <div className="flex items-center space-x-2">

                    {/* Theme Color Select */}
                    <Select value={color} onValueChange={changeColor}>
                        <SelectTrigger className="hidden sm:flex w-[180px]">
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


                    {/* Sign in / up */}
                    {user ? null : (
                        <>
                            <Button variant="ghost" className="hidden sm:inline-flex">
                                <Link href="/signin">Sign In</Link>
                            </Button>
                            <Button className={`hidden sm:inline-flex text-white ${colorMap[color]}`}>
                                <Link href="/signup">Sign Up</Link>
                            </Button>
                        </>
                    )}

                    {/* Theme Switch */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Sun className="h-[1.2rem] w-[1.2rem] dark:hidden" />
                                <Moon className="hidden dark:block h-[1.2rem] w-[1.2rem]" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent className='pt-2'>
                                <SheetHeader>
                                    <SheetTitle>Job Pulse</SheetTitle>
                                    <SheetDescription>
                                        Lorem ipsum dolor sit amet consectetur
                                    </SheetDescription>
                                </SheetHeader>
                                <div className="grid flex-1 auto-rows-min gap-4 px-4">
                                    <Link href='/' className='flex items-center gap-2 px-2 py-3 rounded-sm hover:bg-zinc-800 transition-colors'> <Home className="w-4 h-4" /> <p className="text-md">Home</p></Link>
                                    <Link href='/about-us' className='flex items-center gap-2 px-2 py-3 rounded-sm hover:bg-zinc-800 transition-colors'> <FileQuestionMark className="w-4 h-4" /> <p className="text-md">About us</p></Link>
                                    <Link href='/rules' className='flex items-center gap-2 px-2 py-3 rounded-sm hover:bg-zinc-800 transition-colors'> <Paperclip className="w-4 h-4" /> <p className="text-md">Rules</p></Link>
                                    <Link href='/positions' className='flex items-center gap-2 px-2 py-3 rounded-sm hover:bg-zinc-800 transition-colors'> <Building className="w-4 h-4" /> <p className="text-md">Positions</p></Link>
                                    {user ? (
                                        <Link
                                            href={`/${user.role === 'job_seeker' && !user.is_admin ? 'jobseeker-panel/overview' : user.role === 'company' ? 'company-panel' : 'admin-panel'}`}
                                            className='flex items-center gap-2 px-2 py-3 rounded-sm hover:bg-zinc-800 transition-colors'> <LayoutDashboard className="w-4 h-4" /> <p className="text-md">Dashboard</p>
                                        </Link>
                                    ) : null}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    )
}
