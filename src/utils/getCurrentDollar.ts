export async function GetCurrentDollar(): Promise<number> {
  const token = import.meta.env.VITE_AWESOME_API_TOKEN
  const url = `https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL?token=${token}`
  const response = await fetch(url)
  const posts = await response.json()
  const dollar = Number(posts.USDBRL.bid)
  const formattedDollar = Number(dollar.toFixed(2))
  return formattedDollar
}
