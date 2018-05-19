import React from 'react'
// Context is made up of two things
// Provider - Single as close to top level as possible
// Consumer - Multiple have multiple consumers
export const CryptoDataContext = React.createContext()

export class CryptoDataProvider extends React.Component {
  state = {
    apiData: [], // the api data
    results: [], // state to use for filtering data
    currency: 'GBP', // default to GBP
    limit: 3,
    apiUrl: 'https://api.coinmarketcap.com/v1/ticker/',
    timeNow: formatTime(new Date()),
    timeNext: '',
    currentSearch: ''
  }

  componentWillMount() {
    fetchCryptocurrencyData = () => {
      this.setState({
        item1: 2,
        item2: 3
      })
    }
  }
  render() {
    return (
      <CryptoDataContext.Provider
        value={{
          ...this.state,
          fetchCryptocurrencyData: this.fetchCryptocurrencyData
        }}
      >
        {this.props.children}
      </CryptoDataContext.Provider>
    )
  }
}
