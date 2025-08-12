import React from 'react'
import { AdminRegisterForm } from '@/components/templates/Admin/admin-signup-form'

export default function page() {
  return (
    <>
      <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm md:max-w-5xl">
          <AdminRegisterForm />
        </div>
      </div>
    </>
  )
}
