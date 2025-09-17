import { Link, useLocation } from "react-router-dom"
import "../styles/RouteNav.css"
const RouteNav = () => {
  const { pathname } = useLocation()
  const routes = [
    { path: "/chart", label: "Gráfico PIB" },
    { path: "/table", label: "Tabela PIB" },
  ]

  if (pathname === "/") {
    return (
      <nav className="route-nav">
        <div>
          {routes.map((route) => (
            <Link key={route.path} to={route.path} className="route-link">
              {route.label}
            </Link>
          ))}
        </div>
      </nav>
    )
  }

  const links = routes.filter((route) => route.path !== pathname)
  return (
    <nav className="route-nav">
      <div>
        <Link className="route-link" to="/">
          Home
        </Link>
        {links.map((route) => (
          <Link key={route.path} to={route.path} className="route-link">
            {route.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default RouteNav
