import { realToDollar } from "./realToDollar"
import { fetchCurrentDollar } from "./fetchCurrentDollar"

export async function fetchAnnualPIB() {
  const url = `https://servicodados.ibge.gov.br/api/v3/agregados/6784/periodos/1998%7C1999%7C2000%7C2001%7C2002%7C2003%7C2004%7C2005%7C2006%7C2007%7C2008%7C2009%7C2010%7C2011%7C2012%7C2013%7C2014%7C2015%7C2016%7C2017%7C2018%7C2019%7C2020%7C2021%7C2022/variaveis/9808?localidades=N1[all]`
  const response = await fetch(url)
  const data = await response.json()
  const serieObj = data[0].resultados[0].series[0].serie
  const dollar = await fetchCurrentDollar()

  const result: Record<number, number> = {}

  for (const [year, annualPIB] of Object.entries(serieObj)) {
    const converted = await realToDollar(Number(annualPIB), dollar)
    result[Number(year)] = Number(converted)
  }

  return result
}
