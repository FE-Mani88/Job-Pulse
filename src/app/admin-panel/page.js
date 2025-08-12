'use client'
import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { ArrowUpDown, CalendarIcon, CalendarRange, BarChartIcon as ChartNoAxesCombined, ChevronDown, DollarSign, MoreHorizontal, Users, ClipboardCopy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardAction,
} from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Checkbox } from '@/components/ui/checkbox'

// tanstack table
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { ChartLineInteractive } from '@/components/templates/AdminPanel/ChartLine'
import Header from '@/components/templates/AdminPanel/Header'
import { colorMap } from '@/utils/constants'

const data = [
  { id: 'm5gr84i9', amount: 316, status: 'success', email: 'ken99@example.com' },
  { id: '3u1reuv4', amount: 242, status: 'success', email: 'Abe45@example.com' },
  { id: 'derv1ws0', amount: 837, status: 'processing', email: 'Monserrat44@example.com' },
  { id: '5kma53ae', amount: 874, status: 'success', email: 'Silas22@example.com' },
  { id: 'bhqecj4p', amount: 721, status: 'failed', email: 'carmella@example.com' },
]

const columns = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'status',
    header: 'Username',
    cell: ({ row }) => <div className="capitalize">{row.getValue('status')}</div>,
  },
  {
    accessorKey: 'email',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Email
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div className="lowercase">{row.getValue('email')}</div>,
  },
  {
    accessorKey: 'amount',
    header: () => <div className="text-right">Role</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount)
      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

const ticketColumns = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
        ID
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div className="tabular-nums">{row.getValue('id')}</div>,
  },
  {
    accessorKey: 'subject',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
        Subject
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div className="font-medium">{row.getValue('subject')}</div>,
  },
  {
    accessorKey: 'description',
    header: 'Description',
    cell: ({ row }) => (
      <div className="text-muted-foreground truncate max-w-[520px]">
        {row.getValue('description')}
      </div>
    ),
  },
  {
    accessorKey: 'isAnswered',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
        Status
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const answered = row.getValue('isAnswered')
      return answered ? (
        <span className="inline-flex items-center rounded-md bg-emerald-600 px-2 py-1 text-xs font-medium text-white">
          Answered
        </span>
      ) : (
        <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
          Open
        </span>
      )
    },
  },
  {
    accessorKey: 'slug',
    header: 'Slug',
    cell: ({ row }) => (
      <span className="text-xs text-muted-foreground">{row.getValue('slug')}</span>
    ),
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const t = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(String(t.id))}>
              <ClipboardCopy className="mr-2 h-4 w-4" />
              Copy ticket ID
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(t.slug)}>
              <ClipboardCopy className="mr-2 h-4 w-4" />
              Copy slug
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => alert(`Subject: ${t.subject}`)}>
              View details
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export default function Page() {
  // Shared UI state
  const [date, setDate] = useState(undefined)
  const [themeColor, setThemeColor] = useState('green')
  const getThemeValueHandler = (themeValue) => setThemeColor(themeValue)

  const [sorting, setSorting] = useState([])
  const [columnFilters, setColumnFilters] = useState([])
  const [columnVisibility, setColumnVisibility] = useState({})
  const [rowSelection, setRowSelection] = useState({})
  const [users, setUsers] = useState([])
  const [companies, setCompanies] = useState([])
  const [positions, setPositions] = useState([])

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  const [tickets, setTickets] = useState([])
  const [ticketsLoading, setTicketsLoading] = useState(false)
  const [ticketsError, setTicketsError] = useState(null)

  const [tSorting, setTSorting] = useState([])
  const [tColumnFilters, setTColumnFilters] = useState([])
  const [tColumnVisibility, setTColumnVisibility] = useState({})
  const [tRowSelection, setTRowSelection] = useState({})

  const ticketsTable = useReactTable({
    data: tickets,
    columns: ticketColumns,
    onSortingChange: setTSorting,
    onColumnFiltersChange: setTColumnFilters,
    onColumnVisibilityChange: setTColumnVisibility,
    onRowSelectionChange: setTRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 5, // فقط 5 تیکت در هر صفحه
      },
    },
    state: {
      sorting: tSorting,
      columnFilters: tColumnFilters,
      columnVisibility: tColumnVisibility,
      rowSelection: tRowSelection,
    },
  })

  useEffect(() => {
    const getUsersHandler = async () => {
      try {
        let usersResponse = await fetch('http://localhost:3000/auth/allusers', {
          method: 'POST',
          credentials: 'include'
        })

        // اگر توکن منقضی شده
        if (usersResponse.status === 401) {
          const refreshRes = await fetch('http://localhost:3000/auth/refresh', {
            method: 'POST',
            credentials: 'include'
          })
          if (!refreshRes.ok) throw new Error('Token refresh failed')

          // دوباره درخواست بفرست
          usersResponse = await fetch('http://localhost:3000/auth/allusers', {
            method: 'POST',
            credentials: 'include'
          })
        }

        if (usersResponse.ok) {
          const usersData = await usersResponse.json()
          setUsers(usersData.users)
        } else {
          throw new Error(`Users request failed: ${usersResponse.status}`)
        }
      } catch (error) {
        console.error(error)
      }
    }

    getUsersHandler()
  }, [])

  useEffect(() => {
    const getCompaniesHandler = async () => {
      try {
        let companiesResponse = await fetch('http://localhost:3000/company', {
          credentials: 'include'
        })

        // اگر توکن منقضی شده
        if (companiesResponse.status === 401) {
          const refreshRes = await fetch('http://localhost:3000/auth/refresh', {
            method: 'POST',
            credentials: 'include'
          })
          if (!refreshRes.ok) throw new Error('Token refresh failed')

          // دوباره درخواست بفرست
          companiesResponse = await fetch('http://localhost:3000/company', {
            credentials: 'include'
          })
        }

        if (companiesResponse.ok) {
          const companiesData = await companiesResponse.json()
          setCompanies(companiesData.companies)
        } else {
          throw new Error(`Companies request failed: ${companiesResponse.status}`)
        }
      } catch (error) {
        console.error(error)
      }
    }

    getCompaniesHandler()
  }, [])

  useEffect(() => {
    const getPositionsHandler = async () => {
      try {
        const positionsResponse = await fetch('http://localhost:3000/position/allpositions')

        if (positionsResponse.ok) {
          const positionsData = await positionsResponse.json()
          setPositions(positionsData.result)
        }
      } catch (error) {
        throw error
      }
    }

    getPositionsHandler()
  }, [])

  useEffect(() => {
    const getUsersTickets = async () => {
      try {
        setTicketsLoading(true)
        setTicketsError(null)
        const ticketsResponse = await fetch('http://localhost:3000/ticket/alltickets', {
          method: 'POST',
          credentials: 'include',
        })
        if (!ticketsResponse.ok) {
          throw new Error('Failed to fetch tickets')
        }
        const ticketsData = await ticketsResponse.json()
        // ساختار پاسخ شما:
        // { tickets: [...], success: true }
        setTickets(Array.isArray(ticketsData?.tickets) ? ticketsData.tickets : [])
      } catch (error) {
        setTicketsError(error?.message || 'Unknown error')
      } finally {
        setTicketsLoading(false)
      }
    }
    getUsersTickets()
  }, [])

  return (
    <>
      <Header getThemeValueHandler={getThemeValueHandler} />

      <main className="mt-6 w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-semibold">Dashboard</h2>
          <div className="flex items-center gap-1.5">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  data-empty={!date}
                  className="data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal"
                >
                  <CalendarIcon />
                  {date ? format(date, 'PPP') : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} />
              </PopoverContent>
            </Popover>

            <Button className={`${colorMap[themeColor]} text-white dark:text-white cursor-pointer`}>
              Download
            </Button>
          </div>
        </div>

        {/* Start Tabs */}
        <div className="flex mt-6 w-full flex-col gap-6">
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="subscribtion">Subscribtion</TabsTrigger>
              <TabsTrigger value="tickets">Tickets</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>

            {/* Overview */}
            <TabsContent value="overview" className="mt-1.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 xl:px-0">
                <Card className="gap-4">
                  <CardHeader>
                    <CardTitle className="text-lg">Total Revenue</CardTitle>
                    <CardAction className={`${colorMap[themeColor]} text-white py-1.5 px-1.5 rounded-sm`}>
                      <DollarSign className="w-6 h-6" />
                    </CardAction>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-semibold">$45,123.89</p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-gray-500">+21% from the last year</p>
                  </CardFooter>
                </Card>

                <Card className="gap-4">
                  <CardHeader>
                    <CardTitle className="text-lg">Subscribtions</CardTitle>
                    <CardAction className={`${colorMap[themeColor]} text-white py-1.5 px-1.5 rounded-sm`}>
                      <Users className="w-6 h-6" />
                    </CardAction>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-semibold">+2350</p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-gray-500">+37% from the last month</p>
                  </CardFooter>
                </Card>

                <Card className="gap-4">
                  <CardHeader>
                    <CardTitle className="text-lg">Sales</CardTitle>
                    <CardAction className={`${colorMap[themeColor]} text-white py-1.5 px-1.5 rounded-sm`}>
                      <CalendarRange className="w-6 h-6" />
                    </CardAction>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-semibold">+12874</p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-gray-500">+61% from the last week</p>
                  </CardFooter>
                </Card>

                <Card className="gap-4">
                  <CardHeader>
                    <CardTitle className="text-lg">Active Now</CardTitle>
                    <CardAction className={`${colorMap[themeColor]} text-white py-1.5 px-1.5 rounded-sm`}>
                      <ChartNoAxesCombined className="w-6 h-6" />
                    </CardAction>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-semibold">+578</p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-gray-500">+17% from the last year</p>
                  </CardFooter>
                </Card>
              </div>

              {/* CHART */}
              <ChartLineInteractive themeColor={themeColor} />
              {/* CHART */}
            </TabsContent>

            {/* Subscribtion*/}
            <TabsContent value="subscribtion" className="mt-1.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 xl:px-0">
                <Card className="gap-4">
                  <CardHeader>
                    <CardTitle className="text-lg">Users</CardTitle>
                    <CardAction className={`${colorMap[themeColor]} text-white py-1.5 px-1.5 rounded-sm`}>
                      <DollarSign className="w-6 h-6" />
                    </CardAction>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-semibold">{users?.length ? users.length : 0}</p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-gray-500">+21% from the last year</p>
                  </CardFooter>
                </Card>

                <Card className="gap-4">
                  <CardHeader>
                    <CardTitle className="text-lg">Companies</CardTitle>
                    <CardAction className={`${colorMap[themeColor]} text-white py-1.5 px-1.5 rounded-sm`}>
                      <Users className="w-6 h-6" />
                    </CardAction>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-semibold">{companies?.length ? companies.length : 0}</p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-gray-500">+37% from the last month</p>
                  </CardFooter>
                </Card>

                <Card className="gap-4">
                  <CardHeader>
                    <CardTitle className="text-lg">Positions</CardTitle>
                    <CardAction className={`${colorMap[themeColor]} text-white py-1.5 px-1.5 rounded-sm`}>
                      <CalendarRange className="w-6 h-6" />
                    </CardAction>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-semibold">{positions?.length ? positions.length : 0}</p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-gray-500">+61% from the last week</p>
                  </CardFooter>
                </Card>

                <Card className="gap-4">
                  <CardHeader>
                    <CardTitle className="text-lg">Active Now</CardTitle>
                    <CardAction className={`${colorMap[themeColor]} text-white py-1.5 px-1.5 rounded-sm`}>
                      <ChartNoAxesCombined className="w-6 h-6" />
                    </CardAction>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-semibold">+578</p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-gray-500">+17% from the last year</p>
                  </CardFooter>
                </Card>
              </div>

              <div className="w-full">
                <div className="flex items-center py-4">
                  <Input
                    placeholder="Filter emails..."
                    value={table.getColumn('email')?.getFilterValue() ?? ''}
                    onChange={(event) =>
                      table.getColumn('email')?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                  />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="ml-auto">
                        Columns <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {table
                        .getAllColumns()
                        .filter((column) => column.getCanHide())
                        .map((column) => (
                          <DropdownMenuCheckboxItem
                            key={column.id}
                            className="capitalize"
                            checked={column.getIsVisible()}
                            onCheckedChange={(value) => column.toggleVisibility(!!value)}
                          >
                            {column.id}
                          </DropdownMenuCheckboxItem>
                        ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="overflow-hidden rounded-md border">
                  <Table>
                    <TableHeader>
                      {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                          {headerGroup.headers.map((header) => (
                            <TableHead key={header.id}>
                              {header.isPlaceholder
                                ? null
                                : flexRender(header.column.columnDef.header, header.getContext())}
                            </TableHead>
                          ))}
                        </TableRow>
                      ))}
                    </TableHeader>
                    <TableBody>
                      {table.getRowModel().rows.length ? (
                        // table.getRowModel().rows.map((row) => (
                        //   <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                        //     {row.getVisibleCells().map((cell) => (
                        //       <TableCell key={cell.id}>
                        //         {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        //       </TableCell>
                        //     ))}
                        //   </TableRow>
                        // ))
                       users.map((user, index) => (
                        <TableRow>
                          <TableCell>
                            {index + 1}
                          </TableCell>

                          <TableCell>
                            {user.username}
                          </TableCell>

                          <TableCell>
                            {user.email}
                          </TableCell>

                          <TableCell className='text-right'>
                            {user.role}
                          </TableCell>

                        </TableRow>
                       ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={columns.length} className="h-24 text-center">
                            No results.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>

                <div className="flex items-center justify-end space-x-2 py-4">
                  <div className="text-muted-foreground flex-1 text-sm">
                    {table.getFilteredSelectedRowModel().rows.length} of{' '}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                  </div>
                  <div className="space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => table.previousPage()}
                      disabled={!table.getCanPreviousPage()}
                    >
                      Previous
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => table.nextPage()}
                      disabled={!table.getCanNextPage()}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Tickets - رندر لیست تیکت‌ها در جدول */}
            <TabsContent value="tickets" className="mt-1.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 xl:px-0">
                <Card className="gap-4">
                  <CardHeader>
                    <CardTitle className="text-lg">Total Revenue</CardTitle>
                    <CardAction className={`${colorMap[themeColor]} text-white py-1.5 px-1.5 rounded-sm`}>
                      <DollarSign className="w-6 h-6" />
                    </CardAction>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-semibold">$45,123.89</p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-gray-500">+21% from the last year</p>
                  </CardFooter>
                </Card>

                <Card className="gap-4">
                  <CardHeader>
                    <CardTitle className="text-lg">Subscribtions</CardTitle>
                    <CardAction className={`${colorMap[themeColor]} text-white py-1.5 px-1.5 rounded-sm`}>
                      <Users className="w-6 h-6" />
                    </CardAction>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-semibold">+2350</p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-gray-500">+37% from the last month</p>
                  </CardFooter>
                </Card>

                <Card className="gap-4">
                  <CardHeader>
                    <CardTitle className="text-lg">Sales</CardTitle>
                    <CardAction className={`${colorMap[themeColor]} text-white py-1.5 px-1.5 rounded-sm`}>
                      <CalendarRange className="w-6 h-6" />
                    </CardAction>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-semibold">+12874</p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-gray-500">+61% from the last week</p>
                  </CardFooter>
                </Card>

                <Card className="gap-4">
                  <CardHeader>
                    <CardTitle className="text-lg">Active Now</CardTitle>
                    <CardAction className={`${colorMap[themeColor]} text-white py-1.5 px-1.5 rounded-sm`}>
                      <ChartNoAxesCombined className="w-6 h-6" />
                    </CardAction>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-semibold">+578</p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-gray-500">+17% from the last year</p>
                  </CardFooter>
                </Card>
              </div>

              <div className="w-full">
                <div className="flex items-center py-4">
                  <Input
                    placeholder="Filter by subject..."
                    value={ticketsTable.getColumn('subject')?.getFilterValue() ?? ''}
                    onChange={(event) =>
                      ticketsTable.getColumn('subject')?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                  />

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="ml-auto">
                        Columns <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {ticketsTable
                        .getAllColumns()
                        .filter((column) => column.getCanHide())
                        .map((column) => (
                          <DropdownMenuCheckboxItem
                            key={column.id}
                            className="capitalize"
                            checked={column.getIsVisible()}
                            onCheckedChange={(value) => column.toggleVisibility(!!value)}
                          >
                            {column.id}
                          </DropdownMenuCheckboxItem>
                        ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="overflow-hidden rounded-md border">
                  <Table>
                    <TableHeader>
                      {ticketsTable.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                          {headerGroup.headers.map((header) => (
                            <TableHead key={header.id}>
                              {header.isPlaceholder
                                ? null
                                : flexRender(header.column.columnDef.header, header.getContext())}
                            </TableHead>
                          ))}
                        </TableRow>
                      ))}
                    </TableHeader>

                    <TableBody>
                      {ticketsLoading ? (
                        <TableRow>
                          <TableCell colSpan={ticketColumns.length} className="h-24 text-center">
                            Loading tickets...
                          </TableCell>
                        </TableRow>
                      ) : ticketsError ? (
                        <TableRow>
                          <TableCell
                            colSpan={ticketColumns.length}
                            className="h-24 text-center text-red-600"
                          >
                            {ticketsError}
                          </TableCell>
                        </TableRow>
                      ) : ticketsTable.getRowModel().rows.length ? (
                        ticketsTable.getRowModel().rows.map((row) => (
                          <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                            {row.getVisibleCells().map((cell) => (
                              <TableCell key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={ticketColumns.length} className="h-24 text-center">
                            No results.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>

                <div className="flex items-center justify-end space-x-2 py-4">
                  <div className="text-muted-foreground flex-1 text-sm">
                    {ticketsTable.getFilteredSelectedRowModel().rows.length} of{' '}
                    {ticketsTable.getFilteredRowModel().rows.length} row(s) selected.
                  </div>
                  <div className="space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => ticketsTable.previousPage()}
                      disabled={!ticketsTable.getCanPreviousPage()}
                    >
                      Previous
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => ticketsTable.nextPage()}
                      disabled={!ticketsTable.getCanNextPage()}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        {/* End Tabs */}
      </main>
    </>
  )
}
