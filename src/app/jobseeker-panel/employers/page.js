import React from 'react'
import { EmployersList } from '@/components/templates/JobSeekerPanel/EmployersList'
import { EmployerChat } from '@/components/templates/JobSeekerPanel/EmployerChat'

export default function page() {
    return (
        <div className='min-h-[80vh] flex flex-col lg:flex-row justify-between items-center gap-8 px-4 py-5'>
            <EmployersList />
            <EmployerChat />
        </div>
    )
}
