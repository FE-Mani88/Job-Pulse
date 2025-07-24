'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from "lucide-react";
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
  SheetTitle
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Header({ shouldBeFullWidth }) {
  const pathname = usePathname();
  const [isShouldFixTop, setIsShouldFixTop] = useState(true);

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
    <nav
      className={`
        left-1/2 transform -translate-x-1/2 w-full z-50 py-6 px-8 flex justify-between items-center transition-all duration-500 ease-in-out
        ${isShouldFixTop
          ? 'fixed top-0 border-b-[0.5px] border-gray-300 bg-white shadow-sm sm:px-18'
          : 'absolute mt-4 bg-white xl:max-w-6xl lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-lg'
        }
      `}
    >
      {/* logo */}
      <div className="flex text-xl items-center gap-2">
        <img src="/images/Group.png" alt="Logo" />
        <div className='hidden lg:flex text-xl gap-2 text-green-400'>Job-Pulse</div>
      </div>

      {/* desktop navigation */}
      <NavigationMenu className='hidden md:flex'>
        <NavigationMenuList>
          <NavigationMenuItem className={pathname === '/' ? 'text-green-400 underline hover:text-green-500': ''}>
            <NavigationMenuTrigger><Link href='/'>Home</Link></NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/"
                      className="relative bg-cover bg-[url('https://media.istockphoto.com/id/475352876/photo/man-applying-for-a-job-on-the-internet.jpg?s=612x612&w=0&k=20&c=SQeciz8vqdGWu_KJoGC7yK8xmpBl69UewPtZSyWSrOI=')] flex h-full w-full flex-col justify-end rounded-md p-6 no-underline select-none focus:shadow-md"
                    >
                      <div className="absolute inset-0 bg-gray-600/60 rounded-md z-0" />
                      <div className='bg-white/70 z-10 py-1.5 px-2 rounded-lg'>
                        <div className="relative z-10 mt-4 mb-2 text-lg font-medium">
                          Job Pulse
                        </div>
                        <p className="relative z-10 text-muted-foreground text-sm leading-tight">
                          Job Pulse is a simple and beautiful job searching platform
                        </p>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem href="#why-us" title="Why Job Pulse">
                  Learn why our platform stands out.
                </ListItem>
                <ListItem href="#our-plans" title="Our Plans">
                  Explore affordable and flexible plans.
                </ListItem>
                <ListItem href="#latest-jobseekers" title="Latest Job Seekers">
                  See who recently joined us.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className={pathname === '/about-us' ? 'text-green-400 underline hover:text-green-500': ''}>
            <NavigationMenuTrigger><Link href='/about-us'>About Us</Link></NavigationMenuTrigger>
          </NavigationMenuItem>

          <NavigationMenuItem className={pathname === '/rules' ? 'text-green-400 underline hover:text-green-500': ''}>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/rules">Rules</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem className={pathname === '/positions' ? 'text-green-400 underline hover:text-green-500': ''}>
            <NavigationMenuTrigger><Link href='/positions'>Positions</Link></NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* desktop buttons */}
      <div className="hidden md:flex gap-2">
        <button className="bg-[#92e3a9] py-3 px-8 rounded-[2px] text-white cursor-pointer hover:bg-emerald-200 transition">
          <Link href='/signin'>Sign In</Link>
        </button>
        <button className="bg-green-400 py-3 px-8 text-white rounded-[2px] cursor-pointer hover:bg-green-500 transition">
          <Link href='/signup'>Sign Up</Link>
        </button>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger className="p-2">
            <Menu className="h-6 w-6 text-gray-700 cursor-pointer transition hover:text-gray-500" />
          </SheetTrigger>
          <SheetContent side="right" className="z-[9999] w-[250px] sm:w-[300px]">
            <div className="px-4 mt-12 flex flex-col gap-1.5">
              <SheetTitle className="flex items-center gap-2 mx-auto text-lg font-base text-center text-green-400 mb-4 border-b pb-3">
                <img src="/images/Group.png" alt="Logo" />
                Job Pulse
              </SheetTitle>

              {pathname === '/' ? (
                <Accordion
                  type="single"
                  collapsible
                  className="w-full text-gray-800"
                  defaultValue="item-1"
                >
                  <AccordionItem value="item-1" className="border-b">
                    <AccordionTrigger className={`flex justify-between items-center px-3 text-[16px] font-medium cursor-pointer hover:bg-gray-100 rounded transition ${pathname === '/' ? 'text-green-500 underline' : ''}`}>
                      Home
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-3 text-sm text-gray-600 space-y-2">
                      <div className='space-y-2 py-1.5'>
                        <Link href="#our-plans" className="block hover:text-green-500 transition">
                          Our Plans
                        </Link>
                        <Link href="#why-us" className="block hover:text-green-500 transition">
                          Why Job Pulse
                        </Link>
                        <Link href="#latest-jobseekers" className="block hover:text-green-500 transition">
                          Latest Job Seekers
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                <Link href="/" className={`text-base font-medium hover:bg-gray-100 py-3 px-3 rounded-sm transition ${pathname === '/' ? 'text-green-500 underline' : ''}`}>Home</Link>
              )}

              <Link href="/about-us" className={`text-base font-medium hover:bg-gray-100 py-3 px-3 rounded-sm transition ${pathname === '/about-us' ? 'text-green-500 underline' : ''}`}>About Us</Link>
              <Link href="/positions" className={`text-base font-medium hover:bg-gray-100 py-3 px-3 rounded-sm transition ${pathname === '/positions' ? 'text-green-500 underline' : ''}`}>Positions</Link>
              <Link href="/rules" className={`text-base font-medium hover:bg-gray-100 py-3 px-3 rounded-sm transition ${pathname === '/rules' ? 'text-green-500 underline' : ''}`}>Rules</Link>

              <div className="pt-6 border-t flex flex-col space-y-2">
                <Link href="/signin">
                  <button className="w-full bg-[#92e3a9] text-white py-3 rounded hover:bg-emerald-300 transition cursor-pointer">
                    Sign In
                  </button>
                </Link>
                <Link href="/signup">
                  <button className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600 transition cursor-pointer">
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
