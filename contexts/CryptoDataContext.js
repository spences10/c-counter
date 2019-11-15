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
    // timeNow: formatTime(new Date()),
    timeNext: '',
    currentSearch: ''
  }

  handleCurrencyChange(e) {
    const currency = e.target.value
    const url = this.apiUrl(currency, this.state.limit)
    fetchCryptocurrencyData(url).then(result => {
      this.setState({
        apiData: result.data,
        results: result.data,
        currency
      })
    })
  }

  handleLimitChange(e) {
    const limit = e.target.value
    const url = this.apiUrl(this.state.currency, limit)
    fetchCryptocurrencyData(url).then(result => {
      // set limit with result data
      this.setState({
        apiData: result.data,
        results: result.data,
        limit
      })
    })
  }

  handleSearch(e) {
    const regex = new RegExp(e.target.value, 'gi')
    this.setState({
      results: this.state.apiData.filter(
        item => item.name.match(regex) || item.symbol.match(regex)
      ),
      currentSearch: e.target.value
    })
  }

  filterData() {
    this.setState({
      apiData: this.state.data.filter(item =>
        item.name.match(this.state.currentSearch)
      )
    })
  }

  apiUrl() {
    if (arguments.length === 0 || !arguments[0]) {
      return `${this.state.apiUrl}?convert=GBP&limit=3`
    }

    if (!arguments[1]) {
      return `${this.state.apiUrl}?convert=${arguments[0]}&limit=3`
    }

    return `${this.state.apiUrl}?convert=${arguments[0]}&limit=${
      arguments[1]
    }`
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
