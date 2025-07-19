'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function Header({ shouldBeFullWidth }) {
  const pathname = usePathname();
  const [isShouldFixTop, setIsShouldFixTop] = useState(true);

  const components = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ]

  useEffect(() => {
    const navbarFixHandler = () => {
      if (shouldBeFullWidth) return setIsShouldFixTop(true);
      const scrollY = window.pageYOffset;
      setIsShouldFixTop(scrollY >= 110);
    };

    navbarFixHandler();
    window.addEventListener('scroll', navbarFixHandler);
    return () => window.removeEventListener('scroll', navbarFixHandler);
  }, []);

  return (
    <nav className={`
      left-1/2 transform -translate-x-1/2 w-full z-100 py-6 px-8 flex justify-between items-center transition-all duration-500 ease-in-out
      ${isShouldFixTop
        ? 'fixed top-0 border-b-[0.5px] border-gray-300 bg-white shadow-sm px-18'
        : 'absolute mt-4 bg-white xl:max-w-6xl lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-lg'
      }
    `}>

      {/* icon */}
      <div className="text-xl flex items-center gap-2">
        <img src="/images/Group.png" alt="#" />
        <div className='hidden lg:flex items-center text-xl gap-2 text-green-400'>
          Job-Pulse
        </div>
      </div>

      {/* links (desktop only) */}
      <NavigationMenu viewport={false} className='hidden md:flex'>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger><Link href='/'>Home</Link></NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <div
                      className="relative bg-cover bg-[url('https://media.istockphoto.com/id/475352876/photo/man-applying-for-a-job-on-the-internet.jpg?s=612x612&w=0&k=20&c=SQeciz8vqdGWu_KJoGC7yK8xmpBl69UewPtZSyWSrOI=')] from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                      href="/"
                    >
                      <div className="absolute inset-0 bg-gray-600/60 rounded-md z-0" />
                      <div className='bg-white/70 z-10 py-1.5 px-2 my-auto rounded-lg'>
                        <div className="relative z-10 mt-4 mb-2 text-lg font-medium">
                          Job Pulse
                        </div>
                        <p className="relative z-10 text-muted-foreground text-sm leading-tight">
                          Job Pulse is a simple and beautiful job searching platform
                        </p>
                      </div>
                    </div>
                  </NavigationMenuLink>
                </li>
                <ListItem href="#why-us" title="Why Job Pulse">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum.
                </ListItem>
                <ListItem href="#our-plans" title="Our Plans">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="#latest-jobseekers" title="Latest Job Seekers">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger><Link href='/about-us'>About Us</Link></NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/rules">Rules</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger><Link href='/positions'>Positions</Link></NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="#filters">
                      <div className="font-medium">Filters</div>
                      <div className="text-muted-foreground">
                        Browse all components in the library.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#notifications">
                      <div className="font-medium">Notification</div>
                      <div className="text-muted-foreground">
                        Learn how to use the library.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#footer">
                      <div className="font-medium">Footer</div>
                      <div className="text-muted-foreground">
                        Read our latest blog posts.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="#">Components</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#">Documentation</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#">Blocks</Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* buttons (desktop only) */}
      <div className="hidden md:flex gap-2">
        <button className="bg-[#92e3a9] py-3 px-8 rounded-[2px] text-white cursor-pointer hover:bg-emerald-200 transition">
          <Link href='/signin'>sign in</Link>
        </button>
        <button className="bg-green-400 py-3 px-8 text-white rounded-[2px] cursor-pointer hover:bg-green-500 transition">
          <Link href='/signup'>sign up</Link>
        </button>
      </div>

      {/* hamburger menu (mobile only) */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger className="p-2">
            <Menu className="h-6 w-6 text-gray-700" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] sm:w-[300px]">
            <div className="mt-8 flex flex-col gap-5">
              <Link href="/" className="text-base font-medium">Home</Link>
              <Link href="/about-us" className="text-base font-medium">About Us</Link>
              <Link href="/positions" className="text-base font-medium">Positions</Link>
              <Link href="/rules" className="text-base font-medium">Rules</Link>

              <div className="pt-6 border-t">
                <Link href="/signin">
                  <button className="w-full bg-[#92e3a9] text-white py-2 rounded mb-2">
                    Sign In
                  </button>
                </Link>
                <Link href="/signup">
                  <button className="w-full bg-green-500 text-white py-2 rounded">
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
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
