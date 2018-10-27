import React from 'react'
import styled from 'styled-components'

// import Button from './Button'
import Header from './header'
import Notice from './Notice'

import Cryptocurrency from './Cryptocurrency'

import {
  fetchCryptocurrencyData,
  formatTime,
  secondsToMilliseconds
} from '../util/helpers'

import { GlobalStyle } from '../theme/globalStyle'

import { media, StyledLink } from '../theme/globalStyle'

const PageContainer = styled.div`
  display: grid;
  /* grid-gap: 20px; */
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'header  header  header'
    'content content content '
    'footer  footer  footer ';
  margin: 2.5rem;
  padding: 2.5rem;
  ${media.giant`
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-template-areas: 
      'header  header  header'
      'content content content '
      'footer  footer  footer ';
    margin: 2rem;
    padding: 2rem;

    /* background: goldenrod; */
  `};
  ${media.desktop`
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-template-areas: 
      'header  header  header'
      'content content content '
      'footer  footer  footer ';
      margin: 1.5rem;
      padding: 1.5rem;

    /* background: dodgerblue; */
  `};
  ${media.tablet`
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    grid-template-areas: 
      'header  header '
      'content content'
      'footer  footer ';
    margin: 1rem;
    padding: 1rem;

    /* background: mediumseagreen; */
  `};
  ${media.phone`
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
    grid-template-areas: 
      'header'
      'content'
      'footer';
    margin: 0.5rem;
    padding: 0.5rem;

    /* background: palevioletred; */
  `};
`

const CryptoWrapper = styled.div`
  display: grid;
  grid-area: content;
  grid-gap: 20px;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: auto;

  ${media.giant`
    grid-template-columns: repeat(3, 1fr);
  `};
  ${media.desktop`
    grid-template-columns: repeat(2, 1fr);
  `};
  ${media.tablet`
    grid-template-columns: repeat(1, 1fr);
  `};
  ${media.phone`
    grid-template-columns: repeat(1, 1fr);
  `};
`

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      apiData: [], // the api data
      results: [], // state to use for filtering data
      currency: 'GBP', // default to GBP
      limit: 3,
      apiUrl: 'https://api.coinmarketcap.com/v1/ticker/',
      timeNow: formatTime(new Date()),
      timeNext: '',
      currentSearch: ''
    }

    // In ES6 classes the constructor takes the place of
    // componentWillMount. 👍
    fetchCryptocurrencyData(this.apiUrl()).then(result => {
      this.setState({ apiData: result.data, results: result.data })
    })

    this.handleCurrencyChange = this.handleCurrencyChange.bind(this)
    this.handleLimitChange = this.handleLimitChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleCurrencyChange(e) {
    const currency = e.target.value
    const url = this.apiUrl(currency, this.state.limit)
    fetchCryptocurrencyData(url).then(result => {
      this.setState({
        apiData: result.data,
        results: result.data,
        currency
      })
    })
  }

  handleLimitChange(e) {
    const limit = e.target.value
    const url = this.apiUrl(this.state.currency, limit)
    fetchCryptocurrencyData(url).then(result => {
      // set limit with result data
      this.setState({
        apiData: result.data,
        results: result.data,
        limit
      })
    })
  }

  handleSearch(e) {
    const regex = new RegExp(e.target.value, 'gi')
    this.setState({
      results: this.state.apiData.filter(
        item => item.name.match(regex) || item.symbol.match(regex)
      ),
      currentSearch: e.target.value
    })
  }

  filterData() {
    this.setState({
      apiData: this.state.data.filter(item =>
        item.name.match(this.state.currentSearch)
      )
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
      if (!this.state.apiData[0]) return
      const { last_updated } = this.state.apiData[0]

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
            apiData: result.data,
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
        <GlobalStyle />
        <Header
          currency={this.state.currency}
          handleCurrencyChange={this.handleCurrencyChange}
          handleLimitChange={this.handleLimitChange}
          handleSearch={this.handleSearch}>
          Cryptocurrency tickers
        </Header>
        <CryptoWrapper>
          {this.state.results.map((items, index) => {
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
