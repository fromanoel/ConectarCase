import "../styles/PIBTable.css"
type PIBData = {
  year: number
  pibTotal: number | null
  pibPerCapita: number | null
}

type PIBTableProps = {
  data: PIBData[]
}

const PIBTable = ({ data }: PIBTableProps) => (
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
        {data.map((row, idx) => (
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
)

export default PIBTable
