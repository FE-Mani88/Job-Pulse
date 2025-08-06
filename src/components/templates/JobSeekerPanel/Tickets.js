'use client'
import * as React from "react"
import { useEffect, useState } from "react"
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from "@tanstack/react-table"
import { ArrowUpDown, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox" // Import Checkbox component
import { Formik } from "formik"
import { useRouter } from "next/navigation"
import Swal from "sweetalert2"

// Define columns with checkbox column added
export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
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
    size: 50 // Set width for checkbox column
  },
  {
    accessorKey: "subject",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Subject
        <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue("subject")}</div>,
    size: 200 // Set width for subject column
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => (
      <div className="max-w-xs truncate">{row.getValue("description")}</div>
    ),
    size: 300 // Set width for description column
  },
  {
    accessorKey: "isAnswered",
    header: () => <div className="text-center">Answered</div>,
    cell: ({ row }) => {
      const isAnswered = row.getValue("isAnswered")
      return (
        <div className="flex justify-center items-center">
          {isAnswered ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
        </div>
      )
    },
    size: 80 // Set fixed width for isAnswered column
  }
]

export function DataTableDemo() {
  const [sortingState, setSortingState] = useState([])
  const [filterState, setFilterState] = useState([])
  const [visibleColumns, setVisibleColumns] = useState({})
  const [selectedRows, setSelectedRows] = useState({})
  const [tickets, setTickets] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchTickets = async () => {
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

          const ticketRes = await fetch('http://localhost:3000/ticket/mytickets', {
            method: 'POST',
            credentials: 'include'
          })

          if (ticketRes.ok) {
            const ticketsData = await ticketRes.json()
            setTickets(ticketsData.tickets || [])
            setIsLoading(false)
          } else {
            throw new Error('Failed to fetch tickets')
          }
        } else if (userRes.status === 401) {
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

              const ticketRes = await fetch('http://localhost:3000/ticket/mytickets', {
                method: 'POST',
                credentials: 'include'
              })

              if (ticketRes.ok) {
                const ticketsData = await ticketRes.json()
                setTickets(ticketsData.tickets || [])
                setIsLoading(false)
              } else {
                throw new Error('Failed to fetch tickets')
              }
            } else {
              throw new Error('Failed to refresh token')
            }
          } else {
            throw new Error('Unauthorized')
          }
        } else {
          throw new Error('Failed to fetch user data')
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred while fetching data.',
          confirmButtonText: 'OK'
        }).then(() => {
          router.push('/signin')
        })
      }
    }

    fetchTickets()
  }, [router])

  const table = useReactTable({
    data: tickets,
    columns,
    onSortingChange: setSortingState,
    onColumnFiltersChange: setFilterState,
    onColumnVisibilityChange: setVisibleColumns,
    onRowSelectionChange: setSelectedRows,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sortingState,
      columnFilters: filterState,
      columnVisibility: visibleColumns,
      rowSelection: selectedRows
    },
    enableRowSelection: true, // Enable row selection
    initialState: {
      pagination: {
        pageSize: 5 // Set page size to 5 tickets per page
      }
    },
    columnResizeMode: 'onChange'
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="w-full lg:w-3/5">
      <div className="flex justify-between items-center py-4">
        <Input
          placeholder="Filter subjects..."
          value={table.getColumn("subject")?.getFilterValue() ?? ""}
          onChange={event =>
            table.getColumn("subject")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <Dialog>
          <Formik
            initialValues={{ subject: '', description: '' }}
            onSubmit={async (values, { resetForm }) => {
              try {
                const sendTicketRes = await fetch('http://localhost:3000/ticket/create', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    subject: values.subject,
                    description: values.description
                  }),
                  credentials: 'include'
                })

                if (sendTicketRes.ok) {
                  Swal.fire({
                    icon: 'success',
                    title: 'Ticket Created',
                    text: 'Your ticket has been successfully created.',
                    confirmButtonText: 'OK'
                  }).then(async () => {
                    const ticketRes = await fetch('http://localhost:3000/ticket/mytickets', {
                      method: 'POST',
                      credentials: 'include'
                    })
                    if (ticketRes.ok) {
                      const ticketsData = await ticketRes.json()
                      setTickets(ticketsData.tickets || [])
                    }
                    resetForm()
                  })
                } else {
                  throw new Error('Failed to create ticket')
                }
              } catch (error) {
                Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: 'An error occurred while creating the ticket.',
                  confirmButtonText: 'OK'
                })
              }
            }}
          >
            {({ values, handleChange, handleSubmit }) => (
              <form>
                <DialogTrigger asChild>
                  <Button>New Ticket</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>New Ticket</DialogTitle>
                    <DialogDescription>
                      Create a new ticket here. Click send when you&apos;re done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={values.subject}
                        onChange={handleChange}
                        placeholder="Enter ticket subject"
                      />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        name="description"
                        value={values.description}
                        onChange={handleChange}
                        placeholder="Type your message here."
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit" onClick={handleSubmit}>Send Ticket</Button>
                  </DialogFooter>
                </DialogContent>
              </form>
            )}
          </Formik>
        </Dialog>
      </div>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <TableHead
                    key={header.id}
                    style={{ width: header.column.columnDef.size }}
                    className="text-center"
                  >
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
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map(cell => (
                    <TableCell
                      key={cell.id}
                      style={{ width: cell.column.columnDef.size }}
                      className="text-center"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
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
  )
}