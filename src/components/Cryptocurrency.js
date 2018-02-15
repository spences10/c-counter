import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  formatTime,
  numberParts,
  secondsToMilliseconds
} from '../util/helpers'

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 4;
  grid-template-rows: auto;
  grid-template-areas:
    'name  name  name  name'
    'price price price price'
    'o t 7 7'
    'z z z z';

  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  &:hover {
    transform: translateY(-3px);
    transition: all 0.3s;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.8);
  }
  border: 1px solid ${props => props.theme.black};
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.black};
`

const Name = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
`

const Symbol = styled.span`
  margin: 0.5rem 0.5rem 1rem 0.5rem;
  padding: 0.5rem 0.5rem 1rem 0.5rem;
  font-size: 1.5rem;
`

const NameWrapper = styled.div`
  margin: 0rem;
  padding: 1rem;

  grid-area: ${props => props.area};
  background: ${props => props.theme.dark};
  color: ${props => props.theme.white};
  border-radius: 9px 9px 0px 0px;
  justify-content: center;
`

const Price = styled.span`
  grid-area: p;
  margin: 0rem;
  padding: 0rem;

  font-size: 4rem;
  font-weight: bold;
`

const PctChange = styled.p`
  margin: 0.5rem;
  padding: 0.5rem;
  grid-area: ${props => props.area};
`

const Cur = styled.span`
  grid-area: c;
  margin: 0.6rem 0rem 0rem 1rem;
  padding: 0rem 0rem 0rem 0rem;
  font-size: 2rem;
`

const Dec = styled.span`
  grid-area: d;
  margin: 0.6rem 0.5rem 0rem 0rem;
  padding: 0rem 0.5rem 0rem 0rem;
  font-size: 2rem;
`

const LastUpdated = styled.span`
  margin: 0.5rem;
  padding: 0.5rem;
  grid-area: ${props => props.area};
`

const PriceWrapper = styled.div`
  display: grid;
  grid-template-columns: 3;
  grid-template-rows: auto;
  grid-template-areas: 'c p d';

  justify-content: start;
  align-items: start;
  color: ${props => props.theme.dark};
  grid-area: ${props => props.area};
`

class Cryptocurrency extends React.Component {
  constructor() {
    super()
  }

  renderCurrency() {
    let sign, price, dec
    if (this.props.currency === 'GBP') {
      sign = '£'
      price = numberParts(this.props.price_gbp)[0]
      dec = numberParts(this.props.price_gbp)[1]
    } else if (this.props.currency === 'USD') {
      sign = '$'
      price = numberParts(this.props.price_usd)[0]
      dec = numberParts(this.props.price_usd)[1]
    } else if (this.props.currency === 'EUR') {
      sign = '€'
      price = numberParts(this.props.price_eur)[0]
      dec = numberParts(this.props.price_eur)[1]
    }

    return (
      <PriceWrapper area={'price'}>
        <Cur>{sign}</Cur>
        <Price>{price}</Price>
        <Dec>{dec}</Dec>
      </PriceWrapper>
    )
  }

  render() {
    const {
      name,
      symbol,
      percent_change_1h,
      percent_change_24h,
      percent_change_7d,
      last_updated
    } = this.props

    return (
      <CardWrapper>
        <NameWrapper area={'name'}>
          <Name>{name}</Name>
          <Symbol>({symbol})</Symbol>
        </NameWrapper>
        {this.renderCurrency(this.props.currency)}
        <PctChange area={'o'}>{percent_change_1h}% 1hr</PctChange>
        <PctChange area={'t'}>{percent_change_24h}% 24hr</PctChange>
        <PctChange area={'7'}>{percent_change_7d}% 7days</PctChange>
        <LastUpdated area={'z'}>
          {formatTime(secondsToMilliseconds(last_updated))}
          {formatTime(secondsToMilliseconds(last_updated), 5)}
        </LastUpdated>
      </CardWrapper>
    )
  }
}

export default Cryptocurrency

Cryptocurrency.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  symbol: PropTypes.string,
  price_usd: PropTypes.string,
  price_gbp: PropTypes.string,
  price_eur: PropTypes.string,
  percent_change_1h: PropTypes.string,
  percent_change_24h: PropTypes.string,
  percent_change_7d: PropTypes.string,
  last_updated: PropTypes.string,
  currency: PropTypes.string
}
