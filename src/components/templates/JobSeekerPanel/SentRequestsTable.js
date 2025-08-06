import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from "react"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

export function SentRequestsTable() {

  const [applies, setApplies] = useState([])

  useEffect(() => {
    const getAppliesHandler = async () => {
      try {
        const appliesResponse = await fetch('http://localhost:3000/jobseeker/myrequests', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        })

        if (appliesResponse.ok) {
          const appliesData = await appliesResponse.json()

          setApplies(appliesData.requests)
        }
      } catch (error) {
        throw error
      }
    }
  }, [])

  return (
    <Table className=''>
      <TableCaption>A list of your applies</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Job Title</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applies.map((apply, index) => (
          <TableRow key={index}>
            <TableCell className='font-medium'>{apply}</TableCell>
            <TableCell className='font-medium'>{apply}</TableCell>
            <TableCell className='font-medium'>{apply}</TableCell>
          </TableRow>
        ))}
        {/* {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))} */}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
