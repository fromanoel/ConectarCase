import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts"
import "../styles/Chart.css"
import RouteNav from "../components/RouteNav"
import MainTitle from "../components/MainTitle"
import { useEffect, useState } from "react"
import { fetchPIBData } from "../utils/fetchPIBData"
import "../styles/Chart.css"
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
      <ResponsiveContainer width="100%" height={700}>
        <LineChart
          data={data}
          margin={{ left: 40, right: 20, top: 40, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis tickMargin={10} dataKey="year" interval={5} />
          <YAxis
            yAxisId="left"
            domain={[0, 2000000]}
            tickMargin={2}
            tickFormatter={(value) =>
              `${Math.round(value).toLocaleString()} mi`
            }
            label={{
              value: "PIB Total (milhões USD)",
              angle: -90,
              position: "insideLeft",
              offset: -20,
              dy: 350,
              style: { fill: "#504ac7ff", fontWeight: "bold" },
            }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={[0, 10000]}
            tickFormatter={(value) => `$${Math.round(value).toLocaleString()}`}
            label={{
              value: "PIB per capita (USD)",
              angle: 90,
              position: "insideRight",
              offset: -2,
              dy: 350,
              style: { fill: "#ce3131ff", fontWeight: "bold" },
            }}
          />
          <Tooltip
            formatter={(value: number, name: string) => {
              if (name === "PIB Total")
                return [`${Math.round(value).toLocaleString()} mi USD`, name]
              if (name === "PIB per capita")
                return [`$${Math.round(value).toLocaleString()}`, name]
              return value
            }}
          />
          <Legend
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{ paddingTop: 20, paddingBottom: 10 }}
          />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="pibTotal"
            stroke="#504ac7ff"
            name="PIB Total"
            dot={false}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="pibPerCapita"
            stroke="#ce3131ff"
            name="PIB per capita"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}

export default Chart
