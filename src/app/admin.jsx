import { AppSidebar } from "@/components/app-sidebar"

import {
  SidebarInset,
  SidebarProvider
} from "@/components/ui/sidebar"
import { Route, Routes } from "react-router-dom";
import Header from "./admin-pages/components/dashboard-components/header";
import Dashboard from "./admin-pages/dashboard";



export default function Admin() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
        </Routes>
      </SidebarInset>
    </SidebarProvider>
  );
}



