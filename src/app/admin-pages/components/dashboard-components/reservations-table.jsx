import React from 'react'
import DemoPage from './table-components/page'

export const payments = [
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
    },
    {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "example@gmail.com",
    }
]



export default function ReservationsTable() {
    return (
        <div className="p-4 pt-0">
            <DemoPage />
        </div>
    )
}
