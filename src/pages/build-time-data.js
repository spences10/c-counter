import Dump from '@wesbos/dump'
import React from 'react'
import { Layout } from '../components/layout'
import { Timer } from '../components/timer'

export default ({ data }) => {
  const { info, data: coinData } = data.coinloreCoinlore
  const buildTimeDate = new Date(info.time * 1000).toISOString()
  const buildTime = new Date(info.time * 1000)
    .toISOString()
    .slice(11, -8)
  const buildDate = new Date(info.time * 1000)
    .toISOString()
    .slice(0, -14)
  return (
    <Layout>
      <Timer />
      <p>
        Data as at: {buildDate} {buildTime}
      </p>
      <p>Total Coins: {info.coins_num}</p>
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
