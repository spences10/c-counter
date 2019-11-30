import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'name  name  name  name '
    'price price price price'
    'pct   pct   pct   pct  '
    'p1hr  p1hr  p1hr  p1hr'
    'p24hr p24hr p24hr p24hr'
    'p7d   p7d   p7d   p7d';
  border-radius: 10px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  &:hover {
    /* transform: translateY(-3px); */
    transition: all 0.3s;
    /* box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.8); */
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
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

const PercentageChangeTitle = styled.h4`
  grid-area: pct;
  padding: 0.5rem;
  margin: 0;
  opacity: 0.8;
`

const PercentValue = styled.span`
  position: absolute;
  font-weight: 900;
  right: 4rem;
`

const PercentageTitle = styled.span`
  padding-left: 4rem;
`

const PercentageChange = styled.div`
  grid-area: ${props => props.area};
  padding: 0.5rem;
  position: relative;
`

export const CryptoCard = ({
  id,
  symbol,
  name,
  price,
  pcChange1h,
  pcChange24h,
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
      <PercentageChangeTitle>Percent Change:</PercentageChangeTitle>
      <PercentageChange area={'p1hr'}>
        <PercentageTitle>1hr</PercentageTitle>
        <PercentValue>{pcChange1h}</PercentValue>
      </PercentageChange>
      <PercentageChange area={'p24hr'}>
        <PercentageTitle>24hr</PercentageTitle>
        <PercentValue>{pcChange24h}</PercentValue>
      </PercentageChange>
      <PercentageChange area={'p7d'}>
        <PercentageTitle>7d</PercentageTitle>
        <PercentValue>{pcChange7d}</PercentValue>
      </PercentageChange>
    </CardWrapper>
  )
}
