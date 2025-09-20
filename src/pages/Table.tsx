import { useEffect, useState } from "react"
import MainTitle from "../components/MainTitle"
import RouteNav from "../components/RouteNav"
import PIBTable from "../components/PIBTable"
import Pagination from "../components/Pagination"
import { fetchPIBData } from "../utils/fetchPIBData"
import Loader from "../components/Loader"

type PIBData = {
  year: number
  pibTotal: number | null
  pibPerCapita: number | null
}
const itensPerPage = 10

const Table = () => {
  const [data, setData] = useState<PIBData[]>([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetchPIBData().then(setData)
  }, [])

  const startIndex = (page - 1) * itensPerPage
  const endIndex = startIndex + itensPerPage
  const paginatedData = data.slice(startIndex, endIndex)
  const totalPages = Math.ceil(data.length / itensPerPage)

  return (
    <>
      <RouteNav />
      <MainTitle
        title="Tabela de evolução do PIB:"
        subtitle={
          <>
            Consulte os <strong>dados anuais</strong> do{" "}
            <strong>PIB brasileiro</strong> de forma detalhada e organizada em
            tabela.
          </>
        }
      />
      {data.length === 0 ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        <>
          <PIBTable data={paginatedData} />
          <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        </>
      )}
    </>
  )
}

export default Table
