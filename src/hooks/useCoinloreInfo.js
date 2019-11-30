import { graphql, useStaticQuery } from 'gatsby'

export const useCoinloreInfo = () => {
  const { coinloreCoinlore } = useStaticQuery(
    graphql`
      query CoinloreBuildDateTime {
        coinloreCoinlore {
          info {
            coins_num
            time
          }
        }
      }
    `
  )
  return coinloreCoinlore.info
}
