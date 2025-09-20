import { useEffect, useState } from "react"
import MainTitle from "../components/MainTitle"
import RouteNav from "../components/RouteNav"
import "../styles/Table.css"
import { fetchPIBData } from "../utils/fetchPIBData"

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
      <div className="table-div">
        <table>
          <thead>
            <tr>
              <th>Ano</th>
              <th>PIB Total (mi USD)</th>
              <th>PIB per capita (USD)</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, idx) => (
              <tr key={idx}>
                <td>{row.year}</td>
                <td>
                  {row.pibTotal !== null
                    ? "$" +
                      row.pibTotal.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })
                    : "N/A"}
                </td>
                <td>
                  {row.pibPerCapita !== null
                    ? "$" +
                      row.pibPerCapita.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })
                    : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <p>
          Página {page} de {totalPages}
        </p>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            className={page === i + 1 ? "active-page" : ""}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </>
  )
}

export default Table
