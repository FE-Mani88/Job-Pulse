'use client'
import React, { useState, useEffect } from "react"
import { AppSidebar } from "@/components/templates/CompanyPanel/app-sidebar"
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DollarSignIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Formik } from "formik"
import { useRouter } from "next/navigation"
import { PriceRange } from "@/components/templates/CompanyPanel/PriceRange"
import { BeatLoader } from "react-spinners";
import Swal from "sweetalert2"
import Link from "next/link"
import { Textarea } from "@/components/ui/textarea"

// ------------------ helper for retry on 401 ------------------
async function fetchWithRetry(url, options, router) {
  let res = await fetch(url, { credentials: 'include', cache: 'no-store', ...options });

  if (res.status === 401) {
    const refreshRes = await fetch('http://localhost:3000/auth/refresh', {
      method: 'POST',
      credentials: 'include'
    });
    if (!refreshRes.ok) {
      router.push('/signin');
      throw new Error('Unauthorized');
    }
    res = await fetch(url, { credentials: 'include', cache: 'no-store', ...options });
  }

  return res;
}

export default function Page() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("positions");
  const [userDetails, setUserDetails] = useState(null);
  const [positions, setPositions] = useState([]);
  const [companyDetails, setCompanyDetails] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [salary, setSalary] = useState([50]);
  const [receivedApplies, setReceivedApplies] = useState([]);
  const [denyReason, setDenyReason] = useState('');

  // ------------------ data loaders ------------------
  const getMyPositionsHandler = async () => {
    try {
      const res = await fetchWithRetry('http://localhost:3000/position/mypositions', { method: 'POST' }, router);
      if (!res.ok) throw new Error('Failed to fetch positions');
      const data = await res.json();
      setPositions(data.positions || []);
    } catch (err) {
      Swal.fire({ icon: 'error', title: 'Error', text: err.message });
    }
  };

  const getReceivedAppliesHandler = async () => {
    try {
      const res = await fetchWithRetry(`http://localhost:3000/jobseeker/allrequests`, { method: 'POST' }, router);
      if (!res.ok) throw new Error('Failed to fetch applies');
      const data = await res.json();
      setReceivedApplies(data.requests || []);
    } catch (err) {
      console.error(err);
    }
  };

  const refreshData = async () => {
    await Promise.all([getMyPositionsHandler(), getReceivedAppliesHandler()]);
  };

  // ------------------ actions ------------------
  const acceptApplyHandler = async (requestId) => {
    try {
      const res = await fetchWithRetry(`http://localhost:3000/company/acceptrequest/${requestId}`, { method: 'POST' }, router);
      if (res.ok) {
        Swal.fire({ icon: 'success', title: 'Application Accepted' });
        refreshData();
      }
    } catch (err) {
      Swal.fire({ icon: 'error', title: 'Error', text: err.message });
    }
  };

  const rejectApplyHandler = async (requestId) => {
    try {
      const res = await fetchWithRetry(`http://localhost:3000/company/denyrequest/${requestId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ deny_reason: denyReason })
      }, router);

      if (res.ok) {
        Swal.fire({ icon: 'success', title: 'Application Rejected' });
        setDenyReason('');
        refreshData();
      }
    } catch (err) {
      Swal.fire({ icon: 'error', title: 'Error', text: err.message });
    }
  };

  // ------------------ init ------------------
  useEffect(() => {
    const init = async () => {
      try {
        const userRes = await fetchWithRetry('http://localhost:3000/jobseeker/getme', { method: 'POST' }, router);
        if (!userRes.ok) throw new Error('Unauthorized');
        const userData = await userRes.json();

        if (userData.user.role !== 'company') {
          Swal.fire({ icon: 'error', title: 'You Can\'t Access This Page' });
          router.push('/signin');
          return;
        }
        setUserDetails(userData.user);

        const companyRes = await fetchWithRetry('http://localhost:3000/company/getme', { method: 'POST' }, router);
        if (companyRes.ok) {
          const companyData = await companyRes.json();
          setCompanyDetails(companyData);
        }

        await refreshData();
        setLoading(false);
      } catch (err) {
        console.error(err);
        router.push('/signin');
      }
    };

    init();
  }, []);

  // ------------------ loading ------------------
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <BeatLoader color="#36d7b7" size={16} />
      </div>
    );
  }

  // ------------------ render ------------------
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
                <Formik initialValues={{ name: '', description: '', address: '', phone: '', email: '' }}
                  onSubmit={async (values) => {
                    try {
                      const createRes = await fetchWithRetry('http://localhost:3000/company/create', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(values)
                      }, router);

                      if (createRes.ok) {
                        Swal.fire({ icon: 'success', title: 'Company Created Successfully' });
                        setIsDialogOpen(false);
                        const companyRes = await fetchWithRetry('http://localhost:3000/company/getme', { method: 'POST' }, router);
                        if (companyRes.ok) {
                          setCompanyDetails(await companyRes.json());
                        }
                      } else {
                        Swal.fire({ icon: 'error', title: 'Failed to create company' });
                      }
                    } catch (err) {
                      Swal.fire({ icon: 'error', title: 'Error', text: err.message });
                    }
                  }}>
                  {({ values, handleChange, handleSubmit }) => (
                    <form>
                      <DialogTrigger asChild>
                        <Button variant="outline">Add Your Company</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Company</DialogTitle>
                          <DialogDescription>Make your company here.</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4">
                          {['name', 'description', 'address', 'phone', 'email'].map((field) => (
                            <div key={field} className="grid gap-3">
                              <Label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</Label>
                              <Input id={field} name={field} value={values[field]} onChange={handleChange} />
                            </div>
                          ))}
                        </div>
                        <DialogFooter>
                          <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
                          <Button onClick={handleSubmit}>Create Company</Button>
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
                      initialValues={{ name: '', description: '', salary: salary[0].toString(), degree: 'diploma' }}
                      onSubmit={async (values, { resetForm }) => {
                        try {
                          const res = await fetchWithRetry('http://localhost:3000/position/create', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(values)
                          }, router);

                          if (res.ok) {
                            Swal.fire({ icon: 'success', title: 'Position Created Successfully' });
                            setIsDialogOpen(false);
                            resetForm();
                            getMyPositionsHandler();
                          } else if (res.status === 404) {
                            Swal.fire({ icon: 'error', title: 'Create your company first' });
                          } else {
                            Swal.fire({ icon: 'error', title: 'Failed to create position' });
                          }
                        } catch (err) {
                          Swal.fire({ icon: 'error', title: 'Error', text: err.message });
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
                              <DialogDescription>Enter details of the new job position.</DialogDescription>
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
                                  setSalary(value);
                                  setFieldValue('salary', value[0].toString());
                                }}
                              />
                              <div className="grid gap-3">
                                <Label htmlFor="degree">Degree</Label>
                                <Input id="degree" name="degree" value={values.degree} onChange={handleChange} />
                              </div>
                            </div>
                            <DialogFooter>
                              <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
                              <Button onClick={handleSubmit} type="submit">Save changes</Button>
                            </DialogFooter>
                          </DialogContent>
                        </form>
                      )}
                    </Formik>
                  </Dialog>
                )}
              </div>

              {/* positions tab */}
              <TabsContent value="positions" className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-1">
                {positions?.map((position, idx) => (
                  <Card key={idx} className='overflow-hidden'>
                    <CardHeader>
                      <CardTitle>{position.name}</CardTitle>
                      <CardDescription>{position.description}</CardDescription>
                    </CardHeader>
                    <CardContent><p>Full Time</p></CardContent>
                    <CardFooter className='block'>
                      <p>Pay: {position.salary}$</p>
                      <Button className='w-full mt-5 cursor-pointer'>More Details</Button>
                    </CardFooter>
                  </Card>
                ))}
                {!positions?.length && (
                  <div className="col-span-4 min-h-[500px] flex flex-col items-center justify-center p-8 border rounded-lg bg-muted/30">
                    <span className="mb-8 text-8xl">):</span>
                    <p className="text-lg sm:text-3xl">There is not any position yet</p>
                  </div>
                )}
              </TabsContent>

              {/* applies tab */}
              <TabsContent value="applies" className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-1">
                {receivedApplies?.map((apply) => (
                  <Card key={apply.id} className='overflow-hidden'>
                    <CardHeader>
                      <CardTitle>{apply.user.username}</CardTitle>
                      <CardDescription>{apply.user.email}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="flex items-center gap-1">Suggested Salary:
                        <span className="flex items-center gap-1">120 <DollarSignIcon className="w-4 h-4" /></span>
                      </p>
                      <p className="flex items-center gap-1 mt-2">Resume File:
                        <span className="flex items-center gap-1"><Link className="underline" href={apply.resume}>Download File</Link></span>
                      </p>
                    </CardContent>
                    <CardFooter>
                      <div className="w-full flex justify-between gap-2">
                        <button className="w-full bg-green-500 px-2 py-2 rounded-md cursor-pointer hover:bg-green-600 transition" onClick={() => acceptApplyHandler(apply.id)}>Accept</button>
                        <Dialog>
                          <form className='w-full'>
                            <DialogTrigger asChild className='w-full'>
                              <button className="w-full bg-red-500 px-2 py-2 rounded-md cursor-pointer hover:bg-red-600 transition">Reject</button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                              <DialogHeader>
                                <DialogTitle>Reject Reason</DialogTitle>
                                <DialogDescription>Provide a reason for rejection.</DialogDescription>
                              </DialogHeader>
                              <div className="grid gap-4">
                                <Textarea value={denyReason} onChange={(e) => setDenyReason(e.target.value)} placeholder="Type your message here." />
                              </div>
                              <DialogFooter>
                                <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
                                <Button type="button" onClick={() => rejectApplyHandler(apply.id)}>Confirm</Button>
                              </DialogFooter>
                            </DialogContent>
                          </form>
                        </Dialog>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
                {!receivedApplies.length && (
                  <div className="col-span-4 min-h-[500px] flex flex-col items-center justify-center p-8 border rounded-lg bg-muted/30">
                    <span className="mb-8 text-8xl">):</span>
                    <p className="text-lg sm:text-3xl">There is not any Apply yet</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
