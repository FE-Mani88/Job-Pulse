'use client'
import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Formik } from "formik"
import Swal from "sweetalert2"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function MyCompanyDialog({ companyDetails, setCompanyDetails, setIsDialogOpen }) {
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>My Company</DialogTitle>
        <DialogDescription>
          View and edit your company details here.
        </DialogDescription>
      </DialogHeader>
      <Formik
        initialValues={{
          name: companyDetails?.name || '',
          description: companyDetails?.description || '',
          address: companyDetails?.address || '',
          phone: companyDetails?.phone || '',
          email: companyDetails?.email || ''
        }}
        enableReinitialize
        onSubmit={async (values) => {
          try {
            const updateCompanyRes = await fetch('http://localhost:3000/company/update', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(values),
              credentials: 'include'
            })
            if (updateCompanyRes.ok) {
              const updatedCompany = await updateCompanyRes.json()
              setCompanyDetails(updatedCompany.company)
              Swal.fire({
                icon: 'success',
                title: 'Company Updated Successfully',
                confirmButtonText: 'OK'
              })
              setIsDialogOpen(false)
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to update company.'
              })
            }
          } catch (error) {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'An error occurred while updating the company.'
            })
          }
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              {['name', 'description', 'address', 'phone', 'email'].map((field) => (
                <div key={field} className="grid gap-3">
                  <Label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</Label>
                  <Input
                    id={field}
                    name={field}
                    value={values[field]}
                    onChange={handleChange}
                  />
                </div>
              ))}
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        )}
      </Formik>
    </DialogContent>
  )
}

export function NavUser({ user }) {
  const { isMobile } = useSidebar()
  const router = useRouter()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [companyDetails, setCompanyDetails] = useState(null)

  const employerLogoutHandler = async () => {
    try {
      await fetch('http://localhost:3000/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
      Swal.fire({
        icon: 'success',
        title: 'You Are Logged Out Successfully',
        confirmButtonText: 'OK'
      }).then(() => {
        router.push('/')
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to log out.'
      })
    }
  }

  const companyDisplayHandler = async () => {
    try {
      const companyRes = await fetch('http://localhost:3000/company/getme', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
      const companyData = await companyRes.json()
      if (companyRes.ok && companyData.company) {
        setCompanyDetails(companyData.company)
        setIsDialogOpen(true)
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No company found. Please create a company first.'
        })
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to fetch company details.'
      })
    }
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.username}</span>
                <span className="truncate text-xs">{user.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="start"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user.name}</span>
                  <span className="truncate text-xs">{user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Sparkles className="mr-2 h-4 w-4" />
                <span>Upgrade to Pro</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BadgeCheck className="mr-2 h-4 w-4" />
                <span>Account</span>
              </DropdownMenuItem>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <DropdownMenuItem onClick={companyDisplayHandler} onSelect={(e) => e.preventDefault()}>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>My Company</span>
                  </DropdownMenuItem>
                </DialogTrigger>
                <MyCompanyDialog
                  companyDetails={companyDetails}
                  setCompanyDetails={setCompanyDetails}
                  setIsDialogOpen={setIsDialogOpen}
                />
              </Dialog>
              <DropdownMenuItem>
                <Bell className="mr-2 h-4 w-4" />
                <span>Notifications</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={employerLogoutHandler}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}