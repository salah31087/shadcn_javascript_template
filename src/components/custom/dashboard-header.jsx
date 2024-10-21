import React from 'react'
import { SidebarTrigger, useSidebar } from '../ui/sidebar'
import { Separator } from '../ui/separator'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"



export default function DashboardHeader() {
    const { state } = useSidebar()

    return (
        <header style={{ height: state === 'collapsed' ? '48px' : '64px' }} className='flex shrink-0 items-center gap-2 border-b  transition-[width,height] ease-linear'>
            <SidebarTrigger className='ml-2' />
            <Separator orientation="vertical" className=" h-4" />
            <CustomBreadcrumb />
        </header>
    )
}



export function CustomBreadcrumb() {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}

