import React from 'react'
import styled from 'styled-components'

// import Button from './Button'
import Quote from './Quote'
import Notice from './Notice'

// import Tickers from './Tickers'
import Cryptocurrency from './Cryptocurrency'

import { fetchCryptocurrencyData } from '../util/helpers'

const PageContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    '. . h h h h h h h h . .'
    '. . c c c c c c c c . .'
    '. . f f f f f f f f . .';
`

const CryptoWrapper = styled.div`
  display: grid;
  grid-area: c;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
`

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      data: []
    }
  }

  handleSelectChange() {}

  apiUrl() {
    if (arguments.length === 0) {
      return 'https://api.coinmarketcap.com/v1/ticker/?convert=GBP&limit=50'
    }
    return `https://api.coinmarketcap.com/v1/ticker/?convert=${
      arguments[0]
    }&limit=${arguments[1]}`
  }

  componentWillMount() {
    fetchCryptocurrencyData(this.apiUrl()).then(result => {
      this.setState({ data: result.data })
    })
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      console.log('start')
      fetchCryptocurrencyData(this.apiUrl()).then(result => {
        this.setState({ data: result.data })
      })
      console.log('end')
    }, 2 * 60 * 1000)
  }

  render() {
    return (
      <PageContainer>
        <Quote>Cryptocurrency tickers</Quote>
        <CryptoWrapper>
          {this.state.data.map((items, index) => {
            // console.log('====================')
            // console.log(items)
            // console.log('====================')
            return <Cryptocurrency key={index} {...items} />
          })}
        </CryptoWrapper>
        {/* <Tickers /> */}
        <Notice>
          Information updated every 10 seconds courtesy of
          coinmarketcap.com
        </Notice>
        {/* <Button>Hey, click me!</Button> */}
      </PageContainer>
    )
  }
}

export default App
