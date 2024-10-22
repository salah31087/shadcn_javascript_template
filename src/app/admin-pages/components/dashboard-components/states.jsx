import { State } from "./state";



export default function States() {
    return (
        <div className="p-4 pt-0">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight m">Overview & Statistics</h3>
            <p className="leading-7 mb-6 text-muted-foreground">
                Overview of key metrics for the car rental service, including total revenue, and reservation statuses.
            </p>
            <div className="flex flex-1 flex-col gap-4 ">
                <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                    <State />
                    <State />
                    <State />
                    <State />
                </div>
            </div>
        </div>
    )
}

