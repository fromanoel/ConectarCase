import { fetchAnnualPIB } from "./fetchAnnualPIB"
import { fetchPercaptaPIB } from "./fetchPercapitaPIB"

export async function fetchPIBData() {
  const [annualPIB, percaptaPIB] = await Promise.all([
    fetchAnnualPIB(),
    fetchPercaptaPIB(),
  ])

  const data = []
  for (let year = 1998; year <= 2022; year++) {
    data.push({
      year,
      pibTotal: annualPIB[year] !== undefined ? Number(annualPIB[year]) : null,
      pibPerCapita:
        percaptaPIB[year] !== undefined ? Number(percaptaPIB[year]) : null,
    })
  }
  console.log(data)
  return data
}
