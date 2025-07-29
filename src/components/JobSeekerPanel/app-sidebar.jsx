"use client"

import * as React from "react"
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

import { NavMain } from "@/components/JobSeekerPanel/nav-main"
import { NavProjects } from "@/components/JobSeekerPanel/nav-projects"
import { NavUser } from "@/components/JobSeekerPanel/nav-user"
import { TeamSwitcher } from "@/components/JobSeekerPanel/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import Link from "next/link"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
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
          title: "Favorites",
          url: "/jobseeker-panel/favorites",
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

export function AppSidebar({
  themeColor,
  ...props
}) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher themeColor={themeColor} teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
