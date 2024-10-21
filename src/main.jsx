import { ThemeProvider } from "@/components/theme-provider"
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
)
