// import ReservationsTable from "./components/dashboard-components/reservations-table";
import States from "./components/dashboard-components/states";
import { DataTableDemo } from "./components/dashboard-components/table-components/page";


export default function Dashboard() {
    return (
        <section className="">
            <States />
            {/* <ReservationsTable /> */}
            <DataTableDemo />
        </section>
    )
}
