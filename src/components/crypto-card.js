import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'name  name  name  name '
    'price price price price'
    '. . . .';

  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  &:hover {
    transform: translateY(-3px);
    transition: all 0.3s;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.8);
  }
`

const NameWrapper = styled.div`
  position: relative;
  grid-area: name;
  background: #663399;
  color: #fff;
  border-radius: 10px 10px 0 0;
  padding: 0.5rem;
`

const Symbol = styled.span`
  position: absolute;
  font-size: 1.5rem;
  right: 0;
  padding: 0.5rem;
`

const Name = styled.span`
  font-size: 2rem;
  font-weight: bold;
`

const Price = styled.span`
  grid-area: price;
  padding: 0.5rem;
  font-family: 'Anonymous Pro';
  font-size: 2.5rem;
  span {
    position: relative;
    top: -11px;
    font-size: 1.5rem;
  }
`

export const CryptoCard = ({
  id,
  symbol,
  name,
  price,
  pcChange24h,
  pcChange1h,
  pcChange7d,
}) => {
  return (
    <CardWrapper key={`${symbol}${id}`}>
      <NameWrapper>
        <Name>{name}</Name>
        <Symbol>({symbol})</Symbol>
      </NameWrapper>
      <Price>
        <span>$</span>
        {price.slice(0, price.indexOf('.'))}
        <span>{price.slice(price.indexOf('.'))}</span>
      </Price>
      <div style={{ padding: '0.5rem' }}>
        <p>Percent Change 1hr</p>
        <p>{pcChange1h}</p>
        <p>Percent Change 24hr</p>
        <p>{pcChange24h}</p>
        <p>Percent Change 7d</p>
        <p>{pcChange7d}</p>
      </div>
    </CardWrapper>
  )
}
