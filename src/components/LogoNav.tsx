import logoLight from "../assets/logoLight.svg"
import logoDark from "../assets/logoDark.svg"
import { useState, useEffect } from "react"
import { MdDarkMode, MdLightMode } from "react-icons/md"
import { Link } from "react-router-dom"
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
        <Link to="/">
          <img
            src={isDark ? logoLight : logoDark}
            alt="Logo do site PIBTrends"
            className="logo"
          />
        </Link>

        <button className="theme-btn" onClick={toggleTheme}>
          {isDark ? (
            <MdLightMode className="theme-icon" />
          ) : (
            <MdDarkMode className="theme-icon" />
          )}
        </button>
      </nav>
    </>
  )
}

export default NavBar
