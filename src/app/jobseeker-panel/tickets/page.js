"use client"
import React, { useContext, useEffect, useState } from "react"
import { CardsChat } from "@/components/templates/JobSeekerPanel/TicketChat"
import { TicketsTable } from "@/components/templates/JobSeekerPanel/Tickets"
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardAction } from "@/components/ui/card"
import { ThemeColorContext } from "@/contexts/user-theme"
import { colorMap } from "@/utils/constants"
import { CalendarRange, ChartNoAxesCombined, DollarSign, Users } from "lucide-react"
import Swal from "sweetalert2"

export default function Page() {
  const { color } = useContext(ThemeColorContext)
  const [tickets, setTickets] = useState([])
  const [selectedTicket, setSelectedTicket] = useState(null)

  useEffect(() => {
    const getTicketsHandler = async () => {
      try {
        const ticketsResponse = await fetch("http://localhost:3000/ticket/mytickets", {
          method: "POST",
          credentials: "include",
          cache: "no-store",
        })

        const ticketsData = await ticketsResponse.json()
        setTickets(ticketsData.tickets || [])

        // Select the last ticket by default if tickets exist
        if (ticketsData.tickets && ticketsData.tickets.length > 0) {
          setSelectedTicket(ticketsData.tickets[ticketsData.tickets.length - 1])
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "خطا در بارگذاری تیکت‌ها",
          text: error.message || "خطایی رخ داد",
          confirmButtonText: "تأیید",
        })
      }
    }

    getTicketsHandler()
  }, [])

  const refreshTicketsHandler = async () => {
    try {
      const ticketsResponse = await fetch("http://localhost:3000/ticket/mytickets", {
        method: "POST",
        credentials: "include",
        cache: "no-store",
      })

      const ticketsData = await ticketsResponse.json()
      setTickets(ticketsData.tickets || [])

      // Keep the current selected ticket if it still exists, otherwise select the last one
      if (ticketsData.tickets && ticketsData.tickets.length > 0) {
        setSelectedTicket((prev) =>
          prev && ticketsData.tickets.some((ticket) => ticket.slug === prev.slug)
            ? prev
            : ticketsData.tickets[ticketsData.tickets.length - 1]
        )
      } else {
        setSelectedTicket(null)
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "خطا در رفرش تیکت‌ها",
        text: error.message || "خطایی رخ داد",
        confirmButtonText: "تأیید",
      })
    }
  }

  const calculateUnansweredTickets = () => {
    return tickets.reduce((count, ticket) => (!ticket.isAnswered ? count + 1 : count), 0)
  }

  const calculateAnsweredTickets = () => {
    return tickets.reduce((count, ticket) => (ticket.isAnswered ? count + 1 : count), 0)
  }

  const handleTicketSelect = (ticket) => {
    setSelectedTicket(ticket)
  }

  return (
    <>
      <div className={`${colorMap[color]} transition-colors grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-5 py-6`}>
        <Card className="gap-4 rounded-sm">
          <CardHeader>
            <CardTitle className="text-lg">همه تیکت‌ها</CardTitle>
            <CardAction className={`${colorMap[color]} text-white py-1.5 px-1.5 rounded-sm`}>
              <DollarSign className="w-6 h-6" />
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">{tickets.length}</p>
          </CardContent>
          <CardFooter>
            <p className="text-gray-500">+21% از سال گذشته</p>
          </CardFooter>
        </Card>

        <Card className="gap-4 rounded-sm">
          <CardHeader>
            <CardTitle className="text-lg">تیکت‌های باز</CardTitle>
            <CardAction className={`${colorMap[color]} text-white py-1.5 px-1.5 rounded-sm`}>
              <Users className="w-6 h-6" />
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">{calculateUnansweredTickets()}</p>
          </CardContent>
          <CardFooter>
            <p className="text-gray-500">+37% از ماه گذشته</p>
          </CardFooter>
        </Card>

        <Card className="gap-4 rounded-sm">
          <CardHeader>
            <CardTitle className="text-lg">تیکت‌های بسته‌شده</CardTitle>
            <CardAction className={`${colorMap[color]} text-white py-1.5 px-1.5 rounded-sm`}>
              <CalendarRange className="w-6 h-6" />
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">{calculateAnsweredTickets()}</p>
          </CardContent>
          <CardFooter>
            <p className="text-gray-500">+61% از هفته گذشته</p>
          </CardFooter>
        </Card>

        <Card className="gap-4 rounded-sm">
          <CardHeader>
            <CardTitle className="text-lg">تیکت‌های بدون پاسخ</CardTitle>
            <CardAction className={`${colorMap[color]} text-white py-1.5 px-1.5 rounded-sm`}>
              <ChartNoAxesCombined className="w-6 h-6" />
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">{calculateUnansweredTickets()}</p>
          </CardContent>
          <CardFooter>
            <p className="text-gray-500">+17% از سال گذشته</p>
          </CardFooter>
        </Card>
      </div>

      <div className="flex justify-between items-center flex-col lg:flex-row gap-4 px-4 mt-6">
        <CardsChat ticket={selectedTicket} />
        <TicketsTable refreshTicketsHandler={refreshTicketsHandler} onTicketSelect={handleTicketSelect} />
      </div>
    </>
  )
}