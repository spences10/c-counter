import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'name  name  name  name '
    'price price price price';

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
  background: #fafa;
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
  font-family: 'Montserrat Alternates';
  font-size: 2.5rem;
`

export const CryptoCard = ({ id, symbol, name, price }) => {
  return (
    <CardWrapper key={`${symbol}${id}`}>
      <NameWrapper>
        <Name>{name}</Name>
        <Symbol>({symbol})</Symbol>
      </NameWrapper>
      <Price>
        <span
          style={{
            position: 'relative',
            top: '-11px',
            fontSize: '1.5rem',
          }}
        >
          $
        </span>
        {price.slice(0, price.indexOf('.'))}
        <span
          style={{
            position: 'relative',
            top: '-11px',
            fontSize: '1.5rem',
          }}
        >
          {price.slice(price.indexOf('.'))}
        </span>
      </Price>
    </CardWrapper>
  )
}
