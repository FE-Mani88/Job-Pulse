import React from 'react'
import Link from "next/link"

import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function BreadcrumbTemplate({ routePath }) {
    return (
        <div
            id='breadcrumb'
            className='flex justify-center items-center h-[640px]'
        >
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem className='text-white text-2xl'>
                        <BreadcrumbLink asChild>
                            <Link href="/" className='hover:text-green-400'>Home</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem className='text-2xl'>
                        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
}
