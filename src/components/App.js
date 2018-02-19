import React from 'react'
import styled from 'styled-components'

// import Button from './Button'
import Quote from './Quote'
import Notice from './Notice'

import Cryptocurrency from './Cryptocurrency'

import {
  fetchCryptocurrencyData,
  formatTime,
  secondsToMilliseconds
} from '../util/helpers'

import { media, StyledLink } from '../theme/globalStyle'

const PageContainer = styled.div`
  display: grid;
  /* grid-gap: 20px; */
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    '. . h h h h h h h h . .'
    '. . c c c c c c c c . .'
    '. . f f f f f f f f . .';
  /* ${media.giant`
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: auto;
    grid-template-areas: 
      '. . h h h h h h . .'
      '. . c c c c c c . .'
      '. . f f f f f f . .';
    background: goldenrod;
  `};
  ${media.desktop`
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: auto;
    grid-template-areas: 
      '. h h h h h h .'
      '. c c c c c c .'
      '. f f f f f f .';
    background: dodgerblue;
  `};
  ${media.tablet`
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto;
    grid-template-areas: 
      '. h h h h .'
      '. c c c c .'
      '. f f f f .';
    background: mediumseagreen;
  `};
  ${media.phone`
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-template-areas: 
      '. h .'
      '. c .'
      '. f .';
      background: palevioletred;
  `}; */
`

const CryptoWrapper = styled.div`
  display: grid;
  grid-area: c;
  grid-gap: 20px;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: auto;

  /* ${media.giant`
    grid-template-columns: repeat(3, 1fr);
  `};
  ${media.desktop`
    grid-template-columns: repeat(2, 1fr);
  `};
  ${media.tablet`
    grid-template-columns: repeat(2, 1fr);
  `};
  ${media.phone`
    grid-template-columns: repeat(1, 1fr);
  `}; */
`

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      data: [],
      currency: 'GBP',
      limit: 3,
      apiUrl: 'https://api.coinmarketcap.com/v1/ticker/',
      timeNow: formatTime(new Date()),
      timeNext: ''
    }

    // In ES6 classes the constructor takes the place of
    // componentWillMount. 👍
    fetchCryptocurrencyData(this.apiUrl()).then(result => {
      this.setState({ data: result.data })
    })

    this.handleCurrencyChange = this.handleCurrencyChange.bind(this)
    this.handleLimitChange = this.handleLimitChange.bind(this)
  }

  handleCurrencyChange(e) {
    const currency = e.target.value
    const url = this.apiUrl(currency, this.state.limit)
    fetchCryptocurrencyData(url).then(result => {
      // add reduce on the data for the requested currency
      // set currency with result data
      this.setState({ data: result.data, currency })
    })
  }

  handleLimitChange(e) {
    const limit = e.target.value
    const url = this.apiUrl(this.state.currency, limit)
    fetchCryptocurrencyData(url).then(result => {
      // set limit with result data
      this.setState({ data: result.data, limit })
    })
  }

  apiUrl() {
    if (arguments.length === 0 || !arguments[0]) {
      return `${this.state.apiUrl}?convert=GBP&limit=3`
    }

    if (!arguments[1]) {
      return `${this.state.apiUrl}?convert=${arguments[0]}&limit=3`
    }

    return `${this.state.apiUrl}?convert=${arguments[0]}&limit=${
      arguments[1]
    }`
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { last_updated } = this.state.data[0]

      const timeNow = formatTime(new Date())
      const timeNext = formatTime(
        secondsToMilliseconds(last_updated),
        5
      )

      this.setState({ timeNow, timeNext })

      if (timeNow > timeNext) {
        // console.log('====================')
        // console.log('updating')
        // console.log('====================')

        fetchCryptocurrencyData(
          this.apiUrl(this.state.currency, this.state.limit)
        ).then(result => {
          this.setState({
            data: result.data,
            limit: this.state.limit,
            timeNow,
            timeNext
          })
        })
      }
      // console.log('====================')
      // console.log('time now :', timeNow)
      // console.log('time next:', timeNext)
      // console.log(timeNow > timeNext)
      // console.log('====================')
    }, 10 * 1000)
  }

  render() {
    return (
      <PageContainer>
        <Quote
          currency={this.state.currency}
          handleCurrencyChange={this.handleCurrencyChange}
          handleLimitChange={this.handleLimitChange}>
          Cryptocurrency tickers
        </Quote>
        <CryptoWrapper>
          {this.state.data.map((items, index) => {
            // console.log('====================')
            // console.log(items)
            // console.log('====================')
            return (
              <Cryptocurrency
                key={index}
                {...items}
                currency={this.state.currency}
              />
            )
          })}
        </CryptoWrapper>
        {/* <Tickers /> */}
        <Notice>
          Information updated every 5 minutes courtesy of{' '}
          <StyledLink
            target="_blank"
            rel="noopener"
            href={'https://coinmarketcap.com/'}>
            coinmarketcap.com
          </StyledLink>
        </Notice>
        {/* <Button>Hey, click me!</Button> */}
      </PageContainer>
    )
  }
}

export default App
