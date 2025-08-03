'use client'
import React, { useState, useContext, useEffect } from "react"
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
import { PriceRange } from "@/components/templates/CompanyPanel/PriceRange"
import { Formik } from "formik"
import { useRouter } from "next/navigation"

export default function Page() {
  const { color } = useContext(ThemeColorContext)
  const [activeTab, setActiveTab] = useState("positions")
  const [loading, setLoading] = useState(true)
  const [userDetails, setUserDetails] = useState([])
  const [positions, setPositions] = useState([])

  const router = useRouter()

  useEffect(() => {
    const getUserHandler = async () => {
      const userRes = await fetch('http://localhost:3000/jobseeker/getme', {
        method: 'POST',
        credentials: 'include'
      })

      if (userRes.ok) {
        const userData = await userRes.json()
        setUserDetails(userData.user)
        return setLoading(false)
      }

      if (userRes.status == 401) {
        const userRefreshRes = await fetch('http://localhost:3000/auth/refresh', {
          method: 'POST',
          credentials: 'include'
        })

        if (userRefreshRes.ok) {
          const retryUserRes = await fetch('http://localhost:3000/jobseeker/getme', {
            method: 'POST',
            credentials: 'include'
          })

          if (retryUserRes.ok) {
            const userData = await retryUserRes.json()
            console.log("userData", userData)
            setUserDetails(userData.user)
            setLoading(false)
            return;
          }

          return;
        }

        router.push('/signin')
      }
    }

    getUserHandler()
  }, [])

  useEffect(() => {
    const getMyPositionsHandler = async () => {
      const myPositionsRes = await fetch('http://localhost:3000/position/mypositions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
      const myPositionsData = await myPositionsRes.json()

      setPositions(myPositionsData.positions)
    }

    getMyPositionsHandler()
  }, [])

  if (loading) {
    return (
      <div>Loading...</div>
    )
  } else {
    return (
      <SidebarProvider>
        <AppSidebar user={userDetails} />
        <SidebarInset>
          <header className="bg-background sticky top-0 flex h-16 shrink-0 justify-between items-center gap-2 border-b px-4">
            <div className="flex h-16 shrink-0 items-center gap-2">
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
            </div>

            {/* <div>Test</div> */}
          </header>

          <div className="px-4 py-3">
            <div className="w-full flex flex-col gap-6">
              <Tabs defaultValue="positions" onValueChange={setActiveTab}>
                <div className="flex items-center justify-between">
                  <TabsList>
                    <TabsTrigger value="positions">Positions</TabsTrigger>
                    <TabsTrigger value="applies">Applies</TabsTrigger>
                  </TabsList>
                  {activeTab === "positions" && (
                    <Dialog>
                      <Formik initialValues={{ name: '', description: '', salary: '40', degree: 'diploma' }} onSubmit={async (values) => {
                        const res = await fetch('http://localhost:3000/position/create', {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json'
                          },
                          credentials: 'include',
                          body: JSON.stringify({
                            name: values.name,
                            description: values.description,
                            salary: values.salary,
                            degree: values.degree
                          })
                        })
                        const data = await res.json()

                        console.log('POSITION CREATE: ', data)
                      }}>
                        {({ values, handleChange, handleSubmit }) => (
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
                                  <Input id="name-1" name="name" value={values.name} onChange={handleChange} />
                                </div>
                                <div className="grid gap-3">
                                  <Label htmlFor="username-1">Description</Label>
                                  <Input id="username-1" name="description" value={values.description} onChange={handleChange} />
                                </div>

                                <PriceRange className='w-full pt-2' />
                              </div>
                              <DialogFooter>
                                <DialogClose asChild>
                                  <Button variant="outline">Cancel</Button>
                                </DialogClose>
                                <Button type="submit" onClick={handleSubmit}>Save changes</Button>
                              </DialogFooter>
                            </DialogContent>
                          </form>
                        )}
                      </Formik>
                    </Dialog>
                  )}
                </div>

                <TabsContent value="positions" className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-1">
                  {/* Position Cards */}
                  {positions?.map((position, idx) => (
                    <Card key={idx}>
                      <CardHeader>
                        <CardTitle>{position.name}</CardTitle>
                        <CardDescription>{position.description}</CardDescription>
                        {/* <CardAction><Heart className="w-5 h-5" fill={strokeColorMap[color]} strokeWidth={0} /></CardAction> */}
                      </CardHeader>
                      <CardContent>
                        <p>Full Time</p>
                      </CardContent>
                      <CardFooter className='block'>
                        <p>Pay: {position.salary}$</p>

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

}
