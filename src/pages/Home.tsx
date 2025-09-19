import "../styles/home.css"
import HomeCard from "../components/HomeCard.js"
import RouteNav from "../components/RouteNav.js"
import imgChart from "../assets/chart.png"
import imgTable from "../assets/table.png"
import { Link } from "react-router-dom"
import MainTitle from "../components/MainTitle.js"
const Home = () => {
  return (
    <>
      <RouteNav />
      <div className="home-container">
        <MainTitle
          title="Transfome dados em conhecimento:"
          subtitle={
            <>
              visualize a <strong>evolução</strong> do{" "}
              <strong>PIB brasileiro</strong> de forma simples e interativa.
            </>
          }
        />
        <div className="home-content">
          <Link to="/chart" className="route-link">
            <HomeCard
              bgImage={imgChart}
              mainTitle="Gráfico de evolução do PIB"
              mainText="Visualize a evolução do PIB brasileiro (total e per capita, em dólares) ao longo dos anos em um gráfico de linha interativo.
"
            />
          </Link>
          <Link to="/table" className="route-link">
            <HomeCard
              bgImage={imgTable}
              mainTitle="Tabela do PIB por ano"
              mainText="Consulte uma tabela com o PIB total e o PIB per capta em dólares de cada ano."
            />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
