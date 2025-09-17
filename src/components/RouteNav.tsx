import { Link, useLocation } from "react-router-dom"

const RouteNav = () => {
  const { pathname } = useLocation()
  const routes = [
    { path: "/table", label: "Tabela" },
    { path: "/chart", label: "Gráfico" },
  ]

  if (pathname === "/") {
    return (
      <nav className="route-nav">
        {routes.map((route) => (
          <Link key={route.path} to={route.path} className="route-link">
            {route.label}
          </Link>
        ))}
      </nav>
    )
  }

  const links = routes.filter((route) => route.path !== pathname)
  return (
    <nav className="route-nav">
      <Link to="/">Home</Link>
      {links.map((route) => (
        <Link key={route.path} to={route.path} className="route-link">
          {route.label}
        </Link>
      ))}
    </nav>
  )
}

export default RouteNav
