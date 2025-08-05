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
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Clock, DollarSignIcon } from "lucide-react"
import { ThemeColorContext } from "@/contexts/user-theme"
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
import { Formik } from "formik"
import { useRouter } from "next/navigation"
import Swal from "sweetalert2"
import { PriceRange } from "@/components/templates/CompanyPanel/PriceRange"
import { BarLoader, BeatLoader, ClipLoader } from "react-spinners";

export default function Page() {
  const { color } = useContext(ThemeColorContext)
  const [activeTab, setActiveTab] = useState("positions")
  const [loading, setLoading] = useState(true)
  const [userDetails, setUserDetails] = useState([])
  const [positions, setPositions] = useState([])
  const [companyDetails, setCompanyDetails] = useState(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [salary, setSalary] = useState([50])

  const router = useRouter()

  const getMyPositionsHandler = async () => {
    try {
      const myPositionsRes = await fetch('http://localhost:3000/position/mypositions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
      const myPositionsData = await myPositionsRes.json()
      setPositions(myPositionsData.positions)
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to fetch positions.',
      })
    }
  }

  useEffect(() => {
    const getUserHandler = async () => {
      try {
        const userRes = await fetch('http://localhost:3000/jobseeker/getme', {
          method: 'POST',
          credentials: 'include',
          cache: 'no-store'
        })

        if (userRes.ok) {
          const userData = await userRes.json()
          if (userData.user.role !== 'company') {
            Swal.fire({
              icon: 'error',
              title: 'You Cant Access To This Page :))',
              confirmButtonText: 'I Undrestood'
            })
            return router.push('/signin')
          }
          setUserDetails(userData.user)
          setLoading(false)
          return
        }

        if (userRes.status === 401) {
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
              setUserDetails(userData.user)
              setLoading(false)
              return
            }
          }
          router.push('/signin')
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred while fetching user data.',
        })
        router.push('/signin')
      }
    }

    const getCompanyHandler = async () => {
      try {
        const companyRes = await fetch('http://localhost:3000/company/getme', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        })
        const companyData = await companyRes.json()
        setCompanyDetails(companyData)
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to fetch company data.',
        })
      }
    }

    getUserHandler()
    getMyPositionsHandler()
    getCompanyHandler()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <BeatLoader color="#36d7b7" loading={true} size={16} />
      </div>
    )
  }

  return (
    <SidebarProvider>
      <AppSidebar user={userDetails} />
      <SidebarInset>
        <header className="bg-background sticky top-0 flex h-16 shrink-0 justify-between items-center gap-2 border-b px-4">
          <div className="flex h-16 shrink-0 items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage>{new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div>
            {companyDetails?.company ? (
              <Button variant="outline">{companyDetails.company.name}</Button>
            ) : (
              <Dialog>
                <Formik initialValues={{ name: '', description: '', address: '', phone: '', email: '' }} onSubmit={async (values) => {
                  try {
                    const createCompanyRes = await fetch('http://localhost:3000/company/create', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(values),
                      credentials: 'include'
                    })
                    if (createCompanyRes.ok) {
                      Swal.fire({
                        icon: 'success',
                        title: 'Company Created Successfully',
                        confirmButtonText: 'OK'
                      })
                      const companyData = await createCompanyRes.json()
                      setCompanyDetails(companyData)
                    } else {
                      Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Failed to create company.',
                      })
                    }
                  } catch (error) {
                    Swal.fire({
                      icon: 'error',
                      title: 'Error',
                      text: 'An error occurred while creating the company.',
                    })
                  }
                }}>
                  {({ values, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                      <DialogTrigger asChild>
                        <Button variant="outline">Add Your Company</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Edit profile</DialogTitle>
                          <DialogDescription>
                            Make changes to your profile here.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4">
                          {['name', 'description', 'address', 'phone', 'email'].map((field, i) => (
                            <div key={i} className="grid gap-3">
                              <Label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</Label>
                              <Input id={field} name={field} value={values[field]} onChange={handleChange} />
                            </div>
                          ))}
                        </div>
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                          </DialogClose>
                          <Button type="submit">Save changes</Button>
                        </DialogFooter>
                      </DialogContent>
                    </form>
                  )}
                </Formik>
              </Dialog>
            )}
          </div>
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
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <Formik
                      initialValues={{
                        name: '',
                        description: '',
                        salary: salary[0].toString(),
                        degree: 'diploma'
                      }}
                      onSubmit={async (values, { resetForm }) => {
                        try {
                          const res = await fetch('http://localhost:3000/position/create', {
                            method: 'POST',
                            headers: {
                              'Content-Type': 'application/json'
                            },
                            credentials: 'include',
                            body: JSON.stringify(values)
                          })

                          if (res.ok) {
                            Swal.fire({
                              icon: 'success',
                              title: 'Position Created Successfully',
                              confirmButtonText: 'OK'
                            })
                            setIsDialogOpen(false)
                            resetForm()
                            getMyPositionsHandler()
                          } else {
                            Swal.fire({
                              icon: 'error',
                              title: 'Error',
                              text: 'Failed to create position.',
                            })
                          }
                        } catch (error) {
                          Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'An error occurred while creating the position.',
                          })
                        }
                      }}
                    >
                      {({ values, handleChange, handleSubmit, setFieldValue }) => (
                        <form>
                          <DialogTrigger asChild>
                            <Button className='cursor-pointer'>Create New Position</Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                              <DialogTitle>Add Position</DialogTitle>
                              <DialogDescription>
                                Enter details of the new job position.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4">
                              <div className="grid gap-3">
                                <Label htmlFor="name">Title</Label>
                                <Input id="name" name="name" value={values.name} onChange={handleChange} />
                              </div>
                              <div className="grid gap-3">
                                <Label htmlFor="description">Description</Label>
                                <Input id="description" name="description" value={values.description} onChange={handleChange} />
                              </div>

                              <PriceRange
                                price={salary}
                                setPrice={(value) => {
                                  setSalary(value)
                                  setFieldValue('salary', value[0].toString())
                                }}
                              />

                              <div className="grid gap-3">
                                <Label htmlFor="degree">Degree</Label>
                                <Input id="degree" name="degree" value={values.degree} onChange={handleChange} />
                              </div>
                            </div>
                            <DialogFooter>
                              <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                              </DialogClose>
                              <Button onClick={handleSubmit} type="submit">Save changes</Button>
                            </DialogFooter>
                          </DialogContent>
                        </form>
                      )}
                    </Formik>
                  </Dialog>
                )}
              </div>

              <TabsContent value="positions" className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-1">
                {positions?.map((position, idx) => (
                  <Card key={idx} className='overflow-hidden'>
                    <CardHeader>
                      <CardTitle>{position.name}</CardTitle>
                      <CardDescription>{position.description}</CardDescription>
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