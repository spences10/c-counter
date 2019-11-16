import React from 'react'

export const CryptoCard = ({ id, symbol, name, price }) => {
  return (
    <div key={id} style={{ border: '1px solid black' }}>
      <h2>{symbol}</h2>
      <h3>{name}</h3>
      <h4>{price}</h4>
    </div>
  )
}
