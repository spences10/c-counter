import axios from 'axios'

export async function fetchCryptocurrencyData(dataUrl) {
  const json = await axios.get(dataUrl)
  return json
}

export function numberParts(fullNumber) {
  const int = Math.floor(fullNumber).toString()
  const dec = fullNumber - Math.floor(fullNumber)
  return [int, dec.toFixed(2).substring(dec.toString().indexOf('.'))]
}
