import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import Home from "./pages/Home"
import LogoNav from "./components/LogoNav"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LogoNav />
    <Home />
  </StrictMode>,
)
