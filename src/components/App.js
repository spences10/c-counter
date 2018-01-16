import React, { Component } from 'react'

import Button from './Button'
import Quote from './Quote'
import Notice from './Notice'

import Tickers from './Tickers'
import Cryptocurrency from './Cryptocurrency'

const App = () => (
  <div>
    <Quote>Cryptocurrency tickers</Quote>
    <Tickers />
    <Notice>
      Information updated every 10 seconds courtesy of
      coinmarketcap.com
    </Notice>
    {/* <Button>Hey, click me!</Button> */}
  </div>
)

export default App
