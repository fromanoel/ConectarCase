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
const data = [
  { year: 2010, pibTotal: 2000, pibPerCapita: 10000 },
  { year: 2011, pibTotal: 2200, pibPerCapita: 11000 },
  { year: 2012, pibTotal: 2500, pibPerCapita: 12000 },
  { year: 2013, pibTotal: 2700, pibPerCapita: 13000 },
  { year: 2014, pibTotal: 2900, pibPerCapita: 13500 },
  { year: 2015, pibTotal: 3100, pibPerCapita: 14000 },
  { year: 2016, pibTotal: 3200, pibPerCapita: 14200 },
  { year: 2017, pibTotal: 3400, pibPerCapita: 14500 },
  { year: 2018, pibTotal: 3600, pibPerCapita: 14800 },
  { year: 2019, pibTotal: 3700, pibPerCapita: 15000 },
  { year: 2020, pibTotal: 3550, pibPerCapita: 14700 },
  { year: 2021, pibTotal: 3800, pibPerCapita: 15300 },
  { year: 2022, pibTotal: 4000, pibPerCapita: 15800 },
  { year: 2023, pibTotal: 4200, pibPerCapita: 16200 },
  { year: 2024, pibTotal: 4200, pibPerCapita: 16200 },
]

const Chart = () => {
  return (
    <>
      <RouteNav />
      <ResponsiveContainer width="100%" height={700}>
        <LineChart
          data={data}
          margin={{ left: 15, right: 20, top: 5, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis tickMargin={10} dataKey="year" />
          <YAxis
            domain={[0, "dataMax + 1000"]}
            tickMargin={2}
            tickFormatter={(value) => `$${value.toLocaleString()}`}
          />
          <Tooltip />
          <Legend
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{ paddingTop: 20, paddingBottom: 10 }}
          />
          <Line
            type="monotone"
            dataKey="pibTotal"
            stroke="#504ac7ff"
            name="PIB Total"
          />
          <Line
            type="monotone"
            dataKey="pibPerCapita"
            stroke="#ce3131ff"
            name="PIB per capita"
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}

export default Chart
