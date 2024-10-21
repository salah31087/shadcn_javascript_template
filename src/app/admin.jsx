import { AppSidebar } from "@/components/app-sidebar"

import {
  SidebarInset,
  SidebarProvider
} from "@/components/ui/sidebar"
import Stats from "./admin-pages/dashboard";
import { Route, Routes } from "react-router-dom";
import Header from "./admin-pages/components/dashboard-components/header";



export default function Admin() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <Routes>
          <Route path="/" element={<Stats />}></Route>
        </Routes>
      </SidebarInset>
    </SidebarProvider>
  );
}



