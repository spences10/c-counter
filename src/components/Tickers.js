import React, { Component } from 'react'
import styled from 'styled-components'

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
          id: 'litecoin',
          name: 'Litecoin',
          symbol: 'LTC',
          price_usd: '1',
          percent_change_1h: '0',
          percent_change_24h: '0',
          percent_change_7d: '0'
        }
      ]
    }
  }

  render() {
    let tickers = this.state.data.map(currency => (
      <Cryptocurrency data={currency} key={currency.id} />
    ))
    return (
      <TickersContainer>
        <TickersList>{tickers}</TickersList>
        <p>
          Information updated every 10 seconds courtesy of coinmarketcap.com
        </p>
      </TickersContainer>
    )
  }
}

export default Tickers
