"use client"
import * as React from "react"
import Link from "next/link"
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
import { textColorMap } from "@/utils/constants"

export function HomeNavigationMenu() {

  const {color} = React.useContext(ThemeColorContext)
  const [user, setUser] = React.useState(null)

  useEffect(() => {
    const getUserHandler = async () => {
      try {
        const userResponse = await fetch('http://localhost:3000/jobseeker/getme', {
          method: 'POST',
          credentials: 'include'
        })

        if (userResponse.ok) {
          const userData = await userResponse.json()
          console.log(userData)
          setUser(userData.user)
        }
      } catch (error) {
        throw error
      }
    }

    getUserHandler()
  }, [])

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem className={textColorMap[color]}>
          <NavigationMenuTrigger>
            <Link href='/'>Home</Link>
          </NavigationMenuTrigger>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link href='/about-us'>
              About Us
            </Link>
          </NavigationMenuTrigger>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/rules">Rules</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link href='/positions'>Positions</Link>
          </NavigationMenuTrigger>
        </NavigationMenuItem>


        {/* Dashboard Link */}
        {user ? (
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <Link href={`/${user.role === 'job_seeker' && !user.is_admin ? 'jobseeker-panel/overview' : user.role === 'company' ? 'company-panel' : 'admin-panel'}`}>Dashboard</Link>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        ) : null}


      </NavigationMenuList>
    </NavigationMenu>
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
