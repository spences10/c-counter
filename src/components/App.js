import React, { Component } from 'react'

import Button from './Button'
import Quote from './Quote'
import Notice from './Notice'

import Tickers from './Tickers'

const App = () => (
  <div>
    <Button>Hey, click me!</Button>
    <Notice>
      Just letting you know... We think you're awesome and we're super happy to
      have you as a customer!
    </Notice>
    <Quote>Wooooaa, this is sooo so cool my friends!!</Quote>
    <Tickers />
  </div>
)

export default App
