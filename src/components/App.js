import React from 'react'

// import Button from './Button'
import Quote from './Quote'
import Notice from './Notice'

import Tickers from './Tickers'
// import Cryptocurrency from './Cryptocurrency'

import { fetchCryptocurrencyData } from '../util/helpers'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      data: []
    }
  }
  componentDidMount() {
    fetchCryptocurrencyData(
      'https://api.coinmarketcap.com/v1/ticker/?convert=GBP&limit=50'
    ).then(result => {
      this.setState({ data: result.data })
    })
  }
  render() {
    return (
      <div>
        {this.state.data.map(items => {
          console.log('====================')
          console.log(items)
          console.log('====================')
          return <p key={items.id}>{items.id}</p>
        })}
        {/* <Quote>Cryptocurrency tickers</Quote>
        <Tickers />
        <Notice>
          Information updated every 10 seconds courtesy of
          coinmarketcap.com
        </Notice> */}
        {/* <Button>Hey, click me!</Button> */}
      </div>
    )
  }
}

export default App
