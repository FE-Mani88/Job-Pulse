'use client'
import React, { useEffect, useState } from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { useTheme } from "next-themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon, Moon, Sun } from "lucide-react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from 'next/link'
import { HomeNavigationMenu } from '@/components/modules/NavigationMenu'

export default function Header({ getThemeValueHandler }) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  const { setTheme } = useTheme()
  const [themeValue, setThemeValue] = useState(null)

  useEffect(() => {
    const stored = localStorage.getItem('colorTheme') || 'green'
    setThemeValue(stored)
    getThemeValueHandler(themeValue)
  }, [themeValue])

  const frameworks = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ]
  /////////
  const components = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response."
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description: "For sighted users to preview content available behind a link."
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content."
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time."
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
    }
  ]

  return (
    <header className='bg-white dark:bg-black border-b'>
      <div className='py-5 px-2 flex justify-between max-w-[1440px] mx-auto '>
        {/* Left Section */}
        <div className='flex gap-2'>
          {/* Combo Box */}
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-[220px] flex justify-between items-center gap-2"
              >
                <div className="flex items-center gap-2">
                  <img
                    className="h-5 w-6 rounded-[30%] object-cover"
                    src="https://static.toiimg.com/thumb/msid-111322416,width-400,resizemode-4/111322416.jpg"
                    alt="User Avatar"
                  />
                  <span className="truncate">
                    {value
                      ? frameworks.find((framework) => framework.value === value)?.label
                      : "Alicia Koch"}
                  </span>
                </div>
                <ChevronsUpDown className="opacity-50" />
              </Button>

            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search framework..." className="h-9" />
                <CommandList>
                  <CommandEmpty>No framework found.</CommandEmpty>
                  <CommandGroup>
                    {frameworks.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        value={framework.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue)
                          setOpen(false)
                        }}
                      >
                        {framework.label}
                        <Check
                          className={cn(
                            "ml-auto",
                            value === framework.value ? "opacity-100" : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          {/* Nav Links */}
          <HomeNavigationMenu />
        </div>
        {/* End Left Section */}

        {/* Right Section */}
        <div className='flex gap-2'>
          <Select value={themeValue} onValueChange={(value) => {
            setThemeValue(value)
            localStorage.setItem('colorTheme', value)
          }}>
            <SelectTrigger className="">
              <SelectValue placeholder="Select a theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Themes</SelectLabel>
                <SelectItem value="red" className='flex items-center'>
                  <div
                    className="w-5 h-5 rotate-30 rounded-full"
                    style={{ background: "linear-gradient(to right, #F44336 50%, #FF9800 50%)" }}
                  ></div>
                  Red & Orange
                </SelectItem>
                <SelectItem value="green" className='flex items-center'>
                  <div
                    className="w-5 h-5 rotate-30 rounded-full"
                    style={{ background: "linear-gradient(to right, #76FF03 50%, yellow 50%)" }}
                  ></div>
                  Green & Yellow
                </SelectItem>
                <SelectItem value="purple" className='flex items-center'>
                  <div
                    className="w-5 h-5 rotate-30 rounded-full"
                    style={{ background: "linear-gradient(to right, #E040FB 50%, #EC407A 50%)" }}
                  ></div>
                  Purple & Pink
                </SelectItem>
                <SelectItem value="blue" className='flex items-center'>
                  <div
                    className="w-5 h-5 rotate-30 rounded-full"
                    style={{ background: "linear-gradient(to right, #2196F3 50%, #81D4FA 50%)" }}
                  ></div>
                  Blue & Sky
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* End Right Section */}
      </div>
    </header>
  )
}

function ListItem({ title, children, href, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
