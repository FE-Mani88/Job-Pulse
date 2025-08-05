'use client'

import React, { useContext, useEffect, useState } from 'react'
import { AppSidebar } from '@/components/JobSeekerPanel/app-sidebar'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { ThemeColorContext } from '@/contexts/user-theme'
import { useTheme } from 'next-themes'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem
} from '@/components/ui/select'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'

export default function JobSeekerPanelLayout({ children }) {
  const { color, changeColor } = useContext(ThemeColorContext)
  const { setTheme } = useTheme()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [userDetails, setUserDetails] = useState(null)

  useEffect(() => {
    const checkAuth = async () => {
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
          text: 'An error occurred while checking authentication.',
          confirmButtonText: 'OK'
        }).then(() => {
          router.push('/signin')
        })
      }
    }

    checkAuth()
  }, [router])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <SidebarProvider>
      <AppSidebar themeColor={color} user={userDetails} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 border-b">
          <div className="w-full flex justify-between items-center pr-2 sm:pr-6">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      Home page
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Overview</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <div className='flex gap-2'>
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
          </div>
        </header>

        <div className="">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}