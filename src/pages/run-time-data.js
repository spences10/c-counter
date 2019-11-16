import Dump from '@wesbos/dump'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Layout } from '../components/layout'

export default () => {
  const [runTimeData, setRunTimeData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getRunTimeData() {
      const res = await axios({
        url: 'https://api.coinlore.com/api/tickers/',
        method: 'post',
      })
      const { data } = res.data
      setRunTimeData(data)
      setLoading(false)
    }
    getRunTimeData()
  }, [])
  if (loading)
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    )

  return (
    <Layout>
      {/* <p>Data as at: {new Date(info.time * 1000).toISOString()}</p> */}
      {/* <p>Total Coins: {info.coins_num}</p> */}
      {runTimeData.map(coin => (
        <div
          key={coin.id}
          style={{ border: '1px solid black', marginTop: '2px' }}
        >
          <p>Symbol: {coin.symbol}</p>
          <p>Name: {coin.name}</p>
          <p>Price USD: {coin.price_usd}</p>
        </div>
      ))}
      <Dump GraphQLResponse={runTimeData} />
    </Layout>
  )
}
