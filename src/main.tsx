import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import Home from "./pages/Home"
import LogoNav from "./components/LogoNav"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Table from "./pages/Table"
import Chart from "./pages/Chart"
import Footer from "./components/Footer"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <header>
        {" "}
        <LogoNav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table" element={<Table />} />
          <Route path="/chart" element={<Chart />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
