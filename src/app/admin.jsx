import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Route, Routes } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import Header from "./admin-pages/components/dashboard-components/header"
import Dashboard from "./admin-pages/dashboard"

const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos")
  const data = await response.json()
  return data
}

function FetchData() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchData,
  })

  return (
    <div>
    </div>
  )
}

export default function Admin() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <FetchData />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </SidebarInset>
    </SidebarProvider>
  )
}
