export async function convertRealToDolar(real: number, dollar: number) {
  const convertedDollar = real / dollar
  const formattedValue = convertedDollar.toFixed(0)
  return formattedValue
}
