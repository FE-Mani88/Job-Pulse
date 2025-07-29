'use client'
import { useState, useContext } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger
} from "@/components/ui/sidebar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardAction
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Clock, DollarSignIcon, Heart, Plus } from "lucide-react"
import { ThemeColorContext } from "@/contexts/user-theme"
import { strokeColorMap } from "@/utils/constants"
import { Button } from "@/components/ui/button"
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Page() {
  const { color } = useContext(ThemeColorContext)
  const [activeTab, setActiveTab] = useState("positions")

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="bg-background sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>October 2024</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <div className="px-4 py-3">
          <div className="w-full flex flex-col gap-6">
            <Tabs defaultValue="positions" onValueChange={setActiveTab}>
              {/* 👇 اینجا دکمه Add کنار تب‌ها اضافه شده */}
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="positions">Positions</TabsTrigger>
                  <TabsTrigger value="applies">Applies</TabsTrigger>
                </TabsList>
                {activeTab === "positions" && (
                  <Dialog>
                  <form>
                    <DialogTrigger asChild>
                      <Button className='cursor-pointer'>Create New Position</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Add Position</DialogTitle>
                        <DialogDescription>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio obcaecati nostrum debitis.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4">
                        <div className="grid gap-3">
                          <Label htmlFor="name-1">Title</Label>
                          <Input id="name-1" name="title" />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="username-1">Description</Label>
                          <Input id="username-1" name="description" />
                        </div>
                        
                      </div>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Save changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </form>
                </Dialog>
                )}
              </div>

              <TabsContent value="positions" className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-1">
                {/* کارت‌های پوزیشن */}
                {[...Array(8)].map((_, idx) => (
                  <Card key={idx}>
                    <CardHeader>
                      <CardTitle>Full Time Developer</CardTitle>
                      <CardDescription>We need a frontend developer in Test company</CardDescription>
                      {/* <CardAction><Heart className="w-5 h-5" fill={strokeColorMap[color]} strokeWidth={0} /></CardAction> */}
                    </CardHeader>
                    <CardContent>
                      <p>Full Time</p>
                    </CardContent>
                    <CardFooter className='block'>
                      <p>Pay: 220 - 250$</p>

                      <Button className='w-full mt-5 cursor-pointer'>More Details</Button>
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="applies" className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-1">
                <Card>
                  <CardHeader>
                    <CardTitle>Full Time Developer</CardTitle>
                    <CardDescription>We need a frontend developer in Test company</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="flex items-center gap-1">Suggested Salary:
                      <span className="flex items-center gap-1">120 <DollarSignIcon className="w-4 h-4" /></span>
                    </p>
                    <p className="flex items-center gap-1 mt-2">Suggested Time:
                      <span className="flex items-center gap-1">7 Days <Clock className="w-4 h-4" /></span>
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="w-full flex justify-between gap-2">
                      <button className="bg-green-500 px-2 py-2 rounded-md w-1/2 cursor-pointer hover:bg-green-600 transition">Accept</button>
                      <button className="bg-red-500 px-2 py-2 rounded-md w-1/2 cursor-pointer hover:bg-red-600 transition">Reject</button>
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
