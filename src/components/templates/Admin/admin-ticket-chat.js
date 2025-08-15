"use client"
import * as React from "react"
import { Check, Plus, Send } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Avatar,
  AvatarImage,
  AvatarFallback
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"
import Swal from "sweetalert2"
import { toast, ToastContainer } from "react-toastify"
import { useFetchWithRefresh } from "@/hooks/useFetchWithRefresh"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"

const messageSchema = Yup.object().shape({
  text: Yup.string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(50, "Message cannot exceed 50 characters")
    .trim(),
})

const users = [
  {
    name: "Olivia Martin",
    email: "m@example.com",
    avatar: "/avatars/01.png",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    avatar: "/avatars/03.png",
  },
  {
    name: "Emma Wilson",
    email: "emma@example.com",
    avatar: "/avatars/05.png",
  },
  {
    name: "Jackson Lee",
    email: "lee@example.com",
    avatar: "/avatars/02.png",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    avatar: "/avatars/04.png",
  },
]

export function AdminTicketChat({ ticketSlug }) {
  const { callApi, loading, error } = useFetchWithRefresh()
  const [open, setOpen] = React.useState(false)
  const [selectedUsers, setSelectedUsers] = React.useState([])
  const [messages, setMessages] = React.useState([])
  const [ticket, setTicket] = React.useState(null)

  // Fetch ticket data on component mount
  React.useEffect(() => {
    const fetchTicket = async () => {
      try {
        const ticketData = await callApi(`ticket/${ticketSlug}`, {
          method: "POST",
          credentials: "include",
        })
        console.log("Ticket Data:", ticketData)
        setTicket(ticketData.ticket)
        setMessages(ticketData.ticket?.messages || [])
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Failed to load ticket",
          text: err.message,
          confirmButtonText: "OK",
        })
      }
    }

    fetchTicket()
  }, [ticketSlug, callApi])

  const handleSendMessage = async (values, { setSubmitting, resetForm }) => {
    try {
      // Add message to local state temporarily
      const tempMessage = {
        role: "user",
        content: values.text,
        text: values.text,
        user_id: "temp"
      }
      setMessages([...messages, tempMessage])

      // Send message to API
      const sentTicketData = await callApi(`ticket/message/${ticketSlug}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          text: values.text,
        }),
      })

      if (sentTicketData.statusCode === 400 || sentTicketData.statusCode === 401) {
        throw new Error(
          sentTicketData.message === "you are not a part of this conversation"
            ? "You are not authorized to send messages in this conversation"
            : "An unknown error occurred"
        )
      }

      // Replace temp message with actual message from API response
      const newMessage = {
        role: "user",
        content: values.text,
        text: values.text,
        user_id: sentTicketData.message?.user_id || "admin", // فرض بر این است که API user_id را برمی‌گرداند
      }
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.user_id === "temp" ? newMessage : msg
        )
      )

      toast.success("Message Sent Successfully")
      resetForm()
    } catch (err) {
      // Remove the failed message from state
      setMessages(messages.filter((msg) => msg.user_id !== "temp"))
      Swal.fire({
        icon: "error",
        title: "Failed to send message",
        text: err.message,
        confirmButtonText: "OK",
      })
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error || !ticket) {
    return <div>Error: {error?.message || "Failed to load ticket"}</div>
  }

  return (
    <>
      <Card className="w-full">
        <CardHeader className="flex flex-row items-center">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/avatars/01.png" alt="Image" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">{ticket.subject}</p>
              <p className="text-sm text-muted-foreground">{ticket.description}</p>
            </div>
          </div>
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="outline"
                  className="ml-auto rounded-full"
                  onClick={() => setOpen(true)}
                >
                  <Plus />
                  <span className="sr-only">New message</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent sideOffset={10}>New message</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardHeader>
        <CardContent className="max-h-50 overflow-y-auto">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                  message.user_id !== ticket.userId
                    ? "ml-auto bg-primary text-primary-foreground"
                    : "bg-muted"
                )}
              >
                {console.log("Style check:", message.role === "user")}
                {console.log("message:", message)}
                {message.text}
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Formik
            initialValues={{ text: "" }}
            validationSchema={messageSchema}
            onSubmit={handleSendMessage}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form className="flex w-full items-center space-x-2">
                <div className="flex-1">
                  <Field
                    name="text"
                    as={Input}
                    id="message"
                    placeholder="Type your message..."
                    className={cn("flex-1", {
                      "border-red-500": touched.text && errors.text,
                    })}
                    autoComplete="off"
                  />
                  {touched.text && errors.text && (
                    <p className="text-sm text-red-500 mt-1">{errors.text}</p>
                  )}
                </div>
                <Button type="submit" size="icon" disabled={isSubmitting}>
                  <Send />
                  <span className="sr-only">Send</span>
                </Button>
              </Form>
            )}
          </Formik>
        </CardFooter>
      </Card>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="gap-0 p-0 outline-none">
          <DialogHeader className="px-4 pb-4 pt-5">
            <DialogTitle>New message</DialogTitle>
            <DialogDescription>
              Invite a user to this thread. This will create a new group message.
            </DialogDescription>
          </DialogHeader>
          <Command className="overflow-hidden rounded-t-none border-t bg-transparent">
            <CommandInput placeholder="Search user..." />
            <CommandList>
              <CommandEmpty>No users found.</CommandEmpty>
              <CommandGroup className="p-2">
                {users.map((user) => (
                  <CommandItem
                    key={user.email}
                    className="flex items-center px-2"
                    onSelect={() => {
                      if (selectedUsers.includes(user)) {
                        return setSelectedUsers(
                          selectedUsers.filter((selectedUser) => selectedUser !== user)
                        )
                      }
                      return setSelectedUsers([...users].filter((u) => [...selectedUsers, user].includes(u)))
                    }}
                  >
                    <Avatar>
                      <AvatarImage src={user.avatar} alt="Image" />
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="ml-2">
                      <p className="text-sm font-medium leading-none">{user.name}</p>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                    {selectedUsers.includes(user) ? (
                      <Check className="ml-auto flex h-5 w-5 text-primary" />
                    ) : null}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
          <DialogFooter className="flex items-center border-t p-4 sm:justify-between">
            {selectedUsers.length > 0 ? (
              <div className="flex -space-x-2 overflow-hidden">
                {selectedUsers.map((user) => (
                  <Avatar
                    key={user.email}
                    className="inline-block border-2 border-background"
                  >
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                Select users to add to this thread.
              </p>
            )}
            <Button
              disabled={selectedUsers.length < 2}
              onClick={() => {
                setOpen(false)
              }}
            >
              Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <ToastContainer />
    </>
  )
}