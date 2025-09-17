import logoLight from "../assets/logoLight.svg"
import logoDark from "../assets/logoDark.svg"
import { useState, useEffect } from "react"
import { MdDarkMode, MdLightMode } from "react-icons/md"
import "../styles/LogoNav.css"
const NavBar = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(document.body.dataset.theme === "dark")
  }, [])

  const toggleTheme = () => {
    const nextTheme = document.body.dataset.theme === "dark" ? "" : "dark"
    document.body.dataset.theme = nextTheme
    setIsDark(nextTheme === "dark")
  }
  return (
    <>
      <nav className="navbar">
        <img
          src={isDark ? logoLight : logoDark}
          alt="Logo PIB"
          className="logo"
        />
        <button className="theme-btn" onClick={toggleTheme}>
          {isDark ? (
            <MdLightMode size={24} className="theme-icon" />
          ) : (
            <MdDarkMode size={24} className="theme-icon" />
          )}
        </button>
      </nav>
    </>
  )
}

export default NavBar
