'use client'
import React, { useState, useContext, useEffect } from 'react'
import { FilterSelectBox } from '@/components/templates/JobSeekerPanel/FilterSelectBox'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { DisplayFilterInput } from '@/components/templates/JobSeekerPanel/DisplayFilter'
import {
  Card,
  CardAction,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { MessageSquareMore, Trash } from 'lucide-react'
import { ThemeColorContext } from '@/contexts/user-theme'
import { colorMap, glassBgColorMap, textColorMap } from '@/utils/constants'
import Swal from 'sweetalert2'

export default function Page() {
  const { color } = useContext(ThemeColorContext)
  const [notifications, setNotifications] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getNotificationsHandler = async () => {
      try {
        const response = await fetch('http://localhost:3000/jobseeker/mynotifications', {
          method: 'POST',
          credentials: 'include'
        })

        if (!response.ok) {
          throw new Error('Failed to fetch notifications')
        }

        const data = await response.json()
        console.log(data)
        setNotifications(data.notifications || [])
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.message || 'Something went wrong'
        })
      } finally {
        setLoading(false)
      }
    }

    getNotificationsHandler()
  }, [])

  const deleteNotification = async (id) => {
    const confirm = await Swal.fire({
      title: 'Are you sure?',
      text: 'This action cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    })

    if (!confirm.isConfirmed) return

    try {
      const response = await fetch(`http://localhost:3000/jobseeker/deletenotification/${id}`, {
        method: 'DELETE',
        credentials: 'include'
      })

      if (!response.ok) throw new Error('Failed to delete notification')

      setNotifications((prev) => prev.filter((item) => item.id !== id))

      Swal.fire({
        icon: 'success',
        title: 'Deleted!',
        text: 'The notification has been deleted.'
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.message || 'Something went wrong'
      })
    }
  }

  return (
    <div className='px-4 mt-3'>
      <p>Notifications ({notifications.length}) Found</p>

      <div className='mt-6 flex gap-2 flex-wrap'>
        <FilterSelectBox />
        <DisplayFilterInput />
        <div className="flex w-full max-w-sm items-center gap-2">
          <Input type="search" placeholder="Search..." />
          <Button type="submit" variant="outline">
            Search
          </Button>
        </div>
      </div>

      {loading ? (
        <p className="mt-4">Loading...</p>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4'>
          {notifications.map((job) => (
            <Card key={job.id}>
              <CardHeader>
                <CardTitle className='leading-6 px-4'>{job.text}</CardTitle>
                <CardAction>
                  <div className={`p-1 rounded-sm ${glassBgColorMap[color]}`}>
                    <MessageSquareMore className={`w-5 h-5 ${textColorMap[color]}`} />

                  </div>
                </CardAction>
              </CardHeader>

              <CardFooter>
                <Button
                  variant='outline'
                  className={`w-full flex items-center gap-1 text-white border-0 ${colorMap[color]}`}
                  onClick={() => deleteNotification(job.id)}
                >
                  {new Date(job.time).toLocaleDateString('en-US')}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
