import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { numberParts } from '../util/helpers'

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 3;
  grid-template-rows: auto;
  grid-template-areas:
    'n s .'
    'g . .'
    'u . .'
    'o . .'
    't . .'
    '7 . .';

  border: 1px solid ${props => props.theme.black};

  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  &:hover {
    transform: translateY(-3px);
    transition: all 0.3s;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.8);
  }
  background-color: ${props => props.theme.white};
`

const Name = styled.h1`
  margin: 0.5rem;
  padding: 0.5rem;
  grid-area: n;
`

const Symbol = styled.p`
  margin: 0.5rem;
  padding: 0.5rem;
  grid-area: s;
  align-self: center;
`

const Price = styled.span`
  margin: 0.5rem;
  padding: 0.5rem;
  grid-area: ${props => props.area};

  font-size: 4rem;
  font-weight: bold;
`

const PctChange = styled.p`
  margin: 0.5rem;
  padding: 0.5rem;
  grid-area: ${props => props.area};
`

const Cryptocurrency = props => {
  const {
    name,
    symbol,
    price_usd,
    price_gbp,
    percent_change_1h,
    percent_change_24h,
    percent_change_7d
  } = props

  console.log('====================')
  console.log('PROPS ', props)
  console.log('====================')

  return (
    <CardWrapper>
      <Name>{name}</Name> <Symbol>({symbol})</Symbol>
      <Price area={'g'}>
        {numberParts(price_usd)[0]}
        {numberParts(price_usd)[1]}
      </Price>
      <Price area={'u'}>
        {numberParts(price_usd)[0]}
        {numberParts(price_usd)[1]}
      </Price>
      <PctChange area={'o'}>{percent_change_1h}% 1hr</PctChange>
      <PctChange area={'t'}>{percent_change_24h}% 24hr</PctChange>
      <PctChange area={'7'}>{percent_change_7d}% 7days</PctChange>
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
