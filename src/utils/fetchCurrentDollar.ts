export async function fetchCurrentDollar(): Promise<number> {
  try {
    const token = import.meta.env.VITE_AWESOME_API_TOKEN
    const url = `https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL?token=${token}`
    const response = await fetch(url)
    const posts = await response.json()
    const dollar = Number(posts.USDBRL.bid)
    const formattedDollar = Number(dollar.toFixed(2))
    console.log(formattedDollar)
    return formattedDollar
  } catch (error) {
    console.error(
      "Erro ao buscar cotação do dólar, usando valor padrão 5.30:",
      error,
    )
    return 5.3
  }
}
