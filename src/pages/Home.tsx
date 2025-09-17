import "../styles/home.css"
import HomeSection from "../components/HomeSection.js"
import RouteNav from "../components/RouteNav.js"
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
        <HomeSection
          mainTitle="Gráfico de evolução do PIB"
          mainText="Gráfico linear que exibe a evolução do PIB brasileiro e PIB per capta em dólares."
        />
      </div>
      <div className="home-container">
        <HomeSection
          mainTitle="Tabela do PIB por ano"
          mainText="Tabela que exibe dados referente ao PIB total e per capta em dólares, e o anos referentes."
        />
      </div>
    </>
  )
}

export default Home
