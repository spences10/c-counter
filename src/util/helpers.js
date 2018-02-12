import axios from 'axios'

export async function fetchCryptocurrencyData(dataUrl) {
  const json = await axios.get(dataUrl)
  return json
  // axios
  //   .get(dataUrl)
  //   .then(response => {
  //     var wanted = [
  //       'bitcoin',
  //       'ethereum',
  //       'ripple',
  //       'bitcoin-cash',
  //       'cardano'
  //     ]
  //     var result = response.data.filter(currency =>
  //       wanted.includes(currency.id)
  //     )
  //     return result
  //   })
  //   .catch(err => console.log(err))
}
