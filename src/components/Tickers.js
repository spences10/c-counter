import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Cryptocurrency from './Cryptocurrency'

const TickersContainer = styled.div``

const TickersList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: inline-flex;
`

class Tickers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          id: 'bitcoin',
          name: 'Bitcoin',
          symbol: 'BTC',
          price_usd: '1',
          percent_change_1h: '0',
          percent_change_24h: '0',
          percent_change_7d: '0'
        },
        {
          id: 'ethereum',
          name: 'Ethereum',
          symbol: 'ETH',
          price_usd: '1',
          percent_change_1h: '0',
          percent_change_24h: '0',
          percent_change_7d: '0'
        },
        {
          id: 'ripple',
          name: 'Ripple',
          symbol: 'XRP',
          price_usd: '1',
          percent_change_1h: '0',
          percent_change_24h: '0',
          percent_change_7d: '0'
        },
        {
          id: 'bitcoin-cash',
          name: 'Bitcoin Cash',
          symbol: 'BTC',
          price_usd: '1',
          percent_change_1h: '0',
          percent_change_24h: '0',
          percent_change_7d: '0'
        },
        {
          id: 'cardano',
          name: 'Cardano',
          symbol: 'ADA',
          price_usd: '1',
          percent_change_1h: '0',
          percent_change_24h: '0',
          percent_change_7d: '0'
        }
      ]
    }
  }

  fetchCryptocurrencyData() {
    axios
      .get('https://api.coinmarketcap.com/v1/ticker/?limit=5')
      .then(response => {
        var wanted = [
          'bitcoin',
          'ethereum',
          'ripple',
          'bitcoin-cash',
          'cardano'
        ]
        var result = response.data.filter(currency =>
          wanted.includes(currency.id)
        )
        this.setState({ data: result })
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.fetchCryptocurrencyData()
    this.interval = setInterval(
      () => this.fetchCryptocurrencyData(),
      10 * 1000
    )
  }

  render() {
    let tickers = this.state.data.map(currency => (
      <Cryptocurrency data={currency} key={currency.id} />
    ))
    return (
      <TickersContainer>
        <TickersList>{tickers}</TickersList>
      </TickersContainer>
    )
  }
}

export default Tickers
