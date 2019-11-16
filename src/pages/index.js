import React from 'react'
import SEO from 'react-seo-component'
import styled from 'styled-components'
import { CryptoCard } from '../components/crypto-card'
import { Layout } from '../components/layout'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

export const autoGrid = (minColumnWidth = 250, gridGap = 0) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px,1fr))`,
  gridGap,
})

const Gallery = styled.div({
  ...autoGrid(300, 5),
})

export default ({ data }) => {
  const { title, description, author } = useSiteMetadata()
  const { data: coinData } = data.coinloreCoinlore

  return (
    <Layout>
      <SEO
        title={title}
        description={description || `nothin’`}
        // image={image}
        // pathname={siteUrl}
        // siteLanguage={siteLanguage}
        // siteLocale={siteLocale}
        twitterUsername={author}
      />
      <Gallery>
        {coinData.map(coin => (
          <CryptoCard
            id={coin.id}
            symbol={coin.symbol}
            name={coin.name}
            price={coin.price_usd}
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
