import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CardWrapper = styled.div`
  border: 1px solid ${props => props.theme.black};
  border-radius: 4px;
`

const Cryptocurrency = props => {
  const {
    id,
    name,
    symbol,
    price_usd,
    price_gbp,
    percent_change_1h,
    percent_change_24h,
    percent_change_7d
  } = props

  console.log('====================')
  console.log(props)
  console.log('====================')

  return (
    <CardWrapper>
      <p>{id}</p>
      <p>
        {name} {symbol}
      </p>
      <p>{parseFloat(price_usd).toFixed(2)}</p>
      <p>{parseFloat(price_gbp).toFixed(2)}</p>
    </CardWrapper>
  )
}

export default Cryptocurrency

Cryptocurrency.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  symbol: PropTypes.string,
  price_usd: PropTypes.string,
  price_gbp: PropTypes.string,
  percent_change_1h: PropTypes.string,
  percent_change_24h: PropTypes.string,
  percent_change_7d: PropTypes.string
}
