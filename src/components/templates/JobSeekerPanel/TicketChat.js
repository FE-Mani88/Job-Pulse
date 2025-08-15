
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
import { toast, ToastContainer } from "react-toastify"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import { useFetchWithRefresh } from "@/hooks/useFetchWithRefresh"

// تعریف اسکیما با Yup
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

export function CardsChat({ ticket }) {
  const [open, setOpen] = React.useState(false)
  const [selectedUsers, setSelectedUsers] = React.useState([])
  const [messages, setMessages] = React.useState([])
  const { callApi } = useFetchWithRefresh()

  // Set messages when ticket changes
  React.useEffect(() => {
    if (ticket && ticket.messages) {
      setMessages(ticket.messages)
    } else {
      setMessages([])
    }
  }, [ticket])

  const handleSendMessage = async (values, { setSubmitting, resetForm }) => {
    if (!ticket || !ticket.slug) {
      toast.error("No ticket selected")
      setSubmitting(false)
      return
    }

    try {
      // Add temporary message to local state
      const tempMessage = {
        role: "user",
        content: values.text,
        text: values.text,
        user_id: "temp",
      }
      setMessages([...messages, tempMessage])

      // Send message to API
      const sentTicketRes = await fetch(`http://localhost:3000/ticket/message/${ticket.slug}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: values.text,
        }),
        credentials: 'include'
      })

      const sentTicketData = await sentTicketRes.json()

      if (sentTicketRes.status === 400 || sentTicketRes.status === 401) {
        console.log(sentTicketData)
        throw new Error(
          sentTicketData.message === "you are not a part of this conversation"
            ? "You are not authorized to send messages in this conversation"
            : "An unknown error occurred"
        )
      }

      if (!sentTicketRes.ok) {
        console.log(values.text)
        throw new Error(sentTicketData.message)
      }

      // Replace temp message with actual message from API
      const newMessage = {
        role: "user",
        content: values.text,
        text: values.text,
        user_id: sentTicketData.message?.user_id || "user",
      }
      setMessages((prevMessages) =>
        prevMessages.map((msg) => (msg.user_id === "temp" ? newMessage : msg))
      )

      toast.success("Message Sent Successfully")
      resetForm()
    } catch (err) {
      // Remove failed message
      setMessages(messages.filter((msg) => msg.user_id !== "temp"))
      toast.error(err.message || "Failed to send message")
    } finally {
      setSubmitting(false)
    }
  }

  // Show placeholder if no ticket is selected
  if (!ticket) {
    return (
      <Card className="w-full lg:w-2/5">
        <CardContent className="pt-6">
          <p className="text-center text-gray-500">Select a ticket to view the chat</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <>
      <Card className="w-full lg:w-2/5">
        <CardHeader className="flex flex-row items-center">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/avatars/01.png" alt="Image" />
              <AvatarFallback>{ticket.subject?.[0] || "T"}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">{ticket.subject || "No Subject"}</p>
              <p className="text-sm text-muted-foreground">{ticket.description || "No Description"}</p>
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
        <CardContent className="max-h-96 overflow-y-auto">
          <div className="space-y-4">
            {messages.length > 0 ? (
              messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                    message.role === "user"
                      ? "ml-auto bg-primary text-primary-foreground"
                      : "bg-muted"
                  )}
                >
                  {message.text || message.content}
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No messages yet</p>
            )}
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