'use client'

import * as React from "react"
import { useEffect, useState } from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  LayoutDashboard,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"
import { NavMain } from "@/components/templates/JobSeekerPanel/nav-main"
import { NavProjects } from "@/components/templates/JobSeekerPanel/nav-projects"
import { NavUser } from "@/components/templates/JobSeekerPanel/nav-user"
import { TeamSwitcher } from "@/components/templates/JobSeekerPanel/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { useRouter } from "next/navigation"
import Swal from "sweetalert2"

// This is sample data (except for user, which will be fetched from API).
const data = {
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Activities",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "/jobseeker-panel/overview",
        },
        {
          title: "Tickets",
          url: "/jobseeker-panel/tickets",
        },
        {
          title: "Notifications",
          url: "/jobseeker-panel/notifications",
        },
      ],
    },
    {
      title: "Applies",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Sent Requests",
          url: "/jobseeker-panel/sent-requests",
        },
        {
          title: "Active projects",
          url: "/jobseeker-panel/active-projects",
        },
        {
          title: "Employers",
          url: "/jobseeker-panel/employers",
        },
      ],
    }
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ themeColor }) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [userDetails, setUserDetails] = useState(null)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userRes = await fetch('http://localhost:3000/jobseeker/getme', {
          method: 'POST',
          credentials: 'include',
          cache: 'no-store'
        })

        if (userRes.ok) {
          const userData = await userRes.json()
          if (userData.user.role !== 'job_seeker') {
            Swal.fire({
              icon: 'error',
              title: 'Access Denied',
              text: 'Only job seekers can access this page.',
              confirmButtonText: 'OK'
            }).then(() => {
              router.push('/signin')
            })
            return
          }
          setUserDetails(userData.user)
          setLoading(false)
          return
        }

        if (userRes.status === 401) {
          const refreshRes = await fetch('http://localhost:3000/auth/refresh', {
            method: 'POST',
            credentials: 'include'
          })

          if (refreshRes.ok) {
            const retryUserRes = await fetch('http://localhost:3000/jobseeker/getme', {
              method: 'POST',
              credentials: 'include'
            })

            if (retryUserRes.ok) {
              const userData = await retryUserRes.json()
              if (userData.user.role !== 'job_seeker') {
                Swal.fire({
                  icon: 'error',
                  title: 'Access Denied',
                  text: 'Only job seekers can access this page.',
                  confirmButtonText: 'OK'
                }).then(() => {
                  router.push('/signin')
                })
                return
              }
              setUserDetails(userData.user)
              setLoading(false)
              return
            }
          }

          Swal.fire({
            icon: 'error',
            title: 'Unauthorized',
            text: 'Please log in to access this page.',
            confirmButtonText: 'OK'
          }).then(() => {
            router.push('/signin')
          })
        } else {
          throw new Error('Failed to fetch user data')
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred while fetching user data.',
          confirmButtonText: 'OK'
        }).then(() => {
          router.push('/signin')
        })
      }
    }

    fetchUserData()
  }, [router])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <TeamSwitcher themeColor={themeColor} teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userDetails} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}