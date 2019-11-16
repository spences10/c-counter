import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
`

export const CryptoCard = ({ id, symbol, name, price }) => {
  return (
    <CardWrapper key={id}>
      <h2>{symbol}</h2>
      <h3>{name}</h3>
      <h4>{price}</h4>
    </CardWrapper>
  )
}
