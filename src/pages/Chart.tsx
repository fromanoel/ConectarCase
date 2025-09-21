import { useEffect, useState } from "react"
import RouteNav from "../components/RouteNav"
import MainTitle from "../components/MainTitle"
import PIBLineChart from "../components/PIBLineChart"
import { fetchPIBData } from "../utils/fetchPIBData"
import Loader from "../components/Loader"
type PIBData = {
  year: number
  pibTotal: number | null
  pibPerCapita: number | null
}

const Chart = () => {
  const [data, setData] = useState<PIBData[]>([])

  useEffect(() => {
    fetchPIBData().then(setData)
  }, [])

  return (
    <>
      <RouteNav />
      <MainTitle
        title="Gráfico de evolução do PIB:"
        subtitle={
          <>
            Acompanhe a <strong>evolução histórica</strong> do{" "}
            <strong>PIB brasileiro</strong> de forma visual e intuitiva.
          </>
        }
      />
      <div className="content">
        {" "}
        {data.length === 0 ? (
          <div className="loader-container">
            <Loader />
          </div>
        ) : (
          <PIBLineChart data={data} />
        )}
      </div>
    </>
  )
}

export default Chart
