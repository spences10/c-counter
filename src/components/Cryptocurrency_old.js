import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CryptocurrencyLi = styled.li`
  padding: 1rem 2rem 2rem;
  margin: 1rem;
  border-radius: 0.5rem;
  min-width: 9rem;
  border: solid 1px rgba(0, 0, 0, 0.05);
  p {
    color: rgba(0, 0, 0, 0.75);
  }
`

const CryptocurrencyName = styled.p`
  font-size: 1.25rem;
`

// .bitcoin {
//   background-color: #fbe2c3;
//   border-bottom: solid 4px #f7931a;
// }
// .ethereum {
//   background-color: #c2c9ff;
//   border-bottom: solid 4px #454a75;
// }
// .litecoin {
//   background-color: #ececec;
//   border-bottom: solid 4px #bebebe;
// }

class Cryptocurrency extends React.Component {
  render() {
    let {
      id,
      name,
      symbol,
      price_usd,
      percent_change_1h,
      percent_change_24h,
      percent_change_7d
    } = this.props.data
    return (
      <CryptocurrencyLi key={id}>
        <CryptocurrencyName>
          {name} ({symbol})
        </CryptocurrencyName>
        <h1>${(+price_usd).toFixed(2)}</h1>
        <p>{percent_change_1h}% 1hr</p>
        <p>{percent_change_24h}% 24hrs</p>
        <p>{percent_change_7d}% 7days</p>
      </CryptocurrencyLi>
    )
  }
}

Cryptocurrency.propTypes = {
  data: PropTypes.array,
  id: PropTypes.number,
  name: PropTypes.string,
  symbol: PropTypes.string,
  price_usd: PropTypes.number,
  percent_change_1h: PropTypes.number,
  percent_change_24h: PropTypes.number,
  percent_change_7d: PropTypes.number
}

export default Cryptocurrency
