import Dump from '@wesbos/dump'
import React from 'react'
import { Layout } from '../components/layout'

export default ({ data }) => {
  const { info, data: coinData } = data.coinloreCoinlore
  return (
    <Layout>
      {coinData.map(coin => (
        <div
          key={coin.id}
          style={{ border: '1px solid black', marginTop: '2px' }}
        >
          <p>Symbol: {coin.symbol}</p>
          <p>Name: {coin.name}</p>
          <p>Price USD: {coin.price_usd}</p>
        </div>
      ))}
      <Dump info={info} GraphQLResponse={coinData} />
    </Layout>
  )
}

export const GatsbyQuery = graphql`
  query CoinloreQuery {
    coinloreCoinlore {
      data {
        symbol
        name
        nameid
        rank
        price_usd
        percent_change_24h
        percent_change_1h
        percent_change_7d
        price_btc
        market_cap_usd
        volume24
        volume24a
        csupply
        tsupply
        msupply
      }
    }
  }
`
