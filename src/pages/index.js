import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SEO from 'react-seo-component'
import styled from 'styled-components'
import { CryptoCard } from '../components/crypto-card'
import { Layout } from '../components/layout'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { useTimeDifference } from '../hooks/useTimeDifference'

export const autoGrid = (minColumnWidth = 250, gridGap = 0) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px,1fr))`,
  gridGap,
})

const Gallery = styled.div({
  ...autoGrid(220, 20),
})

export default ({ data }) => {
  const {
    title,
    description,
    author,
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
  } = useSiteMetadata()
  const { data: coinData } = data.coinloreCoinlore

  const timeDifference = useTimeDifference()

  const [runTimeData, setRunTimeData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getRunTimeData() {
      const res = await axios('https://api.coinlore.com/api/tickers/')
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

  let coinloreData = {}

  if (timeDifference > 10) {
    // use runtime data
    coinloreData = runTimeData
  } else {
    // use build time data
    coinloreData = coinData
  }

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={author}
      />
      <Gallery>
        {coinloreData.map(coin => (
          <CryptoCard
            id={coin.id}
            symbol={coin.symbol}
            name={coin.name}
            price={coin.price_usd}
            pcChange1h={coin.percent_change_1h}
            pcChange24h={coin.percent_change_24h}
            pcChange7d={coin.percent_change_7d}
          />
        ))}
      </Gallery>
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
