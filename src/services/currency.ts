export interface Rate {
  [key: string]: number
}

export async function convert(
  base: string,
  destination: string
): Promise<Rate | null> {
  try {
    const result = await fetch(
      `http://api.exchangeratesapi.io/v1/latest?access_key=${process.env.ACCESS_KEY}&base=${base}`
    )
    const data = await result.json()
    return data.rates[destination]
  } catch (e) {
    return null
  }
}
