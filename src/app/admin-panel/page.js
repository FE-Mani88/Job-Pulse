'use client'
import React, { useState } from 'react'
import { Check, ChevronsUpDown, DollarSign, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Link from "next/link"
import { Input } from '@/components/ui/input'

import { Calendar } from "@/components/ui/calendar"
import { Calendar as CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardAction
} from "@/components/ui/card"
import { CalendarRange, ChartNoAxesCombined } from 'lucide-react'
import { ChartLineInteractive } from '@/components/templates/AdminPanel/ChartLine'
import Header from '@/components/templates/AdminPanel/Header'
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { colorMap } from '@/utils/constants'

const data = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@example.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@example.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@example.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@example.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@example.com",
  },
]

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
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
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Email
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    id: "actions",
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

export default function page() {

  const [date, setDate] = useState(null)
  const [sorting, setSorting] = useState([])
  const [columnFilters, setColumnFilters] = useState([])
  const [columnVisibility, setColumnVisibility] = useState({})
  const [rowSelection, setRowSelection] = useState({})
  const [themeColor, setThemeColor] = useState("green");

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

  const getThemeValueHandler = (themeValue) => {
    setThemeColor(themeValue)
  }

  return (
    <>
      <Header getThemeValueHandler={getThemeValueHandler} />

      <main className='mt-6 w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1440px] mx-auto'>
        <div className='flex justify-between items-center'>
          <h2 className='text-3xl font-semibold'>Dashboard</h2>

          <div className='flex items-center gap-1.5'>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  data-empty={!date}
                  className="data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal"
                >
                  <CalendarIcon />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} />
              </PopoverContent>
            </Popover>
            <Button className={`${colorMap[themeColor]} text-white dark:text-white cursor-pointer`}>Download</Button>
          </div>
        </div>

        {/* Start Tabs */}
        <div className="flex mt-6 w-full flex-col gap-6">
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="subscribtion">Subscribtion</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className='mt-1.5'>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 xl:px-0'>
                <Card className='gap-4'>
                  <CardHeader>
                    <CardTitle className='text-lg'>Total Revenue</CardTitle>
                    {/* <CardDescription>Card Description</CardDescription> */}
                    <CardAction className={`${colorMap[themeColor]} text-white py-1.5 px-1.5 rounded-sm`}>
                      <DollarSign className='w-6 h-6' />
                    </CardAction>
                  </CardHeader>
                  <CardContent>
                    <p className='text-3xl font-semibold'>$45,123.89</p>
                  </CardContent>
                  <CardFooter>
                    <p className='text-gray-500'>+21% from the last year</p>
                  </CardFooter>
                </Card>
                <Card className='gap-4'>
                  <CardHeader>
                    <CardTitle className='text-lg'>Subscribtions</CardTitle>
                    {/* <CardDescription>Card Description</CardDescription> */}
                    <CardAction className={`${colorMap[themeColor]} text-white py-1.5 px-1.5 rounded-sm`}><Users className='w-6 h-6' /></CardAction>
                  </CardHeader>
                  <CardContent>
                    <p className='text-3xl font-semibold'>+2350</p>
                  </CardContent>
                  <CardFooter>
                    <p className='text-gray-500'>+37% from the last month</p>
                  </CardFooter>
                </Card>
                <Card className='gap-4'>
                  <CardHeader>
                    <CardTitle className='text-lg'>Sales</CardTitle>
                    {/* <CardDescription>Card Description</CardDescription> */}
                    <CardAction className={`${colorMap[themeColor]} text-white py-1.5 px-1.5 rounded-sm`}><CalendarRange className='w-6 h-6' /></CardAction>
                  </CardHeader>
                  <CardContent>
                    <p className='text-3xl font-semibold'>+12874</p>
                  </CardContent>
                  <CardFooter>
                    <p className='text-gray-500'>+61% from the last week</p>
                  </CardFooter>
                </Card>
                <Card className='gap-4'>
                  <CardHeader>
                    <CardTitle className='text-lg'>Active Now</CardTitle>
                    {/* <CardDescription>Card Description</CardDescription> */}
                    <CardAction className={`${colorMap[themeColor]} text-white py-1.5 px-1.5 rounded-sm`}><ChartNoAxesCombined className='w-6 h-6' /></CardAction>
                  </CardHeader>
                  <CardContent>
                    <p className='text-3xl font-semibold'>+578</p>
                  </CardContent>
                  <CardFooter>
                    <p className='text-gray-500'>+17% from the last year</p>
                  </CardFooter>
                </Card>
              </div>
              {/* CHART */}
              <ChartLineInteractive themeColor={themeColor} />
              {/* CHART */}
            </TabsContent>
            <TabsContent value="subscribtion" className='mt-1.5'>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 xl:px-0'>
                <Card className='gap-4'>
                  <CardHeader>
                    <CardTitle className='text-lg'>Total Revenue</CardTitle>
                    {/* <CardDescription>Card Description</CardDescription> */}
                    <CardAction className={`${colorMap[themeColor]} text-white py-1.5 px-1.5 rounded-sm`}><DollarSign className='w-6 h-6' /></CardAction>
                  </CardHeader>
                  <CardContent>
                    <p className='text-3xl font-semibold'>$45,123.89</p>
                  </CardContent>
                  <CardFooter>
                    <p className='text-gray-500'>+21% from the last year</p>
                  </CardFooter>
                </Card>
                <Card className='gap-4'>
                  <CardHeader>
                    <CardTitle className='text-lg'>Subscribtions</CardTitle>
                    {/* <CardDescription>Card Description</CardDescription> */}
                    <CardAction className={`${colorMap[themeColor]} text-white py-1.5 px-1.5 rounded-sm`}><Users className='w-6 h-6' /></CardAction>
                  </CardHeader>
                  <CardContent>
                    <p className='text-3xl font-semibold'>+2350</p>
                  </CardContent>
                  <CardFooter>
                    <p className='text-gray-500'>+37% from the last month</p>
                  </CardFooter>
                </Card>
                <Card className='gap-4'>
                  <CardHeader>
                    <CardTitle className='text-lg'>Sales</CardTitle>
                    {/* <CardDescription>Card Description</CardDescription> */}
                    <CardAction className={`${colorMap[themeColor]} text-white py-1.5 px-1.5 rounded-sm`}><CalendarRange className='w-6 h-6' /></CardAction>
                  </CardHeader>
                  <CardContent>
                    <p className='text-3xl font-semibold'>+12874</p>
                  </CardContent>
                  <CardFooter>
                    <p className='text-gray-500'>+61% from the last week</p>
                  </CardFooter>
                </Card>
                <Card className='gap-4'>
                  <CardHeader>
                    <CardTitle className='text-lg'>Active Now</CardTitle>
                    {/* <CardDescription>Card Description</CardDescription> */}
                    <CardAction className={`${colorMap[themeColor]} text-white py-1.5 px-1.5 rounded-sm`}><ChartNoAxesCombined className='w-6 h-6' /></CardAction>
                  </CardHeader>
                  <CardContent>
                    <p className='text-3xl font-semibold'>+578</p>
                  </CardContent>
                  <CardFooter>
                    <p className='text-gray-500'>+17% from the last year</p>
                  </CardFooter>
                </Card>
              </div>
              <div className="w-full">
                <div className="flex items-center py-4">
                  <Input
                    placeholder="Filter emails..."
                    value={table.getColumn("email")?.getFilterValue() ?? ""}
                    onChange={(event) =>
                      table.getColumn("email")?.setFilterValue(event.target.value)
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
                                : flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                            </TableHead>
                          ))}
                        </TableRow>
                      ))}
                    </TableHeader>
                    <TableBody>
                      {table.getRowModel().rows.length ? (
                        table.getRowModel().rows.map((row) => (
                          <TableRow
                            key={row.id}
                            data-state={row.getIsSelected() && "selected"}
                          >
                            {row.getVisibleCells().map((cell) => (
                              <TableCell key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                              </TableCell>
                            ))}
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
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
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
          </Tabs>
        </div>
        {/* End Tabs */}
      </main>
    </>
  )
}