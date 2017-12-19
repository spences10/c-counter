import React, { Component } from 'react'
import styled from 'styled-components'

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
          price: '1'
        },
        {
          id: 'ethereum',
          price: '1'
        },
        {
          id: 'litecoin',
          price: '1'
        }
      ]
    }
  }

  render() {
    var tickers = this.state.data.map(currency => (
      <li key={currency.id}>
        <h3>{currency.id}</h3>
        <h4>{currency.price} USD</h4>
      </li>
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
