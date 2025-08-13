"use client"
import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { useEffect } from "react"
import { ThemeColorContext } from "@/contexts/user-theme"
import { colorMap, textColorMap } from "@/utils/constants"

export function HomeNavigationMenu() {
  const { color } = React.useContext(ThemeColorContext)
  const [user, setUser] = React.useState(null)
  const pathname = usePathname()  // current route

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
        }
      } catch (error) {
        console.error(error)
      }
    }

    getUserHandler()
  }, [])

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>

        {/* Home */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link 
              href="/" 
              className={pathname === "/" ? `underline font-bold ${textColorMap[color]}` : ""}
            >
              Home
            </Link>
          </NavigationMenuTrigger>
        </NavigationMenuItem>

        {/* About Us */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link 
              href="/about-us" 
              className={pathname === "/about-us" ? `underline font-bold ${textColorMap[color]}` : ""}
            >
              About Us
            </Link>
          </NavigationMenuTrigger>
        </NavigationMenuItem>

        {/* Rules */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link 
              href="/rules" 
              className={pathname === "/rules" ? `underline font-bold ${textColorMap[color]}` : ""}
            >
              Rules
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Positions */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link 
              href="/positions" 
              className={pathname === "/positions" ? `underline font-bold ${textColorMap[color]}` : ""}
            >
              Positions
            </Link>
          </NavigationMenuTrigger>
        </NavigationMenuItem>

        {/* Dashboard */}
        {user ? (
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <Link 
                href={`/${user.role === 'job_seeker' && !user.is_admin ? 'jobseeker-panel/overview' : user.role === 'company' ? 'company-panel' : 'admin-panel'}`}
                className={
                  pathname === `/${user.role === 'job_seeker' && !user.is_admin ? 'jobseeker-panel/overview' : user.role === 'company' ? 'company-panel' : 'admin-panel'}`
                    ? `underline font-bold ${textColorMap[color]}`
                    : ""
                }
              >
                Dashboard
              </Link>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        ) : null}

      </NavigationMenuList>
    </NavigationMenu>
  )
}
