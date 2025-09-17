import "../styles/home.css"
import HomeCard from "../components/HomeCard.js"
import RouteNav from "../components/RouteNav.js"
import imgChart from "../assets/chart.png"
import imgTable from "../assets/table.png"
import { Link } from "react-router-dom"
const Home = () => {
  return (
    <>
      <RouteNav />
      <div className="home-container">
        <div className="home-headline">
          <h1 className="home-title">
            Transforme dados em conhecimento:
            <span className="home-subtitle">
              visualize a evolução do PIB brasileiro de forma simples e
              interativa.
            </span>
          </h1>
        </div>
        <div className="home-content">
          <Link to="/chart" className="route-link">
            <HomeCard
              bgImage={imgChart}
              mainTitle="Gráfico de evolução do PIB"
              mainText="Gráfico linear que exibe a evolução do PIB brasileiro e PIB per capta em dólares."
            />
          </Link>
          <Link to="/table" className="route-link">
            <HomeCard
              bgImage={imgTable}
              mainTitle="Tabela do PIB por ano"
              mainText="Tabela que exibe dados referente ao PIB total e per capta em dólares, e o anos referentes."
            />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
