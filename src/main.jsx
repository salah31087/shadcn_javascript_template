import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider } from "./components/ui/sidebar.jsx"
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppSidebar } from "./components/app-sidebar.jsx"

createRoot(document.getElementById('root')).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <SidebarProvider>
      <AppSidebar />
      <App />
    </SidebarProvider>
  </ThemeProvider>,
)
